const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {

    const config = {        //headers required by API
        headers: {
            Accept: 'application/json',
        },
    }
    
    const res = await fetch('https://icanhazdadjoke.com/', config)      //returns promise
    const data = await res.json()           //Parse data into json
    jokeEl.innerHTML = data.joke            //Displays joke on page
}