function myFunction() {
    var element = document.getElementsById("btn-1");
    element.classList.add("btn-1");
  }

function scrollto(where) {
    var scrollDiv = document.getElementById(where).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}