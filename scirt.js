// Funzione per leggere i parametri dalla URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Quando la pagina è caricata, recupera l'ID del prodotto
document.addEventListener("DOMContentLoaded", function() {
    const productId = getParameterByName('id'); // Ottieni l'ID dalla URL

    if (productId === '1') {
        // Esempio di caricamento del prodotto 1
        document.querySelector('.product-info img').src = 'https://via.placeholder.com/500x500?text=Scarpa+Adidas+Court+Tourino';
        document.querySelector('.product-description h2').innerText = 'Adidas Court Tourino';
        document.querySelector('.product-description p:nth-child(2)').innerText = 'Prezzo: €89.99';
        document.querySelector('.product-description p:nth-child(3)').innerText = 'Le Adidas Court Tourino sono scarpe da tennis eleganti e comode...';
    }
});
