const contactForm = document.getElementById("contactForm");
const categorySection = document.getElementById("category-section");
const gallerySection = document.getElementById("gallery-section");
const slideshowImage = document.getElementById("slideshow-image");
const categoryButtons = document.querySelectorAll(".category-btn");

const images = {
  vangogh: [
    "http://getwallpapers.com/wallpaper/full/b/0/2/277654.jpg",
    "https://cdn.wallpapersafari.com/97/37/E0ebyj.jpg",
    "https://cdn.wallpapersafari.com/52/17/Qh8rzV.jpg",
    "https://wallpaperset.com/w/full/3/8/9/145743.jpg"
  ],
  monet: [
    "https://wallpaperaccess.com/full/4379015.jpg",
    "https://getwallpapers.com/wallpaper/full/3/1/d/249937.jpg",
  ],
  picasso: [
    "https://i.redd.it/ya006okqumf01.jpg",
    "https://wallpaperaccess.com/full/444395.jpg",
  ],
  davinci: [
    "https://news.artnet.com/app/news-upload/2018/03/Young-Leonardo-Last-Supper-Canvas-Painting.jpg",
    "https://3.bp.blogspot.com/-qF0KB1MnDX0/XG89DW5zoEI/AAAAAAAGT6A/9ZYcHMTUZ04Zj6PRZniRwllVJ34csujwQCLcBGAs/s1600/Leonardo-da-Vinci-Mona-Lisa-with-original-colors-approximation.jpg",
    
  ]
};

let currentImages = [];
let currentIndex = 0;

// Handle form submission
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !validateEmail(email)) {
    alert("Please enter a valid name and email.");
    return;
  }

  categorySection.classList.remove("hidden");
});

// Email validation
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Category button click handling
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    displayImages(category);
    gallerySection.classList.remove("hidden");
  });
});

// Load appropriate images
function displayImages(category) {
  currentImages = images[category].map(item => {
    if (item.startsWith("http")) {
      return item; // direct image URL
    } else {
      return `https://source.unsplash.com/600x400/?${encodeURIComponent(item)}`; // search term
    }
  });

  currentIndex = 0;
  updateSlideshow();
}

// Update image source in the slideshow
function updateSlideshow() {
  slideshowImage.src = currentImages[currentIndex];
}

// Navigation: Next
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentImages.length > 0) {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateSlideshow();
  }
});

// Navigation: Previous
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentImages.length > 0) {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateSlideshow();
  }
});
