// fixed header - Helia
window.onscroll = function() {scrollFunction()};
const header = document.querySelector('.headermenu');
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.style.backgroundColor= "#fff";
    header.style.boxShadow = "rgba(0, 0, 0, 0.08) 0px 1px 12px";
    header.classList.add('active');
    document.querySelector('.whitemenu').classList.add('whiteActive');
    document.querySelector('.search-button').classList.add('searchBtnActive');
    document.querySelector('.searchsvg').classList.add('searchsvgActive');
    document.querySelector('.guest-container').classList.add('removeHover');
    document.querySelector('.center').style.display ="none";
    document.querySelector('.location-container').style.display= "none";
    document.querySelector('.check-in-container').style.display= "none";
    document.querySelector('.check-out-container').style.display= "none";
    document.querySelector('.guest').style.display= "none";
    document.querySelector(".host").style.color = "#000";
    document.querySelector('svg').setAttribute("fill", "rgb(255, 56, 92)");
    document.querySelector('.lanlogo').style.fill = "#000";
    document.querySelector('.whitemenuText').style.display="block";
    document.querySelector('.headermenu').style.height = "80";
    console.log("sefid shod")
    const openMenu = function(){
      document.querySelector('.whitemenu').classList.remove('whiteActive');
      document.querySelector('.search-button').classList.remove('searchBtnActive');
      document.querySelector('.searchsvg').classList.remove('searchsvgActive');
      document.querySelector('.center').style.display ="flex";
      document.querySelector('.location-container').style.display= "block";
      document.querySelector('.check-in-container').style.display= "block";
      document.querySelector('.check-out-container').style.display= "block";
      document.querySelector('.whitemenuText').style.display="none";
      document.querySelector('.guest').style.display= "block";
      document.querySelector('.left-menu').style.marginBottom = "100px";
      document.querySelector('.right-menu').style.marginBottom = "100px";
      document.querySelector('.guest-container').classList.remove('removeHover');
      document.querySelectorAll('.clink').forEach(function(link) {
        link.style.color= "#000000";
      });
      document.querySelector('.places').classList.add('placesBlack');
      document.querySelector('.exp').classList.add('expBlack');
      document.querySelector('.onlineexp').classList.add('onlineexpBlack');
      console.log("menu baz shod")
      document.querySelector('.headermenu').style.height = "180px";
      window.onscroll = function (e) {  
        document.querySelector('.headermenu').style.height = "80px";
        document.querySelector('.whitemenu').classList.add('whiteActive');
        document.querySelector('.search-button').classList.add('searchBtnActive');
        document.querySelector('.searchsvg').classList.add('searchsvgActive');
        document.querySelector('.center').style.display ="none";
        document.querySelector('.location-container').style.display= "none";
        document.querySelector('.check-in-container').style.display= "none";
        document.querySelector('.check-out-container').style.display= "none";
        document.querySelector('.guest').style.display= "none";
        document.querySelector('.whitemenuText').style.display="block";
        document.querySelector('.left-menu').style.marginBottom = "unset";
        document.querySelector('.right-menu').style.marginBottom = "unset";
        document.querySelector('.guest-container').classList.add('removeHover');
        } 
    }
    document.querySelector('.whitemenu').addEventListener('click', openMenu);
  } else  {
    header.style.backgroundColor = "unset" ;
    header.classList.remove('active');
    document.querySelector(".host").style.color = "#fff";
    document.querySelector('svg').setAttribute("fill", "#fff");
    document.querySelector('.lanlogo').style.fill = "#fff";
    header.style.boxShadow= 'unset';
    document.querySelector('.whitemenu').classList.remove('whiteActive');
    document.querySelector('.search-button').classList.remove('searchBtnActive');
    document.querySelector('.searchsvg').classList.remove('searchsvgActive');
    document.querySelector('.guest-container').classList.remove('removeHover');
    document.querySelector('.center').style.display ="flex";
    document.querySelector('.location-container').style.display= "block";
    document.querySelector('.check-in-container').style.display= "block";
    document.querySelector('.check-out-container').style.display= "block";
    document.querySelector('.whitemenuText').style.display="none";
    document.querySelector('.guest').style.display= "block";
    document.querySelector('.headermenu').style.height = "80";
    console.log('birang shod');
  }
}




