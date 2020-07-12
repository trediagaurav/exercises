const root = document.getElementById("root");
let str = 'abcdefghijklmnopqrstuvwxyz';
let l = 0;
for (var i = 0; i < str.length; i++) {
  let div = document.createElement('div');
  div.classList.add('box');
  div.setAttribute('draggable','true');
  div.innerText = str[i];
  div.style.left = l + 'px';
  l = l+51;
  div.addEventListener('dragend', function(e){
    let x = e.clientX;
    let y = e.clientY;
    div.style.top = y + 'px';
    div.style.left = x + 'px';
    console.log('draend =>', y + ' ' + x);
  })
  root.appendChild(div);
}