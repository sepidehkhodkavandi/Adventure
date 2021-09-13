// fixed header - Helia
window.onscroll = function() {scrollFunction()};
const header = document.querySelector('.headermenu');
$(".ssize-header-container").removeClass("ssize-back-color");
    $(".small-size-header").css("background-color" , "white");
function scrollFunction() {
// --added by sepideh---
  if (document.body.scrollTop == 0){
    $(".ssize-header-container").removeClass("ssize-back-color");
    $(".small-size-header").css("background-color" , "white");

  }

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    $(".ssize-header-container").addClass("ssize-back-color");
    $(".small-size-header").css("background-color" , "rgb(245, 244, 244)");
    //--added by sepideh-----------
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

// live anywhere


const livePic = document.querySelector(".live-pic");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener('click',()=>{

 livePic.scrollLeft = 350;
 nextBtn.style.display = "none";
 prevBtn.style.display = "block";
})

prevBtn.addEventListener('click',()=>{
  livePic.scrollLeft = -350;
  prevBtn.style.display = "none";
  nextBtn.style.display = "block ";
})





// --------------------------------------------sepideh---------------
//this code is added to check if the user is scrolling up or down
// we need to hide the footer in small devices while scrolling up and then show it while the user scrolls down
let lastScrollTop = 0;

document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
  let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop){
    $(".small-size-footer").css("opacity" , "0");
  } else {
    $(".small-size-footer").css("opacity" , "1");
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
// --------------------------------------------sepideh---------------



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

//createCalendar(calendar, 2012, 9);


// ------------------------------------------samira----------------------


// --------------Added for the footer in mobile devices--------------
let fsvg = document.querySelectorAll(".small-footer-svg");
  fsvg[0].classList.add("redColor");
  fsvg[1].classList.add("grayColor");
  fsvg[2].classList.add("grayColor");

fsvg.forEach((svg, index) => {
   svg.addEventListener("click", () => {   
    svg.classList.remove("grayColor");
    svg.classList.add("redColor");
     
    fsvg.forEach((item, i) =>{

      if (i != index && item.classList.contains("redColor"))
      {item.classList.remove("redColor"); 
        item.classList.add("grayColor");
      }
         
      });})
    

 });


// ----sepideh : this is added for small devices only----

//----sepideh : White menu: guest menu, locaation menu && profile menu
let profilemenu = document.querySelector(".profilemenu");
let signInButton = document.querySelector(".sign-in-button");
let locationMenu = document.querySelector(".location-input-menu");
let typeLocation = document.querySelector(".type-location");
let searchButton = document.querySelector(".search-button");
let guestMenu = document.querySelector(".guest-menu");
let guest = document.querySelector(".guest");
let plusButton = document.querySelectorAll(".plus-button");
let minusButton = document.querySelectorAll(".minus-button");
let counterP = document.querySelectorAll(".counterp");
let age = document.querySelectorAll(".age");
let guestContainer =document.querySelector(".geust-container");
let searchClose = document.querySelector(".search-close");

//to change the styles of minus button
$(".minus-button").addClass("ct");
$(".minus-button").addClass("mbeffect");
$(".add-dates-s").css("color", "#717171");


//click on plus button
plusButton.forEach((item, index) => {
  item.addEventListener("click", () => {
    ($(".minus-button").eq(0)).removeAttr("disabled");
    $(".add-dates-s").addClass("addellipsis");
    let a = Number($(".counterp").eq(index).text());
    if ($(".counterp").eq(0) == 0 && $(".counterp").eq(1) > 0 || $(".counterp").eq(2) > 0){
        $(".counterp").eq(0).text(1);
    } 
    $(".counterp").eq(index).text(a + 1);
    $(".minus-button").eq(index).removeClass("ct");
    $(".minus-button").eq(index).removeClass("mbeffect");
    let firstitem = Number($(".counterp").eq(0).text());
    let seconditem = Number($(".counterp").eq(1).text());
    let infantcounter = Number($(".counterp").eq(2).text());
    let str = firstitem + seconditem;
   // $(".circle-close").css("opacity", "1");
   // $(".search-close").css("opacity", "1");
    $(".circle-close").css("display", "flex");
    $(".search-close").css("display", "flex");
    $(".add-dates-s").css("color", "#222222"); 

if (infantcounter > 0){ // to check if an infant is added
  if (str == 1 || str == 0){

         if (infantcounter > 1 ) {
            $(".add-dates-s").text(1 + " guest" + ", " + infantcounter + " infants");
         }
         else {
          $(".add-dates-s").text(1 + " guest" + ", " + infantcounter + " infant");
       }
         $(".counterp").eq(0).text(1);
         $(".minus-button").eq(0).removeClass("ct");
         $(".minus-button").eq(0).removeClass("mbeffect");
    }
    else{
        if (infantcounter>1){
         $(".add-dates-s").text(str + " guests" + ", " + infantcounter + " infants");
        }
        else{
          $(".add-dates-s").text(str + " guests" + ", " + infantcounter + " infant");
        }
    
    }
}
else if (seconditem > 0) {
          if (str == 1 || str == 0) {
          $(".add-dates-s").text(str + 1 + " guests");
          $(".counterp").eq(0).text(1);
          $(".minus-button").eq(0).removeClass("ct");
          $(".minus-button").eq(0).removeClass("mbeffect");
          }
           else{$(".add-dates-s").text(str + " guests");}
          }
  else{
      $(".add-dates-s").text(str + " guests");
    }
  });
});

//click on minus button
minusButton.forEach((item, index) => {
  item.addEventListener("click", () => {           
     let b = Number($(".counterp").eq(index).text());
    if (b > 1)
    {   
          $(".counterp").eq(index).text(b - 1);
          let firstItemAfterMinus = Number($(".counterp").eq(0).text());
          let secondItemAfterMinus = Number($(".counterp").eq(1).text());
          let infantcounter = Number($(".counterp").eq(2).text());
          let mstr = firstItemAfterMinus + secondItemAfterMinus;
      if ( infantcounter > 0 ){
            if (mstr == 1 || mstr == 0 ) {

                     if (infantcounter > 1) {
                         $(".add-dates-s").text(mstr + " guest" + ", " + infantcounter + " infants");} 
                    else {
                         $(".add-dates-s").text(mstr + " guest" + ", " + infantcounter + " infant");
                         } 
                  }
            else if (mstr > 1 || mstr==0 )
            {
              $(".add-dates-s").text(mstr + " guests" + ", " + infantcounter + " infant");  
          }
      }
      else{

          if (mstr ==1 || mstr==0 )
            {$(".add-dates-s").text(mstr + " guest");}
          else if (mstr >1 || mstr==0 )
            {
              $(".add-dates-s").text(mstr + " guests");  
          }
        }

          
    }
    if (b==1)
    { 
      if (index == 0 && Number($(".counterp").eq(2).text()) > 0 )
    {
      ($(".minus-button").eq(0)).attr('disabled', 'disabled');
    }
    else if (index == 0 && Number($(".counterp").eq(1).text()) > 0 )
    {
      ($(".minus-button").eq(0)).attr('disabled', 'disabled');
    }
    else { 
      $(".minus-button").eq(index).addClass("ct");
      $(".minus-button").eq(index).addClass("mbeffect");
      $(".counterp").eq(index).text(b - 1);
          let firstItemAfterMinus = Number($(".counterp").eq(0).text());
          let secondItemAfterMinus = Number($(".counterp").eq(1).text());
          let InfantAfterMinus = Number($(".counterp").eq(2).text());
          let mstr =firstItemAfterMinus + secondItemAfterMinus;
          if (mstr ==1)
        {  $(".add-dates-s").text(mstr + " guest" +", " + InfantAfterMinus + " infants"); }
        if (mstr ==0){
             $(".add-dates-s").text("Add guests"); 
             $(".add-dates-s").css("color", "#717171"); 
            // $(".circle-close").css("opacity", "0");
             //$(".search-close").css("opacity", "0");  
             $(".circle-close").css("display", "none");
             $(".search-close").css("display", "none"); 
   }
        else {
              if (InfantAfterMinus == 0)
                { $(".add-dates-s").text(mstr + " guests");
                ($(".minus-button").eq(0)).removeAttr("disabled"); }
              else
                $(".add-dates-s").text(mstr + " guests" +", " + InfantAfterMinus + " infants"); }
    }}
  });
});

  $(".guest-container").click(function (){
  $(".guest-container").addClass("clickeffect");
  $(".searchAppear").css("display", "block");
  $(".search-button").addClass("increaseWidth");
  $(".search-button").addClass("searchclass");
  $(".search-button").addClass("exapnded-search");
    });

    

//click on guest-add-date 
$(".guest").click(function () {
  if (guestMenu.style.display == "block") {
      guestMenu.style.display = "none";

     // $(".circle-close").css("opacity", "0");
      //$(".search-close").css("opacity", "0");
      $(".circle-close").css("display", "none");
      $(".search-close").css("display", "none");
      $("add-dates-s").css("textOoverflow", "unset");
  } else {
    guestMenu.style.display = "block";

        if (locationMenu.style.display == "block" || profilemenu.style.display =="block")
         {
            locationMenu.style.display ="none";
            profilemenu.style.display ="none";
            guestMenu.style.display = "block";

         }
   
        if ($(".add-dates-s").text() != "Add guests" ) {
       // $(".circle-close").css("opacity", "1");
        //$(".search-close").css("opacity", "1");
          $(".circle-close").css("display", "flex");
          $(".search-close").css("display", "flex");
          $(".add-dates-s").addClass("addellipsis");
         // $(".guest-container").addClass("clickeffect");
          guestMenu.style.display = "block";

    }
    
  }
});
//click on circle close
 $(".circle-close").click(function() {
 $(".counterp").text("0");
 //$(".circle-close").css("opacity", "0");
 $(".circle-close").css("display", "none");
 $(".add-dates-s").text("Add guests"); 
 $(".add-dates-s").css("color", "#717171");
 $(".minus-button").addClass("ct");
 $(".minus-button").addClass("mbeffect");
 })

//click on location input
$(".type-location").click(function () {
  if (locationMenu.style.display == "block") {
      locationMenu.style.display = "none";
      $(".location-container").removeClass("clickeffect");

  } else {
      locationMenu.style.display = "block";
      $(".search-button").addClass("searchclass");
      $(".search-button").addClass("exapnded-search");
      $(".search-button").addClass("increaseWidth");
      $(".searchAppear").css("display", "block");
      $(".location-container").addClass("clickeffect");
      if (guestMenu.style.display == "block" || profilemenu.style.display =="block")
        {
          profilemenu.style.display ="none";
          guestMenu.style.display ="none";
        }

  }         
});
//click on sign-in button- top right menu
$(".sign-in-button").click(function () {
  if (profilemenu.style.display == "block"){
      profilemenu.style.display = "none";
    
  } else {
        profilemenu.style.display = "block";
        if (guestMenu.style.display == "block" || locationMenu.style.display =="block" || $(".search-button").contains("exapnded-search"))
        {
          locationMenu.style.display ="none";
          guestMenu.style.display ="none";
            $(".search-button").removeClass("exapnded-search");
            $(".search-button").removeClass("increaseWidth");
            $(".location-container").removeClass("clickeffect");
            $(".guest-container").removeClass("clickeffect");


        }
  }
});
//click on circular search button
  $(".search-button").click(function(){
  $(".searchAppear").css("display", "block");
  $(".search-button").addClass("increaseWidth");
  $(".search-button").addClass("searchclass");
  $(".search-button").addClass("exapnded-search");
  $(".location-input-menu").css("display", "block");
  $(".guest-container").removeClass("clickeffect");
  $(".location-container").addClass("clickeffect");


});
//click on anywhere in the document except the ones mentioned in the if condition
$(document).click(function (event) {
  if (!$(event.target).closest(signInButton).length &&
    !$(event.target).closest(profilemenu).length &&
    !$(event.target).closest(locationMenu).length &&
    !$(event.target).closest(typeLocation).length &&
    !$(event.target).closest(guest).length &&
    !$(event.target).closest(guestMenu).length &&
    !$(event.target).closest(searchButton).length &&
    !$(event.target).closest(plusButton).length &&
    !$(event.target).closest(minusButton).length &&
    !$(event.target).closest(age).length &&
    !$(event.target).closest(guestContainer).length &&
    !$(event.target).closest(searchClose).length)
    {
    profilemenu.style.display = "none";
    locationMenu.style.display = "none";
    guestMenu.style.display="none";
    $(".searchAppear").css("display", "none");
    $(".search-button").removeClass("increaseWidth");
    $(".search-button").removeClass("searchclass");
    $(".guest-container").removeClass("clickeffect");
    //$(".circle-close").css("opacity", "0");
    //$(".search-close").css("opacity", "0");
    $(".circle-close").css("display", "none");
    $(".search-close").css("display", "none");
    $(".location-container").removeClass("clickeffect");
    $(".add-dates-s").removeClass("addellipsis");


  }
});
//-------------------------------------------------------------------