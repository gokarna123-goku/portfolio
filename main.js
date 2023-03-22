// ES6 JavaScript Type

const nav = document.querySelector("#nav");
const onScroll = () => {
  const scrollPosition = window.scrollOffsetY;

  nav.classList.toggle("scrolled-down", scrollPosition > 20);
};

document.addEventListener("scroll", onScroll, { passive: true });

// End
