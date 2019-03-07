//I FINISHED THIS//
$(".btn1").click(function(){//When the button is clicked //
    var a = $(".name").val(); 
    $(".name1").text(a);//variable a will take place in the input and change the text to whatever the user changes it to//
});
$(".btn2").click(function(){//When the button is clicked it will work//
  var b = parseInt($(".play").val());//variable b will take place in the input and change the text to whatever the user changes it to //
    var play = b * 1612;//what ever number the user puts in it will be multiplied by 1612//
  $(".play1").text(play);
});
$(".btn3").click(function(){//When the button is clicked it will work//
  var c = $(".age").val();
  $(".age1").text(c);// variable c will take place in the input and change the text to whatever the user changes it to//
});
$(".btn4").click(function(){//When the button is clicked 
  var d = $(".rate").val();
  $(".rate1").text(d);//variable d will take place in the input and change the text to whatever the user changes it to//
});


