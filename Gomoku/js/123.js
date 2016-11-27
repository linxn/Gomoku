// JavaScript Document

var canvas; 
var context; 
var isWhite = true;//设置是否该轮到白棋 
var isWell = false;//设置该局棋盘是否赢了，如果赢了就不能再走了 
var img_b = new Image(); 
img_b.src = "images/b.png";//白棋图片 
var img_w = new Image(); 
img_w.src = "images/w.png";//黑棋图片 
var chessData = new Array(15);//这个为棋盘的二维数组用来保存棋盘信息，初始化0为没有走过的，1为白棋走的，2为黑棋走的 
for (var x = 0; x < 15; x++) { 
chessData[x] = new Array(15); 
for (var y = 0; y < 15; y++) { 
chessData[x][y] = 0; 
} 
} 
function drawRect() {//页面加载完毕调用函数，初始化棋盘 
canvas = document.getElementById("canvas"); 
context = canvas.getContext("2d"); 
for (var i = 0; i <= 640; i += 40) {//绘制棋盘的线 
context.beginPath(); 
context.moveTo(0, i); 
context.lineTo(640, i); 
context.closePath(); 
context.stroke(); 
context.beginPath(); 
context.moveTo(i, 0); 
context.lineTo(i, 640); 
context.closePath(); 
context.stroke(); 
	} 

} 

play.getDomXY = function(a) {
    for (var b = a.offsetLeft, c = a.offsetTop, d = a.offsetParent; null !== d;) b += d.offsetLeft, c += d.offsetTop, d = d.offsetParent;
    return {
        x: b,
        y: c
    }
}
canvas.onclick=function(e) {//鼠标点击时发生
var bbox = canvas.getBoundingClientRect();
var x = Math.round((e.clientX - bbox.left  )/40)*40;


var y = Math.round((e.clientY - bbox.top )/40)*40; 

if (chessData[x][y] != 0) {//判断该位置是否被下过了 
alert("你不能在这个位置下棋"); 
return; 
} 
if (isWhite) { 
isWhite = false; 
drawChess(1, x, y); 
} 
else { 
isWhite = true; 
drawChess(2, x, y); 
} 
} 

function drawChess(chess, x, y) {//参数为，棋（1为白棋，2为黑棋），数组位置.

if (isWell == true) { 
alert("已经结束了，如果需要重新玩，请刷新"); 
return; 
} 
if (x >= 0 && x < 15 && y >= 0 && y < 15) { 
if (chess == 1) { 
context.drawImage(img_w, x , 
y );
//绘制白棋 
chessData[x][y] = 1; 
} 
else { 
context.drawImage(img_b, x,
 y ); 
chessData[x][y] = 2; 
} 
judge(x, y, chess); 
} 
} 

function judge(x, y, chess) {//判断该局棋盘是否赢了 
var count1 = 0; 
var count2 = 0; 
var count3 = 0; 
var count4 = 0; 
//左右判断 
for (var i = x; i >= 0; i--) { 
if (chessData 
[y] != chess) { 
break; 
} 
count1++; 
} 
for (var i = x + 1; i < 15; i++) { 
if (chessData 
[y] != chess) { 
break; 
} 
count1++; 
} 
//上下判断 
for (var i = y; i >= 0; i--) { 
if (chessData[x] 
!= chess) { 
break; 
} 
count2++; 
} 
for (var i = y + 1; i < 15; i++) { 
if (chessData[x] 
!= chess) { 
break; 
} 
count2++; 
} 
//左上右下判断 
for (var i = x, j = y; i >= 0, j >= 0; i--, j--) { 
if (chessData 
[j] != chess) { 
break; 
} 
count3++; 
} 
for (var i = x + 1, j = y + 1; i < 15, j < 15; i++, j++) { 
if (chessData 
[j] != chess) { 
break; 
} 
count3++; 
} 
//右上左下判断 
for (var i = x, j = y; i >= 0, j < 15; i--, j++) { 
if (chessData 
[j] != chess) { 
break; 
} 
count4++; 
} 
for (var i = x + 1, j = y - 1; i < 15, j >= 0; i++, j--) { 
if (chessData 
[j] != chess) { 
break; 
} 
count4++; 
} 
if (count1 >= 5 || count2 >= 5 || count3 >= 5 || count4 >= 5) { 
if (chess == 1) { 
alert("白棋赢了"); 
} 
else { 
alert("黑棋赢了"); 
} 
isWell = true;//设置该局棋盘已经赢了，不可以再走了 
} 
} 
