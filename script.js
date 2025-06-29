// Initialize quotes from local storage or default
let quotes = JSON.parse(localStorage.getItem('quotes')) || [
    {text: "Sample quote 1", category: "Category 1"},
    {text: "Sample quote 2", category: "Category 2"}
];

// Save quotes to local storage
function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Display random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerHTML = `
        <p>"${quote.text}"</p>
        <p>${quote.category}</p>
    `;
    // Store last viewed quote in session storage
    sessionStorage.setItem('lastQuote', JSON.stringify(quote));
}

// Add new quote
function addQuote() {
    const text = document.getElementById('quoteText').value.trim();
    const category = document.getElementById('quoteCategory').value.trim();
    if (text && category) {
        quotes.push({text, category});
        saveQuotes();
        document.getElementById('quoteText').value = '';
        document.getElementById('quoteCategory').value = '';
        displayRandomQuote();
    }
}

// Export quotes to JSON file
function exportQuotes() {
    const data = JSON.stringify(quotes);
    const blob = new Blob([data], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Import quotes from JSON file
function importQuotes(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedQuotes = JSON.parse(e.target.result);
            if (Array.isArray(importedQuotes)) {
                quotes = importedQuotes;
                saveQuotes();
                displayRandomQuote();
                alert(`Successfully imported ${importedQuotes.length} quotes!`);
            } else {
                alert('Invalid format: Expected an array of quotes');
            }
        } catch (error) {
            alert('Error parsing JSON file');
        }
    };
    reader.readAsText(file);
}

// Event listeners
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
document.getElementById('addQuote').addEventListener('click', addQuote);
document.getElementById('exportQuotes').addEventListener('click', exportQuotes);
document.getElementById('importFile').addEventListener('change', importQuotes);

// Initialize
displayRandomQuote();
