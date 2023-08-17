import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);
const { email, message } = formRef.elements;

afterReset();

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onFormInput(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}     

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(dataForm);
}

function afterReset() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
  }
}