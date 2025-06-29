// Quotes array - must have exactly this structure
const quotes = [
    { text: "Sample quote 1", category: "Category 1" },
    { text: "Sample quote 2", category: "Category 2" }
];

// Must be named exactly displayRandomQuote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').textContent = `${quote.text} (${quote.category})`;
}

// Must be named exactly addQuote
function addQuote() {
    const text = document.getElementById('quoteText').value;
    const category = document.getElementById('quoteCategory').value;
    
    if (text.trim() && category.trim()) {
        quotes.push({ text, category });
        document.getElementById('quoteText').value = '';
        document.getElementById('quoteCategory').value = '';
    }
}

// Event listeners must be set up exactly like this
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
document.getElementById('addQuote').addEventListener('click', addQuote);

// Initial call must be present
displayRandomQuote();
