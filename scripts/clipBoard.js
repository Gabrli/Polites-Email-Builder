const textAreaElement = document.querySelector('#emailBodyContntent')

let textAreaElementValue = document.querySelector('#emailBodyContntent').value

const copyBtn = document.querySelector('.copy-btn')



function copyTextApp(){
    navigator.clipboard.writeText(textAreaElementValue)
    alert('UWAGA: tylko częściowe skopiowanie !') 
}

function textUpdateArea(event){
    let newValueArea = event.target.value
    textAreaElementValue = newValueArea
}

copyBtn.addEventListener('click', copyTextApp)
textAreaElement.addEventListener('change', textUpdateArea)