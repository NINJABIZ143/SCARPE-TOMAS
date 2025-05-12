// Variabile per il carrello
let carrello = [];

// Funzione per aggiungere articoli al carrello
function aggiungiCarrello(nomeProdotto, prezzoProdotto) {
    // Aggiungi il prodotto al carrello
    carrello.push({ nome: nomeProdotto, prezzo: prezzoProdotto });
    
    // Aggiorna la lista del carrello
    aggiornaCarrello();
}

// Funzione per aggiornare la visualizzazione del carrello
function aggiornaCarrello() {
    const carrelloList = document.getElementById("carrello-list");
    const totale = document.getElementById("totale");

    // Pulisce la lista del carrello
    carrelloList.innerHTML = "";

    // Aggiunge ogni prodotto nel carrello
    let totalePrezzo = 0;
    carrello.forEach(prodotto => {
        const item = document.createElement("li");
        item.textContent = `${prodotto.nome} - €${prodotto.prezzo.toFixed(2)}`;
        carrelloList.appendChild(item);
        totalePrezzo += prodotto.prezzo;
    });

    // Mostra il totale
    totale.textContent = `Totale: €${totalePrezzo.toFixed(2)}`;
}
