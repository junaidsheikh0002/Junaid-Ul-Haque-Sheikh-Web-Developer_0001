document.addEventListener('DOMContentLoaded', function() {
    const lightningButton = document.getElementById('lightningButton');
    const generateResumeButton = document.getElementById('generateResume');

    // Background color transitions
    const colors = [
        "linear-gradient(to right, #ff9a9e, #fad0c4)",
        "linear-gradient(to right, #ff9a9e, #fbc2eb)",
        "linear-gradient(to right, #a1c4fd, #c2e9fb)"
    ];

    let colorIndex = 0;
    setInterval(() => {
        document.body.style.background = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 3000);

    // Lightning Effect
    lightningButton.addEventListener('click', () => {
        const lightning = document.createElement('div');
        lightning.classList.add('lightning');
        document.body.appendChild(lightning);
        setTimeout(() => document.body.removeChild(lightning), 1000);
    });

    // Generate Resume Action
    generateResumeButton.addEventListener('click', () => {
        alert("Resume generated!");
    });
});