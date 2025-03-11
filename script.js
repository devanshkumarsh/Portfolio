var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";    
    document.body.classList.add("disable-html");


}

function closemenu() {
    sidemenu.style.right = "-200px";
    document.body.classList.remove("disable-html");
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwSV_URERJHDWnDUl6RJlt1Y9jfXBb74gBbVVp05v84VDNPn7LHhKrOGe8QfFH7FNpbRQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successful!";
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000);
            form.reset

            setTimeout(function () {
                window.location.reload();
            }, 3000);
        })
        .catch(error => console.error('Error!', error.message))
})

