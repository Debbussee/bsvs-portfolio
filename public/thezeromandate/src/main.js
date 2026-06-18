/* ==========================================================================
   Zero Mandate Engine (ZME) — Interactive Controller
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ---- Diagnostics Uptime Ticker ----
  initUptimeTicker();

  // ---- Fetch & Display Schemas ----
  initSchemaExplorer();

  // ---- Fetch Telemetry & Render Chart ----
  initTelemetryDashboard();

  // ---- Simulation Video Controller ----
  initSimulationController();

  // ---- Master Render Inspector (Zoom & Pan) ----
  initRenderInspector();
});

/* ==========================================================================
   Diagnostics Uptime Ticker
   ========================================================================== */
function initUptimeTicker() {
  const nodeInfo = document.querySelector(".system-node-id");
  if (!nodeInfo) return;
  
  let seconds = 0;
  setInterval(() => {
    seconds++;
    const pad = (num) => String(num).padStart(2, '0');
    const hh = pad(Math.floor(seconds / 3600));
    const mm = pad(Math.floor((seconds % 3600) / 60));
    const ss = pad(seconds % 60);
    nodeInfo.textContent = `SYS.OP.NODE // ZME_NODE_01 // UPTIME: ${hh}:${mm}:${ss}`;
  }, 1000);
}

/* ==========================================================================
   Data Schema Explorer (Syntax Highlighter & Tabs)
   ========================================================================== */
function initSchemaExplorer() {
  const tabs = document.querySelectorAll(".schema-tab-btn");
  const codeEl = document.getElementById("schema-code");
  const descEl = document.getElementById("schema-desc");
  const filepathEl = document.getElementById("schema-filepath");
  
  if (!codeEl) return;

  const schemaCache = {};

  const schemas = {
    config: {
      url: "/config/engine_config.json",
      desc: "System Pipeline Configuration Schema",
      fallback: {
        "engine_version": "1.0.0",
        "pipeline_mode": "forensic_physics_simulation",
        "hardware_allocations": {
          "target_device": "cuda:0",
          "compute_precision": "float32",
          "vram_optimization_level": "vectorized_tensor_mesh"
        },
        "render_settings": {
          "target_resolution": [3840, 2160],
          "color_space": "RGB_24bit",
          "compression_codec": "libx264_lossless"
        }
      }
    },
    identities: {
      url: "/config/character_identities.json",
      desc: "Identity Persistence & Biological Anchor Schema",
      fallback: {
        "identity_persistence_version": "1.0.0",
        "personas": {
          "Chuntae_Core": {
            "biological_continuity_constraints": {
              "epidermal_melanin_index": 0.64,
              "pore_distribution_density_cm2": 1420,
              "base_specular_roughness": 0.0576,
              "vascular_capillary_depth_mm": 0.185
            },
            "invariant_geometric_anchors": {
              "interpupillary_distance_mm": 63.5,
              "nasal_bridge_angle_deg": 114.2,
              "mandibular_inter_node_count": 512
            }
          }
        }
      }
    }
  };

  async function loadSchema(key) {
    const s = schemas[key];
    descEl.textContent = s.desc;
    filepathEl.textContent = s.url;
    codeEl.textContent = "Loading file payload...";

    if (schemaCache[key]) {
      renderHighlightedJson(schemaCache[key]);
      return;
    }

    try {
      const response = await fetch(s.url);
      if (!response.ok) throw new Error("Fetch failed");
      const data = await response.json();
      schemaCache[key] = data;
      renderHighlightedJson(data);
    } catch (err) {
      console.warn(`Failed to fetch schema ${key}, using backup blueprint details:`, err);
      schemaCache[key] = s.fallback;
      renderHighlightedJson(s.fallback);
    }
  }

  function renderHighlightedJson(obj) {
    const rawString = JSON.stringify(obj, null, 2);
    // Simple syntax highlighting regex rules
    const highlighted = rawString
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, (match) => {
        let cls = "json-number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "json-key";
          } else {
            cls = "json-string";
          }
        } else if (/true|false/.test(match)) {
          cls = "json-boolean";
        } else if (/null/.test(match)) {
          cls = "json-null";
        }
        return `<span class="${cls}">${match}</span>`;
      });
    codeEl.innerHTML = highlighted;
  }

  // Bind tabs
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      loadSchema(tab.dataset.schema);
    });
  });

  // Initial load
  loadSchema("config");
}

/* ==========================================================================
   Telemetry Dashboard (SVG Graph & Sync Reading Log)
   ========================================================================= */
async function initTelemetryDashboard() {
  const chartEl = document.getElementById("telemetry-chart");
  const listContainer = document.getElementById("reading-rows");
  const tooltip = document.getElementById("chart-tooltip");
  
  if (!chartEl || !listContainer) return;

  let telemetryData = [];
  
  try {
    const res = await fetch("/outputs/tae_dynamic_material_map.json");
    if (!res.ok) throw new Error("Fetch failed");
    const json = await res.json();
    telemetryData = json.surface_telemetry || [];
  } catch (err) {
    console.warn("Failed to load telemetry JSON, using static fallback copy:", err);
    // Static fallback to match pdf data if file fetch fails
    telemetryData = [
      { radial_distance_mm: 0.0, applied_stress_mpa: 2371.3, computed_specular_roughness: 0.0576, tissue_blanching_factor: 0.9484 },
      { radial_distance_mm: 0.1419, applied_stress_mpa: 2323.39, computed_specular_roughness: 0.0595, tissue_blanching_factor: 0.9452 },
      { radial_distance_mm: 0.2838, applied_stress_mpa: 2173.33, computed_specular_roughness: 0.0658, tissue_blanching_factor: 0.9339 },
      { radial_distance_mm: 0.4257, applied_stress_mpa: 1897.04, computed_specular_roughness: 0.0791, tissue_blanching_factor: 0.9066 },
      { radial_distance_mm: 0.5676, applied_stress_mpa: 1422.78, computed_specular_roughness: 0.1084, tissue_blanching_factor: 0.8311 },
      { radial_distance_mm: 0.7095, applied_stress_mpa: 0.0, computed_specular_roughness: 0.28, tissue_blanching_factor: 0.0 }
    ];
  }

  // Draw chart and list
  renderChartAndList(telemetryData);
}

function renderChartAndList(data) {
  const chart = document.getElementById("telemetry-chart");
  const listContainer = document.getElementById("reading-rows");
  const tooltip = document.getElementById("chart-tooltip");
  
  const width = 400;
  const height = 220;
  const padLeft = 45;
  const padRight = 15;
  const padTop = 20;
  const padBottom = 25;
  
  const graphWidth = width - padLeft - padRight;
  const graphHeight = height - padTop - padBottom;
  
  const maxX = 0.75;
  const maxY = 2500;
  
  // Transform helper
  const getSVGCoords = (xVal, yVal) => {
    const x = padLeft + (xVal / maxX) * graphWidth;
    const y = padTop + graphHeight - (yVal / maxY) * graphHeight;
    return { x, y };
  };

  // 1. Draw Grid Lines & Axes
  let svgContent = `
    <!-- Grid Y -->
    <line x1="${padLeft}" y1="${getSVGCoords(0, 500).y}" x2="${width - padRight}" y2="${getSVGCoords(0, 500).y}" class="grid-line" />
    <line x1="${padLeft}" y1="${getSVGCoords(0, 1000).y}" x2="${width - padRight}" y2="${getSVGCoords(0, 1000).y}" class="grid-line" />
    <line x1="${padLeft}" y1="${getSVGCoords(0, 1500).y}" x2="${width - padRight}" y2="${getSVGCoords(0, 1500).y}" class="grid-line" />
    <line x1="${padLeft}" y1="${getSVGCoords(0, 2000).y}" x2="${width - padRight}" y2="${getSVGCoords(0, 2000).y}" class="grid-line" />
    
    <!-- Axis Labels Y -->
    <text x="${padLeft - 8}" y="${getSVGCoords(0, 0).y + 3}" text-anchor="end" class="axis-label">0</text>
    <text x="${padLeft - 8}" y="${getSVGCoords(0, 500).y + 3}" text-anchor="end" class="axis-label">500</text>
    <text x="${padLeft - 8}" y="${getSVGCoords(0, 1000).y + 3}" text-anchor="end" class="axis-label">1K</text>
    <text x="${padLeft - 8}" y="${getSVGCoords(0, 1500).y + 3}" text-anchor="end" class="axis-label">1.5K</text>
    <text x="${padLeft - 8}" y="${getSVGCoords(0, 2000).y + 3}" text-anchor="end" class="axis-label">2K</text>
    <text x="${padLeft - 8}" y="${getSVGCoords(0, 2371.3).y + 3}" text-anchor="end" class="axis-label" fill="#f43f5e">2.37K</text>
    
    <!-- Axis Labels X -->
    <text x="${getSVGCoords(0, 0).x}" y="${height - 10}" text-anchor="middle" class="axis-label">0.0</text>
    <text x="${getSVGCoords(0.2, 0).x}" y="${height - 10}" text-anchor="middle" class="axis-label">0.2</text>
    <text x="${getSVGCoords(0.4, 0).x}" y="${height - 10}" text-anchor="middle" class="axis-label">0.4</text>
    <text x="${getSVGCoords(0.6, 0).x}" y="${height - 10}" text-anchor="middle" class="axis-label">0.6</text>
    <text x="${getSVGCoords(0.7095, 0).x}" y="${height - 10}" text-anchor="middle" class="axis-label" fill="#22d3ee">0.71</text>
    
    <!-- Axes -->
    <line x1="${padLeft}" y1="${padTop}" x2="${padLeft}" y2="${height - padBottom}" class="axis-line" />
    <line x1="${padLeft}" y1="${height - padBottom}" x2="${width - padRight}" y2="${height - padBottom}" class="axis-line" />
  `;

  // 2. Build Stress Path
  let pathD = "";
  data.forEach((pt, idx) => {
    const coords = getSVGCoords(pt.radial_distance_mm, pt.applied_stress_mpa);
    if (idx === 0) {
      pathD += `M ${coords.x} ${coords.y}`;
    } else {
      pathD += ` L ${coords.x} ${coords.y}`;
    }
  });

  svgContent += `<path d="${pathD}" class="chart-path" />`;

  // 3. Render Node Points
  data.forEach((pt, idx) => {
    const coords = getSVGCoords(pt.radial_distance_mm, pt.applied_stress_mpa);
    svgContent += `
      <circle cx="${coords.x}" cy="${coords.y}" r="4.5" class="chart-point" data-idx="${idx}" />
    `;
  });

  chart.innerHTML = svgContent;

  // 4. Populate Sidebar List Rows
  listContainer.innerHTML = "";
  data.forEach((pt, idx) => {
    const row = document.createElement("div");
    row.className = "reading-row reading-row-data font-mono";
    row.dataset.idx = idx;
    row.innerHTML = `
      <span>${pt.radial_distance_mm.toFixed(4)}</span>
      <span class="rose-text">${pt.applied_stress_mpa.toFixed(2)}</span>
      <span>${pt.computed_specular_roughness.toFixed(4)}</span>
      <span class="cyan-text">${pt.tissue_blanching_factor.toFixed(4)}</span>
    `;
    listContainer.appendChild(row);
  });

  // 5. Bidirectional Highlight and Tooltip Interactions
  const circles = chart.querySelectorAll(".chart-point");
  const rows = listContainer.querySelectorAll(".reading-row-data");

  function setActiveIndex(idx) {
    // Reset classes
    circles.forEach(c => c.classList.remove("active"));
    rows.forEach(r => r.classList.remove("active"));

    if (idx === null || idx === undefined) {
      tooltip.style.opacity = 0;
      return;
    }

    const circle = chart.querySelector(`.chart-point[data-idx="${idx}"]`);
    const row = listContainer.querySelector(`.reading-row-data[data-idx="${idx}"]`);
    const pt = data[idx];

    if (circle) circle.classList.add("active");
    if (row) {
      row.classList.add("active");
      // Scroll into view gently
      row.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    // Display tooltip
    if (circle && tooltip) {
      const circleRect = circle.getBoundingClientRect();
      const chartRect = chart.getBoundingClientRect();
      
      const tooltipX = circleRect.left - chartRect.left + 12;
      const tooltipY = circleRect.top - chartRect.top - 45;

      tooltip.innerHTML = `
        <div class="bold cyan-text">TELEMETRY DATA [${idx}]</div>
        Radius: ${pt.radial_distance_mm.toFixed(4)} mm<br>
        Stress: <span class="rose-text">${pt.applied_stress_mpa.toFixed(1)} MPa</span><br>
        Roughness: ${pt.computed_specular_roughness.toFixed(4)}<br>
        Blanching: ${pt.tissue_blanching_factor.toFixed(4)}
      `;
      tooltip.style.left = `${tooltipX}px`;
      tooltip.style.top = `${tooltipY}px`;
      tooltip.style.opacity = 1;
    }
  }

  // Circle mouse events
  circles.forEach(circle => {
    circle.addEventListener("mouseenter", () => setActiveIndex(circle.dataset.idx));
    circle.addEventListener("mouseleave", () => setActiveIndex(null));
  });

  // Table row mouse events
  rows.forEach(row => {
    row.addEventListener("mouseenter", () => setActiveIndex(row.dataset.idx));
    row.addEventListener("mouseleave", () => setActiveIndex(null));
  });
}

/* ==========================================================================
   Simulation Video Controller (Dual Source, Custom Player)
   ========================================================================== */
function initSimulationController() {
  const video = document.getElementById("sim-video");
  const playBtn = document.getElementById("play-pause-btn");
  const speedBtns = document.querySelectorAll(".speed-btn");
  const prevFrameBtn = document.getElementById("prev-frame-btn");
  const nextFrameBtn = document.getElementById("next-frame-btn");
  const simBtns = document.querySelectorAll(".sim-btn");
  const timeDisplay = document.getElementById("video-time");

  if (!video) return;

  const videoSources = {
    light: "/outputs/light_sequence_simulation_4k.mp4",
    orbit: "/outputs/orbit_sequence_simulation_4k.mp4"
  };

  // Play Pause Toggle
  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = "PAUSE";
    } else {
      video.pause();
      playBtn.textContent = "PLAY";
    }
  });

  // Speed Toggle
  speedBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      speedBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      video.playbackRate = parseFloat(btn.dataset.speed);
    });
  });

  // Frame scrub (33ms per frame approximate for 30fps)
  const frameDuration = 0.0333;
  prevFrameBtn.addEventListener("click", () => {
    video.pause();
    playBtn.textContent = "PLAY";
    video.currentTime = Math.max(0, video.currentTime - frameDuration);
  });

  nextFrameBtn.addEventListener("click", () => {
    video.pause();
    playBtn.textContent = "PLAY";
    video.currentTime = Math.min(video.duration, video.currentTime + frameDuration);
  });

  // Tab simulation source swap
  simBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      simBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const wasPlaying = !video.paused;
      video.src = videoSources[btn.dataset.video];
      video.load();
      if (wasPlaying) {
        video.play();
      } else {
        playBtn.textContent = "PLAY";
      }
    });
  });

  // Time Tracker
  video.addEventListener("timeupdate", () => {
    timeDisplay.textContent = `${video.currentTime.toFixed(2)}s`;
  });
}

/* ==========================================================================
   Master Render Inspector (Canvas zoom, pan, toggle comparison)
   ========================================================================== */
function initRenderInspector() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const viewerPanel = document.getElementById("viewer-panel");
  const rendersTabContent = document.getElementById("renders-content");
  const simulationsTabContent = document.getElementById("simulations-content");
  
  const canvas = document.getElementById("zoom-canvas");
  const canvasContainer = document.getElementById("canvas-container");
  const renderBtns = document.querySelectorAll(".render-btn");
  const btnZoomIn = document.getElementById("zoom-in");
  const btnZoomOut = document.getElementById("zoom-out");
  const btnZoomReset = document.getElementById("zoom-reset");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const imagePaths = {
    composed: "/outputs/rendered_frame_4k.png",
    perspective: "/outputs/perspective_render_4k.png"
  };

  let activeImage = new Image();
  let scale = 1.0;
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;

  // Tabs toggle (simulations vs renders)
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const view = btn.dataset.view;
      if (view === "simulations") {
        simulationsTabContent.classList.add("active");
        rendersTabContent.classList.remove("active");
      } else {
        simulationsTabContent.classList.remove("active");
        rendersTabContent.classList.add("active");
        
        // Re-align canvas size when tab opens
        resizeCanvas();
        loadRenderImage("composed");
      }
    });
  });

  // Set sizing
  function resizeCanvas() {
    const rect = canvasContainer.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    draw();
  }

  window.addEventListener("resize", () => {
    if (rendersTabContent.classList.contains("active")) {
      resizeCanvas();
    }
  });

  // Image loader
  function loadRenderImage(key) {
    activeImage = new Image();
    activeImage.src = imagePaths[key];
    activeImage.onload = () => {
      resetZoom();
      draw();
    };
  }

  // Render selection toggle
  renderBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      renderBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadRenderImage(btn.dataset.image);
    });
  });

  // Draw loop
  function draw() {
    if (!activeImage.complete || !activeImage.width) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    // Center point translation
    ctx.translate(canvas.width / 2 + offsetX, canvas.height / 2 + offsetY);
    ctx.scale(scale, scale);
    
    // Draw centered image
    const w = canvas.width;
    const h = canvas.height;
    const imgRatio = activeImage.width / activeImage.height;
    const canvasRatio = w / h;
    
    let renderW, renderH;
    if (imgRatio > canvasRatio) {
      renderW = w;
      renderH = w / imgRatio;
    } else {
      renderH = h;
      renderW = h * imgRatio;
    }

    ctx.drawImage(activeImage, -renderW / 2, -renderH / 2, renderW, renderH);
    ctx.restore();
  }

  function resetZoom() {
    scale = 1.0;
    offsetX = 0;
    offsetY = 0;
    draw();
  }

  // Controls bindings
  btnZoomIn.addEventListener("click", () => {
    scale = Math.min(8.0, scale * 1.3);
    draw();
  });

  btnZoomOut.addEventListener("click", () => {
    scale = Math.max(0.5, scale / 1.3);
    draw();
  });

  btnZoomReset.addEventListener("click", resetZoom);

  // Mouse wheel zoom
  canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    scale = Math.max(0.5, Math.min(8.0, scale * factor));
    draw();
  });

  // Drag and pan events
  canvas.addEventListener("mousedown", (e) => {
    isDragging = true;
    dragStartX = e.clientX - offsetX;
    dragStartY = e.clientY - offsetY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    offsetX = e.clientX - dragStartX;
    offsetY = e.clientY - dragStartY;
    draw();
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch support for mobile devices
  canvas.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      dragStartX = e.touches[0].clientX - offsetX;
      dragStartY = e.touches[0].clientY - offsetY;
    }
  });

  canvas.addEventListener("touchmove", (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    offsetX = e.touches[0].clientX - dragStartX;
    offsetY = e.touches[0].clientY - dragStartY;
    draw();
  });

  canvas.addEventListener("touchend", () => {
    isDragging = false;
  });
}
