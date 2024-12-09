document.addEventListener("DOMContentLoaded", function() {
    const snowflakes = document.querySelector('.snowflakes');

    // Qorlarni yaratish
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Qor belgisini o'zgartirish mumkin
        snowflakes.appendChild(snowflake);
        
        // Har bir qorning tasodifiy joylashuvi va kechikishi
        const startPositionX = Math.random() * window.innerWidth; // Tasodifiy X pozitsiyasi
        const startPositionY = -10; // Qor yuqoridan boshlanadi
        const duration = 5 + Math.random() * 5; // 5-10 soniya davomida
        const delay = Math.random() * 3; // Tasodifiy kechikish

        // Qorni tasodifiy joylashtirish
        snowflake.style.left = startPositionX + 'px';
        snowflake.style.top = startPositionY + 'px';
        snowflake.style.animationDuration = duration + 's';
        snowflake.style.animationDelay = delay + 's';

        // O'chirish
        setTimeout(() => {
            snowflake.remove();
        }, (duration + delay) * 1000); // Animatsiya tugagach o'chirish
    }

    // Har 100msda bir qorni yaratish
    setInterval(createSnowflake, 100);
});
