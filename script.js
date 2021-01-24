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

const hat1 = document.getElementById("h1");

hat1.addEventListener("mouseover", () => {
  const under = document.getElementById("u1");
  const underText = document.getElementById("ut1");
  under.style.visibility = "visible";
  under.style.transitionDelay = "1s";
  underText.style.visibility = "visible";
  underText.style.transitionDelay = "1s";
});

hat1.addEventListener("mouseout", () => {
  const under = document.getElementById("u1");
  const underText = document.getElementById("ut1");
  underText.style.visibility = "hidden";
  under.style.visibility = "hidden";
  under.style.transitionDelay = "0s";
  underText.style.transitionDelay = "0s";
});

const hat2 = document.getElementById("h2");

hat2.addEventListener("mouseover", () => {
  const under = document.getElementById("u2");
  const underText = document.getElementById("ut2");
  under.style.visibility = "visible";
  under.style.transitionDelay = "1s";
  underText.style.visibility = "visible";
  underText.style.transitionDelay = "1s";
});

hat2.addEventListener("mouseout", () => {
  const under = document.getElementById("u2");
  const underText = document.getElementById("ut2");
  under.style.visibility = "hidden";
  under.style.transitionDelay = "0s";
  underText.style.visibility = "hidden";
  underText.style.transitionDelay = "0s";
});

const hat3 = document.getElementById("h3");

hat3.addEventListener("mouseover", () => {
  const under = document.getElementById("u3");
  const underText = document.getElementById("ut3");
  under.style.visibility = "visible";
  under.style.transitionDelay = "1s";
  underText.style.visibility = "visible";
  underText.style.transitionDelay = "1s";
});

hat3.addEventListener("mouseout", () => {
  const under = document.getElementById("u3");
  const underText = document.getElementById("ut3");
  under.style.visibility = "hidden";
  under.style.transitionDelay = "0s";
  underText.style.visibility = "hidden";
  underText.style.transitionDelay = "0s";
});

AOS.init({
  delay: 200,
  duration: 1200,
  once: false,
});
