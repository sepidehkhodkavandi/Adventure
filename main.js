
const containerCalendar = document.querySelector(".container-calendar");
//experinces tab - Helia
const exp = document.querySelector('.exp');
const places = document.querySelector('.places');
exp.addEventListener('click', function(){
  document.querySelector(".checkBigContainer").style.display= "none";
  document.querySelector('.guest-container').style.display = "none";
  document.querySelector(".exp-date").style.display="flex";
  $(".location-container").addClass("changeflex");
  exp.classList.add("scale");
  places.classList.add("pscale");
});

// places tab 
places.addEventListener('click', function(){
  document.querySelector(".checkBigContainer").style.display= "flex";
  document.querySelector(".exp-date").style.display="none";
  $(".location-container").removeClass("changeflex");
  document.querySelector('.guest-container').style.display = "flex";
  exp.classList.remove("scale");
  places.classList.remove("pscale");
  places.classList.add("scale");
});
// const expDateBtn = document.querySelector('.exp-date');
//   expDate.addEventListener('click', function(){
//   document.querySelector('.container-calendar').classList.toggle('showCalendar');
// }); 



// fixed header - Helia
window.onscroll = function () { scrollFunction() };
const header = document.querySelector('.headermenu');
const whiteMenu = document.querySelector('.whitemenu');
$(".ssize-header-container").removeClass("ssize-back-color");
$(".small-size-header").css("background-color", "white");
function scrollFunction() {
  // --added by sepideh---
  if (document.body.scrollTop == 0) {
    $(".ssize-header-container").removeClass("ssize-back-color");
    $(".small-size-header").css("background-color", "white");
}

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    $(".ssize-header-container").addClass("ssize-back-color");
    $(".small-size-header").css("background-color", "rgb(245, 244, 244)");


    //--added by sepideh-----------



    //change header style on scroll
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "rgba(0, 0, 0, 0.08) 0px 1px 12px";
    header.classList.add('active');
    document.querySelector('.whitemenu').classList.add('whiteActive');//remove after
    document.querySelector('.headermenu').classList.remove('headerScroll'); //height responsive
    document.querySelector('.centerheader').classList.add("centerScroll"); //media query-medium device
    document.querySelector('.guest-container').classList.add('removeHover'); //unset bgcolor
    document.querySelector('.center').style.display = "none";
    document.querySelector("#smallsearch").style.display ="flex";
   
    document.querySelector(".tabwrapper").style.display = "none";
    document.querySelector(".host").style.color = "#000";
    //change right and left menu color
    document.querySelectorAll('.svgLogo').forEach(function (e) {
      e.setAttribute("fill", "rgb(255, 56, 92)");
    });
    document.querySelector('.lanlogo').style.fill = "#000";
    document.querySelector('.whitemenuText').style.display = "block";
    document.querySelector('.overlay').style.display = "none";
    document.querySelector('.host').classList.add("rmenuScrollHover");
    document.querySelector(".language").classList.add("rmenuScrollHover");
    //helia
    document.querySelector('.places').classList.add('placesBlack');
    document.querySelector('.exp').classList.add('expBlack');
    document.querySelector('.onlineexp').classList.add('onlineexpBlack');
    document.querySelectorAll('.clink').forEach(function(link) {
      link.classList.add("clinkBlack");
    });
    document.querySelector('.container-calendar').classList.add('dni');
    ////////////////////open menu
    const openMenu = function(){
      document.querySelector('.overlay').style.display = "block";
      document.querySelector('.overlay').classList.remove('dni');
      document.querySelector('.whitemenu').classList.remove('whiteActive');
      document.querySelector('.center').style.display ="flex";
      document.querySelector("#smallsearch").style.display ="none";
      document.querySelector(".tabwrapper").style.display ="flex";
      document.querySelector('.whitemenuText').style.display="none";
      document.querySelector('.centerheader').classList.remove("centerScroll");
      document.querySelector('.guest-container').classList.remove('removeHover');
      document.querySelector('.headermenu').classList.add('headerScroll');
      }
    document.querySelector('.whitemenu').addEventListener('click', openMenu);
    let whead = document.querySelector('#whead');
    let CC = document.querySelector(".container-calendar");
    $("html").click(function (event){
       if (!$(event.target).closest(whead).length){
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.whitemenu').classList.add('whiteActive');
        document.querySelector('.center').style.display ="none";
        document.querySelector("#smallsearch").style.display ="flex";
        document.querySelector(".tabwrapper").style.display ="none";
        document.querySelector('.whitemenuText').style.display="block";
        document.querySelector('.centerheader').classList.add("centerScroll");
        document.querySelector('.guest-container').classList.add('removeHover');
        document.querySelector('.headermenu').classList.remove('headerScroll');
       }
      })

      // $("html").click(function (event){
      //   if (!$(event.target).closest($(".container-calendar").length)){
      //   document.querySelector('.container-calendar').classList.add('dni');

      //   }
      // })

     

    //helia
    containerCalendar.style.display = "none";
     profilemenu.style.display = "none";
    locationMenu.style.display = "none";
    $(".location-container").removeClass("removeafter");
    guestMenu.style.display = "none";
    $(".searchAppear").css("display", "none");
    $(".search-button").removeClass("increaseWidth");
    $(".search-button").removeClass("searchclass");
    $(".guest-container").removeClass("clickeffect");
    $(".circle-close").css("display", "none");
    $(".search-close").css("display", "none");
    $(".location-container").removeClass("clickeffect");
    $(".whitemenu").css("background" , "white");
  } 
  
    else  {

    header.style.backgroundColor = "unset" ;
    document.querySelector('.overlay').classList.add('dni');
    header.classList.remove('active');
    document.querySelector(".host").style.color = "#fff";
    document.querySelectorAll('.svgLogo').forEach(function (e) {
      e.setAttribute("fill", "#fff");
     });
    document.querySelector('.lanlogo').style.fill = "#fff";
    header.style.boxShadow = 'unset';
    document.querySelector('.whitemenu').classList.remove('whiteActive');
    document.querySelector('.guest-container').classList.remove('removeHover');

    document.querySelector('.center').style.display ="flex";
    document.querySelector(".tabwrapper").style.display ="flex";
    document.querySelector("#smallsearch").style.display ="none";


    document.querySelector('.whitemenuText').style.display="none";
    document.querySelectorAll('.clink').forEach(function(link) {
      link.classList.remove("clinkBlack");
        });
    document.querySelector('.places').classList.remove('placesBlack');
    document.querySelector('.exp').classList.remove('expBlack');
    document.querySelector('.onlineexp').classList.remove('onlineexpBlack');
    document.querySelector('.centerheader').classList.remove("centerScroll");
    document.querySelector('.host').classList.remove("rmenuScrollHover");
    document.querySelector(".language").classList.remove("rmenuScrollHover");
  }
}

//////////////// flexible calendar - Helia//////////////////////////
const wrapperCalendar = document.querySelector('.wrapper-calendar')
const tabCalendar = document.querySelector('#dates')
const flexibleText = document.querySelector('.addDatumIn');


//const containercalendar = document.querySelector(".container-calendar");
const flexBtn = document.querySelector('#flexibleBtn');
const flexCalender = document.querySelector('.imflexible-container');
let stayText = document.querySelector('.stay-txt');
const stayButton = document.querySelectorAll('.stay-btn');
const months = document.querySelectorAll('.flexibleMonth');
const monthBtn = document.querySelectorAll('.fc-goin-btn');
const go = document.querySelector('.go');
const flexibleText0 = document.querySelector('.wmweek');
const flexCalBtn = document.querySelector('#flexx');
/////////////////////////////////////tab Calender and tab flexi///////////

 tabCalendar.addEventListener('click', function () {
  this.classList.add('bgw')
  flexBtn.classList.remove('bgw')
  flexCalBtn.style.display = "none";
  document.querySelector(".check-out-container").style.display = "flex";
  document.querySelector(".check-in-container").style.display = "flex";
  wrapperCalendar.style.display = 'block'
  flexCalender.style.display = 'none';
  document.querySelector(".container-calendar").classList.remove('flexCalHeight');
  flexCalender.classList.remove('flexActive');
  document.querySelector('.btn-days').classList.remove('dn');

})
/////////////////////////////////////tab Calender and tab flexi///////////7/////////

let ftTextArr = ["Sep","Oct","","","","",""];
let ftText0 = "Weekend";
let ftText =ftTextArr.filter(a => a!== "" ).join(", ");
flexBtn.addEventListener('click',  function(){
  this.classList.add('bgw')
  tabCalendar.classList.remove('bgw')
  wrapperCalendar.style.display = 'none';
  document.querySelector('.btn-days').classList.add('dn');
  flexCalBtn.style.display = "flex";
  document.querySelector(".check-out-container").style.display = "none";
  document.querySelector(".check-in-container").style.display = "none";
  flexCalender.classList.add('flexActive');
  document.querySelector("#flexx").style.display="flex";
  flexibleText0.innerText =ftText0 + " in " + ftText;
  flexibleText0.classList.add("ftoptxt");
  document.querySelector(".container-calendar").classList.add('flexCalHeight');
  document.querySelector("#flexx").classList.add('clickeffect');
  document.querySelector(".location-container").classList.add('removeafter');
  document.querySelector("#flexx").classList.add('removeafter');




   
});
//set "stay for" section - Helia
stayButton.forEach(function(e){
 e.addEventListener('click', function() {
    stayText.innerText = e.textContent;
    flexibleText0.innerText =e.textContent + " in " + ftText;
    stayButton.forEach(function(x){
      if (x==e){
        x.classList.add("stayBtnActive");
      }else{
        x.classList.remove("stayBtnActive");
      }
    });
 });
});
const monthsArr= ["September", 'October', "November", "December", "January", "February"]
const selectedMonths = ["September", 'October',"","","",""]
let counter = 2;
monthBtn.forEach(function (e) {
    e.addEventListener('click', function () {
        for (let i = 0; i < monthsArr.length; i++) {
            if(monthsArr[i] == e.children[1].innerHTML){
                if(monthsArr[i] == selectedMonths[i] && counter>1){
                    selectedMonths[i]="";
                    e.children[0].src ="./Images/cal1.png";
                    e.classList.remove('activeMonth')
                    counter --;
                }else if(monthsArr[i] !== selectedMonths[i]){
                    selectedMonths[i]=monthsArr[i];
                    e.children[0].src ="./Images/cal2.png";
                    e.classList.add('activeMonth')
                    counter ++;
                }

                const goIn=  selectedMonths.filter(a => a!== "" ).join(", ");
                go.innerText = goIn;
                for(let i =0; i< selectedMonths.length; i++){
                  ftTextArr[i] = selectedMonths[i].substring(0,3);
                  ftText =ftTextArr.filter(a => a!== "" ).join(", ");
                  flexibleText0.innerText =stayText.innerText + " in " + ftText;
                }
                

            }
        }
    
    });
    
});

///////////////////// live anywhere - Helia


const livePic = document.querySelector(".live-pic");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener('click', () => {

  livePic.scrollLeft = 350;
  nextBtn.style.display = "none";
  prevBtn.style.display = "block";
})

prevBtn.addEventListener('click', () => {
  livePic.scrollLeft = -350;
  prevBtn.style.display = "none";
  nextBtn.style.display = "block ";
})





// --------------------------------------------sepideh---------------
//this code is added to check if the user is scrolling up or down
// we need to hide the footer in small devices while scrolling up and then show it while the user scrolls down
let lastScrollTop = 0;

document.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
  let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    $(".small-size-footer").css("opacity", "0");
  } else {
    $(".small-size-footer").css("opacity", "1");
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
// --------------------------------------------sepideh---------------



// ------------------------------------------samira----------------------
// the function to open check in/check out
const checkIn = document.querySelector('.check-in-container')
const checkOut = document.querySelector('.check-out-container')
const calendarWrapper = document.querySelector('.month-wrapper')
const btnDay = document.querySelector('.btn-days')




const calenderF = function () {

  document.querySelector('.container-calendar').classList.toggle('showCalendar');
  tabCalendar.classList.toggle('wrapper-calendar');
  document.querySelector('.container-calendar').classList.remove('dni');
  // tabCalendar.click()
}
checkIn.addEventListener('click', function () {
  this.classList.add('sh-btn')
  checkOut.classList.remove('sh-btn')
  calenderF()
})

checkOut.addEventListener('click', function () {
  this.classList.add('sh-btn')

  checkIn.classList.remove('sh-btn')
  calenderF()
})



$(".click-calendar")
  .dateRangePicker({

    format: "MMM DD",
    // inline: true,
    container: '.wrapper-calendar ',
    alwaysOpen: true

  })
  .on("datepicker-first-date-selected", function (event, obj) {
    /* This event will be triggered when first date is selected */
    $(".addDatumIn").text(moment(obj.date1).format("MMM DD"));
    $(".addDatumIn").css("color", "black");
    $(".addDatumIn").css("font-weight", "700");
    // $(".check-in-container").removeClass('.sh-btn')
    checkIn.classList.remove('sh-btn')
    checkOut.classList.add('sh-btn')

  })
  .on("datepicker-change", function (event, obj) {
    /* This event will be triggered when second date is selected */
    // console.log("change", obj);
    $(".addDatumOut").text(moment(obj.date2).format("MMM DD"));
    $(".addDatumOut").css("color", "black");
    $(".addDatumOut").css("font-weight", "700");
    btnDay.style.display = 'flex';

    $(".close2").css("display", "flex");
    $("#circle").css("display", "flex");



    const childBtnDay = document.querySelectorAll('.btn-day')
    const AddDates = document.querySelectorAll('.add-dates')

    let indate = $('.add-dates').eq(0).text()
    let outdate = $('.add-dates').eq(1).text()
    let x = $('.svg-span').eq(0).text()


    childBtnDay.forEach(function (element, index) {
      element.addEventListener('click', function () {


        if (index == 0) {
          $('.add-dates').eq(0).text(indate + ' ' + x + ' ' + 1)
          $('.add-dates').eq(1).text(outdate + ' ' + x + ' ' + 1)
        }

        else if (index == 1) {
          $('.add-dates').eq(0).text(indate + ' ' + x + ' ' + 3)
          $('.add-dates').eq(1).text(outdate + ' ' + x + ' ' + 3)
        }

        else if (index == 2) {
          $('.add-dates').eq(0).text(indate + ' ' + x + ' ' + 7)
          $('.add-dates').eq(1).text(outdate + ' ' + x + ' ' + 7)
        }

      })
    })
    $("#circle").on("click", function () {
      $(".close2").css("display", "none");
      $("#circle").css("display", "none");
      $('.add-dates').text('Add dates');
      $(".check-out-container").removeClass(".bgw");
      $(".check-in-container").addClass(".bgw");
      $(".addDatumOut").css("color", "#222222");
      $(".addDatumOut").css("font-weight", "300");
      $(".addDatumIn").css("color", "color: #222222");
      $(".addDatumIn").css("font-weight", "300");

    })

  })
// ---------------------------Tab Inspiration---------------samira----------------------

let country = document.querySelectorAll(".country")
let btn = document.querySelectorAll(".ins-btn")
let box = document.querySelector(".country__items")

btn.forEach((item, index) => {
  item.addEventListener("click", function () {

    btn.forEach(function (x) {
      if (x == item) {
        x.classList.add("addAfter");
      } else {
        x.classList.remove("addAfter");
      }
    })




    if (btn[index].classList.contains("active")) {
      btn[index].classList.remove("active")


      country[index].style.display = "none"
      box.classList.remove("move")
      item.style.fontWeight = "400"

    } else {
      item.style.fontWeight = "700"
      country[index].style.display = "flex"
      box.classList.add("move")


      country.forEach((itemCountry, i) => {
        if (i != index) {
          itemCountry.style.display = "none"
          // item.classList.remove('addAfter')
          btn[i].classList.remove("active")
          btn[i].style.fontWeight = "400"

        }
      })

      btn[index].classList.add("active")

    }
  })
})

// -------------------------samira----------------------//


// --------------Added for the footer in mobile devices--------------
let fsvg = document.querySelectorAll(".small-footer-svg");
fsvg[0].classList.add("redColor");
fsvg[1].classList.add("grayColor");
fsvg[2].classList.add("grayColor");

fsvg.forEach((svg, index) => {
  svg.addEventListener("click", () => {
    svg.classList.remove("grayColor");
    svg.classList.add("redColor");
    $(".small-footer-text").eq(index).css("color", "black")

    fsvg.forEach((item, i) => {

      if (i != index && item.classList.contains("redColor")) {
        item.classList.remove("redColor");
        item.classList.add("grayColor");
        $(".small-footer-text").eq(i).css("color", "#717171")

      }

    });
  })


});


// ----sepideh : this is added for small devices only----

//----sepideh : White menu: guest menu, locaation menu && profile menu
let profilemenu = document.querySelector(".profilemenu");
let signInButton = document.querySelector(".sign-in-button");
let locationMenu = document.querySelector(".location-input-menu");
let typeLocation = document.querySelector(".type-location");
let searchButton = document.querySelectorAll(".search-button");
let guestMenu = document.querySelector(".guest-menu");
let guest = document.querySelector(".guest");
let plusButton = document.querySelectorAll(".plus-button");
let minusButton = document.querySelectorAll(".minus-button");
let counterP = document.querySelectorAll(".counterp");
let age = document.querySelectorAll(".age");
let guestContainer = document.querySelector(".geust-container");
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
    if ($(".counterp").eq(0) == 0 && $(".counterp").eq(1) > 0 || $(".counterp").eq(2) > 0) {
      $(".counterp").eq(0).text(1);
    }
    $(".counterp").eq(index).text(a + 1);
    $(".minus-button").eq(index).removeClass("ct");
    $(".minus-button").eq(index).removeClass("mbeffect");
    let firstitem = Number($(".counterp").eq(0).text());
    let seconditem = Number($(".counterp").eq(1).text());
    let infantcounter = Number($(".counterp").eq(2).text());
    let str = firstitem + seconditem;
    $(".circle-close").css("display", "flex");
    $(".search-close").css("display", "flex");
    $(".add-dates-s").css("color", "#222222");

    if (infantcounter > 0) { // to check if an infant is added
      if (str == 1 || str == 0) {

        if (infantcounter > 1) {
          $(".add-dates-s").text(1 + " guest" + ", " + infantcounter + " infants");
        }
        else {
          $(".add-dates-s").text(1 + " guest" + ", " + infantcounter + " infant");
        }
        $(".counterp").eq(0).text(1);
        $(".minus-button").eq(0).removeClass("ct");
        $(".minus-button").eq(0).removeClass("mbeffect");
      }
      else {
        if (infantcounter > 1) {
          $(".add-dates-s").text(str + " guests" + ", " + infantcounter + " infants");
        }
        else {
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
      else { $(".add-dates-s").text(str + " guests"); }
    }
    else {
      $(".add-dates-s").text(str + " guests");
    }
  });
});

//click on minus button
minusButton.forEach((item, index) => {
  item.addEventListener("click", () => {
    let b = Number($(".counterp").eq(index).text());
    if (b > 1) {
      $(".counterp").eq(index).text(b - 1);
      let firstItemAfterMinus = Number($(".counterp").eq(0).text());
      let secondItemAfterMinus = Number($(".counterp").eq(1).text());
      let infantcounter = Number($(".counterp").eq(2).text());
      let mstr = firstItemAfterMinus + secondItemAfterMinus;
      if (infantcounter > 0) {
        if (mstr == 1 || mstr == 0) {

          if (infantcounter > 1) {
            $(".add-dates-s").text(mstr + " guest" + ", " + infantcounter + " infants");
          }
          else {
            $(".add-dates-s").text(mstr + " guest" + ", " + infantcounter + " infant");
          }
        }
        else if (mstr > 1 || mstr == 0) {
          $(".add-dates-s").text(mstr + " guests" + ", " + infantcounter + " infant");
        }
      }
      else {

        if (mstr == 1 || mstr == 0) { $(".add-dates-s").text(mstr + " guest"); }
        else if (mstr > 1 || mstr == 0) {
          $(".add-dates-s").text(mstr + " guests");
        }
      }


    }
    if (b == 1) {
      if (index == 0 && Number($(".counterp").eq(2).text()) > 0) {
        ($(".minus-button").eq(0)).attr('disabled', 'disabled');
      }
      else if (index == 0 && Number($(".counterp").eq(1).text()) > 0) {
        ($(".minus-button").eq(0)).attr('disabled', 'disabled');
      }
      else {
        $(".minus-button").eq(index).addClass("ct");
        $(".minus-button").eq(index).addClass("mbeffect");
        $(".counterp").eq(index).text(b - 1);
        let firstItemAfterMinus = Number($(".counterp").eq(0).text());
        let secondItemAfterMinus = Number($(".counterp").eq(1).text());
        let InfantAfterMinus = Number($(".counterp").eq(2).text());
        let mstr = firstItemAfterMinus + secondItemAfterMinus;
        if (mstr == 1) { $(".add-dates-s").text(mstr + " guest" + ", " + InfantAfterMinus + " infants"); }
        if (mstr == 0) {
          $(".add-dates-s").text("Add guests");
          $(".add-dates-s").css("color", "#717171");
          // $(".circle-close").css("opacity", "0");
          //$(".search-close").css("opacity", "0");  
          $(".circle-close").css("display", "none");
          $(".search-close").css("display", "none");
        }
        else {
          if (InfantAfterMinus == 0) {
            $(".add-dates-s").text(mstr + " guests");
            ($(".minus-button").eq(0)).removeAttr("disabled");
          }
          else
            $(".add-dates-s").text(mstr + " guests" + ", " + InfantAfterMinus + " infants");
        }
      }
    }
  });
});

$(".guest").click(function () {
  if (window.innerWidth >= 950) {
  $(".guest-container").addClass("clickeffect");
  $(".searchAppear").css("display", "block");
  $(".search-button").addClass("increaseWidth");
  $(".search-button").addClass("searchclass");
  $(".search-button").addClass("exapnded-search");
  }
});



//click on guest-add-date 
$(".guest").click(function () {
  if (guestMenu.style.display == "block") {
    guestMenu.style.display = "none";
    $(".whitemenu").css("background" , "white");
    $(".circle-close").css("display", "none");
    $(".search-close").css("display", "none");
    $("add-dates-s").css("textOoverflow", "unset");
  } else {
    guestMenu.style.display = "block";
    $(".check-out-container").addClass("removeafter");
    $(".guest-container").addClass("clickeffect");
    $(".whitemenu").css("background" , "rgb(247, 247, 247");
    if (locationMenu.style.display == "block" || profilemenu.style.display == "block" || $(".container-calendar").hasClass("showCalendar")) {
      locationMenu.style.display = "none";
      profilemenu.style.display = "none";
      guestMenu.style.display = "block";
      $(".container-calendar").addClass("dni");
      $(".whitemenu").css("background" , "rgb(247, 247, 247");
      $(".check-out-container").addClass("removeafter");
      $(".check-out-container").removeClass("clickeffect");
      $(".check-in-container").removeClass("clickeffect");
      $('#flexx').removeClass("clickeffect");
    }

    if ($(".add-dates-s").text() != "Add guests") {
      $(".circle-close").css("display", "flex");
      $(".search-close").css("display", "flex");
      $(".add-dates-s").addClass("addellipsis");
      // $(".guest-container").addClass("clickeffect");
      guestMenu.style.display = "block";
      $(".check-out-container").addClass("removeafter");
        //$(".guest-container").css("background" , "white");



    }

  }
});
//click on circle close
$(".circle-close").click(function () {
  $(".counterp").text("0");
  //$(".circle-close").css("opacity", "0");
  $(".circle-close").css("display", "none");
  $(".add-dates-s").text("Add guests");
  $(".add-dates-s").css("color", "#717171");
  $(".minus-button").addClass("ct");
  $(".minus-button").addClass("mbeffect");
})

//click on location input
$(".location").click(function () {
  if (locationMenu.style.display == "block") {
    locationMenu.style.display = "none";
    $(".whitemenu").css("background" , "white");
    $(".location-container").removeClass("clickeffect");
    $(".location-container").removeClass("removeafter");

  } else {
    locationMenu.style.display = "block";
    $(".whitemenu").css("background" , "rgb(247, 247, 247");
    $(".location-container").addClass("removeafter");
    if(window.innerWidth > 950){
    $(".search-button").addClass("searchclass");
    $(".search-button").addClass("exapnded-search");
    $(".search-button").addClass("increaseWidth");
    $(".searchAppear").css("display", "block");

    }
    $(".location-container").addClass("clickeffect");
    if (guestMenu.style.display == "block" || profilemenu.style.display == "block" ||  $(".container-calendar").hasClass("showCalendar") ) {
        profilemenu.style.display = "none";
        guestMenu.style.display = "none";
        $(".container-calendar").addClass("dni");
        $(".check-out-container").removeClass("clickeffect");
        $(".check-in-container").removeClass("clickeffect");
        $('#flexx').removeClass("clickeffect");
     
    }

  }
});
//click on sign-in button- top right menu
$(".sign-in-button").click(function () {
  if (profilemenu.style.display == "block") {
    profilemenu.style.display = "none";

  } else {
    profilemenu.style.display = "block";
    if (guestMenu.style.display == "block" || locationMenu.style.display == "block" || $(".search-button").hasClass("exapnded-search") || $(".container-calendar").hasClass("showCalendar")) {
        locationMenu.style.display = "none";
        guestMenu.style.display = "none";
        document.querySelector('.container-calendar').classList.add('dni');
        $(".location-container").removeClass("removeafter");
        $(".search-button").removeClass("exapnded-search");
        $(".searchAppear").css("display", "none");
        $(".search-button").removeClass("increaseWidth");
        $(".location-container").removeClass("clickeffect");
        $(".guest-container").removeClass("clickeffect");
    }
  }
});
//click on circular search button
$(".search-button").click(function () {
  if (guestMenu.style.display == "block") { 
    $(".guest-menu").css("display", "none")
    $(".whitemenu").css("background" , "white");
   }
  if (window.innerWidth >= 950) {
  $(".searchAppear").css("display", "block");
  $(".search-button").addClass("increaseWidth");
  $(".search-button").addClass("searchclass");
  $(".search-button").addClass("exapnded-search");
  $(".guest-container").removeClass("clickeffect");
  $(".whitemenu").css("background" , "rgb(247, 247, 247");
   }
   $(".location-input-menu").css("display", "block");
   $(".guest-container").removeClass("clickeffect");
   $(".location-container").addClass("clickeffect");
   $(".location-container").addClass("removeafter");  
   $(".whitemenu").css("background" , "rgb(247, 247, 247");



});

// $(document).click(function (event) {
//   if (!$(event.target).closest(containercalendar).length &&
//       !$(event.target).closest(whiteMenu).length){
//         $(".container-calendar").removeClass("showCalendar");
//       }
// })


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
    !$(event.target).closest(searchClose).length &&
    !$(event.target).closest(whiteMenu).length 
    //!$(event.target).closest(CC).length
     )
     {
   // whead.style.display = "none";
    //CC.classList.add("dn");
    profilemenu.style.display = "none";
    locationMenu.style.display = "none";
    $(".location-container").removeClass("removeafter");
    guestMenu.style.display = "none";
    $(".searchAppear").css("display", "none");
    $(".search-button").removeClass("increaseWidth");
    $(".search-button").removeClass("searchclass");
    $(".guest-container").removeClass("clickeffect");
    $(".circle-close").css("display", "none");
    $(".search-close").css("display", "none");
    $(".location-container").removeClass("clickeffect");
    $(".add-dates-s").removeClass("addellipsis");
    //checkOut.classList.remove("clickeffect");
    //checkIn.classList.remove("clickeffect");
    $(".whitemenu").css("background" , "white");
    



  }
});

//click on small-size-header
  $(".small-size-header").click(function () {
  $(".whiteoverlay").css("display" , "block");  
  $(".mobile-top-menu").css("display", "block");
  $(".small-size-header").css("display", "none");
  $(".small-size-footer").css("display", "block");


})

  $(".mobile-size-button").click(function () {
  $(".small-size-header").css("display", "flex");
  $(".mobile-top-menu").css("display", "none");
  $(".whiteoverlay").css("display" , "none");

})

//hover on white menu elements
// ---guest---
$(".guest").on({
  mouseenter: function () {
    $(".check-out-container").addClass("removeafter");
  },
  mouseleave: function () {
    if(guestMenu.style.display != "block"){
    $(".check-out-container").removeClass("removeafter");
    }
  }
});
// ---checkIn---
$(".check-out-container").on({
  mouseenter: function () {
    $(".check-in-container").addClass("removeafter");
  },
  mouseleave: function () {
    $(".check-in-container").removeClass("removeafter");
  }
});

// ---checkOut---
$(".check-in-container").on({
  mouseenter: function () {
    $(".location-container").addClass("removeafter");
  },
  mouseleave: function () {
    if(locationMenu.style.display != "block"){
    $(".location-container").removeClass("removeafter");
    }
  }
});

//-----------date hover
$(".exp-date").on({
  mouseenter: function () {
    $(".location-container").addClass("removeafter");
  },
  mouseleave: function () {
    if(locationMenu.style.display != "block"){
    $(".location-container").removeClass("removeafter");
    }
  }
});



//-------------------------------------------------------------------
//This code is added for the hover effect of the search button which needs the position of mouse in Y and X axis
let shiny = document.querySelectorAll(".shiny")
searchButton.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const { x, y } = item.getBoundingClientRect();
    shiny.forEach((element) => {
      element.style.setProperty("--x", e.clientX - x);
      element.style.setProperty("--y", e.clientY - y);
    })
  
  })
})

// let searchdate = document.querySelector(".search-date")
// searchdate.addEventListener("mousemove", (e) => {
//   const { x, y } = searchdate.getBoundingClientRect();
//   shiny.style.setProperty("--x", e.clientX - x);
//   shiny.style.setProperty("--y", e.clientY - y);
// });