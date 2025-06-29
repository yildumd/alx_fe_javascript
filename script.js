// Quotes array must have exactly this structure
const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", category: "Inspiration" },
    { text: "The way to get started is to quit talking and begin doing.", category: "Motivation" }
];

// Must be exactly this function name
function displayRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.innerHTML = `<p>"${randomQuote.text}"</p><p><em>${randomQuote.category}</em></p>`;
}

// Must be exactly this function name
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

// Initial display call must be present
displayRandomQuote();
