export default function initFetchBitcoin(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(bitcoin => {
        const btc_preco = document.querySelector('.btc-preco');
        btc_preco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch(erro => {
        console.log(Error(erro));
    })
}

