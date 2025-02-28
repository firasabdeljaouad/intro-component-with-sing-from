
let inputs = document.querySelectorAll("input:not([type='submit'])");


inputs.forEach((input) => {
    input.addEventListener('invalid', addErrorMessage);
    input.addEventListener('blur', () => {
        input.checkVisibility();
    })

    input.addEventListener('foucs', removeTheMessage);
});

function addErrorMessage(e) {
    const name = e.target.getAttribute("name");
    let error_icon = document.createElement('span');
    error_icon.setAttribute('data-id', name)
    error_icon.classList.add("error_icon");

    let error_message = document.createElement('span');
    error_message.setAttribute('data-id', name);
    error_message.classList.add("error_message");
    if (e.target.value == "" || e.target.value == null) {
        error_message.innerHTML = "" + e.target.getAttribute('placeholder') + "cannat be empty."
    }else{
        error_message.remove()
    }
    e.target.after(error_message);
    e.target.after(error_icon);
    e.target.classList.add('error');
}

function removeTheMessage(e) {
    let elements = document.querySelectorAll("[data-id='" + e.target.getAttribute("name") + "']");
    elements.forEach(element => {
        element.remove();
    })
    e.target.classList.remove('error')
}

