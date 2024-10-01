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
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.error(err));
      }
  });

  spotifyBtn.addEventListener('click', () => {
      alert("Will be implemented with Web Playback SDK soon...");
  });
});
