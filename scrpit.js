// Initial quotes array
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" }
];

// Display random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerHTML = `
        <p>"${quote.text}"</p>
        <small>- ${quote.category}</small>
    `;
}

// Add event listener
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Initialize with a random quote
showRandomQuote();
