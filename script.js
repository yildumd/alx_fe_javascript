// Quotes array with required structure
const quotes = [
    { text: "Sample quote 1", category: "Category 1" },
    { text: "Sample quote 2", category: "Category 2" }
];

// Must be named exactly displayRandomQuote
function displayRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const displayElement = document.getElementById('quoteDisplay');
    displayElement.innerHTML = `<p>"${quote.text}"</p><p><em>${quote.category}</em></p>`;
}

// Must be named exactly addQuote
function addQuote() {
    const text = document.getElementById('quoteText').value.trim();
    const category = document.getElementById('quoteCategory').value.trim();
    
    if (text && category) {
        quotes.push({ text, category });
        document.getElementById('quoteText').value = '';
        document.getElementById('quoteCategory').value = '';
        displayRandomQuote();
    }
}

// Event listeners must be set exactly this way
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
document.getElementById('addQuote').addEventListener('click', addQuote);

// Initial display
displayRandomQuote();
