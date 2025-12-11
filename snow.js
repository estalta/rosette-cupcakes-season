document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
    // Define the image paths you are using
    const snowflakeImages = [
        'img/snowflake1.png',
        'img/snowflake2.png',
        'img/snowflake3.png'
    ];
    // Define how many snowflakes you want (e.g., 30 instead of 18)
    const numberOfSnowflakes = 30;

    function createSnowflake() {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');

        // --- Randomization ---

        // Math.random() - Returns a number between 0.0 and 0.9999...
        // Example: 0.0, 0.543, or 0.9999..., but never 1.0

        // Math.floor() rounds a number down to the nearest whole integer.
        // When you apply Math.floor() to any number in the range [0, 1), the result is always 0.
        // Math.floor(0.123) becomes 0.
        // Math.floor(0.999) becomes 0

        // Math.floor(Math.random()

        
        // 1. Random Image (from your 3 options)
        const randomImage = snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];
        flake.style.backgroundImage = `url('${randomImage}')`;

        // 2. Random Size (10px to 18px)
        const size = Math.random() * 8 + 10; // 10 is min, range is 8
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;

        // 3. Random Initial Position (0% to 100% across the screen)
        // We use 'left' here, similar to your original implementation
        flake.style.left = `${Math.random() * 100}%`; 
        
        // 4. Random Animation Duration (10s to 25s)
        const duration = Math.random() * 15 + 10;
        flake.style.animationDuration = `${duration}s`;

        // 5. Random Animation Delay (0s to 8s)
        const delay = Math.random() * 8;
        flake.style.animationDelay = `${delay}s`;

        // 6. Random starting Y position (optional, slightly offscreen)
        // Using 'top' to replicate your original `--top-pos` usage
        flake.style.top = `-${Math.random() * 100 + 50}px`; 


        snowContainer.appendChild(flake);

        // Optional: Remove snowflake element once animation finishes to keep DOM clean
        flake.addEventListener('animationiteration', () => {
            // When an iteration finishes, reset its horizontal position for variety
            flake.style.left = `${Math.random() * 100}%`;
            
            // If you want to remove and recreate entirely after one cycle:
            // flake.remove();
            // createSnowflake(); 
        });
    }

    // Generate all the snowflakes
    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
});
