const homeButton = document.getElementById("homeB");
homeButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

const aboutButton = document.getElementById("aboutB");
aboutButton.addEventListener("click", () => {
  window.scrollTo({ top: 900, left: 0, behavior: "smooth" });
});

const contactButton = document.getElementById("contactB");
contactButton.addEventListener("click", () => {
  window.scrollTo({ top: 2400, left: 0, behavior: "smooth" });
});

AOS.init({
  delay: 200,
  duration: 1200,
  once: false,
});
