document.addEventListener("DOMContentLoaded", () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Update UI for already added destinations
    const loveSymbols = document.querySelectorAll(".love-symbol");
    loveSymbols.forEach((symbol) => {
        const card = symbol.closest(".attraction-card");
        const destinationName = card.querySelector("h3").textContent;

        if (wishlist.some((item) => item.name === destinationName)) {
            symbol.classList.add("active");
        }

        symbol.addEventListener("click", () => {
            const destinationDescription = card.querySelector("p").textContent;
            const destinationImage = card.querySelector("img").src;

            // Toggle active state
            if (!symbol.classList.contains("active")) {
                // Check if already in wishlist
                if (wishlist.some((item) => item.name === destinationName)) {
                    alert(`${destinationName} is already in your wishlist.`);
                } else {
                    symbol.classList.add("active");

                    // Add destination to wishlist
                    const destination = {
                        name: destinationName,
                        description: destinationDescription,
                        image: destinationImage,
                    };

                    wishlist.push(destination);
                    localStorage.setItem("wishlist", JSON.stringify(wishlist));
                    alert(`${destinationName} has been added to your wishlist.`);
                }
            } else {
                // Remove destination from wishlist
                symbol.classList.remove("active");

                const index = wishlist.findIndex((item) => item.name === destinationName);
                if (index > -1) {
                    wishlist.splice(index, 1);
                    localStorage.setItem("wishlist", JSON.stringify(wishlist));
                    alert(`${destinationName} has been removed from your wishlist.`);
                }
            }

            console.log("Updated Wishlist:", wishlist);
        });
    });
});
document.querySelectorAll('.rating').forEach(rating => {
    rating.addEventListener('click', function (event) {
        if (event.target.classList.contains('star')) {
            const value = event.target.getAttribute('data-value');
            Array.from(rating.children).forEach(star => {
                star.classList.remove('selected');
                if (star.getAttribute('data-value') <= value) {
                    star.classList.add('selected');
                }
            });
        }
    });
});
