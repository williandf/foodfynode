const toggleButton = document.querySelectorAll('.hide');
const toggleContent = document.querySelectorAll('.text');

for (const button of toggleButton) {
  button.onclick = function () {

    if (button.innerHTML === 'ESCONDER') {
      button.innerHTML = 'MOSTRAR';
      const parent = button.parentElement.parentElement.querySelector(
        '.text'
      );
      parent.classList.add('active');
    } else {
      button.innerHTML = 'ESCONDER';

      const parent = button.parentElement.parentElement.querySelector(
        '.text'
      );
      parent.classList.remove('active');
    }
  };
}
