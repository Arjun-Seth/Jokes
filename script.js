// apiKey = "2a57125389cfabdc4355c4a0bec4";
const URL = "https://official-joke-api.appspot.com/jokes/random";

const jokeSetup = document.getElementById('jokeSetup');
const jokePunchline = document.getElementById('jokePunchline');
const btn = document.getElementById('btn');

async function getJokes() {
    let response = await fetch(URL);
    let data = await response.json();
    jokeSetup.innerText = data.setup;
    jokePunchline.innerText = data.punchline;
}

btn.addEventListener('click', getJokes);