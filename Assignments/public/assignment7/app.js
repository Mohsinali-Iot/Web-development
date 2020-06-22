function clearR()
{
    var clr=document.getElementById("txt");
    clr.value= ""

}

function number(num)
{
    let r=document.getElementById("txt")
    r.value+=num
}

function getresult()
{
    let r=document.getElementById("txt")
    r.value=eval(r.value)
}