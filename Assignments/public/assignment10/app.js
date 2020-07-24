// var list=document.getElementById("list")
// function additems(){
//     var todo=document.getElementById("items")
//     var li=document.createElement("li")

//     // li.setAttribute("class","liist")
//     var text=document.createTextNode(todo.value)
//     li.appendChild(text)
//     list.appendChild(li)


//     var deletebtn=document.createElement('button')
//     var btntext=document.createTextNode("Delete")
//     deletebtn.setAttribute("id","dbtn")
//     deletebtn.setAttribute("onclick","deleteItem(this)")
//     deletebtn.appendChild(btntext)
//     li.appendChild(deletebtn)
//     var editbtn=document.createElement('button')
//     editbtn.setAttribute("id",'ebtn')
//     editbtn.setAttribute("onclick","editbutton(this)")
//     var ebtntext=document.createTextNode("Edit")
//     editbtn.appendChild(ebtntext)
//     li.appendChild(editbtn)
//     todo.value=""
//     // console.log(todo.value)
// }
// function deleteItem(b)
// {
//     b.parentNode.remove()
// }
// function editbutton(a)
// {
//     var edit=prompt("Enter you value",a.parentNode.childNodes[0].nodeValue)
//     a.parentNode.childNodes[0].nodeValue=edit
// }
// function dall()
// {
//     list.innerHTML=""

// }


























var list=document.getElementById("list")
function additems(){
    var todo=document.getElementById("items")
    var li=document.createElement("li")

    var text=document.createTextNode(todo.value)
    li.appendChild(text)
    var textn=document.createElement('div')
    textn.setAttribute('id','text')
    var textnode=document.createTextNode('')
    textn.appendChild(textnode)
    textn.appendChild(text)
    // console.log(textn)
    var rows=document.createElement("div")
    rows.setAttribute('id','rows')
    var trows=document.createTextNode('')
    rows.appendChild(trows)
    rows.appendChild(textn)
    list.appendChild(rows)
    var deletebtn=document.createElement('button')
    var btntext=document.createTextNode("Delete")
    deletebtn.setAttribute("id","dbtn")
    deletebtn.setAttribute("onclick","deleteItem(this)")
    deletebtn.appendChild(btntext)
    var del=document.createElement("div")
    del.setAttribute('id','delbtn')
    var tdel=document.createTextNode('')
    del.appendChild(tdel)
    del.appendChild(deletebtn)
    rows.appendChild(del)

    var ebtn=document.createElement('div')
    ebtn.setAttribute('id','eebtn')
    var tebtn=document.createTextNode('')
    ebtn.appendChild(tebtn)
    var editbtn=document.createElement('button')
    editbtn.setAttribute("id",'ebtn')
    editbtn.setAttribute("onclick","editbutton(this)")
    var ebtntext=document.createTextNode("Edit")
    editbtn.appendChild(ebtntext)
    ebtn.appendChild(editbtn)
    rows.appendChild(ebtn)
    console.log(rows)
    todo.value=""
}
function deleteItem(b)
{
    b.parentNode.parentNode.remove()
}
function editbutton(a)
{
    console.log(a.parentNode.parentNode.childNodes[1].childNodes[1].nodeValue)
    var edit=prompt("Enter you value",a.parentNode.parentNode.childNodes[1].childNodes[1].nodeValue)
    a.parentNode.parentNode.childNodes[1].childNodes[1].nodeValue=edit
}
function dall()
{
    list.innerHTML=""

}