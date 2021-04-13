let invalidNum = "Erro: nenhum valor digitado"

function cleanDisplay(){
    let display = document.querySelector('#display');
    display.textContent = "";
}


function insertChar(num){
    let display = document.querySelector('#display');

    if(display.textContent === invalidNum){
        cleanDisplay();
    }
    display.insertAdjacentHTML('beforeend', num);
}


function deleteChar(){
    let display = document.querySelector('#display').innerHTML;
    document.querySelector('#display').innerHTML = display.substring(0, display.length -1)
}


function calcular(){
    let display = document.querySelector('#display').textContent;
    if(display){
        let result = eval(display);

        cleanDisplay();
        document.querySelector('#display').insertAdjacentHTML('beforeend', result);
    }else{
        cleanDisplay();
        document.querySelector('#display').textContent = invalidNum;
    }    
}
