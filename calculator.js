// var op1=document.getElementById("")
// var op2=document.getElementById("")
// var operator=document.getElementById("")
var display = document.getElementById("calculator_display");
var point = document.getElementsByClassName("calc_button");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < point.length; i++) {
    point[i].addEventListener("click", function(){

        var value = this.getAttribute("data-value");
        // var value= this.Array.getAttribute("data-value");




        if (value == "+") {
            operator = "+";
            operand1 = parseFloat(display.textContent)
            display.textContent="";
        }
        else if(value=="-")
        {
            operator = "-";
            operand1 = parseFloat(display.textContent)
            display.textContent="";
            
        }
        else if(value=="/")
        {
            operator = "/";
            operand1 = parseFloat(display.textContent)
            display.textContent="";
            
        }
        else if(value=="*")
        {
            operator = "*";
            operand1 = parseFloat(display.textContent)
            display.textContent="";
            
        }
        else if(value=="AC")
        {
           
            display.textContent="";
            
        }
        else if(value=="%")
        {
            
            operand1 = parseFloat(display.textContent)
            operand1= operand1/100;
            display.textContent=operand1;

        }
        else if(value=="+/-")
        {
            operator="+/-";
            operand1=parseFloat(display.textContent);
            operand1=-1*operand1;
            display.textContent=operand1;
        }
        else if (value == "=") {
            
           
            
            operand2 = parseFloat(display.textContent);
            if(operator=="/")
            {
                if(operand2==0)
                {
                    display.innerHTML="Error! ";
                }
            }
            else{
            var ans = eval(operand1 + " " + operator + " " + operand2);
            
            display.innerHTML = ans;
            }
        }

        else {
            
            
            // if(display.innerHTML.length>25)    
            // {
            //     value="";
                
            // }
            display.innerHTML = display.innerHTML + value;
            // display.textContent=display.textContent+value;

        }


    })

}

// make a array on nums

// var nums=[1,2,3,4,5,6,7,8,9,0];



// // make a operator array
// var oprtr=['*','/','+','-','%'];
// // run an loop on nums array
// // for(int i=0;i<)
// for(var i=0;i<nums.length;i++)
// {
//     if(point.innerHTML=='nums[i]')
//     {

//     }
// }

// // if point is nums put nums in op1
// // if point is operator put point in operator

// // if point is nums put nums in op2

// // then use eval func and the then display
// switch(point)
// {
//     case 1:


// }


/////////////////////


// var buttons = document.getElementsByClassName("button");
// var display = document.getElementById("display");

// // display.textContent = 0;
// var operand1 = 0;
// var operand2 = null;
// var operator = null;

// function isOperator(value) {
//     return value == "+" || value == "-" || value == "*" || value == "/";
// }

// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function () {

//         var value = this.getAttribute('data-value');
//         var text = display.textContent.trim();

//         if (isOperator(value)) {
//             operator = value;
//             operand1 = parseFloat(text);
//             display.textContent = "";
//         } else if (value == "ac") {
//             display.textContent = "";
//         } else if (value == "sign") {
//             operand1 = parseFloat(text);
//             operand1 = -1 * operand1;
//             display.textContent = operand1;
//         } else if (value == ".") {
//             if (text.length && !text.includes('.')) {
//                 display.textContent = text + '.';
//             }
//         } else if (value == "%") {
//             operand1 = parseFloat(text);
//             operand1 = operand1 / 100;
//             display.textContent = operand1
//         } else if (value == "=") {
//             operand2 = parseFloat(text);
//             var result = eval(operand1 + ' ' + operator + ' ' + operand2);
//             if (result) {
//                 display.textContent = result;
//                 operand1 = result;
//                 operand2 = null;
//                 operator = null;
//             }
//         } else {
//             display.textContent += value;
//         }
//     });
// }