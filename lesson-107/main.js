// const element = document.querySelector('.block');

// element.textContent = 'text';
// element.id = '123';
// element.style.color = 'red';
// element.style.fontSize = '30px';
// console.log(element);

// const element = document.querySelector('div');
// console.log(element);

const element = document.querySelectorAll('div');
// console.log(element);
// console.log(element[0]);
element.forEach((element) => {
  console.log(element);
  element.style.color = 'blue';
})