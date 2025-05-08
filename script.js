const form = document.querySelector('.form-container');
const inputs = document.querySelectorAll('input');
const errMsg = document.querySelectorAll('.error');
const textarea = document.querySelector('textarea');
const span = document.querySelector('span');

errMsg.forEach(err => err.classList.add('active'));

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isvalid = true;

    if (textarea.value.trim()) {
        errMsg[4].classList.add('active');
        isvalid = true;
    }

    inputs.forEach((input, index) => {
        if (!validationInput(input, index)) {
            isvalid = false;
        }
    })

    if (isvalid) {
        setTimeout(
            () => span.classList.add('show'), 3000
        );
    }
})

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        validationInput(input, index);
    })
})

textarea.addEventListener('input', () => errMsg[4].classList.add('active'));

span.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = '';
        textarea.value = '';
        if (input.type === 'radio' || input.type === 'checkbox') {
            input.checked = false;
        }
    })
    span.classList.remove('show');
})

const validationInput = (input, index) => {
    if (!input.validity.valid) {
        errMsg[index].classList.remove('active');
        return false;
    }
    
    if (input.validity.valid && input.type === 'radio') {
        errMsg[3].classList.add('active');
    }
    else {
        errMsg[index].classList.add('active');
    }

    return true;
}