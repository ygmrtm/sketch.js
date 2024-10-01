import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [800, 800],
  //animate: true,
  canvas: document.getElementById('sketchCanvas') // Use the existing canvas
};
/**
 * Function that generates a sketch with random rectangles and inner rectangles based on specified dimensions.
 * 
 * @returns {Function} A function that takes a context, width, and height as parameters to draw the sketch.
 */
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const rectSize = {
      width: width * 0.1,
      height: height * 0.1,
      gap: width * 0.03,
      offsetX: width * 0.17,
      offsetY: height * 0.17,
      offset: width * 0.02
    };

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const x = rectSize.offsetX + (rectSize.width + rectSize.gap) * i;
        const y = rectSize.offsetY + (rectSize.height + rectSize.gap) * j;

        context.beginPath();
        context.rect(x, y, rectSize.width, rectSize.height);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + rectSize.offset / 2, y + rectSize.offset / 2, rectSize.width - rectSize.offset, rectSize.height - rectSize.offset);
          context.stroke();
        }
      }
    }
  };
};


/**
 * Delays the execution of a function by a specified amount of time.
 * 
 * @param {number} ms - The number of milliseconds to delay the execution.
 * @returns {Promise} A promise that resolves after the specified delay.
 */
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Asynchronously creates a sketch after a 1-second delay.
 * Uses the delay function to wait for 1 second before initializing the canvas sketch with the provided sketch function and settings.
 */
export async function create() {
	await delay(1000);  // 1-second delay
	canvasSketch(sketch, settings);
}
