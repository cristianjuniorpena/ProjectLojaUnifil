const produtos = document.getElementById('produtos')



let items = [
    {
        imagem : './imgs/mouse.jpeg',
        name : 'mousinho',
        description : 'mouse demais',
        preco : '10000RS'
    },
    {
        imagem : './imgs/mouse.jpeg',
        name : 'mousinho',
        description : 'mouse demais',
        preco : '10000RS'
    },
    {
        imagem : './imgs/mouse.jpeg',
        name : 'mousinho',
        description : 'mouse demais',
        preco : '10000RS'
    }
]

for (i of items) {
    const div = document.createElement("div")
    div.className = 'items'
    const img = document.createElement("img")
    const h3 = document.createElement("h3")
    const desc = document.createElement("span")
    const preco = document.createElement("span")
    const comprar = document.createElement("button")

    img.src = i.imagem;
    h3.textContent = i.name;
    desc.textContent = i.description;
    preco.textContent = i.preco;
    comprar.textContent = 'Comprar item'

    div.appendChild(img)
    div.appendChild(h3)
    div.appendChild(desc)
    div.appendChild(preco)
    div.appendChild(comprar)

    produtos.appendChild(div)
};