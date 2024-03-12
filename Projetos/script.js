function changeTheme() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
  
    // Toggle between light and dark themes
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      navbar.style.backgroundColor = '#333';
    } else {
      body.classList.add('light-theme');
      navbar.style.backgroundColor = '#ddd';
    }
  }
  let currentSlide = 1;

function showSlide(n) {
  const slides = document.getElementsByClassName('carousel-slide');

  if (n > slides.length) {
    currentSlide = 1;
  } else if (n < 1) {
    currentSlide = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentSlide - 1].style.display = 'block';
}

function changeSlide(n) {
  showSlide(currentSlide += n);
}

// Exibir o primeiro slide ao carregar a página
showSlide(currentSlide);

  