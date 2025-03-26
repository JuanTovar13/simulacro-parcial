class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
   
  }
  static get observedAttributes() {
    return ['name', 'status', 'type', 'image'];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div>
        <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
        <p>Name: ${this.getAttribute('name')}</p>
        <p>Status: ${this.getAttribute('status')}</p>
        <p>Type: ${this.getAttribute('type')}</p>
    </div>
    `
    }
}

export default Card;
