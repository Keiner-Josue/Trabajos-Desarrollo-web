
const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM" },
    { titulo: "Mouse", desc: "Inalámbrico" }
];

productos.forEach(productos => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = productos.titulo;
    clon.querySelector(".desc").textContent = productos.desc;
    contenedor.appendChild(clon);
});
