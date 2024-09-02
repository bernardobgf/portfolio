// JavaScript para rolagem suave para seções
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// JavaScript para animação de rolagem dos posts
const posts = document.querySelectorAll('.post');

window.add
