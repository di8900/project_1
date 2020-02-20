var Links = {
  setColor:function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    // $('a').css('color', color);
  }
}
var Body = {
  BodySetColor:function (color){
    document.querySelector('body').style.color = color;
  },
  BodyBackColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
  if(self.value === 'night'){
    Body.BodyBackColor('black');
    Body.BodySetColor('white');
    Links.setColor('powderblue');
    self.value = 'day';
  }
  else{
    Body.BodyBackColor('white');
    Body.BodySetColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}
