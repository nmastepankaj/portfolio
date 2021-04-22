  function openNav() {
    document.getElementById("mySidenav").style.width = "50vw";
    document.getElementById("navbackdrop").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navbackdrop").style.display = "none";
  }


  function backDrop(){
      document.getElementById("backdrop_theme").style.display = "none";
      document.getElementById("psr_website_theme").style.display = "none";
  }
  function showTheme(){
    document.getElementById("backdrop_theme").style.display = "block";
    document.getElementById("psr_website_theme").style.display = "block";
  }

//  type writer effect
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


// feedback form javascript 

function setStarColor(val){
  for (let i = 0; i < 5; i++) {
      if(document.getElementsByClassName("fb_star")[i].classList.contains("fb_star_color")){
          document.getElementsByClassName("fb_star")[i].classList.remove("fb_star_color");
      }
  }
  for (let i = 0; i < val; i++) {
      document.getElementsByClassName("fb_star")[i].classList.add("fb_star_color");
  }
  document.getElementById("getStarNo").value = val;
  
}

// end feedback form

//  type writer effect end


//Iframe
// window.onload= function(){
//   let myIframe = document.getElementById("iframe1");
//   let doc = myIframe.contentDocument;
//   doc.body.innerHTML = doc.body.innerHTML + `<style>.psr_main_svg_color{
//     stroke: #fff;
//     fill: blue;
//   }</style>`;
// }

// var cssLink = document.createElement("link");
// cssLink.href = "iframe.css";
// cssLink.type = "text/css";
// frames["iframe1"].document.body.appendChild(cssLink);