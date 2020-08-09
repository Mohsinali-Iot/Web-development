var ques=[
    {
        Questions:"Question: What is 2+1",
        Options:[
            2,
            3,
            4,
            5
        ],
        Correct_Ans:"3",
    },
    {
        Questions:"What is 3*3",
        Options:[
            3,
            4,
            5,
            9
        ],
        Correct_Ans:"9",
    },
    {
        Questions:"Who was the inventor of Ctrl+C (copy), Ctrl+V (Paste ) and Ctrl+X (Cut)?",
        Options:[
            "Bill Gates",
            "Larry Tesler",
            "Christopher Latham Sholes",
            "David Sundstrand",
        ],
        Correct_Ans:"Larry Tesler"
    },
    {
        Questions:"Which of the following  is known as leap day or leap year day:",
        Options:[
            "Feb 29",
            "Feb 28",
            "March 1",
            "Feb 1",
        ],
        Correct_Ans:"Feb 29"
    },
    {
        Questions:"Where is the World’s longest sea bridge ?",
        Options:[
            "Japan",
            "Russia",
            "China",
            "None of these",
        ],
        Correct_Ans:"China"
    }
]
let c=0
var count=c
let score=0
var options=document.getElementById('alloptions')
var quesover=document.getElementById("quesans")
var scores=document.getElementById("score")
function counter(){
    if (c===ques.length)
    {
        quesover.innerHTML="<h2>Quiz Over</h2>"
    }
    else{
        myfunc(c)
    }
    
    c=c+1
}
function myfunc(e)
{
    var quest=document.getElementById("ques")
    quest.innerHTML=ques[e].Questions
    var options=document.getElementById('alloptions')
    options.childNodes[1].innerHTML=ques[e].Options[0]
    options.childNodes[3].innerHTML=ques[e].Options[1]
    options.childNodes[5].innerHTML=ques[e].Options[2]
    options.childNodes[7].innerHTML=ques[e].Options[3]
}
function passans(e)
{
    checkans(e,c)
    counter()
    scores.innerHTML="<b>Your Score:</b>" + score;
    
}
function checkans(id,c)
{
    console.log(id.childNodes[0].nodeValue)
    if(id.childNodes[0].nodeValue===ques[count].Correct_Ans)
    {
        score++
    }
    else{
        console.log(score)
    }
    count++

}
