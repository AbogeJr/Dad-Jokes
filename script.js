// import axios from 'https://unpkg.com/axios/dist/axios.min.js'
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const themeBtn = document.getElementById('theme-btn')
const body = document.getElementById('body')
const axios = 'axios'
// body.classList.add('dark')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {

    

    const res = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    });
    const data = await res.json()           //Parse data into json
    jokeEl.innerHTML = data.joke            //Displays joke on page


    // const config = {        //headers required by API
    //     headers: {
    //         Accept: 'application/json',
    //     },
    // }
    
    // const res = await fetch('https://icanhazdadjoke.com/', config)      //returns promise
    // const data = await res.json()           //Parse data into json
    // jokeEl.innerHTML = data.joke            //Displays joke on page
}

// Dark mode toggler
themeBtn.addEventListener('click', function() {
    body.classList.toggle('dark')
    if(themeBtn.value=="off") {
        themeBtn.innerHTML = "Light"
        themeBtn.value="on"
    }
    else {
        themeBtn.innerHTML = "Dark"
        themeBtn.value="off" 
    }
}, true )