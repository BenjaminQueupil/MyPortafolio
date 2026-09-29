// Smooth-scrolls to an in-page anchor without writing "#section" into the URL.
export function scrollToSection(event, href) {
  event.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}
