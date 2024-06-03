function discordButton(){
    window.location.href = "https://discord.gg/U7veAPA9";
}

function gitHubButton(){
    window.location.href = "https://github.com/ganari3518";
}

function docsButton(){
    window.location.href = "https://ganari3518.github.io/web2/w07/"
}

var Body = {
    setColor : function(color){
        document.querySelector('body').style.color = color;
    },

    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

  $(function () {
    $("#change_unit_helper").on("click", function () {
      if ($(this).is(":checked")) {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        NightDayButton.setValue('day');
        Links.setColor('powderblue');
      } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        NightDayButton.setValue('night');
        Links.setColor('blue');
      }
    });
  });
