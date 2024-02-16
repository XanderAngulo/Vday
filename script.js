document.getElementById('noBtn').addEventListener('mouseover', function() {
    const noBtn = this;
    const yesBtn = document.getElementById('yesBtn');
    let newX, newY;

    // Function to check overlap
    function isOverlapping() {
        const yesRect = yesBtn.getBoundingClientRect();
        const noRect = {x: newX, y: newY, width: noBtn.offsetWidth, height: noBtn.offsetHeight};

        return !(noRect.x + noRect.width < yesRect.left ||
                 noRect.x > yesRect.right ||
                 noRect.y + noRect.height < yesRect.top ||
                 noRect.y > yesRect.bottom);
    }

    // Generate a new position until it doesn't overlap with the "Yes" button
    do {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        newX = Math.random() * maxX;
        newY = Math.random() * maxY;
    } while (isOverlapping());

    noBtn.style.position = 'absolute';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});

document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'yes.html';
});
