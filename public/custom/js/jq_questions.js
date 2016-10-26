$(document).ready(function(){



//============================ Question 1  =================================
     /*num is a non-negative integer,
add the digit until get a single digit 
return rs*/
function SumTillSingleDigit(num){



	var li = '<li class="list-group-item col-lg-12 list-group-item-success text-center h2">'+
			        	'SumTillSingleDigit('+ num +')' +
        	         '</li>';
    $("#processQuestion1").append(li);  
   
  //while not getting a single digit,
  // keep adding all digits of the num;
   while(num > 10){
       num = AddAllDigits(num);
   }

   li = '<li class="list-group-item col-lg-12 list-group-item-success text-center h2">'+
			        	'<label class="col-lg-6">Final Result:</label>' +
			        	'<span class="col-lg-6">'+ num +'</span>' 
        	         '</li>';
           $("#processQuestion1").append(li);  

   return num;
};

/*helper function 
num is a non-negative integer, 
add all digits of num, from last digit to first
 return sum*/
function AddAllDigits(num){

    var li = '<li class="list-group-item col-lg-12 list-group-item-warning text-center h4">'+
			        	'AddAllDigits('+ num +')' +
        	         '</li>';
    $("#processQuestion1").append(li);  

	  var sum = 0;
    //while not 
    while(num > 0){
        //get last digit add to sum
        var lastDigit = num % 10;
        sum += lastDigit;
        //get the rest num except last digit
        rs = Math.floor(num/10);

        var li = '<li class="list-group-item col-lg-12">'+ 
	                 '<label class="col-lg-2 text-primary">num:</label>' +
	                 '<span class="col-lg-1">' + num + '</span>' +
	                 '<label  class="col-lg-2 text-primary">lastDigit:</label>' +
	                 '<span class="col-lg-1">' + lastDigit + '</span>' +
	                 '<label  class="col-lg-2 text-primary">sum:</label>' +
	                 '<span class="col-lg-1">' + sum + '</span>' +
	                 '<label  class="col-lg-2 text-primary">next </label>' +
	                 '<span class="col-lg-1">' + rs + '</span>' +
                 '</li>';
        $("#processQuestion1").append(li);  
        if(rs == 0){
        	var li = '<li class="list-group-item col-lg-12 list-group-item-warning text-center h4">'+
			        	'<label  class="col-lg-4 ">Final Num:</label>' +
				        '<span class="col-lg-2">' + rs + '</span>' +
				        '<label class="col-lg-4 ">Final Sum:</label>' +
				        '<span class="col-lg-2">' + sum+ '</span>' +
        	         '</li>';
           $("#processQuestion1").append(li);  

        }

        num = rs;
   }
   return sum;
};


$("#btnRunQuestion1").click(function(){
	$("#processQuestion1").html("");
	var num = $("#inputQuestion1").val();

	if($.isNumeric(num) && num > 0 && Math.floor(num) == num){

		$("#txtResultQuestion1").text(SumTillSingleDigit(parseInt(num)));
	}else
		alert("Non-negative integer only !");
});


//============================ Question 2=================================

function IsPalindrome(str){

  var left = 0;
   var right = str.length - 1;
	$("#processQuestion2").append(
		'<p class="col-lg-12 text-success h2 text-center bg-success">' +
		 'IsPalindrome(' +  str +')' +
		'</p>' + 
		'<p class="col-lg-12 bg-info" style="font-size:1.5vw">' + 
		 '<code> left = 0; right = '+  right +';</code>' +
		'</p>' 
		);
    
 
   while(left < right){


   	  $("#processQuestion2").append(
   	  	'<p class="col-lg-12 bg-primary" style="font-size:1.5vw;margin-top:2%">left < right  </p>' +
        '<div class="col-lg-12" >' + 
             CreateDivs(str, left, right) + 
         '</div>'
    	);
      //if both str[left] and str[right] are alphanumeric
      if(IsAlphanumeric(str[left]) && IsAlphanumeric(str[right])){
            //compare, if their lowercase are equal ,
            //move to next position, else return false
            if(str[left].toLowerCase() == str[right].toLowerCase()){

              $("#processQuestion2").append(

                '<div class="col-lg-12 bg-info" style="font-size:1.5vw">'+ 
                   '<var>str[' + left +']</var> and <var>str[' + right +']</var> are alphanumeric, ' + 
                   'and their lowercases are equal to  <strong>' + str[left].toLowerCase() +  '</strong>' +
                   '<br>Enter next loop :  <code> left ++; right --;</code>' + 
                '</div>'
              	);

              left ++;
              right --;
            }
            else{

              $("#processQuestion2").append(

                '<div class="col-lg-12 bg-danger text-danger" style="font-size:2vw">'+ 
                   '<var>str[' + left +']</var> and <var>str[' + right +']</var> are alphanumeric,' + 
                   'but their lowercases are not equal. Exit loop, return false.' +
                '</div>' +
                '<div class="col-lg-12 bg-danger text-danger h2 text-center">'+ 
		           '<span class="col-lg-4">Final Result: </span>'+
		           '<span class="col-lg-8">'+ str +' <br>is not a palindrome.</span>'+
                '</div>'
              	);

              return false;
            }
      }
      //not both are alphanumeric, move to next position, 
      else{

        if(!IsAlphanumeric(str[left])){

          $("#processQuestion2").append(
                '<div class="col-lg-12 bg-warning" style="font-size:1.5vw">'+ 
                   '<var>str[' + left +']</var> is not alphanumeric. Enter next loop : <code>left ++;</code>' + 
                '</div>'
           );
          left ++;
        }

        if(!IsAlphanumeric(str[right])){
               $("#processQuestion2").append(
                '<div class="col-lg-12 bg-warning" style="font-size:1.5vw">'+ 
                   '<var>str['+ right  +']</var> is not alphanumeric. Enter next loop :  <code>right --;</code>' + 
                '</div>'
           );
          right --;
        }

    }
   }
   //if left >= right

      	  $("#processQuestion2").append(
   	  	'<p class="col-lg-12 bg-primary" style="font-size:1.5vw;margin-top:2%">left >= right  </p>' +
        '<div class="col-lg-12" >' + 
             CreateDivs(str, left, right) + 
         '</div>' +
         '<div class="col-lg-12 bg-success text-success h2 text-center">'+ 
           '<span class="col-lg-4">Final Result: </span>'+
            '<span class="col-lg-8">'+ str +' <br>is a palindrome.</span>'+
         '</div>'
    	);
   return true;

};

//check if character c is alphanumeric
function IsAlphanumeric(c){

    if(c.match(/[a-zA-Z]/) || c.match(/[0-9]/))
       return true;
    else 
       return false;
};


$("#btnRunQuestion2").click(function(){
	$("#processQuestion2").html("");
    var str = $("#inputQuestion2").val();
    if(IsPalindrome(str)){
    	$("#txtResultQuestion2").text("TRUE : It is a palindrome.").removeClass("bg-danger text-danger").addClass("bg-success text-success");
    }
    else
        $("#txtResultQuestion2").text("FALSE : It is not a palindrome.").removeClass("bg-success text-success").addClass("bg-danger text-danger");

   $("#txtResultQuestion2").text(rs);

});


  function CreateDivs(str, left, right){

  	var div = "";
  	for(var i = 0; i< str.length ; i ++){

        c = str.charAt(i);
    	if(c.trim() == ""){
    		c = '&nbsp;';
    	}
    	var btnClass = "";
       if(i == left)
       	    btnClass = "btn-success";
             
       if(i == right)
       	    btnClass = "btn-danger";

       	if(left == right && i == left)
       		btnClass = "btn-warning";

       div += '<div  class=" ' + btnClass +'" style="width:5%;display:inline;float:left;border:solid 1px black;">' +
                '<span class="col-lg-12">' + i +'</span>' + 
                '<span class="col-lg-12" style="font-size:1.2vw;font-weight:bold">' + c + '</span>' +  
              '</div>'; 
    }

    return div;
  };

});