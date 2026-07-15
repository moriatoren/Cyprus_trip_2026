const tripData = {
  days: [
    {
      day: 1,
      title: 'Arrival & Check-in 🏨',
      date: 'July 20, 2026',
      morning: 'Travel to Cyprus and arrive at the airport! So exciting!',
      noon: 'Check in to Sunrise Pearl Hotel and settle into your rooms',
      evening: 'Walk around town, explore shops, and enjoy a welcome dinner',
      folder: 'day 1',
      location: { name: 'Sunrise Pearl Hotel', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
      booking: { name: 'Hotel Info', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
      links: [
        { name: '🏨 Hotel', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
        { name: '🍽️ Dinner', link: 'https://maps.google.com/?q=restaurants+Protaras' },
        { name: '🛍️ Shopping', link: 'https://maps.google.com/?q=Protaras+shops' }
      ]
    },
    {
      day: 2,
      title: 'Pool & Sea Day 🏊‍♀️',
      date: 'July 21, 2026',
      morning: 'Wake up and jump into the hotel pool!',
      noon: 'Head to Fig Tree Bay - one of the most beautiful beaches in Cyprus!',
      evening: 'Luna Park adventure - rides, games, and fun under the stars! 🎡',
      folder: 'Day 2',
      location: { name: 'Fig Tree Bay Beach', link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html' },
      booking: { name: 'Beach Info', link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html' },
      links: [
        { name: '🏖️ Fig Tree Bay', link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html' },
        { name: '🎡 Luna Park', link: 'https://waterworldwaterpark.com/' },
        { name: '🌅 Sunset View', link: '#' }
      ]
    },
    {
      day: 3,
      title: 'Water World Park Day 💦',
      date: 'July 22, 2026',
      morning: 'Fuel up with a big breakfast before the big day!',
      noon: 'SPLASH TIME! Water World Park with slides, pools, and SO much fun!',
      evening: 'Rest and relax after all the water park adventures',
      folder: 'Day 3',
      location: { name: 'Water World Park', link: 'https://maps.google.com/?q=Water+World+Park+Cyprus' },
      booking: { name: 'Park Info', link: 'https://waterworldwaterpark.com/' },
      links: [
        { name: '💦 Water World', link: 'https://waterworldwaterpark.com/' },
        { name: '🎢 Epic Slides', link: '#' },
        { name: '🍔 Snack Time', link: '#' }
      ]
    },
    {
      day: 4,
      title: 'Boat Cruise Adventure 🚤',
      date: 'July 23, 2026',
      morning: 'Get ready for adventure! Prepare your snorkeling gear!',
      noon: 'All aboard the Yellow Boat! Explore caves, spot fish, and swim in turquoise water!',
      evening: 'Watch the sunset from the boat and enjoy dinner by the sea',
      folder: 'Day 4',
      location: { name: 'Protaras Harbor', link: 'https://maps.google.com/?q=Protaras+boat+tours' },
      booking: { name: 'Boat Tours', link: 'https://www.getyourguide.com/protaras-l132513/protaras-the-family-fun-cruise-with-the-yellow-boat-cruises-t931227/' },
      links: [
        { name: '🚤 Yellow Boat', link: 'https://www.getyourguide.com/protaras-l132513/protaras-the-family-fun-cruise-with-the-yellow-boat-cruises-t931227/' },
        { name: '🤿 Snorkeling', link: '#' },
        { name: '🐠 Sea Life', link: '#' }
      ]
    },
    {
      day: 5,
      title: 'Pool, Sea & Shopping 🛍️',
      date: 'July 24, 2026',
      morning: 'Relax by the hotel pool one last time',
      noon: 'One more swim in the sea and beach time!',
      evening: 'SHOPPING ADVENTURE! Find souvenirs and special gifts for everyone!',
      folder: 'Day 5',
      location: { name: 'Protaras Town', link: 'https://maps.google.com/?q=Protaras+Cyprus' },
      booking: { name: 'Shops', link: 'https://maps.google.com/?q=shops+Protaras' },
      links: [
        { name: '🏖️ Final Beach Day', link: '#' },
        { name: '🛍️ Shopping Spree', link: '#' },
        { name: '🎁 Souvenirs', link: '#' }
      ]
    },
    {
      day: 6,
      title: 'Going Home ✈️',
      date: 'July 25, 2026',
      morning: 'Last breakfast at the hotel. Say goodbye to Cyprus!',
      noon: 'Check out and head to the airport',
      evening: 'Fly home with amazing memories and tired but happy hearts! 💕',
      folder: 'Day 6',
      location: { name: 'Larnaca Airport', link: 'https://maps.google.com/?q=Larnaca+Airport+Cyprus' },
      booking: { name: 'Flight Info', link: '#' },
      links: [
        { name: '✈️ Flight Details', link: '#' },
        { name: '🧳 Packing', link: '#' },
        { name: '📸 Save Memories', link: '#' }
      ]
    }
  ]
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const stationBtns = document.querySelectorAll('.station-btn');
  stationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const day = parseInt(btn.dataset.day);
      updateDay(day);

      // Update active station
      stationBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Load day 1 by default
  updateDay(1);
});

function updateDay(dayNumber) {
  const day = tripData.days[dayNumber - 1];

  // Update title and date
  document.getElementById('day-title').textContent = day.title;
  document.getElementById('day-date').textContent = day.date;

  // Update timeline cards
  document.getElementById('morning-text').textContent = day.morning;
  document.getElementById('noon-text').textContent = day.noon;
  document.getElementById('evening-text').textContent = day.evening;

  // Update location and booking
  document.getElementById('location-link').textContent = day.location.name;
  document.getElementById('location-link').href = day.location.link;
  document.getElementById('booking-link').textContent = day.booking.name;
  document.getElementById('booking-link').href = day.booking.link;

  // Update quick links
  const linksContainer = document.getElementById('important-links');
  linksContainer.innerHTML = '';
  day.links.forEach(link => {
    const a = document.createElement('a');
    a.className = 'link-btn';
    a.href = link.link;
    a.target = '_blank';
    a.textContent = link.name;
    linksContainer.appendChild(a);
  });

  // Load gallery
  loadGallery(day.folder);

  // Update progress
  const progress = (dayNumber / 6) * 100;
  document.getElementById('progress-fill').style.width = progress + '%';
  document.getElementById('progress-text').textContent = dayNumber;

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadGallery(folder) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  let imageCount = 0;

  // Try to load images from the folder
  for (let i = 1; i <= 10; i++) {
    const imgPath = `images/${folder}/${i}.jpg`;
    const img = new Image();

    img.onload = function() {
      imageCount++;
      const item = document.createElement('div');
      item.className = 'gallery-item';
      const imgEl = document.createElement('img');
      imgEl.src = imgPath;
      imgEl.alt = `Photo ${i}`;
      item.appendChild(imgEl);
      gallery.appendChild(item);
    };

    img.src = imgPath;
  }
}
