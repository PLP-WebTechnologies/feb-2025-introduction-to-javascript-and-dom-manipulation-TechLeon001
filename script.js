// Change text content dynamically
document.getElementById('text-btn').addEventListener('click', function() {
    document.getElementById('main-title').textContent = 'Text Changed!';
    document.querySelector('.content').textContent = 'The content has been updated dynamically!';
});

// Modify CSS styles via JavaScript
document.getElementById('style-btn').addEventListener('click', function() {
    const title = document.getElementById('main-title');
    title.style.color = 'red';
    title.style.backgroundColor = 'yellow';
    title.style.padding = '20px';
});

// Add/remove element when button is clicked
document.getElementById('toggle-btn').addEventListener('click', function() {
    const container = document.getElementById('toggle-container');
    if (container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});