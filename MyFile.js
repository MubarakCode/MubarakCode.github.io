function myFunction() {
    var element = document.getElementsById("btn-1");
    element.classList.add("btn-1");
  }

function scrollto(where) {
    var scrollDiv = document.getElementById(where).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}


window.onscroll = function() {toggleHeader()};

function toggleHeader() {
    let pos = window.scrollY;

    var header = document.getElementById('header')

    if (pos < 200) {
        header.classList.remove('fixedheader')
    } else {
        header.classList.add('fixedheader')
    }
}