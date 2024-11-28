document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".fade-in-section");

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            section.classList.add("is-visible");
        }
    });
});
