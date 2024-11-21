console.log("logic loaded")

function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });

 }

// Initial page load (Home page)
loadPage('home');

//Dynamic loading of page
document.querySelector('ul').addEventListener('click', (event) => {
    console.log("clicked")
    if (event.target.tagName.toLowerCase() === 'a') {
        event.preventDefault(); 
        loadPage(event.target.getAttribute('href')); 
    }
});

//Navigate to checkout
document.querySelector('body').addEventListener('click', (event) => {
    console.log("clicked 2")
    if (event.target.id === 'checkout') {
        event.preventDefault(); 
        loadPage(event.target.id); 
    }
});

