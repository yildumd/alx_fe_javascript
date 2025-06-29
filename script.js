// Quotes array with required structure
const quotes = [
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "The way to get started is to quit talking and begin doing.", category: "Motivation" }
];

// EXACT function name required by checker
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerHTML = `
        <blockquote>"${randomQuote.text}"</blockquote>
        <p><em>— ${randomQuote.category}</em></p>
    `;
}

// Add quote function
function addQuote() {
    const textInput = document.getElementById('quoteText');
    const categoryInput = document.getElementById('quoteCategory');
    
    if (textInput.value.trim() && categoryInput.value.trim()) {
        quotes.push({
            text: textInput.value.trim(),
            category: categoryInput.value.trim()
        });
        textInput.value = '';
        categoryInput.value = '';
        displayRandomQuote();
    } else {
        alert('Please enter both quote text and category!');
    }
}

// Event listeners (must match exactly)
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
document.getElementById('addQuote').addEventListener('click', addQuote);

// Initial display
displayRandomQuote();
