import { createSketchCanvas } from './components/canvas.js';
import { setupNotionButton } from './components/notion-button.js';
import { setupSpotifyButton } from './components/spotify-button.js';

// Import sketch modules
import * as fundamentals from './sketches/fundamentals.js';
import * as transform from './sketches/transform.js';
import * as agents from './sketches/agents.js';
import * as noise from './sketches/noise.js';
import * as type from './sketches/type.js';
import * as sierpinski from './sketches/sierpinski.js';
import * as tessellation from './sketches/tessellation.js';
import * as gameOfLife from './sketches/game-of-life.js';
import * as tableroDeLetras from './sketches/tablero-de-letras.js';

const sketches = {
  fundamentals,
  transform,
  agents,
  noise,
  type,
  sierpinski,
  tessellation,
  gameOfLife,
  tableroDeLetras
};

let currentSketch = null;

function initializeApp() {
  const canvas = createSketchCanvas();
  setupNotionButton();
  setupSpotifyButton();
  setupSketchSelector();
  updateFooter();
}

function setupSketchSelector() {
  const selector = document.getElementById('sketch-selector');
  selector.addEventListener('change', (event) => {
    const selectedSketch = event.target.value;
    if (selectedSketch && sketches[selectedSketch]) {
      if (currentSketch) {
        currentSketch.destroy();
      }
      currentSketch = sketches[selectedSketch].create();
    }
  });
}

function updateFooter() {
  const footerText = document.getElementById('footer-text');
  const currentDate = new Date().toLocaleDateString();
  footerText.textContent = `${currentDate} | ygmrtm`;
}

document.addEventListener('DOMContentLoaded', initializeApp);
