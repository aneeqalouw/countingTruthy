let btn = document.querySelector('[data-btn]')
let output = document.querySelector('[data-output]')

let arr = [true, true, false, true, false, false, false, false, true]

function truthy(){
    let cnt=0
    for (let e of arr){
        if(e == true){
            cnt++
        }
    }
    output.textContent = cnt + ' truthys'
}

btn.addEventListener('click', truthy)