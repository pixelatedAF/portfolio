document.addEventListener('DOMContentLoaded', () => {
    console.log("Sketchy Portfolio Loaded!");

    // Randomize rotation on load for a "tossed on table" look
    const sketchyElements = document.querySelectorAll('.sketch-box, .tech-card, .project-card, .content-box');
    sketchyElements.forEach(el => {
        const randomRot = Math.random() * 2 - 1; // Slight rotation between -1 and 1 deg
        el.style.transform = `rotate(${randomRot}deg)`;

        // Add hover effect
        el.addEventListener('mouseenter', () => {
            const rot = Math.random() * 4 - 2; // More dramatic rotation on hover
            const scale = 1.02;
            el.style.transform = `rotate(${rot}deg) scale(${scale})`;
            el.style.zIndex = '10';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `rotate(${randomRot}deg)`; // Return to original random rotation
            el.style.zIndex = '1';
        });
    });

    // Animate Progress Bars when they come into view
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.fill');
                if (progressBar) {
                    const width = progressBar.getAttribute('style').match(/width:\s*(\d+)%/)[1];
                    progressBar.style.width = '0%'; // Reset to 0
                    setTimeout(() => {
                        progressBar.style.width = width + '%'; // Animate to target
                    }, 100);
                    observer.unobserve(entry.target); // Only animate once
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.tech-card').forEach(card => {
        observer.observe(card);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Mailto Handler Removed (Using FormSubmit.co)

    // Cursor Trail Removed

    // Create vibrant floating doodles
    const doodles = ['★', '♥', '♦', '●', '✿', '⚡', '✦', '✷'];
    const body = document.querySelector('body');

    for (let i = 0; i < 20; i++) {
        const doodle = document.createElement('div');
        doodle.innerText = doodles[Math.floor(Math.random() * doodles.length)];
        doodle.style.position = 'fixed';
        doodle.style.left = Math.random() * 100 + 'vw';
        doodle.style.top = Math.random() * 100 + 'vh';
        doodle.style.fontSize = (Math.random() * 30 + 10) + 'px';
        doodle.style.color = trailColors[Math.floor(Math.random() * trailColors.length)];
        doodle.style.opacity = '0.3';
        doodle.style.pointerEvents = 'none';
        doodle.style.zIndex = '-1';
        doodle.style.animation = `float ${Math.random() * 5 + 5}s ease-in-out infinite`;
        doodle.style.animationDelay = Math.random() * 5 + 's';
        body.appendChild(doodle);
    }
});
