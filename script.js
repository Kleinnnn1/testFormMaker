const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break
        case 'button': appendButton(label, placeholder)
                    break


    }
}

const appendText = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('input')

    el.textContent = label
    el.setAttribute('class', 'form-control mt-1')
    el.setAttribute('placeholder', placeholder)

    document.querySelector("#elements").append(el) 
}

const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('input')

    el.textContent = label
    el.setAttribute('class', 'mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type', 'radio')

    document.querySelector("#elements").append(el) 
}

const appendButton = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('input')

    el.textContent = label
    el.setAttribute('class', 'mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type', 'button')

    document.querySelector("#elements").append(el) 
}