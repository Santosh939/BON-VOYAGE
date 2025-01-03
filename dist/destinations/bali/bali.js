// Modal and Review functionality
const attractionCards = document.querySelectorAll('.attraction-card');
const modal = document.getElementById('reviewModal');
const closeModal = document.querySelector('.close');
const reviewForm = document.getElementById('review-form');
const ratingStars = document.querySelectorAll('.star');
const guidance = document.getElementById('guidance');
const attractionNameElement = document.getElementById('attraction-name');
let selectedRating = 0;

// Handle click on attraction card to open modal
attractionCards.forEach(card => {
    card.addEventListener('click', () => {
        const attractionName = card.querySelector('h3').textContent;
        attractionNameElement.textContent = attractionName;

        // Set guidance based on attraction
        switch (attractionName) {
            case 'Uluwatu Temple':
                guidance.innerHTML = 'Enjoy a stunning view and explore the cultural significance of this cliffside temple.';
                break;
            case 'Tanah Lot':
                guidance.innerHTML = 'Don\'t miss the beautiful sunsets and temple view from the rock formation.';
                break;
            case 'Seminyak Beach':
                guidance.innerHTML = 'Experience luxury and vibrant nightlife along with beautiful beach views.';
                break;
            case 'Ubud Monkey Forest':
                guidance.innerHTML = 'Watch the playful monkeys in this sacred forest filled with ancient temples.';
                break;
            case 'Tegallalang Rice Terraces':
                guidance.innerHTML = 'Capture beautiful landscapes and learn about the unique rice cultivation techniques.';
                break;
            case 'Nusa Penida':
                guidance.innerHTML = 'Discover pristine beaches and dramatic cliffs in this serene island paradise.';
                break;
            default:
                guidance.innerHTML = '';
        }

        modal.style.display = 'block';
    });
});

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
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


