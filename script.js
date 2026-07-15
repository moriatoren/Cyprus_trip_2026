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

  // Image configurations for each day
  const imageSets = {
    1: [
      { num: 1, ext: 'jpg' },
      { num: 2, ext: 'jpg' },
      { num: 3, ext: 'jpg' },
      { num: 4, ext: 'jpg' },
      { num: 5, ext: 'jpg' }
    ],
    2: [
      { num: 1, ext: 'jpg' },
      { num: 2, ext: 'jpg' },
      { num: 3, ext: 'jpg' }
    ],
    3: [
      { num: 1, ext: 'jpg' },
      { num: 2, ext: 'jpg' }
    ],
    4: [
      { num: 1, ext: 'avif' },
      { num: 2, ext: 'avif' }
    ],
    5: [
      { num: 1, ext: 'jpg' },
      { num: 2, ext: 'jpg' }
    ],
    6: [
      { num: 1, ext: 'jpg' }
    ]
  };

  // Get images for this day
  const dayImages = imageSets[dayNumber] || [];

  // Load each image
  dayImages.forEach(imgInfo => {
    const imgPath = `images/${folderName}/${imgInfo.num}.${imgInfo.ext}`;
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = 'תמונה ' + imgInfo.num;
    gallery.appendChild(img);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  showDay(1);
});
