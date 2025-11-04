// descoberta.js

// Usamos os dados da Creche 1 como exemplo de "creche por perto"
const crechesData = [
    { 
        id: 1, 
        name: "Creche ProInfância", 
        image: "../ImagensHome/Creche1.jpg", 
        rua: "Av. Principal",
        local: "Centro", 
    },
    // Adicione aqui mais dados se precisar alternar o ID
];

document.addEventListener('DOMContentLoaded', () => {
    // Carrega o mapa do Google
    loadGoogleMap();
    
    // Carrega a Creche de Exemplo
    loadCrecheDetails(1);
    
    // Configura o botão de Contato
    setupContactButton();
});

/**
 * Insere o iframe do Google Maps no container.
 */
function loadGoogleMap() {
    const mapContainer = document.getElementById('map-iframe-container');
    
    // URL do Google Maps com a pesquisa "creches em araxa"
    const mapQuery = "creches em araxa";
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
    
    const iframe = document.createElement('iframe');
    iframe.src = mapUrl;
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    
    // Limpa o conteúdo e anexa o iframe
    mapContainer.innerHTML = '';
    mapContainer.appendChild(iframe);
}

function loadCrecheDetails(crecheId) {
    const creche = crechesData.find(c => c.id === crecheId);
    
    if (!creche) return;

    // Injeta os dados da creche no card
    document.getElementById('map-creche-image').src = creche.image;
    document.getElementById('map-creche-name').textContent = `${creche.local}: ${creche.name} (Próxima)`;

    // Salva o ID da creche no botão de contato
    document.getElementById('contact-map-btn').dataset.id = creche.id;
}

function setupContactButton() {
    const contactBtn = document.getElementById('contact-map-btn');
    
    contactBtn.addEventListener('click', (e) => {
        const crecheId = e.currentTarget.dataset.id;
        if (crecheId) {
            // Redireciona para a página de conversa direta (conversa.html)
            window.location.href = `conversa.html?id=${crecheId}`;
        } else {
            alert("Nenhuma creche selecionada para contato.");
        }
    });
}