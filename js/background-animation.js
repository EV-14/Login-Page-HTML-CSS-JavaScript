const container = document.querySelector('.ev__profile--section-container')

for (var i = 0; i <= 100; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('ev__profile--block-items');
    container.appendChild(blocks);
}

function animateBlocks() {
    anime ({
        targets: '.ev__profile--block-items',
        translateX: function() {
            return anime.random(-700, 700);
        },
        translateY: function() {
            return anime.random(-500, 500);
        },
        scale: function() {
            return anime.random(1, 5);
        },

        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(-1),
        complete: animateBlocks,
    })
}

animateBlocks()