function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    
    let floatDuration = Math.random() * 3 + 3
    heart.style.animationDuration = `${floatDuration}s`; // Random float speed

    document.querySelector('.container').appendChild(heart);

    // Wait until the float animation finishes, then pop at the final position
    setTimeout(() => {
        // Stop the animation
        // heart.style.animation = "none";

        // Get the final Y position from computed transform
        let rect = heart.getBoundingClientRect();
        heart.style.animation = "none";

        // Apply pop effect
        heart.style.animation = "pop 0.5s ease-out forwards";
        heart.style.opacity = 0

        // setTimeout(() => {
        //     heart.remove();
        // }, 500); // Matches animation duration
    }, floatDuration * 1000)
}
  
setInterval(createHeart, 500); // Generates hearts every 500ms

// window.onload = function() {
//     // Wait for 5 seconds (5000 ms)
//     setTimeout(() => {
//         const letters = document.querySelectorAll('.letter');
        
//         // Set animation delays for each letter
//         letters.forEach((letter, index) => {
//             letter.style.animationDelay = `${5 + index * 0.1}s`; // Delay each letter by 0.1s
//             letter.style.opacity = 1; // Ensure the letters are visible after delay
//             letter.classList.add('animate'); // Add the animation class after 5 seconds
//         });
//     }, 5000); // 5000 milliseconds = 5 seconds
// };

window.onload = function () {
    const letters = document.querySelectorAll('.letter-animated');

    function animateLetters() {
        letters.forEach((letter, index) => {
            letter.style.animation = 'none'; // Reset animation
            letter.offsetHeight; // Trigger reflow to restart animation
            letter.style.animation = `fadeInUp 0.5s forwards ${index * 0.1}s`;
        });
    }

    setTimeout(() => {
        animateLetters(); // Initial animation
        setInterval(animateLetters, 5000); // Repeat every 5 seconds
    }, 5000); // Wait 1 seconds before first animation
};

document.querySelectorAll('.flip-card-container').forEach(container => {
    container.addEventListener('click', function() {
        this.querySelector('.flip-card').classList.toggle('flipped');
        this.querySelector('.flip-card-container').classList.toggle('flipped');
    });
});
  

// document.addEventListener("DOMContentLoaded", () => {
//     const flipCard = document.querySelector(".flip-card");

//     flipCard.addEventListener("click", () => {
//         flipCard.classList.toggle("flipped");
//     });
// });

document.querySelectorAll('.hidden-container').forEach(container => {
    container.addEventListener('click', function() {
        this.querySelector('.hidden').classList.toggle('revealed');
    });
});