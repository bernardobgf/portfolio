document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('box').addEventListener('mousedown', function() {
    this.style.backgroundColor = '#ffeb3b';
    this.style.transform = 'scale(1.1)';
});

document.getElementById('box').addEventListener('mouseup', function() {
    this.style.backgroundColor = 'white';
    this.style.transform = 'scale(1)';
});
