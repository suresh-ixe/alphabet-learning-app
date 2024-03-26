const quizData = [
    { img: "path/to/image/for/A.jpg", correct: "A" },
    // Add more objects for each letter and image
];

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', displayQuestion);

// Function to display the current question and options
function displayQuestion() {
    if(currentQuestionIndex < quizData.length) {
        const question = quizData[currentQuestionIndex];
        document.getElementById('image').src = question.img;
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = ""; // Clear previous options

        ['A', 'B', 'C', 'D'].forEach(letter => {
            const button = document.createElement('button');
            button.textContent = letter;
            button.onclick = () => checkAnswer(letter);
            optionsContainer.appendChild(button);
        });

        document.getElementById('next-question').style.display = "none"; // Hide Next Question button
    } else {
        // If no more questions, exit the quiz
        window.location.href = "index.html"; // Or any other end page or action
    }
}

// Updated showModal function
function showModal(isCorrect) {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const text = document.getElementById("modal-text");
    const img = document.getElementById("modal-img");

    if(isCorrect) {
        text.innerHTML = "Correct answer! Good job! New badge earned!";
        text.className = 'correct';
        img.src = "path/to/your/congratulation-image.jpg";
        img.style.display = "block";
    } else {
        text.innerHTML = "Oops! Try again.";
        text.className = 'wrong';
        img.style.display = "none";
    }

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
        if(isCorrect) document.getElementById('next-question').style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            if(isCorrect) document.getElementById('next-question').style.display = "block";
        }
    }
}

// Handle Next Question button click
document.getElementById('next-question').addEventListener('click', function() {
    currentQuestionIndex++;
    displayQuestion();
});


