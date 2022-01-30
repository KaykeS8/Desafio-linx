export default function initRequisicao() { }

export async function fetchProdutos(id) {
    try {
        const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${id}`
        const response = await fetch(url)
        const productsDados = await response.json()


        const produtos = productsDados.products
        const listProdutos = document.querySelector('.list-produtos')

        const boxList = createBox(produtos)
        function createBox() {
            return produtos.map(item => {
                const { name, image, oldPrice, price, description } = item
                const { count, value } = item.installments
                return (
                    `
                <div class="produto-info">
                        <div class="box"><img src="${image}" alt=""Produtos></div>
                        <div class="box-flex">
                            <h3 class="box-title">${name}</h3>
                            <p class="descricao-produto">${description}.</p>
                            <p class="priceOld">De: R$${oldPrice}</p>
                            <p class="priceNew">Por: R$${price}</p>
                            <p class="priceInTheCard">ou ${count}x de R$${value}</p>
                            <button type="submit">Comprar</button>
                        </div>
                </div>
                `
                )
            })
        }

         function insertInTheDom(dom) {
            const contentHtml = dom.join('')
            listProdutos.innerHTML += contentHtml
        }
        insertInTheDom(boxList)

        let count = 1
        const adicionarProdutos = document.querySelector('[data-click="adc-produto"]')
        adicionarProdutos.addEventListener('click', () => {
            count++
            fetchProdutos(count)
            insertInTheDom()
        })



    } catch (erro) {
        console.log(erro)
    }
}

fetchProdutos()