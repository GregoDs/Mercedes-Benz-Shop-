document.getElementById('scrollToShop').addEventListener('click', () => {
    const shopSection = document.getElementById('product-container');
    shopSection.scrollIntoView({ behavior: 'smooth' });
});

//Video Slides animations and functionality
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.video-slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].parentElement.setAttribute('aria-selected', 'false');

        currentIndex = index;

        slides[currentIndex].classList.add('active');
        dots[currentIndex].parentElement.setAttribute('aria-selected', 'true');

        const currentVideo = slides[currentIndex].querySelector('video');
        currentVideo.currentTime = 0; // Reset video time
        currentVideo.play(); // Play the next video
    }

    function showNextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Event listener for video end
    slides.forEach(slide => {
        const video = slide.querySelector('video');
        video.addEventListener('ended', showNextSlide);
    });

    // Dots click event
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showSlide(index);
        });
    });

    // Start playing the first video
    slides[currentIndex].querySelector('video').play();
});



window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 590) {
        // When scrolled down, apply new background and shadow
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.986)'; // Less transparent background
        header.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 20px 40px -20px'; // Add shadow
    } else { 
        // Reset to initial style when at the top of the page
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Fully transparent
        header.style.boxShadow = 'rgba(0, 0, 0, 0) 0px 20px 40px -20px'; // No shadow
    }
});

  document.addEventListener('DOMContentLoaded', function () {
    // Get all thumbs-up and thumbs-down icons
    const thumbsUpIcons = document.querySelectorAll('.fa-thumbs-up');
    const thumbsDownIcons = document.querySelectorAll('.fa-thumbs-down');

    thumbsUpIcons.forEach(function (thumbsUpIcon, index) {
        thumbsUpIcon.addEventListener('click', function () {
            // Toggle the 'liked' class for the specific product
            thumbsUpIcon.classList.toggle('liked');

            // Remove 'disliked' class for the same product
            thumbsDownIcons[index].classList.remove('disliked');
        });
    });

    thumbsDownIcons.forEach(function (thumbsDownIcon, index) {
        thumbsDownIcon.addEventListener('click', function () {
            // Toggle the 'disliked' class for the specific product
            thumbsDownIcon.classList.toggle('disliked');

            // Remove 'liked' class for the same product
            thumbsUpIcons[index].classList.remove('liked');
        });
    });
});


// Replace with your product details
const products = [
    {   
        id:"001",
        name: "Mercedes Benz c63",
        price: 5000000, // in cents
        image: "https://media.istockphoto.com/id/586086492/photo/red-car-mercedes-benz-c63-stay-on-asphalt-road-in-city.jpg?s=612x612&w=0&k=20&c=sqKTl_lrL1NwB-GdOYm0Hpg9DhFUaBtaFc8EXJUiCbM="
    },
    {
        id:"002",
        name: "Mercedes Benz Amg-gt",
        price: 6000000, // in cents
        image: "https://media.istockphoto.com/id/1077921262/photo/mercedes-benz-amg-gt.jpg?s=612x612&w=0&k=20&c=z1Zxp0l8-y9UX7NS5C9jKI9ny80lL1YTVezlYbizqvY="
    },
    {
        id:"003",
        name: "Mercedes Benz Amg-gt-r-coupe",
        price: 5000000, // in cents
        image: "https://media.istockphoto.com/id/1306113934/photo/mercedes-benz-amg-gt-r-coupe-luxury-sport-car.jpg?s=612x612&w=0&k=20&c=R10VW3A_JSR1XquBaLvsInXhMRSzL7Y3TJ3zjutc5Rg="
    },
    {
        id:"004",
        name: "Mercedes Amg Petronas Formula 1-car",
        price: 6000000, // in cents
        image: "https://media.istockphoto.com/id/520492004/photo/mercedes-f1-w06-hybrid-formula-1-race-car.jpg?s=612x612&w=0&k=20&c=vKx2puOwKNFEVL9lrBW3iCeWhpGn0UtR-IM-LXZAgsY="
    },
    {
        id:"005",
        name: "Mercedes gran-Canaria",
        price: 9000000, // in cents
        image: "https://media.istockphoto.com/id/1156894496/photo/gran-canaria-spain-may-12-2018.jpg?s=612x612&w=0&k=20&c=uqjjewh0hJyZXHj3QnUxqgyV4c2z9lyNcfOMg3daxmQ="
    },
    {
        id:"006",
        name: "Mercedes green amg-gt-r",
        price: 4500000, // in cents
        image: "https://media.istockphoto.com/id/1041380024/photo/the-sports-car-mercedes-amg-gt-r-in-green.jpg?s=612x612&w=0&k=20&c=wxnzEzp7kimnpXR7SWQGSqn8MVZLmO1bffitTwacwfU="
    },
    {
        id:"007",
        name: "Mercedes Benz gle 53 AMG ",
        price: 3400000, // in cents
        image: "https://media.istockphoto.com/id/1489985926/photo/black-mercedes-benz-gle-53-amg-parked-in-a-desolate-street-at-night.jpg?s=612x612&w=0&k=20&c=gSfgoNhsAzOTjWg2jUXKblvpkoQeIhnHD3686kxM7yQ="
    },
    {
        id:"008",
        name: "Mercedes SUV  C63",
        price: 4455000, // in cents
        image: "https://media.istockphoto.com/id/948387066/photo/mercedes-benz-c63-amg.jpg?s=612x612&w=0&k=20&c=oMxtZMMzq8j7kdQr2ve3aAgNT2LHtR--04TiTb7ym1s="
    },
    {
        id:"009",
        name: "Mercedes AMG coupe-gt",
        price: 5047000, // in cents
        image: "https://media.istockphoto.com/id/537791997/photo/mercedes-amg-gt-coupe-sports-car.jpg?s=612x612&w=0&k=20&c=9sBSFuBR57Ogmv_SQ6SFLy_8gdFTpWQT7O4-rXXS48U="
    },
    {
        id:"010",
        name: "Mercedes sls AMG coupe",
        price: 45000000, // in cents
        image: "https://media.istockphoto.com/id/459005633/photo/mercedes-benz-sls-amg-coupe.jpg?s=612x612&w=0&k=20&c=LdPhbhd7GddJJlkVCAVTZgxaBAGPBkKGxFgI8euVGt4="
    },
    {
        id:"011",
        name: "Mercedes Benz e63 AMG",
        price: 35000000, // in cents
        image: "https://media.istockphoto.com/id/470688309/photo/mercedes-benz-e63-amg.jpg?s=612x612&w=0&k=20&c=2gHT1HdWE_9EMYStTA0eJcXj3Zsu7Wmc1uoysaN_9xs="
    },
    {
        id:"012",
        name: "Mercedes ML63-AMG ",
        price: 5000000, // in cents
        image: "https://media.istockphoto.com/id/504920104/photo/mercedes-benz-w166-ml63-amg.jpg?s=612x612&w=0&k=20&c=wVy6e-3yftzu21uL4nO94CEklxvdQ1JZ_oloPzxyLXE="
    },
];



const productContainer = document.getElementById('product-container');

// Function to create the HTML for a single product
function createProductHTML(product) {
    return `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${(product.price / 100).toFixed(2)}</p>
            <i class="fa-solid fa-thumbs-up"></i>
            <button class="buy-button">Buy Now</button>
            <i class="fa-solid fa-thumbs-down"></i>
        </div>
    `;
}

// Display all products on the page
products.forEach(product => {
    const productHTML = createProductHTML(product);
    productContainer.innerHTML += productHTML;
});


// Get all product buttons
const buyButtons = document.querySelectorAll('.buy-button');

// Add click event listener to each buy button
buyButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        // Prevent the click event from bubbling up to the product element
        event.stopPropagation();

        // Call your server to create a Checkout Session
        fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: products[index].id, // Send the product ID to the server
            }),
        })
        .then(response => response.json())
        .then(session => {
            // When the customer clicks on the button, redirect them to Checkout.
            return stripe.redirectToCheckout({
                sessionId: session.id,
            });
        })
        .then(result => {
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});


 //rEVIEWS SECTION
document.getElementById('scrollToReviews').addEventListener('click', () => {
    const reviewSec = document.getElementById('reviews');
    reviewSec.scrollIntoView({ behavior: 'smooth' });
});
 

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 2 seconds
}

showSlides(); // Start the slideshow

document.getElementById("addCommentButton").addEventListener("click", function () {
    const commentInput = document.getElementById("commentInput").value;
    if (commentInput.trim() !== "") {
        const commentDiv = document.createElement("div");
        commentDiv.textContent = commentInput;
        document.getElementById("comments").appendChild(commentDiv);
        document.getElementById("commentInput").value = "";
    }
});
//stars
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.stars i');

    stars.forEach((star, index) => {
        star.addEventListener('click', function () {
            // Toggle the rated class for the clicked star and all preceding stars
            for (let i = 0; i <= index; i++) {
                stars[i].classList.toggle('rated');
            }
        });
    });
});

