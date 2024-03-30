const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem(localStorageKey);
  if (storedData) {
    const parseData = JSON.parse(storedData);
    form.elements.email.value = parseData.email;
    form.elements.message.value = parseData.message;
  }
});

form.addEventListener('input', () => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    })
  );
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (
    !form.elements.email.value.trim() ||
    !form.elements.message.value.trim()
  ) {
    alert('Заповніть усі поля!');
  } else {
    console.log({
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    });
    form.reset();
    localStorage.clear();
  }
});
