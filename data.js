async function loadCards(chapter) {
    const container = document.getElementById("card-container");
    container.innerHTML = ""; // Limpiar cards anteriores

    try {
        const response = await fetch("fortnite.json"); // Cargar datos
        const data = await response.json();

        if (!data || !data.data || !data.data.br) {
            throw new Error("Estructura de datos inesperada");
        }

        // Filtrar los ítems por capítulo
        let items = data.data.br.filter(item => item.introduction && item.introduction.chapter == chapter);

        if (items.length === 0) {
            console.warn(`No se encontraron elementos para el Chapter ${chapter}`);
            return;
        }

        // Mezclar aleatoriamente las cards y seleccionar solo 10
        items = items.sort(() => Math.random() - 0.5).slice(0, 10);

        items.forEach(item => {
            const card = document.createElement("card-component");
            card.setAttribute("name", item.name || "Desconocido");
            card.setAttribute("description", item.description || "Sin descripción");
            card.setAttribute("image", item.images?.icon || "");
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error cargando los datos:", error);
    }
}

// Asignar eventos a los botones automáticamente
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".chapter-button").forEach(button => {
        button.addEventListener("click", () => {
            const chapter = button.getAttribute("data-chapter");
            loadCards(chapter);
        });
    });
});
