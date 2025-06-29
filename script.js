// Quotes array with objects containing text and category properties
const quotes = [
    { text: "The only limit is your imagination.", category: "Inspiration" },
    { text: "Learn from yesterday, live for today.", category: "Wisdom" }
];

// Function to display random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerHTML = `
        <p>"${quote.text}"</p>
        <small>— ${quote.category}</small>
    `;
}

// Function to add new quote
function addQuote() {
    const text = document.getElementById('quoteText').value;
    const category = document.getElementById('quoteCategory').value;
    
    if (text && category) {
        quotes.push({ text, category });
        document.getElementById('quoteText').value = '';
        document.getElementById('quoteCategory').value = '';
        showRandomQuote();
    } else {
        alert('Please enter both quote text and category!');
    }
}

// Event listeners
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuote').addEventListener('click', addQuote);

// Initialize with a random quote
showRandomQuote();
