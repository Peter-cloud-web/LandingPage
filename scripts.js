document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]");

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the animation class based on the data-animate value
                    const animationType = entry.target.getAttribute("data-animate");
                    entry.target.classList.add(animationType);
                    // Stop observing the element after the animation is applied
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    // Observe each animated element
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".testimonial-carousel");
    const dots = document.querySelectorAll(".carousel-dots .dot");

    // Function to update the active dot based on scroll position
    function updateActiveDot() {
        const scrollPosition = carousel.scrollLeft;
        const slideWidth = carousel.clientWidth;
        const activeIndex = Math.round(scrollPosition / slideWidth);

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === activeIndex);
        });
    }

    // Add scroll event listener to the carousel
    carousel.addEventListener("scroll", updateActiveDot);

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            const slideWidth = carousel.clientWidth;
            carousel.scrollTo({
                left: index * slideWidth,
                behavior: "smooth", // Smooth scrolling
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Toggle Drawer Menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close Menu When Clicking Outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".hamburger") && !event.target.closest(".nav-menu")) {
            navMenu.classList.remove("active");
        }
    });
});