document.getElementById('btn').onclick = function() {
    var nummer1 = parseFloat(document.getElementById('nummer1').value);
    var nummer2 = parseFloat(document.getElementById('nummer2').value);
    var metod = document.getElementById('räknesätt').value;
    var resultat;
    if (metod === '+') {
        resultat = nummer1 + nummer2;
    } else if (metod === '-') {
        resultat = nummer1 - nummer2;        
    } else if (metod === 'x') {
        resultat = nummer1 * nummer2;        
    } else if (metod === '/') {
        resultat = nummer1 / nummer2;
    }
    document.getElementById ('resultaten').innerHTML = resultat;
};