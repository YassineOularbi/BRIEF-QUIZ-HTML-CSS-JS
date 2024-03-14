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
let badge3=`<img src="images/3nd.png" alt="">`
let badge2=`<img src="images/2nd.png" alt="">`
let badge1=`<img src="images/1er.png" alt="">`

let i=0
function getData(){
    title.innerHTML=quiz[i].title;
    description.innerHTML=quiz[i].description;
    question.innerHTML=quiz[i].question;
    for(let j=0;j<quiz[i].response.length;j++){
        response.innerHTML+=
        `  <button id="answer-button" class="answer-button">${quiz[i].response[j]}</button>`
    }
    compteur.innerHTML = `<p>Question ${i + 1}  of ${quiz.length}</p>`;
;}

getData();


function Change(){
    document.querySelectorAll(".answer-button").forEach((e)=>{
        e.addEventListener("click",function(){
            if(quiz[i].response.length>0 && i <quiz[i].response.length ){
                response.innerHTML=""
            }
            if (this.innerHTML == quiz[i].Correct) {
               score+=200; 
                scorequiz.innerHTML = `Game score : ${score} pts`;
            }
            switch (score){
                case 200:
                    badge.innerHTML=badge3;
                    break;
                case 400:
                    badge.innerHTML=badge2;
                    break;
                case 600:
                    badge.innerHTML=badge1;
                    break;
            }
            i++;
            getData();
            Change();
            passer();
        })
    })
}
Change();




function passer(){
    if(i==quiz.length -1){
        mafenetre = window.open("Congrats.html","Congratulation");
    }
}
passer();
