const insert = () => {
    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'radio': appendRadio(label)
            break
        case 'checkbox': appendCheck(label)
    }
}

const appendText = (label = "No label") => {
    let el = document.createElement('input')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-2')
    el.setAttribute('placeholder', label)

    document.querySelector('#display').append(el)
    
}

const appendButton = (label = "No label") => {
    let el = document.createElement('button')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-primary mt-2') 
    el.textContent = label

    document.querySelector('#display').append(el)
}

const appendRadio = (label = "No label") => {
    let el = document.createElement('input');
    el.setAttribute('type', 'radio');
    el.setAttribute('class', 'value');
    el.setAttribute('name', 'radio-group');
    
    let el2 = document.createElement('label');
    el2.textContent = label;
    el2.appendChild(el);
    
    document.querySelector("#display").appendChild(el2);
  };

const appendCheck = (label = "No label") => {
    let el = document.createElement('input')
    
    el.setAttribute('type', 'checkbox')
    el.setAttribute('class', 'value')

    let el2 = document.createElement('label');
    el2.textContent = label;
    el2.insertBefore(el, el2.firstChild);
  
    document.querySelector("#display").appendChild(el2);
}
  
  function deleteElement() {
    let el = document.querySelector("#display input:last-child, #display button:last-child")
    let el2 = document.querySelector("#display label")

    if (el) {
      el.remove()
    }

    if (el2){
        el2.remove()
    }
  }

  function clearInput() {
    document.getElementById("label").value = "";
}