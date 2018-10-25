/*第6单元 项目6-3 音乐播放器 js文件*/
var audio = document.getElementById('audio');
var playpause = document.getElementById("play-pause");
var volume = document.getElementById("volume");
var change = document.getElementById("to-lyrics-label");
var needle = document.querySelector('.play_needle');

// var disc = document.getElementById("player");

var disc = document.querySelector('.play_disc');

var start = true;
audio.controls = false;
var i=0;

playpause.addEventListener('click',function () {
   if (start) {
      needle.style.transform ='rotate(0deg)';
      disc.className="play_disc rotate";//rotate 自动旋转
   } else {
      needle.style.transform ='rotate(-30deg)';
      disc.className="play_disc rotate stop";//stop
   }
   start = !start
});

//定义控制歌曲播放暂停的方法：togglePlayPause()。
//该方法中在切换播放暂停的同时需要切换字体图标和按钮的title属性值
function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "暂停";
      playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
      audio.play();
   } else {
      playpause.title = "播放";
      playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
      audio.pause();
   }
}

function changeIcon() {
   if (i==0){
      change.innerHTML = '<i class="fa fa-arrow-down fa-lg"></i>';
      i++;
   }else{
      change.innerHTML = '<i class="fa fa-arrow-up fa-lg"></i>';
      i=0;
   }
}

//定义设置音量的方法：setVolume()，设置Audio对象的volume属性等于range控件的值
function setVolume() {
   audio.volume = volume.value;
}