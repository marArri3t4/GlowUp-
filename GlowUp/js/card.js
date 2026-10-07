export function renderCard(producto, index) {
    return `
        <div class="card" data-index="${index}">
            <img src="${producto.img}" alt="${producto.title}">
            <h3>${producto.title}</h3>
            <p>${producto.desc}</p>
            <span class="price">$${producto.price}</span>

            <div class="qty">
                <button class="minus">-</button>
                <span class="count">1</span>
                <button class="plus">+</button>
            </div>
        </div>
    `;
}