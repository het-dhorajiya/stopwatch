const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const restart = document.querySelector(".restart");

const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

let nsec = +sec.textContent;
let nmin = +min.textContent;
let nhour = +hour.textContent;
let nday = +day.textContent;
let mytime;

start.addEventListener('click', () => {
    mytime = setInterval(() => {
        sec.textContent = nsec;
        min.textContent = nmin;
        hour.textContent = nhour;
        day.textContent = nday;
        nsec++;
        if (nsec === 60) {
            nsec = 0;
            nmin++;
            if (nmin === 60) {
                nmin = 0;
                nhour++;
                if (nhour === 24) {
                    nhour = 0;
                    nday++;
                }
            }
        }
    }, 1000)
})

restart.addEventListener('click', () => {
    nsec = 0;
    nmin = 0;
    nhour = 0;
    nday = 0;
    sec.textContent = nsec;
    min.textContent = nmin;
    hour.textContent = nhour;
    day.textContent = nday;
    clearInterval(mytime);
})

stop.addEventListener('click',()=>
{
    clearInterval(mytime);
})
