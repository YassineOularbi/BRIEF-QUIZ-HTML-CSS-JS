function clicked() {
    document.querySelector(".home-header").style.display = "none";
    document.querySelector(".body-home").style.display = "none";
    document.querySelector(".quiz-header").style.display = "flex";
    document.querySelector(".quiz-body").style.display = "flex";
    document.querySelector(".home-footer").style.backgroundColor = "#000312";
}

let quiz=[
    {
        title : 'Java Milestones Mystery',
        description : 'Welcome to the Java Milestones Mystery! Let"s uncover significant moments in the Java programming language"s timeline. Test your knowledge of key events that shaped Java"s development!',
        question : 'Quelle année a marqué le lancement officiel de Java par Sun Microsystems ?',
        response : [
            'A -  1995',
            'B -  2000',
            'C -  1989',
            'D -  2005'
        ],
        Correct : 'A -  1995'
    },
    {
        title : 'Java History Hunt',
        description : 'Welcome to the Java History Hunt! Let"s explore the fascinating journey of the Java programming language. Test your knowledge of Java"s origins and evolution with this question!',
        question : 'Question: Quelle entreprise a développé le langage de programmation Java ?',
        response : [
            'A -  Microsoft',
            'B -  I - B - M',
            'C -  Oracle C.',
            'D -  Sun.micro'
        ],
        Correct : 'D -  Sun.micro'
    },
    {
        title : 'Java Innovators Inquiry',
        description : 'Welcome to the Java Innovators Inquiry! Let"s delve into the minds behind the Java programming language. Test your knowledge of the key figures involved in Java"s creation and development!',
        question : 'Qui est le principal concepteur du langage de programmation Java ?',
        response : [
            'A -  Bill  Gates',
            'B -  James Gosling',
            'C -  Larry Page',
            'D -  Linus Torvalds'
        ],
        Correct : 'B -  James Gosling'
    },
    {
        title : 'Unlock the Java Secrets: Identify the Keyword for Constants!',
        description : 'Ready to unravel Java"s mysteries? In this challenge, you"ll delve into the essence of Java programming. Can you identify the keyword used to define a constant value in Java ?',
        question : 'Question: What keyword is used to define a constant value in Java ?',
        response : [
            'A -  final',
            'B -  static',
            'C -  const',
            'D -  var'
        ],
        Correct : 'A -  final'
    }
]



let score = 0
let title=document.getElementById("title")
let description=document.getElementById("description")
let question=document.getElementById("question")
let response=document.getElementById("response")
let compteur = document.getElementById("compteur")
let scorequiz=document.getElementById("score-quiz")
let badge=document.getElementById("badge")
let trophy=document.getElementById("trophy")
let badge3=`<img src="images/3nd.png" alt="">`
let badge2=`<img src="images/2nd.png" alt="">`
let badge1=`<img src="images/1er.png" alt="">`
let trophyWinner=`<img class="trophy" src="images/Trophy-winner.png" alt="">`
let trophyLoser=`<img class="trophy" src="images/Trophy-loser.png" alt="">`

let i=0
function getData() {
    title.innerHTML = quiz[i].title;
    description.innerHTML = quiz[i].description;
    question.innerHTML = quiz[i].question;
    for (let j = 0; j < quiz[i].response.length; j++) {
        response.innerHTML +=
            `<button id="answer-button" class="answer-button">${quiz[i].response[j]}</button>`;
    }
    compteur.innerHTML = `<p>Question ${i + 1}  of ${quiz.length}</p>`;
}

getData();

    document.querySelectorAll(".answer-button").forEach((e) => {
        e.addEventListener("click", function () {
            
            if (quiz[i].response.length > 0 && i < quiz[i].response.length) {
                response.innerHTML = "";
            }
            if (this.innerHTML == quiz[i].Correct) {
                score += 200;
                scorequiz.innerHTML = `Game score : ${score} pts`;
            }
            switch (score) {
                case 200:
                    badge.innerHTML = badge3;
                    break;
                case 400:
                    badge.innerHTML = badge2;
                    break;
                case 600:
                    badge.innerHTML = badge1;
                    break;
            }
            i++;
            getData();
          //  Change();
            if (i == quiz.length - 1) {
                click();
            }
        });
    });

//Change();

// function checkscore(){
//                 switch (score) {
//                 case 200:
//                     badge.innerHTML = badge3;
//                     break;
//                 case 400:
//                     badge.innerHTML = badge2;
//                     break;
//                 case 600:
//                     badge.innerHTML = badge1;
//                     break;
//             }
// }

congratsTitle = document.getElementById("congrats-title");
congratsEmojis = document.getElementById("congrats-emojis");
congartsDescription = document.getElementById("congart-description");
congratsScore = document.getElementById("congrats-score");
recompense = document.getElementById("recompense");

function click() {
    document.querySelector(".quiz-header").style.display = "none";
    document.querySelector(".quiz-body").style.display = "none";
    document.querySelector(".home-header").style.display = "flex";
    document.querySelector(".body-concrats").style.display = "flex";

    let congratScore = `${score / 200} of ${quiz.length} questions answered correctly!`;
    let recompensewinner = `<div id="trophy"><img class="trophy" src="images/Trophy-winner.png" alt=""></div><div class="congrat-score">
    <h5 id="congrat-score"><br>SCORE : <br><br>${score} PTS</h5>
            <div class="badging" id="badge">
            <img class="badge-congrats" src="images/1er.png" alt="">
            </div>
    </div>`;
    let recompenseloser = `<div id="trophy"><img class="trophy" src="images/Trophy-loser.png" alt=""></div><div class="congrat-score">
    <h5 id="congrat-score"><br>SCORE : <br><br>${score} PTS</h5>
            <div class="badging" id="badge">
            <img class="badge-congrats" src="images/3nd.png" alt="">
            </div>
    </div>`;
    if(score >= 600){
        recompense.innerHTML = recompensewinner;
    } else {
        recompense.innerHTML = recompenseloser;
    }
    congratsScore.innerHTML = congratScore;
    congrat();
}




let winnerTitle = "You've successfully completed the quiz";
let winnerEmojis = `<img src="images/winner-emojis1.png" alt=""> <img src="images/winner-emojis2.png" alt=""> <img src="images/winner-emojis3.png" alt="">`;
let winnerDescription = "You've answered all the questions correctly and showcased your programming prowess. That's an outstanding result, and we're incredibly proud of you! <br><br> Keep honing your skills and exploring the exciting world of programming. <br><br> Remember, every challenge is an opportunity for growth!";

let loserTitle = "Oh no! Keep going";
let loserEmojis = `<img src="images/loser-emojis1.png" alt=""> <img src="images/loser-emojis2.png" alt=""> <img src="images/loser-emojis3.png" alt="">`;
let loserDescription="Don't worry though! Mistakes are part of learning. Take this as an opportunity to review and improve. <br><br>You're making progress! Keep up the effort and don't give up. Learning is a journey, and every step forward counts."

function congrat() {
    if (score >= 400){
        congratsTitle.innerHTML = winnerTitle;
        congratsEmojis.innerHTML = winnerEmojis;
        congartsDescription.innerHTML = winnerDescription;
    } else {
        congratsTitle.innerHTML = loserTitle;
        congratsEmojis.innerHTML = loserEmojis;
        congartsDescription.innerHTML = loserDescription;
    }
}
