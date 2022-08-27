let ubiv = document.querySelector('.ubiv')
let narost = document.querySelector('.narost')
let stop = document.querySelector('.stop')
let chislo = document.querySelector('.chislo')
let count = 0

let data = document.querySelectorAll('div[data-metod]')



narost.onclick = () => {
    count = Number(chislo.innerHTML)
    for (let i = 0; i <= 10000; i++) {
        setTimeout(() => {

            chislo.innerHTML = count + i
        }, 200 * i)

    }

}
ubiv.onclick = () => {
    count = Number(chislo.innerHTML)
    for (let i = 0; i <= 10000; i++) {
        setTimeout(() => {
            chislo.innerHTML = count - i
        }, 200 * i)

    }

}

stop.onclick = () => {
    count = Number(chislo.innerHTML)
    chislo.innerHTML = count
}

// data.forEach(btn => {
//     btn.onclick = () => {
//         let met = btn.getAttribute('data-metod')
//         switch (met) {
//             case '-':
//                 ubiv.onclick = () => {
//                     count = Number(chislo.innerHTML)
//                     for (let i = 0; i <= 10; i++) {
//                         setTimeout(() => {
//                             chislo.innerHTML = count - i
//                         }, 200 * i)

//                     }
//                 }
//                 break;
//             case '+':
//                 narost.onclick = () => {
//                     count = Number(chislo.innerHTML)
//                     for (let i = 0; i <= 10; i++) {
//                         setTimeout(() => {
//                             chislo.innerHTML = count + i
//                         }, 200 * i)

//                     }

//                 }
//                 break;
//             case 'STOP':
//                 stop.onclick = () => {
//                     count = Number(chislo.innerHTML)
//                     chislo.innerHTML = count
//                 }
//                 break;

//         }
//     }
// })


