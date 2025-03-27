class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute("name") || "Unknown";
        const description = this.getAttribute("description") || "No description available.";
        const image = this.getAttribute("image") || "";

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    width: 200px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    padding: 10px;
                    text-align: center;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                    background-color: #f9f9f9;
                }
                .card img {
                    width: 100%;
                    border-radius: 10px;
                }
                .card h3 {
                    font-size: 16px;
                    margin: 10px 0 5px;
                }
                .card p {
                    font-size: 14px;
                    color: #555;
                }
            </style>
            <div class="card">
                <img src="${image}" alt="${name}">
                <h3>${name}</h3>
                <p>${description}</p>
            </div>
        `;
    }
}

export default CardComponent;
