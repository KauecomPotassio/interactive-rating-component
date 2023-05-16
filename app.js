let start_container = document.querySelector('#container')
let end_container = document.querySelector('#hidden-container')
let submit_btn = document.querySelector('#submit-btn')
let rate_scale = document.querySelectorAll('.btn')
let rating = document.querySelector('#rating')

submit_btn.addEventListener('click', ()=>{
    if (rating.innerHTML == ''){
        alert('Please select a rating')
    }
    else{
        start_container.style.display = 'none'
        end_container.style.display = 'flex'
    }
})

rate_scale.forEach((rate) =>{
    rate.addEventListener('click', ()=>{
        rating.innerHTML = rate.innerHTML
    })
})