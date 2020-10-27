
    $(".text").on("mouseenter", function(){
        if($(this).hasClass("1")){
      $(this).css({"background-color":"rgb(143,115,153,1)","color":'white'}); }

      else if($(this).hasClass("2")){
        $(this).css({"background-color":"rgb(141,169,106,1)","color":'white'});    
      }
      
      else if($(this).hasClass("3")){
        $(this).css({"background-color":"rgb(65,75,113,1)","color":'white'});    
      }

    });

    
    $(".text").on("mouseleave", function(){
        if($(this).hasClass("1")){
      $(this).css({"background-color":"rgb(157,127,168,0.3)","color":'black'}); }

      else if($(this).hasClass("2")){
        $(this).css({"background-color":"rgb(152,183,113,0.3)","color":'black'});    
      }
      
      else if($(this).hasClass("3")){
        $(this).css({"background-color":"rgb(65,75,113,0.3)","color":'black'});    
      }

    });

    
    var text = "ANASTASIA MIKHAILITCHENKO";

    function letter() {
        var oldt = $(".name").text();
        var t = text.charAt(0);
        text = text.substr(1);
        
        $(".name").text(oldt + t);
        
        if(text.length > 0) setTimeout(letter, 100);
    }
    
    
    $(document).ready(function()
    {
        setTimeout(letter, 100);
    });
