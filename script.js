// Function to show day
function showDay(dayNumber) {
  // Hide all days
  for (let i = 1; i <= 6; i++) {
    document.getElementById('day-' + i).style.display = 'none';
  }

  // Show selected day
  document.getElementById('day-' + dayNumber).style.display = 'block';

  // Update active button
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  buttons[dayNumber - 1].classList.add('active');

  // Update progress
  updateProgress(dayNumber);

  // Load gallery
  loadGallery(dayNumber);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to update progress bar
function updateProgress(dayNumber) {
  const progress = (dayNumber / 6) * 100;
  document.getElementById('progress').style.width = progress + '%';
  document.getElementById('progress-text').textContent = 'יום ' + dayNumber + ' מתוך 6';
}

// Function to load gallery images
function loadGallery(dayNumber) {
  const galleryId = 'gallery-' + dayNumber;
  const gallery = document.getElementById(galleryId);
  gallery.innerHTML = '';

  // Determine folder name
  let folderName;
  if (dayNumber === 1) {
    folderName = 'day 1';
  } else {
    folderName = 'Day ' + dayNumber;
  }

  // Try to load images with different extensions
  const extensions = ['jpg', 'avif', 'png'];

  for (let i = 1; i <= 10; i++) {
    let loaded = false;

    for (let ext of extensions) {
      if (loaded) break;

      const imgPath = `images/${folderName}/${i}.${ext}`;
      const testImg = new Image();

      testImg.onload = function() {
        const img = document.createElement('img');
        img.src = imgPath;
        img.alt = 'תמונה ' + i;
        gallery.appendChild(img);
        loaded = true;
      };

      testImg.src = imgPath;
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  showDay(1);
});
