function say_add() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var x1 = parseInt(x);
    var y1 = parseInt(y);
    var z = sum(x1,y1);
    var html = x + ' PLUS ' + y + ' IS ' + z;
 
    document.getElementById('result').innerHTML = html;
}
function say_subtract() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var x1 = parseInt(x);
    var y1 = parseInt(y);
    var z = sub(x1,y1);
    var html = x + ' MINUS ' + y + ' IS ' + z;
 
    document.getElementById('result').innerHTML = html;
} 
document.getElementById('add').addEventListener('click', say_add);
document.getElementById('subtract').addEventListener('click', say_subtract);

function sum(c,d){
  return c + d;
}
function sub(a,b){
  return a - b;
}