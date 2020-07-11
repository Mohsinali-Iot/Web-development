var min=0;
var sec=0;
var msec=0;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var text1=document.getElementById("text1");
var text2=document.getElementById("text2");
var text3=document.getElementById("text3");
var c=0;
var interval;
var condition;
const StButton=document.getElementById("stbtn");
const StpButton=document.getElementById("stpbtn");
const RsetButton=document.getElementById("rsetbtn");
const Records=document.getElementById("rec");
Records.disabled=true;

function timer(){
    msec++
    msecHeading.innerHTML=msec;
    if(msec>=100)
    {
        sec++
        msec=0;
        secHeading.innerHTML=sec;
    }
    else if(sec>=60){
        min++
        sec=0;
        minHeading.innerHTML=min;

    }
}
function start()
{
    interval=setInterval(timer,10);
        StButton.disabled=true;
        StpButton.disabled=false;
        RsetButton.disabled=false;
        Records.disabled=false;
}
function stop()
{
    clearInterval(interval);
    StButton.disabled=false;
    StpButton.disabled=true;
    Records.disabled=true;
}
function reset()
{
    msec=0;
    sec=0;
    min=0;
    msecHeading.innerHTML=msec;
    secHeading.innerHTML=sec;
    minHeading.innerHTML=min;
    clearInterval(interval);
    StpButton.disabled=true;
    StButton.disabled=false;
    RsetButton.disabled=true
    Records.disabled=true;
    text1.innerHTML="";
    text2.innerHTML="";
    text3.innerHTML="";


}
function record()
{
        if(c==0)
        {
            text1.innerHTML="";
            c++
        }
        text1.innerHTML+=min + ":" + sec + ":" + msec + "<br>";
        // text1.innerHTML+=text1;
}