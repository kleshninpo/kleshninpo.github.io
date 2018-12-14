function sum() {
  /* Функция для получения b */
  function getRandomInt(a, min, max) {
    min = min - a;
    max = max - a;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let a = Math.floor(Math.random() * 4) + 6;
  let b = getRandomInt(a, 11, 14);
  document.querySelector('.lineFirst').style['width']  = 22.2 * a + 'px';

  document.getElementById('numberA').innerHTML = a;
  document.getElementById('numberB').innerHTML = b;
  // document.getElementById('res').innerHTML = a + b;

  var inputs = document.querySelectorAll('input:not([type="submit"])');

  function checkInput(input) {
    var value = +input.value; /* получаем значение инпута */

    if (input.classList.contains("inputA")) {
      if (value === a) {
        document.getElementById('numberA').classList.remove('validValue'); /* убираем подсветку подсказки */
        document.getElementById('inputA').classList.add('displayOff'); /* убираем инпут */
        document.querySelector('.numberA').innerHTML = a; /* заменяем его спаном */
        document.getElementById('inputB').classList.add('displayOn');  /* отображаем второй инпут */
        document.querySelector('.lineSecond').style['width']  = 22.25 * b + 'px';
        document.querySelector('.lineSecond').style['border-top']  = '3px solid orangered';
      } else {
        input.classList.add('invalid'); /* подсвечиваем неправильное значение красным */
        document.getElementById('numberA').classList.add('validValue'); /* подсвечиваем подсказку желтым */
      }
    }

    else if (input.classList.contains("inputB")) {
      if (value === b) {
        document.getElementById('numberB').classList.remove('validValue'); /* убираем подсветку подсказки */
        document.getElementById('inputB').classList.add('displayOff'); /* убираем инпут */
        document.querySelector('.numberB').innerHTML = b; /* заменяем его спаном */
        document.getElementById('res').remove(); /* убираем спан со знаком вопроса */
        document.getElementById('inputRes').classList.add('displayOn'); /* отображаем третий инпут */
      } else {
        input.classList.add('invalid'); /* подсвечиваем неправильное значение красным */
        document.getElementById('numberB').classList.add('validValue'); /* подсвечиваем подсказку желтым */
      }
    }

    else if (input.classList.contains("inputRes")) {
      if (value === a + b) {
        document.getElementById('inputRes').classList.add('displayOff'); /* убираем инпут */
        document.querySelector('.numberRes').innerHTML = a + b; /* заменяем его спаном */
        alert("Мои поздравления, решено правильно."); /* Празднуем решение примера */
      } else {
        input.classList.add('invalid'); /* подсвечиваем неправильно значение красным */
      }
    }
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
      checkInput(this);
    });
  }
}

sum();