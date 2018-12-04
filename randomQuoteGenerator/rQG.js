var quotes = [
    'Our greatest glory is not in never falling, but in rising every time we fall.',
    'All our dreams can come true, if we have the courage to pursue them.',
    'It does not matter how slowly you go as long as you do not stop.',
    'Everything you\’ve ever wanted is on the other side of fear.',
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    'Hardships often prepare ordinary people for an extraordinary destiny.',
    ' Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ― Roy T. Bennett'


]

function generateQ(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));

document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}



