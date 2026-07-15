const tripData = {
  days: [
    {
      day: 1,
      date: 'July 20',
      title: 'Arrival & Check-in 🏨',
      activity: 'Welcome to Cyprus! Arrive at the airport, collect luggage, and head to Sunrise Pearl Hotel. Check in, settle into your rooms, and refresh. In the evening, take a relaxing walk around the town, explore local shops, and enjoy a delicious welcome dinner at a traditional taverna.',
      folder: 'day 1',
      location: { name: 'Sunrise Pearl Hotel', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
      booking: { name: 'Hotel Check-in', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
      links: [
        { name: '🏨 Sunrise Pearl Hotel', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
        { name: '🚕 Airport Transfer', link: '#' },
        { name: '🍽️ Welcome Dinner', link: 'https://maps.google.com/?q=restaurants+Protaras+Cyprus' }
      ]
    },
    {
      day: 2,
      date: 'July 21',
      title: 'Pool & Sea Day 🏊‍♀️',
      activity: 'A day of relaxation and fun! Start with a refreshing swim in the hotel pool. Later, head to the stunning Fig Tree Bay - one of Cyprus\'s most beautiful beaches with crystal clear turquoise waters and golden sand. Swim, sunbathe, and enjoy the stunning sunset over the Mediterranean Sea. In the evening, visit Luna Park for some fun and excitement!',
      folder: 'Day 2',
      location: { name: 'Fig Tree Bay Beach', link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html' },
      booking: { name: 'Beach Info', link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html' },
      links: [
        { name: '🏖️ Fig Tree Bay Beach', link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html' },
        { name: '🏊 Hotel Pool', link: '#' },
        { name: '🎡 Luna Park (Evening)', link: 'https://waterworldwaterpark.com/' }
      ]
    },
    {
      day: 3,
      date: 'July 22',
      title: 'Water World Park Day 💦',
      activity: 'A day full of fun and excitement! Head to Water World Park - the ultimate water park experience with thrilling slides, pools for all ages, and attractions for the whole family. Splash around, challenge each other on the water slides, and enjoy refreshing swims. Lunch and snacks available at the park.',
      folder: 'Day 3',
      location: { name: 'Water World Park', link: 'https://maps.google.com/?q=Water+World+Park+Cyprus' },
      booking: { name: 'Water World Info', link: 'https://waterworldwaterpark.com/' },
      links: [
        { name: '💦 Water World Park', link: 'https://waterworldwaterpark.com/' },
        { name: '🎢 Park Tickets', link: 'https://waterworldwaterpark.com/' },
        { name: '🍽️ Park Restaurant', link: '#' }
      ]
    },
    {
      day: 4,
      date: 'July 23',
      title: 'Boat Cruise Adventure 🚤',
      activity: 'Set sail on an unforgettable boat cruise! Join the famous Yellow Boat Cruises and explore the stunning Protaras coastline. Discover hidden caves, swim in crystal-clear turquoise waters, snorkel among colorful fish, and enjoy the beauty of the Mediterranean. Relax on deck, take in the views, and create amazing memories with the girls.',
      folder: 'Day 4',
      location: { name: 'Protaras Harbor', link: 'https://maps.google.com/?q=Protaras+boat+tours+Cyprus' },
      booking: { name: 'Yellow Boat Cruises', link: 'https://www.getyourguide.com/protaras-l132513/protaras-the-family-fun-cruise-with-the-yellow-boat-cruises-t931227/' },
      links: [
        { name: '🚤 Yellow Boat Cruise', link: 'https://www.getyourguide.com/protaras-l132513/protaras-the-family-fun-cruise-with-the-yellow-boat-cruises-t931227/' },
        { name: '🤿 Snorkel Gear', link: '#' },
        { name: '🍽️ Lunch on Boat', link: '#' }
      ]
    },
    {
      day: 5,
      date: 'July 24',
      title: 'Pool, Sea & Shopping 🛍️',
      activity: 'Your final day of adventure! Start with a relaxing morning at the hotel pool, then enjoy one last swim in the beautiful sea. Afterwards, explore local shops and markets for souvenirs and last-minute shopping. Pick up gifts, local crafts, and memories to take home. End the day with a special goodbye dinner together, celebrating an amazing week with the girls!',
      folder: 'Day 5',
      location: { name: 'Protaras Town', link: 'https://maps.google.com/?q=Protaras+Cyprus' },
      booking: { name: 'Shopping Guide', link: 'https://maps.google.com/?q=shops+Protaras+Cyprus' },
      links: [
        { name: '🏊 Hotel Pool (Final Swim)', link: '#' },
        { name: '🏖️ Beach (Last Swim)', link: '#' },
        { name: '🛍️ Local Shops & Souvenirs', link: 'https://maps.google.com/?q=shops+Protaras+Cyprus' }
      ]
    },
    {
      day: 6,
      date: 'July 25',
      title: 'Going Home ✈️',
      activity: 'Time to say goodbye to beautiful Cyprus! Enjoy a final breakfast, check out of Sunrise Pearl Hotel, and head to the airport. Reflect on the amazing memories, the laughter, the adventures, and the precious time spent together. Safe travels home with hearts full of wonderful moments!',
      folder: 'Day 6',
      location: { name: 'Airport', link: 'https://maps.google.com/?q=Larnaca+Airport+Cyprus' },
      booking: { name: 'Flight Booking', link: '#' },
      links: [
        { name: '🏨 Hotel Checkout', link: '#' },
        { name: '🚕 Airport Transfer', link: '#' },
        { name: '✈️ Flight Details', link: '#' }
      ]
    }
  ]
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const day = parseInt(tab.dataset.day);
      updateDay(day);

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Load day 1
  updateDay(1);
});

function updateDay(dayNumber) {
  const day = tripData.days[dayNumber - 1];

  // Update header
  document.getElementById('day-date').textContent = day.date;
  document.getElementById('day-title').textContent = day.title;

  // Update activity
  document.getElementById('day-activity').textContent = day.activity;

  // Update location
  document.getElementById('location-link').textContent = day.location.name + ' →';
  document.getElementById('location-link').href = day.location.link;

  // Update booking
  document.getElementById('booking-link').textContent = day.booking.name + ' →';
  document.getElementById('booking-link').href = day.booking.link;

  // Update gallery
  loadGallery(day.folder);

  // Update important links
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

  // Update progress
  const progress = (dayNumber / 6) * 100;
  document.getElementById('progress-fill').style.width = progress + '%';
  document.getElementById('progress-text').textContent = dayNumber;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadGallery(folder) {
  const gallery = document.getElementById('gallery');
  const noImages = document.getElementById('no-images');
  gallery.innerHTML = '';

  let imageCount = 0;

  // Try to load images 1-10 from the folder
  for (let i = 1; i <= 10; i++) {
    const imgPath = `images/${folder}/${i}.jpg`;
    const img = new Image();

    img.onload = function() {
      imageCount++;
      noImages.style.display = 'none';

      const item = document.createElement('div');
      item.className = 'gallery-item';
      const imgEl = document.createElement('img');
      imgEl.src = imgPath;
      imgEl.alt = `Day ${folder} - Photo ${i}`;
      item.appendChild(imgEl);
      gallery.appendChild(item);
    };

    img.onerror = function() {
      // Image not found
    };

    img.src = imgPath;
  }

  // Show "no images" if none found
  setTimeout(() => {
    if (imageCount === 0) {
      noImages.style.display = 'block';
    }
  }, 1000);
}
