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

// ------------------------------------------samira----------------------
const checkIn = document.querySelector('.check-in-container')

const calenderF = function() {
  document.querySelector('.container-calender').classList.toggle('showCalender')
}
checkIn.addEventListener('click', calenderF)



let country = document.querySelectorAll(".country")

let btn = document.querySelectorAll(".btn")
let box = document.querySelector(".country__items")
btn.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (btn[index].classList.contains("active")) {
      btn[index].classList.remove("active")
      country[index].style.display = "none"
      box.classList.remove("move")
      item.style.fontWeight = "400"
    } else {
      item.style.fontWeight = "700"
      country[index].style.display = "flex"
      box.classList.add("move")


      country.forEach((itemCountry , i) =>{
        if (i != index){
          itemCountry.style.display="none"
          btn[i].classList.remove("active")
          btn[i].style.fontWeight = "400"
        }
      })
     
      btn[index].classList.add("active")
    }
  })
})



function createCalendar(elem, year, month) {

  let mon = month - 1; // months in JS are 0..11, not 1..12
  let d = new Date(year, mon);

  let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';

  // spaces for the first row
  // from Monday till the first day of the month
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // <td> with actual dates
  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  // add spaces after last days of month for the last row
  // 29 30 31 * * * *
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
  let day = date.getDay();
  if (day == 0) day = 7; // make Sunday (0) the last day
  return day - 1;
}

createCalendar(calendar, 2012, 9);


// ------------------------------------------samira----------------------


