import { create, delay, setCanvas} from '../frontend/sketches/fundamentals.js';
import canvasSketch from 'canvas-sketch';


// Mock canvas-sketch
jest.mock('canvas-sketch', () => jest.fn());

describe('fundamentals.js', () => {

  describe('delay function', () => {
    it('should resolve after the specified delay', async () => {
      const start = Date.now();
      await delay(500);
      const end = Date.now();
      console.log(end - start);
      expect(end - start).toBeGreaterThanOrEqual(500);
    });
  });

  describe('create function', () => {
    it('should call canvasSketch after a delay', async () => {
      jest.useFakeTimers();
      const createPromise = create();
      jest.advanceTimersByTime(1000);
      await createPromise;
      expect(canvasSketch).toHaveBeenCalled();
    });

    it('should call canvasSketch with correct arguments', async () => {
      jest.useFakeTimers();
      const createPromise = create();
      jest.advanceTimersByTime(1000);
      await createPromise;
      expect(canvasSketch).toHaveBeenCalledWith(expect.any(Function), {
        dimensions: [800, 800],
        canvas: expect.any(Object)
      });
    });
  });

  describe('sketch function', () => {
    it('should return a function', () => {
      const sketchFn = canvasSketch.mock.calls[0][0];
      expect(typeof sketchFn()).toBe('function');
    });

    it('should draw rectangles on the canvas', () => {
      const sketchFn = canvasSketch.mock.calls[0][0];
      const mockContext = {
        fillStyle: '',
        fillRect: jest.fn(),
        lineWidth: 0,
        beginPath: jest.fn(),
        rect: jest.fn(),
        stroke: jest.fn()
      };
      const renderFn = sketchFn();
      renderFn({ context: mockContext, width: 800, height: 800 });

      expect(mockContext.fillRect).toHaveBeenCalledWith(0, 0, 800, 800);
      expect(mockContext.beginPath).toHaveBeenCalled();
      expect(mockContext.rect).toHaveBeenCalled();
      expect(mockContext.stroke).toHaveBeenCalled();
    });
  });

  describe('setCanvas', () => {

    // Set a valid canvas element and verify settings.canvas is updated
    it('should update settings.canvas when a valid canvas element is provided', () => {
      const { JSDOM } = require('jsdom');
      const { document } = (new JSDOM('')).window;

      const canvasElement = document.createElement('canvas');
      setCanvas(canvasElement);
      expect(settings.canvas).toBe(canvasElement);
    });

    // set an undefined value and verify settings.canvas remains unchanged
    it('should not update settings.canvas when an undefined value is provided', () => {
      const initialCanvas = settings.canvas;
      setCanvas(undefined);
      expect(settings.canvas).toBe(initialCanvas);
    });
    });  
});
