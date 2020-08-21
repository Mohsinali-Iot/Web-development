var getid=document.getElementById("tabdiv")
var tab=document.createElement('table')
tab.setAttribute('id','tab')
tab.setAttribute('cellpadding','10')
tab.setAttribute('border','1px')
var trow=document.createElement('tr')
var th1=document.createElement('th')
th1.appendChild(document.createTextNode("ID"))
var th2=document.createElement('th')
th2.appendChild(document.createTextNode("Name"))
var th3=document.createElement('th')
th3.appendChild(document.createTextNode("Roll No"))
var th4=document.createElement('th')
th4.appendChild(document.createTextNode("Delete"))
var th5=document.createElement('th')
th5.appendChild(document.createTextNode("Edit"))
trow.appendChild(th1)
trow.appendChild(th2)
trow.appendChild(th3)
trow.appendChild(th4)
trow.appendChild(th5)
tab.appendChild(trow)
getid.appendChild(tab)

function savedata(){
    var name=document.getElementById("name")
    var roll_no=document.getElementById("roll")

    var key=firebase.database().ref('student').push().key
    var list=document.getElementById('list')
    student={
        nm:name.value,
        rollno:roll_no.value,
        keys:key,
    }
    // var tab=document.getElementById("tab")
    var tr=document.createElement('tr')
    tr.setAttribute('id',"tr")
    var td1=document.createElement('td')
    td1.innerHTML=key
    var td2=document.createElement('td')
    td2.innerHTML=name.value
    var td3=document.createElement('td')
    td3.innerHTML=roll_no.value
    var delbtn=document.createElement('button')
    var tdel=document.createTextNode("Delete")
    delbtn.appendChild(tdel)
    var editbtn=document.createElement('button')
    var tedit=document.createTextNode("Edit")
    editbtn.appendChild(tedit)
    var td4=document.createElement('td')
    td4.appendChild(delbtn)
    var td5=document.createElement('td')
    td5.appendChild(editbtn)

    delbtn.setAttribute('onclick','deleteone(this)')
    editbtn.setAttribute('onclick','editdata(this)')
    
    delbtn.setAttribute('id','deleteone')
    editbtn.setAttribute('id','editdata')
    

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    
    tab.appendChild(tr)
    getid.appendChild(tab)

    firebase.database().ref('student/' + key).set(student)  
    name.value=""
    roll_no.value=""
}
// function getdata()
// {

//     // var deletebtn=document.createElement('button')
//     // var btntext=document.createTextNode("Delete")
//     // var editbtn=document.createElement('button')
//     // var ebtntext=document.createTextNode("Edit")
//     // editbtn.appendChild(ebtntext)
//     // deletebtn.appendChild(btntext)
//     // deletebtn.setAttribute('onclick',"deleteone(this)")


//     var p=document.getElementById('p')
//     var para=document.createElement('p')
//     para.setAttribute("id","p1")
//     var list=document.getElementById('list')
//     firebase.database().ref('student/').on('child_added',function(data)
//     {
//         for(var i in data.val())
//         {
//             para.innerHTML+=data.val()[i] + "<br>"
//         }
//     })
//     p.appendChild(para)

// }

// function getselecteddata(){
//     var list=document.getElementById('list')
   
//     var r=firebase.database().ref('student/')
//     r.on('child_added',function(data){
//         var rec=data.val()
//         console.log(rec.name)
//         if(rec.name===inpname.value)
//         {
//             var li=document.createElement('li')
//             var delbtn=document.createElement('button')
//             var tdel=document.createTextNode("Delete")
//             var editbtn=document.createElement('button')
//             var tedit=document.createTextNode("Edit")
//             delbtn.setAttribute('id','delete')
//             editbtn.setAttribute('id','edit')
//             delbtn.setAttribute('onclick','deleteone(this)')
//             editbtn.setAttribute('onclick','editdata(this)')
            
//             delbtn.appendChild(tdel)
//             editbtn.appendChild(tedit)
//             var myArray = JSON.stringify(rec)
//             var tli=document.createTextNode(myArray)
//             li.appendChild(tli)
//             li.appendChild(delbtn)
//             li.appendChild(editbtn)
//             // li.appendChild(input)
//             list.appendChild(li)


//             console.log((rec))
//         }

//     })
// }



function editdata(id)
{
    var nm=document.getElementById('name')
    var rollno=document.getElementById('roll')
    var delkey=id.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue
    id.parentNode.parentNode.childNodes[1].innerHTML=nm.value
    id.parentNode.parentNode.childNodes[2].innerHTML=rollno.value
    firebase.database().ref('student/' + delkey).set({
        name:nm.value,
        roll_no:rollno.value,
        key:delkey
    })
    nm.value=""
    rollno.value=""

}
function deleteone(id)
{
    // console.log(id.parentNode.parentNode)
    id.parentNode.parentNode.remove()
    var delkey=id.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue
    firebase.database().ref('student/' + delkey).remove()
}
function deleteall(){

    console.log(getid)
    getid.innerHTML=""
    // var p1=document.getElementById('p')
    // console.log(tab)
    // p1.innerHTML=""
    // list.innerHTML=""
    firebase.database().ref('student').remove()
}

