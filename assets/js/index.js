const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(".reveal");
const hero = document.querySelector(".hero");

const syncHeaderState = () => {
    if (!header) {
        return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px"
    });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (hero && window.matchMedia("(pointer: fine)").matches) {
    let targetX = 50;
    let targetY = 34;
    let currentX = 50;
    let currentY = 34;

    const moveLights = () => {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        hero.style.setProperty("--pointer-x", `${currentX}%`);
        hero.style.setProperty("--pointer-y", `${currentY}%`);

        window.requestAnimationFrame(moveLights);
    };

    const updateTarget = (event) => {
        const rect = hero.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        targetX = Math.min(100, Math.max(0, x));
        targetY = Math.min(100, Math.max(0, y));
    };

    hero.addEventListener("pointermove", updateTarget);
    hero.addEventListener("pointerleave", () => {
        targetX = 50;
        targetY = 34;
    });

    moveLights();
}
