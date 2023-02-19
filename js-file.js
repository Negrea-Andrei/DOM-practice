const containter = document.querySelector('#conta');

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = `Hei, I'm red`;
containter.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = `I'm blue!`;
h3.style.color = 'blue';
containter.appendChild(h3);

const div2 = document.createElement('div');
div2.style.cssText = 'border-width: 5px; border-style: solid;; background-color: pink;';

const hunu = document.createElement('h1');
hunu.textContent = 'Im in a div';

const pdoi = document.createElement('p');
pdoi.textContent = 'ME TO!';

div2.appendChild(hunu);
div2.appendChild(pdoi);
containter.append(div2);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello from JS");

