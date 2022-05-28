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
  for (let i = 0; i < classes.length; i++)
  {
    classes[i].style.display = 'block';
  }
  document.getElementById('allFlowerText').style.display = 'none';
  document.getElementById('allFlowerArrow').style.display = 'none';
}


const stepper = document.querySelector('.products-item');
const stepperInput = stepper.querySelector('.set-count__count-text');
const stepperBtnUp = stepper.querySelector('.set-count__symbol-up');
const stepperBtnDown = stepper.querySelector('.set-count__symbol-down');

let count = stepperInput.value;

stepperInput.addEventListener('keyup', (e) => {
  let self = e.currentTarget;

  if(self.value == '0') {
    self.value = '1';
  }

  count = stepper.value;

  if(count == 1) {
    stepperBtnDown.classList.add('stepper-btn__disabled');
  } else
  stepperBtnDown.classList.remove('stepper-btn__disabled');
});

stepperInput.addEventListener('keydown', (e) => {
  if(e.charCode && e.charCode != 0 && e.charCode != 46 && (e.charCode < 48 || e.charCode > 57))
  {
    return false;
  }
});

stepperInput.addEventListener('change', (e) => {
  let self = e.currentTarget;

  if(!self.value)
  {
    self.value = 1;
  }

  count = stepperInput.value;

  if(count == 1) {
    stepperBtnDown.classList.add('stepper-btn__disabled');
  } else
  stepperBtnDown.classList.remove('stepper-btn__disabled');
});

stepperBtnUp.addEventListener('click', () => {

  count++;

  if(count == 1) {
    stepperBtnDown.classList.add('stepper-btn__disabled');
  } else
  stepperBtnDown.classList.remove('stepper-btn__disabled');

  stepperInput.value = count;
});

stepperBtnDown.addEventListener('click', () => {


  count--;

  if(count == 1) {
    stepperBtnDown.classList.add('stepper-btn__disabled');
  } else
  stepperBtnDown.classList.remove('stepper-btn__disabled');

  stepperInput.value = count;
});