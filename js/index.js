document.addEventListener("DOMContentLoaded", () => {
    const progressCircles = document.querySelectorAll(".progress-circle");

    progressCircles.forEach(circle => {
        const progress = circle.getAttribute("data-progress");
        const circleProgress = circle.querySelector(".circle-progress");
        const circleText = circle.querySelector(".circle-text");
        const radius = circleProgress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circleProgress.style.strokeDasharray = `${circumference} ${circumference}`;
        circleProgress.style.strokeDashoffset = circumference;

        let progressValue = 0;
        const interval = setInterval(() => {
            if (progressValue >= progress) {
                clearInterval(interval);
            } else {
                progressValue++;
                const offset = circumference - (progressValue / 100) * circumference;
                circleProgress.style.strokeDashoffset = offset;
                circleText.textContent = `${progressValue}%`;
            }
        }, 20);
    });
});


// JavaScript to add the slide-up effect when elements are in view
document.addEventListener("DOMContentLoaded", function () {
    // Define the observer options (you can change the threshold value to control when the animation triggers)
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5  // Trigger when 50% of the element is in the viewport
    };

    // Create the intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'slide-up' class to the element
                entry.target.classList.add("slide-up");
                observer.unobserve(entry.target); // Stop observing the element after it has been animated
            }
        });
    }, options);

    // Select all elements you want to animate (modify this selector to target your specific sections)
    const elementsToAnimate = document.querySelectorAll('.about-section, .card-container, .testimonial-section');

    // Start observing each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});


// about us str

// JavaScript to add the slide-up effect when elements are in view
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5  // Trigger when 50% of the element is in the viewport
    };

    // Create the intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'slide-up' class to the element
                entry.target.classList.add("slide-up");
                observer.unobserve(entry.target); // Stop observing the element after it has been animated
            }
        });
    }, options);

    // Select all elements you want to animate
    const elementsToAnimate = document.querySelectorAll('.about-section, .progress-circle, .container.py-5');

    // Start observing each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
