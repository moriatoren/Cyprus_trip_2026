// Trip data for all 5 days
const tripData = {
  days: [
    {
      day: 1,
      date: 'July 20',
      title: 'Arrival & Check-in 🏨',
      activity: 'Welcome to Cyprus! Arrive at the airport, collect luggage, and head to Sunrise Pearl Hotel. Check in, settle into your rooms, and refresh. In the evening, take a relaxing walk around the town, explore local shops, and enjoy a delicious welcome dinner at a traditional taverna.',
      image: 'images/day1-flight.jpg',
      location: {
        name: 'Sunrise Pearl Hotel',
        link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus'
      },
      booking: {
        name: 'Hotel Check-in',
        link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus'
      },
      importantLinks: [
        { name: '🏨 Sunrise Pearl Hotel', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
        { name: '🚕 Airport Transfer', link: '#' },
        { name: '🍽️ Welcome Dinner Restaurant', link: 'https://maps.google.com/?q=restaurants+Protaras+Cyprus' },
        { name: '🛍️ Town Shopping', link: 'https://maps.google.com/?q=Protaras+shops' }
      ]
    },
    {
      day: 2,
      date: 'July 21',
      title: 'Pool & Sea Day 🏊‍♀️',
      activity: 'A day of relaxation and fun! Start with a refreshing swim in the hotel pool. Later, head to the stunning Fig Tree Bay - one of Cyprus\'s most beautiful beaches with crystal clear turquoise waters and golden sand. Swim, sunbathe, and enjoy the stunning sunset over the Mediterranean Sea.',
      image: 'images/day2-beach.jpg',
      location: {
        name: 'Fig Tree Bay Beach',
        link: 'https://maps.google.com/?q=Fig+Tree+Bay+Protaras+Cyprus'
      },
      booking: {
        name: 'Fig Tree Bay Info',
        link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html'
      },
      importantLinks: [
        { name: '🏖️ Fig Tree Bay Beach', link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html' },
        { name: '🏊 Hotel Pool', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
        { name: '🎡 Luna Park (Evening)', link: 'https://waterworldwaterpark.com/' },
        { name: '☀️ Beach Sunbed Rental', link: '#' }
      ]
    },
    {
      day: 3,
      date: 'July 22',
      title: 'Water World Park Day 💦',
      activity: 'A day full of fun and excitement! Head to Water World Park - the ultimate water park experience with thrilling slides, pools for all ages, and attractions for the whole family. Splash around, challenge each other on the water slides, and enjoy refreshing swims. Lunch and snacks available at the park.',
      image: 'images/day3-boat.jpg',
      location: {
        name: 'Water World Park',
        link: 'https://maps.google.com/?q=Water+World+Park+Cyprus'
      },
      booking: {
        name: 'Water World Info',
        link: 'https://waterworldwaterpark.com/'
      },
      importantLinks: [
        { name: '💦 Water World Park', link: 'https://waterworldwaterpark.com/' },
        { name: '🎢 Park Tickets', link: 'https://waterworldwaterpark.com/' },
        { name: '🍽️ Park Restaurant', link: '#' },
        { name: '🧴 Sunscreen & Supplies', link: '#' }
      ]
    },
    {
      day: 4,
      date: 'July 23',
      title: 'Boat Cruise Adventure 🚤',
      activity: 'Set sail on an unforgettable boat cruise! Join the famous Yellow Boat Cruises and explore the stunning Protaras coastline. Discover hidden caves, swim in crystal-clear turquoise waters, snorkel among colorful fish, and enjoy the beauty of the Mediterranean. Relax on deck, take in the views, and create amazing memories with the girls.',
      image: 'images/day4-ayianapa.jpg',
      location: {
        name: 'Protaras Harbor',
        link: 'https://maps.google.com/?q=Protaras+boat+tours+Cyprus'
      },
      booking: {
        name: 'Yellow Boat Cruises',
        link: 'https://www.getyourguide.com/protaras-l132513/protaras-the-family-fun-cruise-with-the-yellow-boat-cruises-t931227/'
      },
      importantLinks: [
        { name: '🚤 Yellow Boat Cruise', link: 'https://www.getyourguide.com/protaras-l132513/protaras-the-family-fun-cruise-with-the-yellow-boat-cruises-t931227/' },
        { name: '🤿 Snorkel Gear', link: '#' },
        { name: '🍽️ Lunch on Boat', link: '#' },
        { name: '🧴 Sunscreen & Towels', link: '#' }
      ]
    },
    {
      day: 5,
      date: 'July 24',
      title: 'Pool, Sea & Shopping 🛍️',
      activity: 'Your final day of adventure! Start with a relaxing morning at the hotel pool, then enjoy one last swim in the beautiful sea. Afterwards, explore local shops and markets for souvenirs and last-minute shopping. Pick up gifts, local crafts, and memories to take home. End the day with a special goodbye dinner together, celebrating an amazing week with the girls!',
      image: 'images/day5-dinner.jpg',
      location: {
        name: 'Protaras Town',
        link: 'https://maps.google.com/?q=Protaras+Cyprus'
      },
      booking: {
        name: 'Shopping Guide',
        link: 'https://maps.google.com/?q=shops+Protaras+Cyprus'
      },
      importantLinks: [
        { name: '🏊 Hotel Pool (Final Swim)', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
        { name: '🏖️ Beach (Last Swim)', link: 'https://maps.google.com/?q=Protaras+beaches' },
        { name: '🛍️ Local Shops & Souvenir', link: 'https://maps.google.com/?q=shops+Protaras+Cyprus' },
        { name: '🍽️ Farewell Dinner', link: 'https://maps.google.com/?q=restaurants+Protaras+Cyprus' }
      ]
    },
    {
      day: 6,
      date: 'July 25',
      title: 'Going Home ✈️',
      activity: 'Time to say goodbye to beautiful Cyprus! Enjoy a final breakfast, check out of Sunrise Pearl Hotel, and head to the airport. Reflect on the amazing memories, the laughter, the adventures, and the precious time spent together. Safe travels home with hearts full of wonderful moments!',
      image: 'images/day6-departure.jpg',
      location: {
        name: 'Airport',
        link: 'https://maps.google.com/?q=Larnaca+Airport+Cyprus'
      },
      booking: {
        name: 'Flight Booking',
        link: '#'
      },
      importantLinks: [
        { name: '🏨 Hotel Checkout', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
        { name: '🚕 Airport Transfer', link: '#' },
        { name: '✈️ Flight Details', link: '#' },
        { name: '🎒 Packing Checklist', link: '#' }
      ]
    }
  ]
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const dayTabs = document.querySelectorAll('.day-tab');

  dayTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const dayNumber = parseInt(e.target.dataset.day);
      updateDay(dayNumber);

      // Update active tab
      dayTabs.forEach(t => {
        t.classList.remove('border-blue-500', 'text-blue-600');
        t.classList.add('border-transparent', 'text-gray-500');
      });
      e.target.classList.add('border-blue-500', 'text-blue-600');
      e.target.classList.remove('border-transparent', 'text-gray-500');
    });
  });

  // Initialize with day 1
  updateDay(1);
});

// Color palette for each day
const dayColors = {
  1: { bg: 'linear-gradient(135deg, #FFB6D9, #FFE4F0)', text: '#FF1493' },
  2: { bg: 'linear-gradient(135deg, #87CEEB, #B0E0E6)', text: '#4169E1' },
  3: { bg: 'linear-gradient(135deg, #FFD700, #FFEB3B)', text: '#FFA500' },
  4: { bg: 'linear-gradient(135deg, #98FB98, #90EE90)', text: '#228B22' },
  5: { bg: 'linear-gradient(135deg, #FFA07A, #FF8C69)', text: '#FF6347' },
  6: { bg: 'linear-gradient(135deg, #DDA0DD, #EE82EE)', text: '#9932CC' }
};

// Update day content
function updateDay(dayNumber) {
  const day = tripData.days[dayNumber - 1];
  const colors = dayColors[dayNumber];

  // Update header
  document.getElementById('day-date').textContent = day.date;
  document.getElementById('day-title').textContent = day.title;

  // Update image with color
  const img = document.getElementById('day-image');
  const placeholder = document.getElementById('day-image-placeholder');
  const imageContainer = document.getElementById('image-container');

  imageContainer.style.background = colors.bg;
  placeholder.style.color = 'white';
  placeholder.style.textShadow = '0 2px 4px rgba(0,0,0,0.2)';

  img.src = day.image;
  img.style.display = 'block';
  placeholder.style.display = 'none';
  img.onerror = () => {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
  };

  // Update activity
  document.getElementById('day-activity').textContent = day.activity;

  // Update gallery
  const gallery = document.getElementById('gallery');
  const galleryPlaceholder = document.getElementById('gallery-placeholder');
  gallery.innerHTML = '';

  // Try to load images from the day folder
  const dayFolder = `images/Day ${dayNumber}/`;
  let imageCount = 0;
  let hasImages = false;

  // Try loading up to 20 images (1.jpg, 2.jpg, etc.)
  for (let i = 1; i <= 20; i++) {
    const imgPath = `${dayFolder}${i}.jpg`;
    const img = new Image();

    img.onload = function() {
      hasImages = true;
      galleryPlaceholder.style.display = 'none';

      const imgContainer = document.createElement('div');
      imgContainer.className = 'relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer group';
      imgContainer.style.aspectRatio = '1';

      const imgElement = document.createElement('img');
      imgElement.src = imgPath;
      imgElement.alt = `Day ${dayNumber} - Photo ${i}`;
      imgElement.className = 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-300';

      imgContainer.appendChild(imgElement);
      gallery.appendChild(imgContainer);
      imageCount++;
    };

    img.onerror = function() {
      // Image not found, stop trying
      if (imageCount === 0 && i === 1) {
        galleryPlaceholder.style.display = 'flex';
      }
    };

    img.src = imgPath;
  }

  // Show placeholder if no images found
  if (imageCount === 0) {
    galleryPlaceholder.style.display = 'flex';
  }

  // Update location
  const locationLink = document.getElementById('location-link');
  locationLink.textContent = day.location.name + ' →';
  locationLink.href = day.location.link;

  // Update booking
  const bookingLink = document.getElementById('booking-link');
  bookingLink.textContent = day.booking.name + ' →';
  bookingLink.href = day.booking.link;

  // Update important links
  const importantLinksContainer = document.getElementById('important-links');
  importantLinksContainer.innerHTML = '';

  if (day.importantLinks && day.importantLinks.length > 0) {
    day.importantLinks.forEach(link => {
      const linkDiv = document.createElement('a');
      linkDiv.href = link.link;
      linkDiv.target = '_blank';
      linkDiv.rel = 'noopener noreferrer';
      linkDiv.className = 'bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-left';
      linkDiv.innerHTML = `<p class="text-sm font-medium text-blue-600">${link.name}</p>`;
      importantLinksContainer.appendChild(linkDiv);
    });
  }

  // Update progress bar
  const progressPercent = (dayNumber / 5) * 100;
  document.getElementById('progress-bar').style.width = progressPercent + '%';
  document.getElementById('progress-text').textContent = dayNumber;

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
