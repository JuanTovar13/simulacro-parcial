class ListCardsComponent extends HTMLElement  {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        try {
            const response = await fetch('./src/Components/FortniteList/FortniteList.json');
            const CardRen = await response.json();
            const cards = CardRen.cardJson;

            this.shadowRoot.innerHTML = `
            
            <div class="card-container">
                ${cards.map(card => `
                
                    <custom-card class="card" image ="${card.image}" name="${card.name}" status="${card.status}" type="${card.type}"></custom-card>
                
                `).join('')}

            </div>
            `;
        } catch (error) {
            console.error(error);
        }
    }

}

export default ListCardsComponent;