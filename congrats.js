congratsTitle=document.getElementById("congrats-title")
congratsEmojis=document.getElementById("congrats-emojis")
congartsDescription=document.getElementById("congart-description")
congratsScore=document.getElementById("congrats-score")
recompense=document.getElementById("recompense")

let congratTitle= 'You"ve successfully completed the quiz'
    
let congratEmojis=`<img src="images/winner-emojis1.png" alt=""> <img src="images/winner-emojis2.png" alt=""> <img src="images/winner-emojis3.png" alt="">`
let congartDescription='You"ve answered all the questions correctly and showcased your programming prowess. That"s an outstanding result, and we"re incredibly proud of you! <br><br> Keep honing your skills and exploring the exciting world of programming. <br><br> Remember, every challenge is an opportunity for growth!'
let congratScore=`${score/200} of ${quiz.length} question correctly!`
let recompensec=`<img class="trophy" src="images/Trophy-winner.png" alt="">
<div class="congrat-score">
    <h5 id="congrat-score"><br>SCORE : <br><br>${score} PTS</h5>
    <div id="badge">
        <img id="congrat-badge" class="badge-congrats" src="images/1er.png" alt="">
    </div>
</div>`

function congrat(){
    congratsTitle.innerHTML=congratTitle;
    congratsEmojis.innerHTML=congratEmojis;
    congartsDescription.innerHTML=congartDescription;
    congratsScore.innerHTML=congratScore;
    recompense.innerHTML=recompensec;
}
congrat();