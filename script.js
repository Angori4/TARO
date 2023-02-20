// Код JavaScript для навігації по сторінкам сайту
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// Додаємо обробник події на кожне посилання в навігації
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Відмічаємо активне посилання в навігації
    navLinks.forEach(navLink => navLink.classList.remove("active"));
    link.classList.add("active");

    // Перехід до відповідної секції
    const sectionId = link.getAttribute("href").slice(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Додаємо обробник події для визначення активної секції
window.addEventListener("scroll", () => {
  let currentSection = sections[0];
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (window.scrollY >= sectionTop) {
      currentSection = section;
    }
  });
  const currentLink = document.querySelector(`nav a[href="#${currentSection.id}"]`);
  navLinks.forEach(navLink => navLink.classList.remove("active"));
  currentLink.classList.add("active");
});

