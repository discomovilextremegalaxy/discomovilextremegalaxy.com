const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(".reveal");
const hero = document.querySelector(".hero");

const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const memory = Number(navigator.deviceMemory || 0);
const cores = Number(navigator.hardwareConcurrency || 0);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveData = Boolean(connection && connection.saveData);
const slowConnection = Boolean(connection && /^(slow-2g|2g)$/.test(connection.effectiveType || ""));
const lowHardware = (memory > 0 && memory <= 4) || (cores > 0 && cores <= 4);
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
const lowEffects = prefersReducedMotion || saveData || slowConnection || lowHardware || coarsePointer;

document.documentElement.classList.toggle("low-effects", lowEffects);

const syncHeaderState = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

if (lowEffects || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: 0.18, rootMargin: "0px 0px -40px 0px" });

    revealItems.forEach((item) => observer.observe(item));
}

// Pointer-following lighting is enabled only on capable desktop devices.
// The animation frame loop runs only while the light is moving, never continuously.
if (hero && !lowEffects && window.matchMedia("(pointer: fine)").matches) {
    let currentX = 50;
    let currentY = 34;
    let targetX = 50;
    let targetY = 34;
    let frameId = 0;

    const animateLight = () => {
        currentX += (targetX - currentX) * 0.14;
        currentY += (targetY - currentY) * 0.14;
        hero.style.setProperty("--pointer-x", `${currentX}%`);
        hero.style.setProperty("--pointer-y", `${currentY}%`);

        if (Math.abs(targetX - currentX) > 0.15 || Math.abs(targetY - currentY) > 0.15) {
            frameId = window.requestAnimationFrame(animateLight);
        } else {
            frameId = 0;
        }
    };

    const updateTarget = (event) => {
        const rect = hero.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        targetX = Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100));
        targetY = Math.min(100, Math.max(0, ((event.clientY - rect.top) / rect.height) * 100));
        if (!frameId) frameId = window.requestAnimationFrame(animateLight);
    };

    const resetTarget = () => {
        targetX = 50;
        targetY = 34;
        if (!frameId) frameId = window.requestAnimationFrame(animateLight);
    };

    hero.addEventListener("pointermove", updateTarget, { passive: true });
    hero.addEventListener("pointerleave", resetTarget, { passive: true });
}
