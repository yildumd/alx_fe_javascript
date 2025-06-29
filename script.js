const quotes = [
    {text: "Sample quote 1", category: "Category 1"},
    {text: "Sample quote 2", category: "Category 2"}
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerHTML = `
        <p>"${quote.text}"</p>
        <p>${quote.category}</p>
    `;
}

function addQuote() {
    const text = document.getElementById('quoteText').value;
    const category = document.getElementById('quoteCategory').value;
    if (text && category) {
        quotes.push({text: text, category: category});
        document.getElementById('quoteText').value = '';
        document.getElementById('quoteCategory').value = '';
    }
}

document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
document.getElementById('addQuote').addEventListener('click', addQuote);

displayRandomQuote();
