var imgs = ['pexels-koprivakart-3354648.jpg', 'pexels-mikebirdy-100656.jpg', 'pexels-mikebirdy-100650.jpg'];
var h2s = ['Quality Cars with Unlimited Miles', 'Best Rental Cars in Your Location', 'The best-rated cars available.'];
var i = 0;

setInterval(function() {
    document.getElementById('home').style.backgroundImage = `url(images/${imgs[i]})`;
    document.getElementById('home-h2').innerHTML = h2s[i];
    i = (i + 1) % imgs.length; // Cycle through the images
    i = (i + 1) % h2s.length;
}, 5000);

var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

prevButton.addEventListener('click', function() {
    i = (i - 1 + imgs.length) % imgs.length; // Cycle backwards through the images
    document.getElementById('home').style.backgroundImage = `url(images/${imgs[i]})`;
    document.getElementById('home-h2').innerHTML = h2s[i];
});

nextButton.addEventListener('click', function() {
    i = (i + 1) % imgs.length; // Cycle forwards through the images
    document.getElementById('home').style.backgroundImage = `url(images/${imgs[i]})`;
    document.getElementById('home-h2').innerHTML = h2s[i];
});
document.getElementById('close-svg').addEventListener('click', function(){
    document.getElementById('header-ul').style.display = 'none'
})
document.getElementById('header-svglist').addEventListener('click', function(){
    document.getElementById('header-ul').style.display = 'flex';
})

document.getElementById('three').addEventListener('click', function() {
    const spanElement = document.getElementById('two');
    const button = document.getElementById('three');

    // Check if the span is currently hidden (display: none)
    if (spanElement.style.display === 'none' || spanElement.style.display === '') {
        // If hidden, make it visible and change button text to "Read Less"
        spanElement.style.display = 'flex';
        button.innerText = 'Read Less...';
    } else {
        // If visible, hide it and change button text to "Read More"
        spanElement.style.display = 'none';
        button.innerText = 'Read More...';
    }
});
document.getElementById('service-btn').addEventListener('click', function(){
    
})