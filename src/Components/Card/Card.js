class CardCustom extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    static get observedAttributes() {
        return ['id','category', 'title', 'description', 'image','author','date'];
    }
    
    connectedCallback() {
        this.render();
    }

    render(){
        const imageUrl = this.getAttribute('image');
        const hasImage = imageUrl && imageUrl.trim() !== '';
        this.shadowRoot.innerHTML = `
            <style>

                .card {
                    display: flex;
                    flex-direction: row;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    margin: 10px;
                    background-color: #fff;
                }

                
            </style>
        
            <div class="card">
            <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}>
                <p>Name: ${this.getAttribute('name')}</p>
                <p>Status: ${this.getAttribute('status')}</p>
                <p>Type: ${this.getAttribute('type')}</p>
                
            </div>
        `;
    }
        
        
    
}

export default CardCustom;