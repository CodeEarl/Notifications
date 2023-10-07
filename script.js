const container = document.querySelectorAll(".container")

const unread = document.querySelectorAll(".unread");

const link = document.querySelectorAll(".link");

let private = document.getElementById("private")
const drop = document.getElementById("drop");

let newNum = document.getElementById("number");
let num = unread.length;
newNum.textContent = num;

container.forEach((c, i)=> {
    c.addEventListener('click', function() {
        c.style.backgroundColor = 'white';
        unread[i].classList.add('active');
        newNum.textContent = num - document.querySelectorAll(".active").length;    
    })
})

private.addEventListener('click', function(){
    drop.style.border = '1px solid hsl(219, 12%, 42%)';
})

const mark = document.getElementById("mark")
mark.addEventListener('click', markAll)
function markAll() {
    container.forEach((c, i)=> { 
        c.style.backgroundColor = 'white';
        unread.forEach((u) => {
            u.classList.add('active');
        })
        newNum.innerHTML = num - document.querySelectorAll(".active").length;
    })
}