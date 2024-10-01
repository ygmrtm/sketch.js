import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [800, 800],
  animate: true
};

const sketch = () => {
  return ({ context, width, height, time }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 12;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = Math.PI * 2 / num;
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(Math.sin(time + i * 0.5) * 1, 1);

      context.fillStyle = 'black';
      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.beginPath();
      context.arc(0, 0, radius * Math.sin(time + i * 0.5), 0, Math.PI * 2);
      context.stroke();

      context.restore();
    }
  };
};

export function create() {
  return canvasSketch(sketch, settings);
}
