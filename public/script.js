document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // Hide all sections except the first one
    sections.forEach(section => {
        if (!section.classList.contains("hero")) {
            section.classList.add("hidden");
        }
    });

    // Show the selected section and hide others
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.classList.contains(sectionId)) {
                section.classList.remove("hidden");
            } else {
                section.classList.add("hidden");
            }
        });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });
});
