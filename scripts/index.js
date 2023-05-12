const greetingsBox = document.querySelector('#greeting')
const followUpBox = document.querySelector('#followUp')
const farwellBox = document.querySelector('#farwell')
const conclusionBox = document.querySelector('#conclusions')
const greetingsBtn = document.querySelectorAll('.btn-grettings')
const followUpBtn = document.querySelectorAll('.btn-followUp')
const farwelBtn = document.querySelectorAll('.btn-farwell')
const conclusionBtn = document.querySelectorAll('.btn-conclusion')



function HandleGreetings(){
    const newItem = document.createElement('div')
    const newItemText = document.createElement('p')
    const removeBtn = document.createElement('button')

    newItem.classList.add('new-item')
    newItemText.classList.add('new-item-text')
    greetingsBox.classList.add('class-sections')


  
    newItem.textContent = this.textContent
    removeBtn.textContent = 'change'
 
    greetingsBox.appendChild(newItem)
    newItem.appendChild(newItemText)
    newItem.appendChild(removeBtn)

    greetingsBtn.forEach(element => {
     element.classList.add('hidden-elements')
    })

    const BackElement = () => {
        greetingsBox.removeChild(newItem)
        greetingsBox.classList.remove('class-sections')
  
        greetingsBtn.forEach(element => {
            element.classList.remove('hidden-elements')
        })

    }
    removeBtn.addEventListener('click', BackElement)
}

function HandleFollowUp(){
    const newItem = document.createElement('div')
    const newItemText = document.createElement('p')
    const removeBtn = document.createElement('button')


    newItem.classList.add('new-item')
    newItemText.classList.add('new-item-text')
    followUpBox.classList.add('class-sections')


    newItem.textContent = this.textContent
    removeBtn.textContent = 'change'
 
    followUpBox.appendChild(newItem)
    newItem.appendChild(newItemText)
    newItem.appendChild(removeBtn)

    const BackElement = () => {
        followUpBox.removeChild(newItem)
        followUpBox.classList.remove('class-sections')
 
        followUpBtn.forEach(element => {
            element.classList.remove('hidden-elements')
        })

    }

    followUpBtn.forEach(element => {
     element.classList.add('hidden-elements')
    })
    removeBtn.addEventListener('click', BackElement)


}

function HandleFarwell(){
    const newItem = document.createElement('div')
    const newItemText = document.createElement('p')
    const removeBtn = document.createElement('button')
 
    newItem.classList.add('new-item')
    newItemText.classList.add('new-item-text')
    farwellBox.classList.add('class-sections')
    

    newItem.textContent = this.textContent
    removeBtn.textContent = 'change'
 
    farwellBox.appendChild(newItem)
    newItem.appendChild(newItemText)
    newItem.appendChild(removeBtn)

    const BackElement = () => {
        farwellBox.removeChild(newItem)
        farwellBox.classList.remove('class-sections')
       
        farwelBtn.forEach(element => {
            element.classList.remove('hidden-elements')
        })
    }

    farwelBtn.forEach(element => {
     element.classList.add('hidden-elements')
    })
    removeBtn.addEventListener('click', BackElement)
}

function HandleConclusion(){
    const newItem = document.createElement('div')
    const newItemText = document.createElement('p')
    const removeBtn = document.createElement('button')

    newItem.classList.add('new-item')
    newItemText.classList.add('new-item-text')
    conclusionBox.classList.add('class-sections')

    newItem.textContent = this.textContent
    removeBtn.textContent = 'change'
 
    conclusionBox.appendChild(newItem)
    newItem.appendChild(newItemText)
    newItem.appendChild(removeBtn)

    const BackElement = () => {
        conclusionBox.removeChild(newItem)
        conclusionBox.classList.remove('class-sections')


        conclusionBtn.forEach(element => {
            element.classList.remove('hidden-elements')
        })
    }

    conclusionBtn.forEach(element => {
     element.classList.add('hidden-elements')
    })
    removeBtn.addEventListener('click', BackElement)
}

greetingsBtn.forEach(element =>{
    element.addEventListener('click', HandleGreetings)
})
followUpBtn.forEach(element => {
    element.addEventListener('click', HandleFollowUp)
})
farwelBtn.forEach(element => {
    element.addEventListener('click', HandleFarwell)
})
conclusionBtn.forEach(element => {
    element.addEventListener('click', HandleConclusion)
})