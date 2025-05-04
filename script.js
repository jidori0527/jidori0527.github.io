window.addEventListener('load', (e) => {
  const popUp = document.querySelector('.pop-up');

  const popUpCloseBtn = document.querySelector('.pop-up-close-btn');
  console.log(popUpCloseBtn);
  popUpCloseBtn.addEventListener('click', (e) => {
    popUp.hidden = true;
  });
});
