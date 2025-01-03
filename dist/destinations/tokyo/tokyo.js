// tokyo.js

document.addEventListener("DOMContentLoaded", function() {
    // Elements
    const attractionCards = document.querySelectorAll(".attraction-card");
    const reviewModal = document.getElementById("reviewModal");
    const closeModal = document.querySelector(".close");
    const reviewForm = document.getElementById("review-form");
    const ratingStars = document.getElementById("rating-stars");
    const reviewText = document.getElementById("review-text");
    const guidanceDiv = document.getElementById("guidance");
    const attractionNameSpan = document.getElementById("attraction-name");

    let selectedRating = 0;

    // Attraction-specific guidance
    const guidance = {
        "Tokyo Tower": "An iconic landmark with a beautiful view of the city. Don't miss the observation deck for panoramic sights.",
        "Senso-ji Temple": "One of Tokyo's oldest temples, steeped in history and culture, offering a peaceful retreat from the city's hustle.",
        "Shibuya Crossing": "The famous pedestrian crossing that symbolizes Tokyo's vibrant energy and chaotic urban life."
    };

    // Add event listeners to attraction cards
    attractionCards.forEach(card => {
        card.addEventListener("click", function() {
            const attractionName = this.getAttribute("data-name");
            attractionNameSpan.textContent = attractionName;
            guidanceDiv.textContent = guidance[attractionName] || "No specific guidance available for this attraction.";
            reviewModal.style.display = "block";
        });
    });

    // Close the modal
    closeModal.addEventListener("click", function() {
        reviewModal.style.display = "none";
        resetForm();
    });

    // Close the modal if clicked outside of the modal content
    window.addEventListener("click", function(event) {
        if (event.target === reviewModal) {
            reviewModal.style.display = "none";
            resetForm();
        }
    });

    // Handle rating selection
    ratingStars.addEventListener("click", function(event) {
        if (event.target.classList.contains("star")) {
            selectedRating = parseInt(event.target.getAttribute("data-value"));
            const stars = Array.from(ratingStars.children);
            
            // Change the color of the stars from left to right
            stars.forEach(star => {
                if (parseInt(star.getAttribute("data-value")) <= selectedRating) {
                    star.style.color = "#ffc107"; // Yellow color for selected stars
                } else {
                    star.style.color = "#ddd"; // Default grey color for unselected stars
                }
            });
        }
    });

    // Handle review form submission
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const review = reviewText.value.trim();
        if (selectedRating === 0 || review === "") {
            alert("Please provide both a rating and a review.");
            return;
        }

        // Here you would typically send the review data to a server.
        // For now, we'll log it in the console and reset the form.
        console.log("Review Submitted:", {
            attraction: attractionNameSpan.textContent,
            rating: selectedRating,
            review: review
        });

        // Reset form
        alert("Thank you for your review!");
        resetForm();
        reviewModal.style.display = "none";
    });

    // Reset the form
    function resetForm() {
        selectedRating = 0;
        reviewText.value = "";
        const stars = Array.from(ratingStars.children);
        stars.forEach(star => star.style.color = "#ddd"); // Reset stars to default color
    }
});
