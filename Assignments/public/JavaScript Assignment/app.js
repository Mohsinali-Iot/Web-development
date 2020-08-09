                //Assignment of Chapter 39-67


                            // Chapters 39-42

    // Q1:

    // let ans=1;
    // let i=0;
    // function pwr(a,b){
    //     while(i<b){
    //         ans=ans*a;
    //         i++
    //         if (i===b)
    //         {
    //             break
    //         }
    //     }
    //     return ans
    // }
    // let a=+prompt("Enter you desired number to find power of that number" + "<br>");
    // let b=+prompt("Enter your power of that value")
    // let p=pwr(a,b);
    // document.write(a + "<sup>" + b + "</sup>" + "=" + p)


    // Q2:
    // function lyear(a)
    // {
    //     if (a%4==0){
    //         console.log(a + " is a leap year")
    //     }
    //     else
    //     {
    //         console.log(a + " is not a leap year")
    //     }
    // }
    // let year=+prompt("Enter year:")
    // lyear(year)


    // Q3:
    // function Calculate_S(a,b,c)
    // {
    //     let s=(a+b+c)/2
    //     return s
    // }
    // function Calculate_area(a,b,c)
    // {
    //     let s=Calculate_S(a,b,c)
    //     let ar=s*(s-a)*(s-b)*(s-c);
    //     console.log(ar)
    // }
    // Calculate_area(3,2,3)


    // Q4:

    // let total_marks=250;
    // let total_sub=3;
    // let sub1=80;
    // let sub2=90;
    // let sub3=43;
    // function average(m1,m2,m3){
    //     let average=(m1+m2+m3)/total_sub;
    //     return average
    // }
    // function percentage(a,b,c){
    //     let s=a+b+c;
    //     let per=(s*100)/total_marks;
    //     return per
    // }
    // let avg=average(sub1,sub2,sub3);
    // let per=percentage(sub1,sub2,sub3);
    // console.log("average is : " + avg)
    // console.log("percentage is : " + per)


    // Q5:
    
    // function cindex(a)
    // {
    //     let text="Hello world"
    //     let count=0;
    //     for (i=0;i<text.length;i++)
    //     {
    //         let b=text.slice(i,i+1)
    //         // document.write(b)
    //         if(b===a)
    //         {
    //             return count  
    //         }
    //         else{
    //             count++
    //         }
    //     }
    // }
    // let indexval=cindex("w")
    // document.write(indexval)


    // Q6:

    // let text="Karachi is called the city of light of Pakistan".toLowerCase();
    // document.write(text + "<br>");
    // Eliminate_vowel(text)
    // function Eliminate_vowel(text)
    // {
    //     for(i=0;i<text.length;i++)
    //     {
    //         let a=text.slice(i,i+1)
    //         if(a==='a' || a==='e' || a==='i' || a==='o' || a==='u')
    //         {
    //             text=text.replace(a,"");
    //         }
    //         else{
    //             continue
    //         }
    //     }
    //     document.write(text)
    // }


    // Q7:

    // let count=0;
    // let text="Pleases read this application and give me gratuity"
    // for(i=0;i<text.length;i++){
    //     let a=text.slice(i,i+2)
    //     switch(a){
    //         case "aa":
    //             count++
    //             break;
    //         case "ae":
    //             count++
    //             break;
    //         case "ai":
    //             count++
    //             break;
    //         case "ao":
    //             count++
    //             break;
    //         case "au":
    //             count++
    //             break;
    //         case "ea":
    //             count++
    //             break;
    //         case "ee":
    //             count++
    //             break;
    //         case "ei":
    //             count++
    //             break;
    //         case "eo":
    //             count++
    //             break;
    //         case "eu":
    //             count++
    //             break;
    //         case "ia":
    //             count++
    //             break;
    //         case "ie":
    //             count++
    //             break;
    //         case "ii":
    //             count++
    //             break;
    //         case "io":
    //             count++
    //             break;
    //         case "iu":
    //             count++
    //             break;
    //         case "oa":
    //             count++
    //             break;
    //         case "oe":
    //             count++
    //             break;
    //         case "oi":
    //             count++
    //             break;
    //         case "oo":
    //             count++
    //             break;
    //         case "ou":
    //             count++
    //             break;
    //         case "ua":
    //             count++
    //             break;
    //         case "ue":
    //             count++
    //             break;
    //         case "ui":
    //             count++
    //             break;
    //         case "uo":
    //             count++
    //             break;
    //         case "uu":
    //             count++
    //             break;
    //         default:
    //             count=count+0;
    //     }

    // }
    // document.write(count)



    // Q8:

    // function meter(dis){
    //     let meters=dis*1000
    //     return meters
    // }
    // function inche(dis)
    // {
    //     let inche=dis*39370.0787
    //     return inche
    // }
    // function feet(dis)
    // {
    //     let feet=dis*3280.8399
    //     return feet
    // }
    // function cen_meter(){
    //     let centimeter=dis*100000
    //     return centimeter
   
    // }
    // let dis=+prompt("Enter distance in Kilometer(KM):")
    // let mtr=meter(dis).toFixed(3)
    // let feets=feet(dis).toFixed(3)
    // let inches=inche(dis).toFixed(3)
    // let cm=cen_meter(dis).toFixed(3)
    // document.write("Distance in meter: " + mtr +"<br>")
    // document.write("Distance in feet: " + feets +"<br>")
    // document.write("Distance in inches: " + inches +"<br>")
    // document.write("Distance in centimeter: " + cm +"<br>")


// Q9:

// function Cal_over_time_pay(Worked_hrs)
// {
//     let Over_time=Worked_hrs-40;
//     if (Over_time>0)
//     {
//         let amount=12.00*Over_time;
//         document.write("You worked " + Over_time + " hours overtime Your overtime pay amount is: " + amount)
//     }
//     else{
//         document.write("Sorry you not work over time")
//     }
// }
// Cal_over_time_pay(50)


// Q10:


// let val=+prompt("Enter you withdraw amount:")
// let hundred=val/100;
// hundred=parseInt(hundred)
// let ten=val%100;
// let unit=ten%50;
// ten=ten/50;
// unit=unit/10;
// ten=parseInt(ten)
// document.write("You will have " + hundred + " hundreds notes " + ten + " fifty notes " + unit + " ten notes ")




                                // Chapters 43-48



// Q1:

// Coding is in indexe.html

// Q2:


// Coding in in index.html


// Q3:

// function deleted(r)
// {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("Tab").deleteRow(i);
// }



// Q4:

// Code in index.html file



// Q5:

// var ids=document.getElementById("counter")
// let c=0
// let cnt;
// function i_count()
// {
//     c++
//     ids.innerHTML=c
// }
// function d_count()
// {
//     c--
//     ids.innerHTML=c
// }
// function inc()
// {
//     cnt=setTimeout(i_count,0)
// }
// function dec()
// {
//     cnt=setTimeout(d_count,0)
// }
// function reset()
// {
//     c=0
//     ids.innerHTML=0
// }




                // Chapter 48-52



// Q1:


// var id1=document.getElementById("ot")
// function sub()
// {
//     var form=document.getElementById("f")
//     // var id1=document.getElementById("ot")
//     var id11=document.getElementById("fnm")
//     var id22=document.getElementById("lnm")
//     var id33=document.getElementById("email")
//     var id44=document.getElementsByName("gender")
//     var id55=document.getElementById("date")
//     console.log(id44[0].value)

//     id1.innerHTML="FirstName: " + id11.value + "<br>";
//     id1.innerHTML+="LastName: " + id22.value + "<br>"
//     id1.innerHTML+="Email: " + id33.value + "<br>"
//     id1.innerHTML+="Date Of Birth: " + id55.value + "<br>"
//     for(i=0;i<id44.length;i++)
//     {
//         if (id44[i].checked)
//         {
//             id1.innerHTML+="Gender: " + id44[i].value + "<br>"
//         }
//     }
//     f.remove()
//     var h=document.getElementById("heading")
//     h.innerHTML="Your Data"

// }





// Q2:


// var id=document.getElementById("para")
// function read_full_details()
// {
//     var details="Brand: Samsung <br> Model: Galaxy J5 <br> Battery: 2200 mA <br> price: 25000 Rs"
//     id.innerHTML=details
// }




// Q3:




// var fnm=document.getElementById('fname')
// var lnm=document.getElementById("lname")
// var gender=document.getElementById("tgender")
// var email=document.getElementById("temail")
// var tdob=document.getElementById('tdob')
// var ffstnm=document.getElementById("fstnm")
// var llstnm=document.getElementById("lstnm")
// var em=document.getElementById("em")
// var dob=document.getElementById("dtofb")

// var frm=document.getElementById("f")

// function sub()
// {
//     var gen=document.getElementsByName("gender")

//     var fstname=ffstnm.childNodes[2].value
//     var lstname=llstnm.childNodes[2].value
//     var emails=em.childNodes[2].value
//     var date=dob.childNodes[3].value
//     var tab=document.getElementById("tab")
//     var r1=tab.insertRow(1)
//     for(i=0;i<6;i++)
//     {
//         c=r1.insertCell(i)
//         if (i===0){
//             c.innerHTML=fstname
//         }
//         else if(i===1)
//         {
//             c.innerHTML=lstname
//         }
//         else if(i===2){
//             for (k=0;k<gen.length;k++){
//                 if (gen[k].checked)
//                 {
//                     c.innerHTML=gen[k].value
//                 }
//             }
//         }
//         else if(i===3)
//         {
//             c.innerHTML=emails
//         }
//         else if(i===4)
//         {
//             c.innerHTML=date
//         }
//         else if(i===5)
//         {
//             var b1 = document.createElement("BUTTON");
//             b1.onclick=function(){
//                 deleted(this)
                
//             }
//             var del = document.createTextNode("Delete")
//             b1.appendChild(del);
//             c.appendChild(b1)
//             var b2 = document.createElement("BUTTON");
//             b2.onclick=function(){
//                 edit(this)
//             }
//             var ins = document.createTextNode("Edit");
//             b2.appendChild(ins);
//             c.appendChild(b2);
//         }
//     }
//     ffstnm.childNodes[2].value=""
//     llstnm.childNodes[2].value=""
//     em.childNodes[2].value=""
//     dob.childNodes[3].value=""
    

// }
// function deleted(r){
//         var i= r.parentNode.parentNode.rowIndex
//         document.getElementById("tab").deleteRow(i);
// }
// function edit(r){
//     var fstname=ffstnm.childNodes[2]
//     var lstname=llstnm.childNodes[2]
//     var emails=em.childNodes[2]
//     var date=dob.childNodes[3]
//     var gen=document.getElementsByName("gender")

//     for (m=1; m<6;m++)
//     {
//         if(m===1){
//             var i= r.parentNode.parentNode.childNodes[0]
//             fstname.value=i.innerHTML
//         }
//         else if(m===2)
//         {
//             var i= r.parentNode.parentNode.childNodes[1]
//             lstname.value=i.innerHTML
//         }
//         else if(m===3)
//         {
//             var i= r.parentNode.parentNode.childNodes[2]
//             if(i.innerHTML==="male")
//             {
//                 gen[0]=gen[0].checked
//             }
//             else if(i.innerHTML==="female"){
//                 gen[1]=gen[1].checked
//             }
//         }
//         else if(m===4)
//         {            
//             var i= r.parentNode.parentNode.childNodes[3]
//             emails.value=i.value

//         }
//         else if(m===5)
//         {
//             var i= r.parentNode.parentNode.childNodes[4]
//             date.value=i.innerHTML
//         }
//     }
// }






// Chapters 58-67




// Q1(i):


// var main_id=document.getElementById("main-content")
// console.log(main_id)



// Q1(ii):


// var main_id=document.getElementById("main-content").childNodes

// for (i=0;i<main_id.length;i++)
// {
//     var t=main_id[i].nodeType
//     // console.log(t)
//     if(t===1)
//     {
//         console.log(main_id[i])
//     }
// }




// // Q1(iii):


// var c=document.getElementsByClassName("render")
// document.write("<hr>" + "Output from javascript" + "<br>" + "<hr>")
// for (i=0;i<c.length;i++)
// {
//     var t=c[i].nodeType
//     if (t===1)
//     {
//         document.write(c[i].innerHTML + "<br>") 
//     }
// }




// Q1(iv-v):


// var fnm=document.getElementById('first-name')
// var lnm=document.getElementById('last-name')
// var em=document.getElementById('email')
// var cfnm=document.getElementsByClassName("render")
// fnm.value=cfnm[0].innerHTML
// lnm.value=cfnm[1].innerHTML
// em.value=cfnm[2].innerHTML




// Q2(i)


// var f=document.getElementById('form-content')
// console.log(f.nodeType)


// // Q2(ii)

// var l=document.getElementById('lastName')
// console.log(l.nodeType)
// console.log(l.childNodes)



// Q2(iii)

// var l=document.getElementById('lastName')
// console.log(l.nodeType)
// console.log(l.childNodes)
// var b=document.createElement('b')
// var t=document.createTextNode("Mohsin")
// b.appendChild(t)
// l.appendChild(b)
// console.log(l.childNodes)


// Q2(iv)


// var main=document.getElementById("main-content")
// console.log(main.firstChild)
// console.log(main.lastChild)



// Q2(v)


// var l=document.getElementById('lastName')
// console.log(l.nextSibling)
// console.log(l.previousSibling)





// Q2(vi)

// var em=document.getElementById("email")
// console.log(em.parentNode)
// console.log(em.nodeType)