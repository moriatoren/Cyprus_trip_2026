const tripData = {
  days: [
    {
      day: 1,
      title: 'יום 1: הגעה והתמקמות 🏨',
      date: '20 ביולי 2026',
      morning: 'נסיעה לקפריסין והגעה לשדה התעופה! כל כך מרגש!',
      noon: 'הסתגרות במלון Sunrise Pearl וניפוח בחדרים שלנו',
      evening: 'טיול בעיר, חקר חנויות ותיהנו מארוחת ערב מיוחדת',
      folder: 'day 1',
      location: { name: 'מלון Sunrise Pearl', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
      booking: { name: 'מידע על המלון', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
      links: [
        { name: '🏨 המלון', link: 'https://maps.google.com/?q=Sunrise+Pearl+Protaras+Cyprus' },
        { name: '🍽️ ארוחה', link: 'https://maps.google.com/?q=restaurants+Protaras' },
        { name: '🛍️ קניות', link: 'https://maps.google.com/?q=Protaras+shops' }
      ]
    },
    {
      day: 2,
      title: 'יום 2: בריכה וים 🏊‍♀️',
      date: '21 ביולי 2026',
      morning: 'התעוררות קפיצה לבריכת המלון!',
      noon: 'הנסיעה לחוף Fig Tree Bay - אחד החופים היפים ביותר בקפריסין!',
      evening: 'הרפתקה בלונה פארק - רכיבות, משחקים וכיף תחת הכוכבים! 🎡',
      folder: 'Day 2',
      location: { name: 'חוף Fig Tree Bay', link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html' },
      booking: { name: 'מידע על החוף', link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html' },
      links: [
        { name: '🏖️ Fig Tree Bay', link: 'https://www.tripadvisor.com/Attraction_Review-g667803-d1755105-Reviews-Fig_Tree_Bay_Beach-Protaras_Paralimni_Famagusta_District.html' },
        { name: '🎡 לונה פארק', link: 'https://waterworldwaterpark.com/' },
        { name: '🌅 נוף השקיעה', link: '#' }
      ]
    },
    {
      day: 3,
      title: 'יום 3: יום פארק המים 💦',
      date: '22 ביולי 2026',
      morning: 'ארוחת בוקר גדולה לפני הקווקים הגדול!',
      noon: 'זמן ללא רחמים! פארק המים עם גלישים, בריכות וכל כך הרבה כיף!',
      evening: 'נרגע אחרי כל ההרפתקות של פארק המים',
      folder: 'Day 3',
      location: { name: 'פארק המים', link: 'https://maps.google.com/?q=Water+World+Park+Cyprus' },
      booking: { name: 'מידע על הפארק', link: 'https://waterworldwaterpark.com/' },
      links: [
        { name: '💦 פארק המים', link: 'https://waterworldwaterpark.com/' },
        { name: '🎢 גלישים אפיים', link: '#' },
        { name: '🍔 זמן לחטיפים', link: '#' }
      ]
    },
    {
      day: 4,
      title: 'יום 4: הרפתקת סירה 🚤',
      date: '23 ביולי 2026',
      morning: 'התכוננו להרפתקה! הכינו את הציוד שנורקלינג שלכן!',
      noon: 'כל מי שעולה על הסירה הצהובה! חקור מערות, ספוט דגים ותחום בים טורקיז!',
      evening: 'צפו בשקיעה מהסירה והנהנו מארוחת ערב ליד הים',
      folder: 'Day 4',
      location: { name: 'נמל Protaras', link: 'https://maps.google.com/?q=Protaras+boat+tours' },
      booking: { name: 'סיורי סירה', link: 'https://www.getyourguide.com/protaras-l132513/protaras-the-family-fun-cruise-with-the-yellow-boat-cruises-t931227/' },
      links: [
        { name: '🚤 סירה צהובה', link: 'https://www.getyourguide.com/protaras-l132513/protaras-the-family-fun-cruise-with-the-yellow-boat-cruises-t931227/' },
        { name: '🤿 נורקלינג', link: '#' },
        { name: '🐠 חיות ים', link: '#' }
      ]
    },
    {
      day: 5,
      title: 'יום 5: בריכה, ים וקניות 🛍️',
      date: '24 ביולי 2026',
      morning: 'תנוח ליד בריכת המלון בפעם אחרונה',
      noon: 'שחיה אחת אחרונה בים וזמן חוף!',
      evening: 'הרפתקת קניות! חפשו מזכרות ומתנות מיוחדות לכולם!',
      folder: 'Day 5',
      location: { name: 'עיר Protaras', link: 'https://maps.google.com/?q=Protaras+Cyprus' },
      booking: { name: 'חנויות', link: 'https://maps.google.com/?q=shops+Protaras' },
      links: [
        { name: '🏖️ יום חוף אחרון', link: '#' },
        { name: '🛍️ קניות מטורפות', link: '#' },
        { name: '🎁 מזכרות', link: '#' }
      ]
    },
    {
      day: 6,
      title: 'יום 6: חזרה הביתה ✈️',
      date: '25 ביולי 2026',
      morning: 'ארוחת בוקר אחרונה במלון. הפרדה מקפריסין!',
      noon: 'צאו מהמלון וכיוונו לשדה התעופה',
      evening: 'טיסה הביתה עם זיכרונות מדהימים וליבות מלאות אהבה! 💕',
      folder: 'Day 6',
      location: { name: 'שדה תעופה לרנקה', link: 'https://maps.google.com/?q=Larnaca+Airport+Cyprus' },
      booking: { name: 'פרטי הטיסה', link: '#' },
      links: [
        { name: '✈️ פרטי הטיסה', link: '#' },
        { name: '🧳 סידור קופסאות', link: '#' },
        { name: '📸 שמרו זיכרונות', link: '#' }
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
      imgEl.alt = `תמונה ${i}`;
      item.appendChild(imgEl);
      gallery.appendChild(item);
    };

    img.src = imgPath;
  }
}
