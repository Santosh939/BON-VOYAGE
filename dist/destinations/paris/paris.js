// paris.js

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
        "Eiffel Tower": "Visit this iconic symbol of Paris for panoramic views of the city.",
        "Louvre Museum": "Explore the world's largest art museum and see famous artworks like the Mona Lisa.",
        "Notre-Dame Cathedral": "Admire the Gothic architecture and the stunning rose windows of this historic cathedral.",
        "Montmartre": "Wander through this artistic neighborhood, full of charm, history, and stunning views of Paris.",
        "Seine River Cruise": "Enjoy a scenic boat tour on the Seine River, passing by landmarks like the Eiffel Tower and Notre-Dame.",
        "Palace of Versailles": "Marvel at the opulence of the Palace of Versailles, its gardens, and its magnificent interior."
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
