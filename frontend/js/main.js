document.addEventListener('DOMContentLoaded', () => {
    const notionBtn = document.getElementById('notionBtn');
    const spotifyBtn = document.getElementById('spotifyBtn');
    const sketchSelector = document.getElementById('sketchSelector');
  
    notionBtn.addEventListener('click', () => {
      const selectedSketch = sketchSelector.value;
      if (selectedSketch === 'Select a Sketch...') {
        alert('Please select a sketch');
      } else {
        fetch('/api/notion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sketchType: selectedSketch }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      }
    });
  
    spotifyBtn.addEventListener('click', () => {
      alert('Will be implemented with Web Playback SDK soon...');
    });
  
    sketchSelector.addEventListener('change', async function () {
      const selectedSketch = sketchSelector.value;
      // Load the corresponding sketch file dynamically and call its `create` function
      try {
        switch (selectedSketch) {
          case 'fundamentals':
            const { create: createFundamentals } = await import('../sketches/fundamentals.js');
            createFundamentals();
            break;
          case 'transform':
            const { create: createTransform } = await import('../sketches/transform.js');
            createTransform();
            break;
          case 'agents':
            const { create: createAgents } = await import('../sketches/agents.js');
            createAgents();
            break;
          // Add other cases for the other sketches
          default:
            console.log('No sketch selected or sketch not implemented.');
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  });
  