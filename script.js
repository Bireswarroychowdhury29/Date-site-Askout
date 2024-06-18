function showHeart() {
    const heartContainer = document.getElementById('heart-container');
    
    // Create multiple hearts
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.animationDelay = `${i * 0.2}s`;
        heartContainer.appendChild(heart);
    }
    
    // Add text animation
    const dateQuestion = document.getElementById('date-question');
    dateQuestion.style.animation = 'fadeInAndOut 2s infinite';
}
