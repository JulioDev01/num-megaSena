const numbers = document.querySelectorAll('#number');
const btnGerar = document.querySelector('#btnGerar');

btnGerar.addEventListener('click', ()=>{
    sorteioNum();
})

function sorteioNum(){
    const min = 1;
    const max = 60;
    const result = [];

    

    while(result.length < 6) {
        const numSorteado = Math.floor(Math.random() * (max - min + 1)) + 1;

        if(!result.includes(number)) { //Se o result não tiver um num sorteado, ai sim adciona, para não repetir
            result.push(numSorteado);
        }
    }

    //Para exibir

    for(let i = 0; i < numbers.length; i++) {
        numbers[i].textContent = result[i]
    }
};