function checkScreenSize() {
  const width = window.innerWidth;

  const splide = new Splide(".splide", {
    perPage: 4,
    rewind: true,
    gap: 10,
    pagination: false,
  });

  const splide_mobile = new Splide(".splide", {
    perPage: 1.5,
    rewind: true,
    gap: 10,
    pagination: false,
  });
  const splide_ipad = new Splide(".splide", {
    perPage: 3,
    rewind: true,
    gap: 10,
    pagination: false,
  });

  const splide_2 = new Splide(".splide", {
    perPage: 2,
    rewind: true,
    gap: 10,
    pagination: false,
  });

  if (width <= 391) {
    splide_mobile.mount();
  } else if (width <= 1500 && width >= 769) {
    splide_ipad.mount();
  } else if (width <= 768 && width >= 392) {
    splide_2.mount();
  } else {
    splide.mount();
  }
}

// Call the function when the page loads
checkScreenSize();

// Listen for resize events
window.addEventListener("resize", checkScreenSize);
