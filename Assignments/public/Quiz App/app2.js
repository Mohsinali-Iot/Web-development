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
        Questions:"What if your country name",
        Options:[
            "Pakistan",
            "Afghanistan",
            "Iran",
            "UAE",
        ],
        Correct_Ans:"Pakistan"
    },
]
let c=0;
var count=c;
let score=0;
var options=document.getElementById('alloptions')
function counter(){
    // alert("counter")
    if (c===ques.length)
    {
        alert("Quiz Over")
        alert("If you click OK then quiz will restart:")
        c=0;
    }
    myfunc(c)
    // checkans(id,c)
    // console.log(c)
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
    var opt1=document.getElementById('opt1')
    var opt2=document.getElementById('opt2')
    var opt3=document.getElementById('opt3')
    var opt4=document.getElementById('opt4')
    opt1.style.backgroundColor='white'
    opt1.style.color='black'
    opt2.style.backgroundColor='white'
    opt2.style.color='black'
    opt3.style.backgroundColor='white'
    opt3.style.color='black'
    opt4.style.backgroundColor='white'
    opt4.style.color='black'
    options.hidden
    // e.style.backgroundColor='black'
    // e.style.color='white'
    checkans(e,c)
    // counter()
    alert("Your Score:" + score )

}

function checkans(id,c)
{
    console.log(id)
    // alert('check function')
    // console.log(ques[0].Correct_Ans)
    console.log(id.childNodes[0].nodeValue)
    if(id.childNodes[0].nodeValue===ques[count].Correct_Ans)
    {
        // alert("Correct")
        score++
    }
    else{
        // alert('imcorrect')
        console.log(score)
    }
    count++
    // scores.innerHTML="Your Score:" + score
    // c++
}
