var modal= document.querySelector('.modal');
var openModal = document.querySelector ('.modal-open');
var closeModal = document.querySelector('.modal-close');

openModal.addEventListener('click', function(){modal.classList.remove('hide');
})

closeModal.addEventListener('click', function(){modal.classList.add('hide');})

closeModal.addEventListener('click',function (){});

var nav= document.querySelector('.mobile-menu');
var openNav = document.querySelector ('.nav-open');
var closeNav = document.querySelector('.nav-close');


openNav.addEventListener('click', function(){nav.classList.remove('hide');
})

closeNav.addEventListener('click', function(){nav.classList.add('hide');})

// 1. link the select box
// 2. link to all articles
// 3. listen for the 'change' event on my select box
  // trigger a function

var filter = document.querySelector('.filter');
var articles = document.querySelectorAll('article');

filter.addEventListener('change', function(){
  // if I select almond, butter, chocolate,
  // it should link me the exact selection, and hide the rest
  // else if I select all, it should unhide all the  articles

  for (var i = 0; i < articles.length; i++) {
    articles[i].classList.add('hide');

    if (articles[i].classList.contains(filter.value)) {
      articles[i].classList.remove('hide');

    }
    if (filter.value === 'all') {
      articles[i].classList.remove('hide');
  }


}


})
