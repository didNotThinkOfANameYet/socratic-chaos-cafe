const questions = [
    "White chocolate vs dark chocolate (it’s more like you vs me): Who’s more likely to survive in a Kafka novel?",
    "Your brain gets turned into a bakery. What’s the bestseller item called?",
    "Your hair is now the main character in a Dostoevsky novel. Title it.",
    "Rohit Sharma drops a catch. Justify it using an existential quote.",
    "If you had to date a Friends character, who would it be — and why are they problematic?",
    "You're stuck in a murder mystery — who do you suspect first and why?",
    "“We were on a break” — defend or destroy the statement in court.",
    "The beach or binge-watching Friends — what’s your soul craving right now?",
    "What dessert would Kafka invent and why would no one understand it?",
    "Describe your vibe as a rom-com movie title.",
    "Which Friends character would fail miserably in a Dostoevsky novel?"
];

const answerItResponses = [
    "This is a chocolate-coated identity crisis. Enlighten me.",
    "Serve that chaos on a tray. I’m ready.",
    "The mane event. Let’s go.",
    "Philosophize this fumble, professor.",
    "It has to be Monica!",
    "Give me drama. Give me motive.",
    "Your Honor, I present chaotic reasoning.",
    "Choose wisely. Chandler is watching.",
    "Serve me absurdity with a cherry on top.",
    "lets go for something painfully cute.",
    "Yes, I want crossover drama."
];

const overthinkResponses = [
    "Its Dark Chocolate for win!",
    "Overthinking smells like burnt croissants and regret.",
    "It’s giving CRIME AND CONDITIONER.",
    "Catch dropped, but purpose found. Maybe.",
    "Come on man Monica is the one!",
    "In my defence: I am a sleeper cell. I cannot be the murderer!",
    "They were clearly on a break dumb!",
    "You’re tanning AND anxious.",
    "Idk the dessert gets headache because of you!",
    "My narcissist boy couldnt even do this simple thing?",
    "It’s Ross. Always Ross."
];

const imageSuggestions = [
    "./images/1.png",
    "./images/2.jpg",
    "images/3.jpg",
    "images/4.jpeg",
    "images/5.jpeg",
    "images/6.jpg",
    "images/7.png",
    "images/8.jpeg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg"
];

let currentQuestion = 0;

function startGame() {
    document.getElementById("intro-section").style.display = "none";
    document.getElementById("question-section").style.display = "block";
    document.getElementById("response").innerText = "";
    document.getElementById("input-area").style.display = "none";
    currentQuestion = 0;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion];
        document.getElementById("question-image").src = imageSuggestions[currentQuestion];
        document.getElementById("hidden-question").value = questions[currentQuestion];
    } else {
        // Once all questions are completed, show the completion message
        document.getElementById("question-section").style.display = "none";
        document.getElementById("completion-message").style.display = "block";
    }
}

function answerIt() {
    document.getElementById("response").innerText = answerItResponses[currentQuestion];
    document.getElementById("input-area").style.display = "block";
}

function overthinkIt() {
    document.getElementById("response").innerText = overthinkResponses[currentQuestion];
    document.getElementById("input-area").style.display = "none";
    setTimeout(() => {
        document.getElementById("response").innerText = "";
        currentQuestion++;
        showQuestion();
    }, 2000);
}

document.getElementById("answer-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        form.reset();
        document.getElementById("input-area").style.display = "none";
        document.getElementById("response").innerText = "";
        currentQuestion++;
        showQuestion();
    });
});
