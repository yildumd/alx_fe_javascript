const quotes = [
    { text: "First sample quote", category: "General" },
    { text: "Second sample quote", category: "Test" }
];

function displayRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteDisplay').innerHTML = `
        <p>"${quote.text}"</p>
        <p>- ${quote.category}</p>
    `;
}

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

document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
document.getElementById('addQuote').addEventListener('click', addQuote);

displayRandomQuote();
