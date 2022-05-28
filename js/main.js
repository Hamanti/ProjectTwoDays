function toggleModalCall() {
  var modal = document.getElementById('modal-call');
  modal.classList.toggle('hide__modal-call');
}

function toggleModalFlower() {
  var modal = document.getElementById('modal-description');
  modal.classList.toggle('hide__modal-description');
}

function toggleModalDel() {
  var modal = document.getElementById('modal-del');
  modal.classList.toggle('hide__modal-del');
}

function showAllFlower() {
  var classes = document.querySelectorAll('#hidden-item');
  console.log(classes);
  for (let i = 0; i < 3; i++)
  {
    classes[i].style.display = 'block';
  }
  document.getElementById('allFlowerText').style.display = 'none';
  document.getElementById('allFlowerArrow').style.display = 'none';
}