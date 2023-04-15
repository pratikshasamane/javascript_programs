'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
let buttons = document.querySelectorAll('.show-modal');

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closebykeyandicon = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < buttons.length; i++)
  buttons[i].addEventListener('click', openModel);
closeBtn.addEventListener('click', closebykeyandicon);
overlay.addEventListener('click', closebykeyandicon);
