export default function initRequisicao() { }

async function fetchProdutos() {
    try {
        const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`
        const response = await fetch(url)
        const productsDados = await response.json()

        const produtos = productsDados.products

    } catch (erro) {
        console.log(erro)
    }
}

fetchProdutos()