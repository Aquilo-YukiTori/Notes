### Canvas基本API

1. 获取上下文环境<br>
最开始的一步，相当于启动一个画板，所有方法的拥有对象<br>
`var context = canvas.getContext('2d')`
<br>
2. 绘制矩形<br>
分成两步，一步是自定义设置，一步是绘制<br>
绘制实心矩形:<br>
`context.fillStyle = 'pink'` //设置实心矩形的填充颜色
`context.fillRect(x, y, width, height)` //绘制
<br>
绘制空心矩形:<br>
`context.strokeStyle = 'darkred'` //设置空心矩形的边框颜色
`context.strokRect(x, y, width, height)` //绘制
<br>
3. 清除矩形区域<br>
清除指定矩形区域的任何绘制行为，相当于橡皮擦
`context.clearRect(x, y, width, height)`
<br>
4. 实心圆<br>

`context.arc(x, y, radius, starAngle, endAngle, anticlockwise)`<br>
参数:坐标X、坐标Y、半径、开始角度、结束角度、是否逆时针true为逆false为顺<br>
```
context.beginPath();
context.arc(300, 350, 100, 0, Math.PI*2, true);
context.closePath();
context.fillStyle = 'rgba(0,255,0,0.25)';
context.fill();
```
<br>

5. 圆弧<br>
如果不填充颜色，实心圆就是圆弧(空心圆)<br>
```
context.beginPath();
context.arc(600, 350, 100, 0, Math.PI , true); //画一个半圆
context.strokeStyle = 'pink';
context.closePath();
context.stroke();

context.beginPath();
context.arc(300, 350, 100, 0, Math.PI , true);
context.strokeStyle = 'red';
//没有closePath,与上面的区别在于关闭路径的图形进行stroke会自动将起点和终点连线由此形成封闭图形，不关闭路径则不会连线
context.stroke();
```
<br>

6. 线段<br>
`moveTo(x, y)` //把路径移动到画布中的指定点，不创建线条<br>
`lineTo(x, y)` //添加一个新点，从上一个指定点向此点绘制线段<br>
如果没有moveTo，那么第一个lineTo的效果和moveTo一样<br>
每次lineTo后如果没有moveTo，那么下次lineTo的开始点为前一次lineTo的结束点<br>

7. 线性渐变<br>
`var lg = context.createLinearGradient(xStart, yStart, xEnd, yEnd)`<br>
参数:渐变开始点坐标x、渐变开始点坐标y、渐变结束点坐标x，渐变结束点坐标y<br>
`lg.addColorStop(offset, color)`<br>
参数:设定的颜色离渐变结束点的偏移量(0-1)、绘制时要使用的颜色<br>

```
var g1 = context.createLinearGradient(0, 0, 0, 300);
g1.addColorStop(0, '#e55d87');
g1.addColorStop(1, '#5fc3e4');
context.fillStyle = g1;
context.fillRect(0, 0, 400, 300);
```