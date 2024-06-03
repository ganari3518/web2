function discordButton(){
    window.location.href = "https://discord.gg/U7veAPA9";
}

function gitHubButton(){
    window.location.href = "https://github.com/ganari3518";
}

function docsButton(){
    window.location.href = "./src/index.html"
}

function stockButton(){
    window.location.href = "http://ganari3518.iptime.org:8080/"
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
      } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
      }
    });
  });
