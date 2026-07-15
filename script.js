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

  // Try to load images
  for (let i = 1; i <= 10; i++) {
    const imgPath = `images/day ${dayNumber}/${i}.jpg`;
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = 'תמונה ' + i;

    img.onload = function() {
      gallery.appendChild(img);
    };

    img.onerror = function() {
      // Image not found, skip
    };
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  showDay(1);
});
