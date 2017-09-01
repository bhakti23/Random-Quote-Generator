var quotes = ["Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.","This too, shall pass.", "Keep your eyes on the stars and your feet on the ground.","The only person you should try to be better than is the person you were yesterday.","Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself."];


function newQuote(){
  var i = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML =  quotes[i];
}

function startTime(){
  var date = new Date();
  var n = date.toDateString();
  var time = date.toLocaleTimeString();
  document.getElementById('displayDate').innerHTML = n;
  document.getElementById('displayTime').innerHTML =  time;
  var t = setTimeout(function(){startTime()},500);
}
