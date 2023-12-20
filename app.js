
function show(anchor) {
    var container = anchor.closest('.question-container');
    var image = container.querySelector('.flex-question a img');
    var srcValue = image.getAttribute('src');

    if(srcValue.includes('minus')){
      ocultar();
      return;
    }
    else {
      ocultar();
    }
  
    var questionBox = container.querySelector('.flex-question');
    var paragraph = container.querySelector('p');
    
    if (srcValue.includes('plus')){
      image.src = 'assets/images/icon-minus.svg'
    }
    else {
      image.src = 'assets/images/icon-plus.svg'
    }

    questionBox.classList.toggle('ativo');
    questionBox.classList.toggle('inactive');
    paragraph.classList.toggle('active');
    
}

function ocultar(){
  var wrapper = document.querySelector('.wrapper');
  var activeQuestionContainer = wrapper.querySelector(':is(.question-container:has(.flex-question.ativo))');

  if (activeQuestionContainer) {
    activeQuestionContainer.querySelector('.flex-question').classList.toggle('inactive');
    activeQuestionContainer.querySelector('.flex-question').classList.toggle('ativo');
    const image = activeQuestionContainer.querySelector('.flex-question a img');
    image.src = 'assets/images/icon-plus.svg'
    activeQuestionContainer.querySelector('p').classList.toggle('active');
  }
}