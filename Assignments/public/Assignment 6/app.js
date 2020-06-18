
                                        // Chapter no 21-25 


// Ques no 1:

    // let F_Name=prompt("Enter first name:").toUpperCase()
    // let L_Name=prompt("Enter last name:").toUpperCase()
    // let Full_Name=F_Name+" " + L_Name
    // alert("Welcome " + Full_Name + " to this page")


// Ques no 2:


    // let Mobile=prompt("Enter you favourite mobile:")
    // let len=Mobile.length;
    // document.write("Your Favourite mobile is: " + Mobile)
    // document.write("<br>")
    // document.write("Length of string is: " + len)



// Ques no 3:


    // var country="Pakistani";
    // for (i=0;i<country.length;i++)
    // {
    //     if (country[i]==='n' || country[i]==='N')
    //     {
    //         document.write("String: " + country + "<br>")
    //         document.write("Index of 'n': " + i)
    //     }
    //     else
    //     {
    //         continue
    //     }
    // }


// Ques no 4:


    // let s="Hello World"
    // let index;
    // for (i=0;i<s.length;i++)
    // {
    //     if (s[i]==="l" || s[i]==='L')
    //     {
    //         index=i;
    //         continue;
    //     }
    // }
    // document.write("String: " + s + "<br>")
    // document.write("Last index of 'l': " + index)



// Ques no 5:


    // let c="Pakistani"
    // let i=c.charAt(3)
    // document.write("String: " + c + "<br>")
    // document.write("Charater at index 3 is: " + i)


// Ques 6:

    // let F_Name=prompt("Enter first name:").toUpperCase()
    // let L_Name=prompt("Enter last name:").toUpperCase()
    // let Full_Name=F_Name.concat(" ",L_Name)
    // alert("Welcome " + Full_Name + " to this page")



// Ques no 7:


    // let city="Hyderabad"
    // document.write("City: " + city + "<br>")
    // for (i=0;i<city.length;i++)
    // {
    //     if (city.slice(i,5)==="Hyder")
    //     {
    //         document.write("After replacing: Islam" + city.slice(i+5)  )
    //     }
    // }


// Ques no 8:


    // var message = "Ali and Sami are best friends. They play cricket and football together."
    // let a=message.replace("and","&")
    // document.write(a)


// Ques no 9;


    // let value="472"
    // document.write("Value: " + value + "<br>")
    // document.write("Type: " + typeof(value) + "<br>")
    // value=Number(value)
    // document.write("Value: " + value + "<br>")
    // document.write("Type: " + typeof(value) + "<br>")


// Question no 10


    // let val=prompt("Enter you value:")
    // document.write("User Input: " + val + "<br>")
    // val=val.toUpperCase()
    // document.write("Upper Case: " + val + "<br>")



// Question no 11


        // let val=prompt("Enter you value:")
        // document.write("User Input: " + val + "<br>")
        // val1=val.slice(0,1).toUpperCase();
        // val2=val.slice(1,val.length)  
        // document.write("User Case: " + val1 + val2 + "<br>")



// Ques no 12


    // var num=35.36;
    // document.write("Number: " + num + "<br>")
    // num=num.toString().replace(".","")
    // document.write("Result: " + num)



// Ques n0 13:



    // let inn=prompt("Enter your username:")
    // let flaged;
    // let codes=inn.charCodeAt()
    // for (i=0;i<inn.length;i++)
    // {
    //     let codes=inn[i].charCodeAt()
    //     if (codes===33 || codes===44 || codes===46 || codes===64)
    //     {
    //         document.write(codes + "<br>")
    //         flaged=0;
    //         break;
    //     }
    //     else
    //     {
    //         flaged=1;
    //     }
    // }
    // document.write(flaged)
    // if (flaged===1)
    // {
    //     alert(inn + "you succesfully logined")
    // }
    // else
    // {
    //     alert("Please enter a valid username")

    // }



// Ques no 14:



    // let A = ["cake", "apple pie", "cookie", "chips", "patties"]
    // let inp=prompt("WELCOME TO Akram's Bakery What do you want to order sir/ma'am?")
    // inp=inp.toLowerCase()
    // let flag=false;
    // let i;
    // for (i=0; i<A.length; i++)
    // {
    //         if (A[i]===inp){
    //                 flag=true
    //                 break
    //         }
    // }
    // if (flag===true)
    // {
    //         document.write(inp + " is <b>available</b> at index " + i + " " + "in our bakery ")
    // }
    // else
    // {
    //         document.write("We are sorry " + inp + " " + "is <b>not available</b> in our bakery")

    // }





// Ques no 15:


    // let passwd=prompt("Enter you password: ")
    // let bool;
    // if (passwd.length>=6)
    // {
    //     if ((passwd[0].charCodeAt()>=65) && (passwd[0].charCodeAt()<=90) || (passwd[0].charCodeAt()>=97) && (passwd[0].charCodeAt()<=122))
    //     {
    //         for(i=0;i<passwd.length;i++)
    //         {
    //             if (passwd[i].charCodeAt()>=48 && passwd[i].charCodeAt()<=57)
    //             {
    //                 bool=true;
    //             }
    //             else
    //             {
    //                 bool=false;
    //             }
    //         }
    //         if (bool!==true)
    //         {
    //             document.write("Entered Password: " + passwd + "<br>")
    //             document.write("Sorry Please enter a valid password <br> your Password must contain numbers plus letter")                
    //         }
    //     }
    //     else
    //     {
    //         document.write("Entered Password: " + passwd + "<br>")
    //         document.write("Sorry Please enter a valid password <br> your Password cannot begin with number")
    //     }
    // }
    // else
    // {
    //     document.write("Entered Password: " + passwd + "<br>")
    //     document.write("Sorry Please enter a valid password <br> your Password should atleast 6 character long")

    // }



    // Ques no 16:


        // var university = "University of Karachi";
        // a=university.split('') 
        // for (i=0;i<university.length;i++)
        // { 
        //     document.write(a[i] + "<br>")
        // }


// Ques no 17:


    // let inpp=prompt("Enter you input:")
    // inpp1=inpp.charAt(inpp.length-1)
    // document.write("User input: " + inpp + "<br>")
    // document.write("Last character of input is: " + inpp1 + "<br>")



// Ques no 18:


    // let text="The quick brown fox jumps over the lazy dog."
    // let count=0;
    // for (i=0;i<text.length;i++)
    // {
    //     if((text.slice(i,i+3)==="the") || (text.slice(i,i+3)==="The") || (text.slice(i,i+3)==="THE"))
    //     {
    //         count=count+1;
    //     }
    // }
    //     document.write("Text: " + text + "<br>")    
    // document.write("There are " + count + " occurrences of word “the” ")




                                        // Chapter 26-30    


// Ques no 1:


    // let num=+prompt("Enter your number (number should be positive number)")
    // if (num>0)
    // {
    //     document.write("Number: " + num + "<br>")
    //     document.write("Round off value: " + Math.round(num) + "<br>")
    //     document.write("Floor value: " + Math.floor(num) + "<br>")
    //     document.write("Ceil value: " + Math.ceil(num) + "<br>")
    // }
    // else
    // {
    //     document.write("please enter correct number")
    // }


// Ques no 2:


    // let num=+prompt("Enter your number (number should be negative number)")
    // if (num<0)
    // {
    //     document.write("Number: " + num + "<br>")
    //     document.write("Round off value: " + Math.round(num) + "<br>")
    //     document.write("Floor value: " + Math.floor(num) + "<br>")
    //     document.write("Ceil value: " + Math.ceil(num) + "<br>")
    // }
    // else
    // {
    //     document.write("please enter correct number")
    // }




// Ques no 3:


    // let num=+prompt("Enter your number (number should be negative number)")
    // if (num<0)
    // {
    //     document.write("Absolute value of " + num + " is " + Math.abs(num) + "<br>")
    // }
    // else
    // {
    //     document.write("please enter correct number")
    // }


// Ques no 4:

    // let dice=Math.random()
    // dice=(dice*6);
    // document.write("Random dice value: " + Math.ceil(dice))


// Ques no 5:



    // let num=Math.random()*2;
    // let toss=Math.ceil(num);
    // if (toss===2)
    // {
    //     document.write("Random Coin value: Head")
    // }
    // else if (toss===1)
    // {
    //     document.write("Random Coin value: Tail")
    // }


// Ques no 6:


    // let num=Math.random()*100;
    // num=Math.ceil(num)
    // document.write("Random number between 1 and 100: " + num)


// Ques no 7:

    // let inpp=parseFloat(prompt("Enter weight in kilograms:"))
    // document.write("The weight of user is " + inpp + " kilograms" )


// Ques no 8:



    // let random=Math.random()*10
    // random=Math.floor(random)
    // let inpp=+prompt("Enter your number ranging from 1 to 10")
    // if(random===inpp)
    // {
    //     document.write("Congratulations you guessed correct number")
    // }
    // else
    // {
    //     document.write("Try Again")

    // }



                                        // chapter # 31-34



// Ques no 1:

    // let d=new Date();
    // document.write(d)


// Ques no 2:


    // let months=["January","February" ,"March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
    // let d=new Date().getMonth();
    // document.write("Current Month: " + months[d])


// Ques no 3:

    // var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // let d=new Date().getDay();
    // document.write("Current Month: " + day[d])


// Ques no 4:


    // var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // let d=new Date().getDay()
    // if (d===0 || d===6)
    // {
    //     document.write("It’s Fun day")
    // }


// Ques no 5:

    // let date=new Date().getDate()
    // if (date<15)
    // {
    //     document.write("First fifteen days of the month")
    // }
    // else 
    // {
    //     document.write("Last days of the month")
    // }



// Ques no 6:

    // let d=new Date();
    // let time=d.getTime()
    // document.write(d + "<br>")
    // document.write("Elappsed in millisecond since January 1 1970: " + time + "<br>")
    // document.write("Elappsed in minutes since January 1 1970: " + time/(1000*60) + "<br>")
    // document.write("Elappsed in minutes since January 1 1970: " + time/(1000*60*60*24*30*12) + "<br>")


// Ques no 7:


    // let t=new Date().getHours();
    // if (t<12){
    //     document.write("It's AM")
    // }
    // else
    // {
    //     document.write("It's PM")
    // }


// Ques no 8:


    // var Later_Date = new Date("December 31, 2020");
    // document.write(Later_Date)


// Ques no 9:

    // let total=new Date().getTime();
    // let day_from_ramzan=new Date("May 23, 2020").getTime()
    // let diff=total-day_from_ramzan;
    // document.write(Math.round(diff/(1000*60*60*24)) + " Days passed from 1st Ramadan 2020" + "<br>")


// Ques no 10:



// let R_D=new Date()
// let d=new Date("Jan 01,2020").getTime();
// let diff=(R_D.getTime()-d)/(1000*60)
// document.write("On reference date " + R_D + " " + Math.round(diff) + " second has passed since begining of 2020" )



// Ques no 11:



    // let h=new Date()
    // let h_1=new Date();
    // h_1.setHours(h_1.getHours()-1)
    // document.write("Current Date: " + h + "<br>")
    // document.write("1 hour ago it was: " + h_1)



// Ques no 12:


    // let C_D=new Date()
    // let P_D=new Date();
    // P_D.setFullYear(P_D.getFullYear()-100)
    // document.write("Current Date: " + C_D + "<br>")
    // document.write("100 years ago it was: " + P_D)



// Ques no 13:


    // let age=+prompt("Enter your age:")
    // let C_Y=new Date().getFullYear();
    // let B_Y=C_Y-age;
    // document.write("Your age year is: " + B_Y)



// Ques no 14:


// document.write("<h1>K-Electric Bill</h1>")
// let C_Name=prompt("Enter customer name:")
// let months=["January","February" ,"March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
// let C_Month=new Date().getMonth();
// let Number_Of_Units=410;
// let Charges=16
// let Gross_Amount=Number_Of_Units*16+350;

// document.write("Customer Name: " + "<b>" + C_Name + "</b> <br>")
// document.write("Current Month: " + "<b>" +  months[C_Month] + "</b> <br>")
// document.write("Number of units: " + "<b>" +  Number_Of_Units + "</b> <br>")
// document.write("Charges per units: " + "<b>" +  Charges + "</b> <br>")
// document.write("Net amount payable (within Due Date): " + "<b>" +  Number_Of_Units*16 + "</b> <br>")
// document.write("Late payment Surcharge: " + "<b>" +  350 + "</b> <br>")
// document.write("Gross Amount Payable (after Due Date): " + "<b>" +  Gross_Amount + "</b> <br>")




                                // chapter # 35-38




// Ques no 1:


    // function Get_Date()
    // {
    //     document.write(new Date())
    // }
    // Get_Date();


// Question no 2

    // function Get_Full_Name(First_N,Last_N)
    // {
    //     document.write("First-name is: " + First_N + "<br>" )
    //     document.write("Last-name is: " + Last_N + "<br>" )
    //     document.write("Full-name is: " + First_N + " " + Last_N)
    // }
    // Get_Full_Name("Salman","Ahmed")



// Question no 3:


    // function sum(num1,num2)
    // {
    //     return num1+num2
    // }
    // num1=+prompt("Enter 1st number ")
    // num2=+prompt("Enter 2nd number ")
    // let add=sum(num1,num2)
    // document.write("The sum of two numbers is: " + add)




// Question 4:


        // function cal(num1,num2 ,oper)
        // {
        //     if (oper==="+")
        //     {
        //         return num1+num2
        //     }
        //     else if (oper==="-")
        //     {
        //         return num1-num2
        //     }
        //     else if (oper==="*")
        //     {
        //         return num1*num2
        //     }
        //     else if (oper==="/")
        //     {
        //         return num1/num2
        //     }
        //     else
        //     {
        //         document.write("Wrong Operator please input correct operator (+,-,*,/)")
        //         return 0
        //     }
        // }
        // let num1=+prompt("Enter 1st number:")
        // let num2=+prompt("Enter 2nd number:")
        // let oper=prompt("Enter operation (+,-,*,/):")
        // let ans=cal(num1,num2,oper)
        // document.write(num1 + " " + oper + " " + " " + num2 + "=" +  " " + ans)



// Question no 5:


    // function sqr(a)
    // {
    //     return num*num
    // }
    // let num=+prompt("Enter your number: ")
    // document.write("Square of " + num + " is: " + sqr(num))



// Question no 6:


    // function fact(num)
    // {
    //     for(i=num-1;i>0;i--)
    //     {
    //         num=num*i
    //     }
    //     return num
    // }
    // let num=+prompt("Enter your number: ")
    // document.write("The Factorial of " + num + " is: " + fact(num))



// Question no 7;


    // function count(Start,End)
    // {
    //     for(i=Start;i<=End;i++)
    //     {
    //         document.write(i + "<br>")
    //     }
    // }
    // let num1=+prompt("Enter your Starting number: ")
    // let num2=+prompt("Enter your ending number: ")
    // count(num1,num2)


// Question no 8:


    // function hypo(base,perp)
    // {
    //     function sqr(square)
    //     {
    //         return square*square
    //     }
    //     let b=sqr(base);
    //     let p=sqr(perp)
    //     return b+p
    // }
    // let b=+prompt("Enter base of triangle: ")
    // let p=+prompt("Enter perp of triangle: ")
    // document.write("Square of hypotenuse of triangle is: " + hypo(b,p) + "<br>")
    // document.write("hypotenuse of triangle is: " + Math.sqrt(hypo(b,p)))



// Question no 9:


    // function Areas(w,h)
    // {
    //     A=w*h
    //     document.write("Area of Rectangle is: " + A + "<br>")
    // }
    // let a=9
    // let b=6
    // Areas(5,2)
    // Areas(a,b)



// Question no 10:

    // function palindrome(myString){

    //     var checkPalindrome = myString.split('').reverse().join('');
    //     document.write(checkPalindrome + "<br>")
        
    //     /* Check to see if myString is a Palindrome*/
    //     if(myString === checkPalindrome){
        
    //       document.write(myString + " is a Palindrome:");
    //     }else{
        
    //       document.write(myString + " is not a Palindrome");
    //     }
    //     }
    // var letter=prompt("Enter word:")
    // palindrome(letter)


// Question no 11:

    // function C_case(s)
    // {
    //     s.toLowerCase()
    //     let a=s.split(' ')
    //     for (i=0;i<a.length;i++)
    //     {
    //         let f=a[i].slice(0,1).toUpperCase()
    //         document.write(a[i].slice(0,1).toUpperCase() +  a[i].slice(1) + " ")
    //     }
    // }
    // let st="the quick brown fox"
    // C_case(st)



// Question no 12:

    // function longest_word(s)
    // {
    //     let t=s.split(' ')
    //     let largest=0
    //     let L_word;
    //     // document.write(t + "<br>")
    //     for (i=0;i<t.length;i++)
    //     {
    //         if (t[i].length<largest)
    //         {
    //             // largest=t[i+1]
    //             continue
    //         }
    //         else
    //         {
    //             largest=t[i].length
    //             L_word=t[i]
    //         }
    //     }
    //     document.write("Example String:" + s + "<br>")
    //     document.write("Largest word is:" + L_word + "<br>")

    // }
    
    // let s="Web Development Tutorials"
    // longest_word(s)
    



// Question no 13:

    // function counter(a,b)
    // {
    //     let s=a+b
    //     let c=0;
    //     for (i=0;i<s.length;i++)
    //     {
    //         if (s[i]==='o' || s[i]==='O')
    //         {
    //             c=c+1;

    //         }
    //         else
    //         {
    //             continue
    //         }
    //     }
    //     document.write("String is: " + a + " " + b + "<br>")
    //     document.write("Ocuurence of 'O' in the above string is: " + c)
    // }
    // counter("JSResourceS.com",'o')



// Question no 14:

    // const pi=3.142
    // function Cal_Circumference(radius)
    // {
    //     let c=2*pi*radius
    //     document.write("Circumference of a circle is: " + c + "<br>")
    // }
    // function Cal_Area(radius)
    // {
    //     let A=pi*radius**2
    //     document.write("Area of a circle is: " + A + "<br>")
    // }
    // let a=prompt("Enter radius of circle:")
    // Cal_Circumference(a)
    // Cal_Area(a)

