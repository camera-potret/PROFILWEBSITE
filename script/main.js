// Prevent double-tap zoom on buttons
document.addEventListener('touchstart', function(e) {
    if (e.target.closest('.icon-btn, .link-card, .social-icon')) {
        e.preventDefault();
    }
}, { passive: false });

// Menu button functionality
document.getElementById('menuBtn').addEventListener('click', function() {
    alert('Menu clicked');
});

// Share button functionality
document.getElementById('shareBtn').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: '@robin_bibin_',
            text: 'Check out my profile!',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert('Share not supported on this browser');
    }
});

// Link card click handlers
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target !== e.currentTarget.querySelector('.link-menu')) {
            console.log('Link clicked:', this.querySelector('.link-text').textContent);
        }
    });
});

// Social icon functionality
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        const title = this.getAttribute('title');
        console.log('Social clicked:', title);
    });
});

// Responsive orientation change handler
window.addEventListener('orientationchange', function() {
    document.body.style.opacity = '0.5';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
});

// Handle viewport resize for smooth transitions
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        console.log('Viewport resized');
    }, 250);
});