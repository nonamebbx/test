import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input', throttle(onInputForm, 500));

function onSubmitForm(ev) {
    ev.preventDefault()
    console.log(formData)
    formData = {};
    ev.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
};

function onInputForm(evt) {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateInputForms() {
    try {
        const saveData = localStorage.getItem(STORAGE_KEY);
        if (!saveData) return;
        formData = JSON.parse(saveData);
        Object.entries(formData).forEach(([key, value]) => {
            refs.form.elements[key].value = value;
        });
        } catch ({ message }) {
        console.log(message);}
    };

populateInputForms();
