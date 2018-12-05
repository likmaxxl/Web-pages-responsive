//on scroll

var navigation = document.getElementsByClassName('navbar-light');
var navPhone = document.getElementsByClassName('navbar-toggler')
window.onscroll = function() {
  scrl()
};
function scrl() {
  //nav min-width992px
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    navigation[0].className += " black";
  } else {
    navigation[0].classList.remove("black");
  }
  //nav min-width phone
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    navPhone[0].className += " b";
  } else {
    navPhone[0].classList.remove("b");
  }

  //section1

  var sec1 = document.getElementsByClassName('mrg')[0]
  var articleLeft = sec1.getElementsByTagName('article')[0];
  var articleCenter = sec1.getElementsByTagName('article')[1];
  var articleRight = sec1.getElementsByTagName('article')[2];
  var c = sec1.offsetTop;

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    articleLeft.style.transition = "all 1.5s";
    articleLeft.style.position = "relative";
    articleLeft.style.left = "0";

    articleCenter.style.transform = "scale(1)";
    articleCenter.style.transition = "all 1.5s";

    articleRight.style.transition = "all 1.5s";
    articleRight.style.position = "relative";
    articleRight.style.right = "0";
  } else {
    articleLeft.style.left = "-1020px";
    articleRight.style.right = "-1020px";
    articleCenter.style.transform = "scale(0)";

  }

//CONTACT
var contact = document.getElementsByClassName('bckg')[1].getElementsByClassName('container')[0];
var mpLeft=contact.getElementsByClassName('row')[0].getElementsByClassName('mrg')[0];
var mpRight=contact.getElementsByClassName('row')[0].getElementsByClassName('mrg')[1];



if (document.body.scrollTop > 1880 || document.documentElement.scrollTop > 1880) {
  mpLeft.style.transform = "scale(1)";
  mpLeft.style.transition = "all 1.5s";
  mpRight.style.transform = "scale(1)";
  mpRight.style.transition = "all 1.5s";
} else {

    mpRight.style.transform = "scale(0)";
        mpLeft.style.transform = "scale(0)";
}

}

//END on scroll

//header klik

var scrolClick = document.getElementsByClassName('scrol')[0];
scrolClick.addEventListener('click', function(e) {

  $('html,body').animate({
    scrollTop: 800
  }, 900)
})
//END HEADER CLICK

//animation header letter
var dobrodosli = new String("Dobrodošli!");


var headInHeader1 = document.getElementsByClassName('head')[0].getElementsByTagName('p')[0];

var x = 0;
function run() {
  if (x < dobrodosli.length) {
    headInHeader1.innerHTML += dobrodosli[x]
    x++
  }else{
  
  }

}
setInterval(run, 200);
