let quiz=[
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
    }
]
let title=document.getElementById("title")
let description=document.getElementById("description")
let qts=document.getElementById("qts")
let response=document.getElementById("response")

let i=0
function getData(){
    title.innerHTML=quiz[i].title;
    description.innerHTML=quiz[i].description;
    qts.innerHTML=quiz[i].question;
    for(let j=0;j<quiz[i].response.length;j++){
        response.innerHTML+=
        `  <button id="rst" class="rst">${quiz[i].response[j]}</button>`
    }


}

getData();


function Change(){
    document.querySelectorAll(".rst").forEach((e)=>{
        e.addEventListener("click",function(){
            if(quiz[i].response.length>0 && i <quiz[i].response.length - 2 ){
                response.innerHTML=""
                i++;
                getData();
                Change();
            }
        })
    })
}
Change();