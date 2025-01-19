function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6b5DHRgn19J":
        Script1();
        break;
      case "5cqXSWr4p4I":
        Script2();
        break;
      case "5WFqvwnAln0":
        Script3();
        break;
      case "6cxAqJmQHiF":
        Script4();
        break;
      case "5facAFYXrYh":
        Script5();
        break;
      case "6BbFLniyklG":
        Script6();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 1;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.0;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 1;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 1;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 1;
}

