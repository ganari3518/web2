var Body = {
    setColor : function(color){
        document.querySelector('body').style.color = color;
    },

    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

var NightDayButton = {
    setValue : function(value){
        document.querySelector('#night_day').value = value;
    }
}

function nightDayHandler(self){
    if(self.value == 'day'){
        Body.setBackgroundColor('white');
        Body.setColor('black');
        NightDayButton.setValue('night');
    } else {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        NightDayButton.setValue('day');
    }
}

function biggerFont(){
    var f_size = document.querySelector('body').style.fontSize;
    if(f_size == '') f_size = '16px';
    document.querySelector('body').style.fontSize = parseInt(f_size) + 16 + 'px';
}

function smallerFont(){
    var f_size = document.querySelector('body').style.fontSize;
    if(parseInt(f_size) <= 16){
        return;
    } else {
        document.querySelector('body').style.fontSize = parseInt(f_size) - 16 + 'px';
    }
}

function changeFontFamily(self){
    var f_family = document.querySelector('body').style.fontFamily;
    if(f_family == ''){
        document.querySelector('body').style.fontFamily = 'Arial';
        self.value = 'Arial';
    }
    if(f_family == 'Arial'){
        document.querySelector('body').style.fontFamily = 'Courier';
        self.value = 'Courier';
    } else if(f_family == 'Courier'){
        document.querySelector('body').style.fontFamily = 'Verdana';
        self.value = 'Verdana';
    } else if(f_family == 'Verdana'){
        document.querySelector('body').style.fontFamily = '';
        self.value = 'font-family';
    }
}

function drawBorder(self){
    const array = document.querySelectorAll('*')
    for(let i = 0; i < array.length; i++){
        if(array[i].style.border == ''){
        array[i].style.border = '5px solid aqua';
        self.value = 'border-off';
        } else{
        array[i].style.border = '';
        self.value = 'border-on';
        }
    }
}

function changeFontColor(self){
    var f_color = document.querySelector('body')
    if(f_color.style.color == ''){
        f_color.style.color = 'aqua';
        self.value = 'aqua';
    } else if(f_color.style.color == 'aqua'){
        if(f_color.style.backgroundColor == 'black'){
        f_color.style.color = 'white';
        } else{
        f_color.style.color = 'black';
        }
        self.value = 'font-color';
    } else if(f_color.style.color == 'black' || f_color.style.color == 'white'){
        f_color.style.color = 'aqua';
        self.value = 'aqua';
    }
}