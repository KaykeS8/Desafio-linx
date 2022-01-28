export default function initRequisicao() { }


const url = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'

const box = document.querySelectorAll('.box')
const titleProduct = document.querySelector('.box-title')
const productsDescription = document.querySelector('.descricao-produto')
const priceOld = document.querySelector('.priceOld')
const priceNew = document.querySelector('.priceNew')
const priceInTheCard = document.querySelector('.priceInTheCard')


async function fectchProdutos() {
    const response = await fetch(url)
    const dadosResponse = await response.json()
    console.log(dadosResponse.products[0].name)

    const img = document.createElement('img')
    const srcImgProduct = img.src = `${dadosResponse.products[0].image}`
    const altImgProduct = img.alt = 'Produto'
    box.forEach((item) => {
        console.log(item)
        item.innerHTML += `<img src="${srcImgProduct}" alt="${altImgProduct}">`
    })


    titleProduct.innerText = dadosResponse.products[0].name
    productsDescription.innerText = dadosResponse.products[0].description
    priceOld.innerHTML = ` <p class="priceOld">De: R$${dadosResponse.products[0].oldPrice}</p>`
    priceNew.innerHTML = `<p class="priceNew">Por: R$${dadosResponse.products[0].price}</p>`
    priceInTheCard.innerHTML = `<p class="priceInTheCard">ou ${dadosResponse.products[0].installments.count}x de R$${dadosResponse.products[0].installments.value}</p>`
}

fectchProdutos()