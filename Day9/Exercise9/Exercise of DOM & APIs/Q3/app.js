const p = document.createElement('p')
const body = document.querySelector('body')

p.textContent = "This is I Added Attribute"

const att = document.createAttribute('data-class-info')

att.value = 'random-class'

p.setAttribute('class','random-class ')

setTimeout(() => {
    body.append(p)
},1000)