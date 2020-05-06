const questions = [
    {
        question: "What is 10 + 10",
        options: ["0","10","20","30"],
        answer:"20"
    },
    {
        question: "Who is the best batsmen in the world",
        options: ["kohli","dhoni","rohit","warner"],
        answer:"kohli"
    },
    {
        question: "Who is the best bowler in the world",
        options: ["boult","starc","bumrah","bhuvi"],
        answer:"boult"
    }    
];

let question_number = 0;
let correct = 0;

document.addEventListener('DOMContentLoaded',()=> {
    load_question();
});


function load_question() {
    document.querySelector("#question").innerHTML = questions[question_number].question; 
    const options = document.querySelector("#options");
    options.innerHTML= "";
    for(const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;

    }; 

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            let x = option.textContent;
            if(x == questions[question_number].answer){
                correct += 1;
                alert("Correct Answer");
            }
            else {
                alert("wrong");
            }
        }
    });
    if(question_number<3)
        question_number += 1;
}