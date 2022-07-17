const btn_reserv = document.querySelector(".btn_reserv")
const f_link_reserv = document.getElementById("f_link_reserv")
const the_form = document.querySelector(".the_form")
const body = document.querySelector("body")
const form_black_bg = document.querySelector(".form_black_bg")
const bm_button2 = document.querySelector(".bm_button_box")

const btnMinus = document.getElementById('cal_button_minus')
const btnPlus = document.getElementById('cal_button_plus')

const guestsText = document.querySelector(".cal_display_text")
let guests = 1



const table_img = document.querySelector(".table_img")
const title = document.querySelector(".table_img_title")

const table = document.getElementById("table")


const formThanks = document.querySelector(".form_thanks_body")
const thanks_btn = document.querySelector(".thanks_btn")

const img_for_tablet_box = document.querySelector(".img_for_tablet_box")

let table_1 = 'url("../img/table_1_tablet.png") no-repeat center center / cover'
let table_2 = 'url("../img/table_2_tablet.png") no-repeat center center / cover'
let table_3 = 'url("../img/table_3_tablet.png") no-repeat center center / cover'
let table_4 = 'url("../img/table_4_tablet.png") no-repeat center center / cover'
let table_5 = 'url("../img/table_5_tablet.png") no-repeat center center / cover'
let table_6_7 = 'url("../img/table_6_7_tablet.png") no-repeat center center / cover'
let table_8 = 'url("../img/table_8_tablet.png") no-repeat center center / cover'

const userInfo = document.querySelector(".userInfo")

const userName = document.getElementById("name")
const email = document.getElementById("email")
const date = document.getElementById("date")
const time = document.getElementsByName("time")
let theTime = 0
let timeValue = 1


let userNameInput = ""
let userEmailInput = ""
let userDateInput = ""

let the_table = ""

for (let i=0; i < time.length; i++) {
    time[i].onchange = funcTime;
}

function funcTime() {
    timeValue = this.value
}

// functions
function checkTheTable() {
    let getValue = this.value
    
    if (getValue == 1) {
        table_img.src = "/img/table1.png"
        title.innerHTML = "Gauč pro 2"
        the_table = "Gauč pro 2"

    }
    if (getValue == 2) {
        table_img.src = "/img/table7.png"
        title.innerHTML = "Gauč pro 4"
        the_table = "Gauč pro 4"
    }
    if (getValue == 3) {
        table_img.src = "/img/table2.png"
        title.innerHTML = "U okna pro 4"
        the_table = "U okna pro 4"
    }
    if (getValue == 4) {
        table_img.src = "/img/table4.png"
        title.innerHTML = "Marocký pro 2"
        the_table = "Marocký pro 2"
    }
    if (getValue == 5) {
        table_img.src = "/img/table6.png"
        title.innerHTML = "Uprostřed pro 4"
        the_table = "Uprostřed pro 4"
    }
    if (getValue == 6) {
        table_img.src = "/img/table6.png"
        title.innerHTML = "Uprostřed pro 6"
        the_table = "Uprostřed pro 6"
    }
    if (getValue == 7) {
        table_img.src = "/img/table5.png"
        title.innerHTML = "U okna pro 2"
        the_table = "U okna pro 2"
    }
    if (getValue == 8) {
        table_img.src = "/img/table3.png"
        title.innerHTML = "Pod vitráží pro 2"
        the_table = "Pod vitráží pro 2"
    }

    return the_table
}

function openForm() {
    the_form.classList.add("active")
    body.classList.add("no_scroll")
}
function closedForm() {
    the_form.classList.remove("active")
    body.classList.remove("no_scroll")
}

function showGuests() {
    guestsText.innerHTML = guests
}

function checkTime() {
    if (timeValue == 1) {
        theTime = "dvě hodiny"
    }
    else {
        theTime = "jiný čas"
    }

    return theTime
}

function showUserInfo() {
    
    userInfo.innerHTML = userNameInput + ", " + userDateInput + " trvání: " + checkTime() + ", " + the_table + ", " + guests + " osoby";
}





// Action
table.addEventListener('change', function() {
    let getValue = this.value
    
    if (getValue == 1) {
        table_img.src = "/img/table1.png"
        title.innerHTML = "Gauč pro 2"
        the_table = "Gauč pro 2"
        img_for_tablet_box.style.background=table_1

    }
    if (getValue == 2) {
        table_img.src = "/img/table7.png"
        title.innerHTML = "Gauč pro 4"
        the_table = "Gauč pro 4"
        img_for_tablet_box.style.background=table_2
    }
    if (getValue == 3) {
        table_img.src = "/img/table2.png"
        title.innerHTML = "U okna pro 4"
        the_table = "U okna pro 4"
        img_for_tablet_box.style.background=table_4
    }
    if (getValue == 4) {
        table_img.src = "/img/table4.png"
        title.innerHTML = "Marocký pro 2"
        the_table = "Marocký pro 2"
        img_for_tablet_box.style.background=table_5
    }
    if (getValue == 5) {
        table_img.src = "/img/table6.png"
        title.innerHTML = "Uprostřed pro 4"
        the_table = "Uprostřed pro 4"
        img_for_tablet_box.style.background=table_6_7
    }
    if (getValue == 6) {
        table_img.src = "/img/table6.png"
        title.innerHTML = "Uprostřed pro 6"
        the_table = "Uprostřed pro 6"
        img_for_tablet_box.style.background=table_6_7
    }
    if (getValue == 7) {
        table_img.src = "/img/table5.png"
        title.innerHTML = "U okna pro 2"
        the_table = "U okna pro 2"
        img_for_tablet_box.style.background=table_3
    }
    if (getValue == 8) {
        table_img.src = "/img/table3.png"
        title.innerHTML = "Pod vitráží pro 2"
        the_table = "Pod vitráží pro 2"
        img_for_tablet_box.style.background=table_8
    }
})

btnPlus.onclick = () => {
    if(guests <= 9) {
        guests++
        showGuests()
    }
    if (guests >= 10) {
        guests = 10
        showGuests()
    }
}
btnMinus.onclick = () => {
    if(guests >= 2) {
        guests--
        showGuests()
    }
    if (guests <= 1) {
        guests = 1
        showGuests()
    }
}

btn_reserv.onclick = () => {
    openForm()
}

form_black_bg.onclick = () => {
    closedForm()
}

bm_button2.onclick = () => {
    closedBurger()
    openForm()
}

f_link_reserv.addEventListener('click', () => {
    openForm()
})

thanks_btn.onclick = () => {
    formThanks.classList.remove('active')
    location.href = "/index.html"
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form')
    form.addEventListener('submit', formSend)
})


function formSend(e) {
    e.preventDefault()

    $.ajax({
        type: "POST",
        url: "/sendmail.php",
        data: $('#form').serialize()+"&guests=" + guests,
        success: function(data){
            // alert('success');
            userNameInput = userName.value;
            userEmailInput = email.value;
            userDateInput = date.value;
            showUserInfo();
            formThanks.classList.add("active");
            the_form.classList.remove("active");
            

          },
          error: function(data){
            console.log(data);
            formThanks.classList.add("active");
            the_form.classList.remove("active");
          },
          dataType: 'json',
      });
}