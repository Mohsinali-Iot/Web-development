                                    // Chaper # 1 Alerts
// Question no 1:

    // alert("WELCOME TO OUR WEBSITE");


// Question no 2:

    // alert("Please enter a valid Password");


// Question no 3:

    // alert("Welcome to JS land\nHappy Coding!");

// Question no 4

        //    alert("Welcome to JS land")
        //    alert("Happy Coding")

// Question no 5:

    // console.log("Hello... I can run JS through my web browser console")




                                            // chapter # 2

// Question no 1


    // var username;

// Question no 2


    // var myName="Mohsin Ali"
    // alert(myName)

// Question no 3:
                        
    // message="Hello World"
    // alert(message)

// Question no 4:


    //  var username="Jhone Doe"
    //  var age="15 year old"
    //  var msg="Certified Mobile Application Development"
    //  alert(username)
    //  alert(age)
    //  alert(msg)

// Question no 5:

    //    let product;
    //    product="PIZZA"
    //    alert(product.slice(0,5)+ "\n" + product.slice(0,4) + "\n" + product.slice(0,3) + "\n" + product.slice(0,2) + "\n" + product.slice(0,1))

// Question no 6:
  
    // let email="mohsinali481997@gmail.com"
    // alert("My email Address is" + " " + email)


  // Question no 7:
    
        // let book="A smarter way to learn JavaScript" 
        // alert("I am trying to learn from the book" + " " + book)

// Question no 8:


//    document.write("Yah! I can write HTML content through javascript")


// Question 9:

        // var stng="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
        // alert(stng)
        // document.write(stng)



                                        // chapter # 3


                            
// Question no 1:

    //  var age
    //  age=22
    //  alert("My age is" + " " + (+age))


// Question no 2:

        <script type="text/javascript">

        var visits = GetCookie("counter");

        if (!visits) { visits = 1;

        document.write("By the way, this is your first time here.");

        }

        else {

        visits = parseInt(visits) + 1;

        document.write("I note, you have been here " + visits + " times.");}

     </script>   

//Question no 3:

    // let birthyear=1997;
    // document.write("My birth year is" + " " + birthyear + "<br> Data type of my declared variable is number")

//Question no 4:

    // var visitor_name="Jhone Doe"
    // var product="T-Shirts"
    // var quantity=5
    // document.write(visitor_name + " " + "has ordered" + " " + quantity + " " + product + " " + "on XYZ Clothing store")


                                            // Chapters # 4 

                    

// Question no 1:

        //  var var1,var2,var3

// Question no 2:

        // Illegal variables

        // var 1stnumber;
        // var !name;
        // var first name;
        // var alert;
        // var var;

        //Legal Variable

        // var first_num;
        // var first_Num;
        // var $word;
        // var number1;
        // var HELLO;



// Question no 3:

//    document.write("<h3> A heading stating Rules for naming JS variables</h3>  Variable names can only contain numbers, $ and _.  For example $my _1stVariable <br> Variables must begin with a numbers, $ or _. For example $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keyword  ")


//                                  chapter # 5


//Question no 1:

// var num1=3
// var num2=5
// var sum=num1+num2
// document.write("Sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + sum)



//Question no 2:

        // var num1=6
        // var num2=5
        // var diff=num1-num2
        // var mul =num1*num2
        // var div =num1/num2
        // var mod =num1%num2

        // document.write("Difference of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + diff + "<br>")
        // document.write("Muktiplication of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + mul + "<br>")
        // document.write("Divison of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + div + "<br>")
        // document.write("Modulus or remainder of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + mod + "<br>")



// Question no 3:


        // let number;
        // document.write("Value after variable declaration is: " + " " + number + "<br>")
        // number=5
        // document.write("Initial value: " + " " + number + "<br>")
        // number++
        // document.write("Value after increment is: " + " " + number + "<br>")
        // number=number+7
        // document.write("Value after addition is: " + " " + number + "<br>")
        // number--
        // document.write("Value after decrement is: " + " " + number + "<br>")
        // var output=number%3
        // document.write("The remainder is: " + " " + output + "<br>")


// Question no 4:


        // let price=600
        // document.write("Total cost to buy 5 tickets to a movie is: " + " " + price*5 + " " + "PKR" + "<br>")


// Question no 5:


        // var num=+prompt("Enter Your number: ")
        // document.write("Table of" + " " + num + "<br>")
        // for (i=1; i<=10; i++)
        // {
        //     document.write(num + " " + "*" + " " + i + " " + "=" + " " + num*i + "<br>")

        // }

    
// Question no 6:

        // var C_temp=+prompt("Enter your temperature in Celsius")
        // var F_temp=+prompt("Enter your temperature in Fahrenheit")
        // var Celsius=(C_temp*9/5)+32;
        // var Fahrenheit=(F_temp-32)*5/9;
        // document.write(C_temp  + "<sup>0</sup>C" +  " " + "is" + " " + Celsius + "<sup>0</sup>F" +  "<br>")
        // document.write(F_temp  + "<sup>0</sup>F" +  " " + "is" + " " + Fahrenheit + "<sup>0</sup>C")



// Question no 7:


        // let Item1_Price=650
        // let Item2_Price=100
        // let Quantity_Item1=3
        // let Quantity_Item2=7
        // let Shipping_Charges=100

        // let Total=(Item1_Price*Quantity_Item1)+(Item2_Price*Quantity_Item2)+Shipping_Charges
        // document.write("<h1>Shopping Cart</h1>")

        // document.write("Price of Item 1 is: " + Item1_Price + " " + "Rs"  + "<br>")
        // document.write("Quantity of Item 1 is: " + Quantity_Item1 + " " + "<br><br>")
        // document.write("Price of Item 2 is: " + Item2_Price + " " + "Rs"  + "<br>")
        // document.write("Quantity of Item 2 is: " + Quantity_Item2 + " " + "<br><br>")
        // document.write("Shipping Charges: " + Shipping_Charges + " " + "Rs" +"<br> <br>")

        // document.write("Total cost of your order is: " + Total +  "<br>")



// Question no 8:
        //  document.write("<h1>Marksheet</h1>")
        // let Obtained_Marks=+prompt("Enter Obtained Marks")
        // let Total_Marks=+prompt("Enter total marks")
        // let per=Obtained_Marks*100/Total_Marks
        // document.write("Obtained Marks: " + Obtained_Marks + "<br>")
        // document.write("Total Marks: " + Total_Marks + "<br>")
        // document.write("Percentage: " + per + " " + "%")



// Question no 9:

        // document.write("<h1>Curreny In PKR</h1>")

        // let US_Dollar=10
        // let Saudi_Riyal=25
        // let PKR_Currency=(US_Dollar*104.80)+(Saudi_Riyal*28)
        // document.write("Total Currency in PKR: " + PKR_Currency)

//Question no 10:

        // let number=10
        // let ans=((number+5)*10)/2
        // document.write(ans)


// Question no 11:


        // let Current_year=2020
        // let Birth_year=2003
        // let age=Current_year-Birth_year
        // document.write("<h1>Age Calculator</h1>")
        // document.write("Current Year: " + Current_year + "<br>")
        // document.write("Birth Year: " + Birth_year + "<br>")
        // document.write("Your age is: " + age)


// Question no 12:


        // const pi=3.142
        // let r=+prompt("Enter radius of circle: ")
        // let c=2*pi*r
        // let area=pi*r**2
        // document.write("Circumference of circle is: " + c +"<br>")
        // document.write("Area of circle is: " + area)


//Question no 13:


        // document.write("<h1>The Lifetime Supply Calculator</h1>")
        // let Fav_Snks=prompt("Enter your favourite Snacks: ")
        // let C_age=+prompt("Enter your current age: ")
        // let Max_age=+prompt("Enter your max age: ")
        // let T_Snks=+prompt("Enter number of snack per day: ")
        // let calculations=(Max_age-C_age)*T_Snks

        // document.write("Favorite Snacks: " + Fav_Snks + "<br>")
        // document.write("Current Age: " + C_age + "<br>")
        // document.write("Estimated Max Age: " + Max_age + "<br>")
        // document.write("Amount of snacks per day: " + T_Snks + "<br>" )

        // document.write("You will need" + " " + calculations + " " + "Chocolate chip to last you until the ripe old age of" + " " + Max_age)



//                                               Chapter # 6

// Question no 1:


        // document.write("Result <br>")
        // let a=10
        // document.write("The value of a is: " + a + "<br><br>")
        // document.write("The value of ++a is: " + ++a + "<br>")
        // document.write("Now the value of a is: " + a + "<br><br>")
        // document.write("The value of a++ is: " + a++ + "<br>")
        // document.write("Now the value of a is: " + a + "<br><br>")
        // document.write("The value of --a is: " + --a + "<br>")
        // document.write("Now the value of a is: " + a + "<br><br>")
        // document.write("The value of a-- is: " + a-- + "<br>")
        // document.write("Now the value of a is: " + a + "<br>")


// Question no 2:


        // var a = 2 ,b = 1; 
        // var result = --a - --b + ++b + b--
        // document.write(result) 

//Explaining Output at each stage

// --a;                    (here we have a=2 initially and we use  pre decrement so now a=1 )
// 1                       
// --a - --b;              (here we have b=1 initially and we use  pre decrement so now b=0 and a=1 1-0=1)
// 1   -   0
// --a - --b + ++b;        (here we use   pre increment with b so now b=1 and total=1-0+1=2)
// 1   -  0  +  1 
// --a - --b + ++b + b--;  (here we use   post decrement with b so now b remain same that is b=1 total=1-0+1+1=3) 
// 1   -  0  +  1  + 1



// Question no 3:


        // var name =prompt("Enter your name: ")
        // alert(name + "!" + " " + "Welcome to our Web Page")


// Question no 4:


        // let num=prompt("Enter your number: <br>")
        // document.write(num + "<br>")
        // if (num === "")
        // {
        //         for (i=1;i<=10;i++)
        //         {
        //                 document.write(5 + " " + "*" + i + " " + "=" + " " + 5*i + "<br>")
        //         }
        // }
        // else
        // {
        //         for (i=1;i<=10;i++)
        //         {
        //                 document.write(num + " " + "*" + i + " " + "=" + " " + num*i + "<br>")
        //         }
        // }

// Question no 5:
        // document.write("<table><tr><th>Subject</th> <th>Total marks</th> <th>Obtained Marks</th> <th>Percentage</th>")
        // var chem=prompt("Enter you 1st sub: ")
        // var phy=prompt("Enter you 2nd sub: ")
        // var maths=prompt("Enter you 3rd sub: ")
        // let chem_marks=+prompt("Enter you 1st sub marks: ")
        // let phy_marks=+prompt("Enter you 2nd sub marks: ")
        // let maths_marks=+prompt("Enter you 3rd sub marks: ")
        // let total_marks=+prompt("Enter total marks: ")

        // document.write("<tr> <td>" + chem + "</td>" + "<td>" + 100 + "</td>" + "<td>" + chem_marks + "</td>" + "<td>" + chem_marks + "% </td>")
        // document.write("<tr> <td>" + phy + "</td>" + "<td>" + 100 + "</td>" + "<td>" + phy_marks + "</td>" + "<td>" + phy_marks + "% </td>")
        // document.write("<tr> <td>" + maths + "</td>" + "<td>" + 100 + "</td>" + "<td>" + maths_marks + "</td>" + "<td>" + maths_marks + "% </td>")
        // let total_O=chem_marks+phy_marks+maths_marks
        // let per=total_O*100/total_marks
        // document.write("<tr> <td>" + "     " + "</td>" + "<td>" + "    " + "</td>" + "<td>" + total_marks + "</td>" + "<td>" + per + "% </td></table>")



//                                              chapter # 9-11

// Question no 1:
        // var city_name=prompt("Enter City Name")
        // city_name=city_name.toLowerCase()
        // if (city_name === "karachi")
        // {
        //         document.write("WELCOME TO CITY OF LIGHT")
        // }


// Question no 2:

        // var gender=prompt("Enter your gender here:")
        // gender.toLowerCase()
        // if (gender === "male")
        // {
        //         document.write("Good Morning Sir:")
        // }
        // else
        // {
        //         document.write("Good Morning Ma'am:")
        // }

// Question no 3:


        // var signal=prompt("Enter you status: ")
        // signal=signal.toLowerCase()
        // if (signal === "red")
        // {
        //         document.write("Must Stop:")
        // }
        // else if (signal === "yellow")
        // {
        //         document.write("Ready To Move:")
        // }
        // else if (signal === "green")
        // {
        //         document.write("Move Now:")
        // }
        // else 
        // {
        //         document.write("Please input correct colour:")
        // }

// Question no 4:

        // let liter=+prompt("Enter you remaining fuel in liters: ")
        // if (liter <0.25)
        // {
        //         document.write("Please refill the fuel in your car")
        // }

// Question no 5:

// a)
        // var a = 4
        // if (++a === 5)
        // { 
        //         alert("given condition for variable a is true"); 
        // } 
// b)
        // var b = 82 
        // if (b++ === 83)
        // { 
        //         alert("given condition for variable b is true"); 
        // }  

// c)

        // var c = 12; 
        // if (c++ === 13)
        // { 
        //         alert("condition 1 is true"); 
        // } 
        // if (c === 13)
        // { 
        //         alert("condition 2 is true"); 
        // } 
        // if (++c < 14)
        // { 
        //         alert("condition 3 is true"); 
        // } 
        // if(c === 14)
        // { 
        //         alert("condition 4 is true"); 
        // }  

// d)

        // var materialCost = 20000; 
        // var laborCost = 2000; 
        // var totalCost = materialCost + laborCost; 
        // if (totalCost === laborCost + materialCost){ 
        //         alert("The cost equals"); }
        
// e)

        // if (true){ 
        //         alert("True"); 
        // } 
        // if (false){ 
        //         alert("False"); 
        // }  
// f)

        // if("car" < "cat")
        // { 
        //         alert("car is smaller than cat"); 
        // }

// Question no 6:


        // document.write("<h1>MARKSHEET</h1>")
        // var total_marks=+prompt("Enter total marks: ")
        // var obtained_marks=+prompt("Enter obtained marks: ")
        // let per=obtained_marks*100/total_marks
        // if ((per >=80) && (per<=100))
        // {
        //         document.write("Total Marks: " + total_marks + "<br>")
        //         document.write("Obtained Marks: " + obtained_marks + "<br>")
        //         document.write("Percentage: " + per + "<br>")
        //         document.write("GRADE: A-one <br>")
        //         document.write("Remarks: Excellent")
        // }
        // else if ((per >=70) && (per<80))
        // {
        //         document.write("Total Marks: " + total_marks + "<br>")
        //         document.write("Obtained Marks: " + obtained_marks + "<br>")
        //         document.write("Percentage: " + per + "<br>")
        //         document.write("GRADE: A <br>")
        //         document.write("Remarks: Good")
        // }
        // else if ((per >=60) && (per<70))
        // {
        //         document.write("Total Marks: " + total_marks + "<br>")
        //         document.write("Obtained Marks: " + obtained_marks + "<br>")
        //         document.write("Percentage: " + per + "<br>")
        //         document.write("GRADE: B <br>")
        //         document.write("Remarks: You need to improve")
        // }
        // else
        // {
        //         document.write("Total Marks: " + total_marks + "<br>")
        //         document.write("Obtained Marks: " + obtained_marks + "<br>")
        //         document.write("Percentage: " + per + "<br>")
        //         document.write("GRADE: Fail <br>")
        //         document.write("Remarks: Sorry")    
        // }


// Question no 7:

        // document.write("<h1>Guessing Game</h1>")
        // let secret_num=5
        // let guess_num=+prompt("Enter you guessed number (1-10):")
        // if (guess_num === secret_num)
        // {
        //         document.write("Bingo! Correct answer")
        // }
        // else if (guess_num === ++secret_num)
        // {
        //         document.write("Close enough to the correct answer")
        // }
        // else
        // {
        //         document.write("Sorry Wrong guessed")
        // }

// Question no 8:

        // var num=+prompt("Enter your number: ")
        // if (num%3 === 0)
        // {
        //         alert("Yah!" + " " + num + " " + "is divisible by 3")
        // }

// Question no 9:

        // let num=+prompt("Enter your nummber to check weather it is odd or even: ")
        // if (num%2 === 0)
        // {
        //         alert(num + " " + "is even number")
        // }
        // else
        // {
        //         alert(num + " " + "is odd number")
        // }

// Question no 10:

        // let temp=+prompt("Enter temperature: ")
        // if (temp >40)
        // {
        //         alert("It is too hot outside")
        // }
        // else if (temp >30)
        // {
        //         alert("The Weather today is Normal")
        // }
        // else if (temp >20)
        // {
        //         alert("Today’s Weather is cool")
        // }
        // else if (temp >10)
        // {
        //         alert("OMG! Today’s weather is so Cooloday’s Weather is cool")
        // }

// Question no 11:

        // let first_num=+prompt("Enter first number: ")
        // let second_num=+prompt("Enter second number: ")
        // let opt=prompt("Enter operator (+,-,*,/ or %): ")
        // if (opt === "+")
        // {
        //         let ans =first_num+second_num;
        //         document.write(first_num + " " + "+" + " " + second_num + " " + "=" + " " + ans)
        // }
        // else if (opt === "-")
        // {
        //         let ans =first_num-second_num
        //         document.write(first_num + " " + "-" + " " + second_num + " " + "=" + " " + ans)
        // }
        // else if (opt === "*")
        // {
        //         let ans =first_num*second_num
        //         document.write(first_num + " " + "*" + " " + second_num + " " + "=" + " " + ans)
        // }
        // else if (opt === "/")
        // {
        //         let ans =first_num/second_num
        //         document.write(first_num + " " + "/" + " " + second_num + " " + "=" + " " + ans)
        // }
        // else if (opt === "%")
        // {
        //         let ans =first_num%second_num
        //         document.write(first_num + " " + "%" + " " + second_num + " " + "=" + " " + ans)
        // }
        // else
        // {
        //         document.write("Please input correct operator")
        // }



                                        // chapter #   12-13

// Question no 1:

        // let n=prompt("Enter your letter: ").charCodeAt()
        // // var n = letter.charCodeAt()
        // if (n >= 65 && n<=90){
        //         alert("Given letter is uppercase letter:")
        // }
        // else if(n >=97 && n<=122)
        // {
        //         alert("Given letter is lowercase letter:")
        // }
        // else
        // {
        //         alert("This is not a Letter may be it is special character or number:")
        // }

// Question no 2:

        // let input1=+prompt("Enter first number: ")
        // let input2=+prompt("Enter second number: ")
        // if (input1 > input2)
        // {
        //         alert(input1 + " " + "is greater then" + " " + input2)
        // }
        // else if (input2 > input1)
        // {
        //         alert(input2 + " " + "is greater then" + " " + input1)
        // }
        // else if (input1 === input2)
        // {
        //         alert("Both number are equal")
        // }


// Question no 3:

        // let input1=+prompt("Enter first number: ")
        // if (input1 > 0)
        // {
        //         alert("Given number is positive")
        // }
        // else if (input1 < 0)
        // {
        //         alert("Given number is negative")
        // }
        // else if (input1 === 0)
        // {
        //         alert("Number is zero")
        // }


// Question no 4:


        // let innp=prompt("Enter your String: ")
        // let result=true;
        // if ((innp === "A" || innp === "a") || (innp === "E" || innp === "e") || (innp === "I" || innp === "i") || (innp === "O" || innp === "o") || (innp === "U" || innp === "u")) 
        // {
        //         document.write(result + "<br>" + innp + " " +"is Vowel")
        //         result=true
        // }
        // else
        // {
        //         result=false
        //         document.write(result + "<br>" + innp + " " +"is Consunant")
        // }

// Question no 5:


        // let y_pass="abc@123"
        // let pass=prompt("Enter your password: ")
        // if (pass === "")
        // {
        //         alert("Please enter your password")
        // }
        // else if (pass === y_pass){
        //         alert("Correct Password")

        // }
        // else
        // {
        //         alert("Incorrect password")
        // }


// Question no 6:

        // var greeting; 
        // var hour = 13; 
        // if (hour < 18) 
        // { 
        //         greeting = "Good day"; 
        // }
        // else
        // {
        //         greeting = "Good evening"; 
        // }


// Question no 7:

        // let time=+prompt("Enter time: ")
        // if (time >= 0000 && time < 1200){
        //         document.write("Good Morning")
        // }
        // else if (time >=1200 && time < 1700){
        //         document.write("Good Afternoon")
        // }
        // else if (time >=1700 && time < 2100){
        //         document.write("Good Evening")
        // }
        // else if ((time >=2100 && time <= 2359)){
        //         document.write("Good Night")
        // }
        // else
        // {
        //         document.write("Wrong time")
        // }

//                                      Chapter # 14-16


// Question no 1:

//      var S_nm=[];

// Question no 2:

//      let arr1=new Array();


// Question no 3:

        // let name =["Saad","Ahmed","Bilal"]

// Question no 4:

        // let num =[2,4,1,6,9]

// Question no 5:

        // let bools =[true,true,false]
        // alert(bools)

// Question no 6:

        // let name =["Saad",45,0,"Bilal",true,90 ,false]
        // alert(name)

// Question no 7:

        // let qual=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

        // document.write("Qualificaton: <br><br>")

        // document.write("<ol><li>"+ qual[0]+"</li>")
        // document.write("<li>"+ qual[1]+"</li>")
        // document.write("<li>"+ qual[2]+"</li>")
        // document.write("<li>"+ qual[3]+"</li>")
        // document.write("<li>"+ qual[4]+"</li>")
        // document.write("<li>"+ qual[5]+"</li>")
        // document.write("<li>"+ qual[6]+"</li>")
        // document.write("<li>"+ qual[7]+"</li>")


// Question no 8:

        // let S_Name=["Naseer","Jawad","Haroon"]
        // let S_Marks=[340,230,480]
        // document.write("Score of " + S_Name[0] + " " + "is " + S_Marks[0] + " " + "Percentage: " + S_Marks[0]*100/500 + "%" + "<br>")
        // document.write("Score of " + S_Name[1] + " " + "is " + S_Marks[1] + " " + "Percentage: " + S_Marks[1]*100/500 + "%"  + "<br>")
        // document.write("Score of " + S_Name[2] + " " + "is " + S_Marks[2] + " " + "Percentage: " + S_Marks[2]*100/500 + "%"  + "<br>")


// Question no 9:

// a)
        // let Colours=["Red","blue"]
        // document.write(Colours + "<br>")
        // let innp=prompt("Enter you colour to add at begining of array: ")
        // Colours.unshift(innp)
        // document.write("Updated array: " + Colours + "<br>")

// b)
//         let Colours=["Red","blue"]
//         document.write(Colours + "<br>")
//         let innp=prompt("Enter you colour to add at End of array: ")
//         Colours.push(innp)
//         document.write("Updated array: " + Colours + "<br>")


// c)

        // let Colours=["Red","blue"]
        // document.write("Initial Array: " + Colours + "<br>")
        // let innp1=prompt("Enter you colour to add at End of array: ")
        // Colours.push(innp1)
        // document.write("Updated array: " + Colours + "<br>")
        // let innp2=prompt("Enter you colour 1 to add at begining of array: ")
        // let innp3=prompt("Enter you colour 2 to add at begining of array: ")
        // Colours.unshift(innp2,innp3)
        // document.write("Updated array: " + Colours + "<br>")

// d)

        // Colours.shift();
        // document.write("Updated array after deleted first element: " + Colours + "<br>")
// e)
        // Colours.pop();
        // document.write("Updated array after deleted last element: " + Colours + "<br>")

// f)

        // let Colours=["White" , "Purple" , "Yellow" , "Red" , "Green"]
        // document.write("Initial array: " + Colours + "<br>")
        // let index=+prompt("Enter your index number on which you want to add color")
        // let color=prompt("Enter your color:")
        // Colours.splice(index,0,color)
        // document.write("Updated array after inserting new colours: " + Colours + "<br>")
        // let index_d=+prompt("Enter your index number on which you want to delete color")
        // let num=+prompt("Enter number of element you want to delete:")
        // Colours.splice(index_d,num)
        // document.write("Updated array after inserting new colours: " + Colours + "<br>")


// Question no 10:


        // let score=[200,190,340,410,120]
        // document.write("Ordered score of student: " + score.sort())


// Question no 11:

        // let cities=["Quetta","Karachi","Peshawar","Lahore","Islamabad"]
        // let s_cities=cities.slice(1,4)
        // document.write("Selected Cities list:" + s_cities)


// Question no 12:

        // var arr = ["This", "is", "my", "cat"]
        // document.write("ARRAY: <br>" + arr + "<br><br>")
        // document.write("STRING: " + " " + arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3])

// Question no 13:

        // let array=[];
        // array.push("Keyboard")
        // array.push("Mouse")
        // array.push("Printer")
        // array.push("Monitor")
        // document.write("DEVICES: " + array + "<br><br>")
        // let word1=array.shift();
        // let word2=array.shift();
        // let word3=array.shift();
        // let word4=array.shift();
        // document.write("Output: " + word1 + "<br>")
        // document.write("Output: " + word2 + "<br>")
        // document.write("Output: " + word3 + "<br>")
        // document.write("Output: " + word4 + "<br>")


// Question no 14:

        // let array=[];
        // array.push("Keyboard")
        // array.push("Mouse")
        // array.push("Printer")
        // array.push("Monitor")
        // document.write("DEVICES: " + array + "<br><br>")
        // let word1=array.pop();
        // let word2=array.pop();
        // let word3=array.pop();
        // let word4=array.pop();
        // document.write("Output: " + word1 + "<br>")
        // document.write("Output: " + word2 + "<br>")
        // document.write("Output: " + word3 + "<br>")
        // document.write("Output: " + word4 + "<br>"


//                      Chapter # 17-20


// Question no 1:


//      let numbers=[[],[],[]]


// Question no 2:

        // let num=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
        // for (let i=0;i<=2;i++)
        // {
        //         document.write(num[i]+"<br>")
        // }


// Question no 3:

        // for (let i=1;i<=10;i++)
        // {
        //         document.write(i+"<br>")
        // }

// Question no 4:


        // let t_num=+prompt("Enter you table number: ")
        // let range=+prompt("Enter you range: ")
        // document.write("Multiplication table of: " + t_num +"<br>")
        // document.write("Length: " + range + "<br><br>")
        // for (let i=1;i<=range;i++)
        // {
        //         document.write(t_num + " " + "* " + i + " " + "= " + t_num*i +"<br>" )
        // }


// Question no 5:

        // let fruits = ["apple", "banana", "mango", "orange", "strawberry"]

        // for(let i=0;i<fruits.length;i++)
        // {
        //         document.write("Element at index " + i + " " + "is" + " " + fruits[i] + "<br>")
        // }


// Question no 6:

        // document.write("<h1>Counting:</h1>" )
        // for (let i=1; i<16; i++)
        // {
        //         document.write(i + " ")
        // }
        // document.write("<h1>Reverse Counting:</h1>" )
        // for (let i=10; i>0; i--)
        // {
        //         document.write(i + " ")
        // }
        // document.write("<h1>Even:</h1>" )
        // for (let i=0; i<=20; i++)
        // {
        //         if (i%2===0)
        //         {
        //                 document.write(i + " ")
        //         }
        // }
        // document.write("<h1>Odd:</h1>" )
        // for (let i=0; i<=20; i++)
        // {
        //         if (i%2!==0)
        //         {
        //                 document.write(i + " ")
        //         }
        // }
        // document.write("<h1>Series:</h1>" )
        // for (let i=2; i<=20; i=i+2)
        // {
        //         document.write(i + "k ")
        // }


// Question no 7:

        // A = ["cake", "apple pie", "cookie", "chips", "patties"]
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

// Question no 8:


        // let A = [24, 53, 78, 91, 12]
        // let largest=A[0]
        // document.write("Array items: " + A + "<br>")
        // for (let i=0; i<A.length; i++)
        // {
        //         if (A[i+1]>largest)
        //         {
        //                 largest=A[i+1]
        //         }
        //         else
        //         {
        //                 continue
        //         }
        // }
        // document.write("The largest number is " + largest)

// Question no 9:


        // let A = [24, 53, 78, 91, 12]
        // let smallest=A[0]
        // document.write("Array items: " + A + "<br>")
        // for (let i=0; i<A.length; i++)
        // {
        //         if (A[i+1]<smallest)
        //         {
        //                 smallest=A[i+1]
        //         }
        //         else
        //         {
        //                 continue
        //         }
        // }
        // document.write("The largest number is " + smallest)


// Question no 10:


// for (i=5; i<=100; i=i+5)
// {
//         document.write(i + " ")
// }