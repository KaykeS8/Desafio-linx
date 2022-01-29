export default function initRequisicao() { }


const box = document.querySelectorAll('.box')
const titleProduct = document.querySelector('.box-title')
const productsDescription = document.querySelector('.descricao-produto')
const priceOld = document.querySelector('.priceOld')
const priceNew = document.querySelector('.priceNew')
const priceInTheCard = document.querySelector('.priceInTheCard')


async function requisicao() {
    const url = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
    const reponse = await fetch(url)
    const productsJson = await reponse.json()

    const numberRandom = Math.floor(Math.random() * (7 - 0) + 0)
    const imageRandom = productsJson.products[numberRandom].image

    const img = document.createElement('img')
    const srcImgProducts = img.src = `${imageRandom}`
    const altImgProducts = img.alt = 'Produtos'

    box.forEach((item) => {
        item.innerHTML = `<img src="${srcImgProducts}" alt="${altImgProducts}">`
    })

}


requisicao()

