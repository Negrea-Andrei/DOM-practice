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
btn.addEventListener('click', () => {
    alert("Hello from JS");
    alert("Hello again");
});

function alertFunction() {
    alert("Hello din functia alert");
};

const btn2 = document.querySelector('#buton');
btn2.onclick = alertFunction

const btn3 = document.querySelector('#buton2');
btn3.addEventListener('click', alertFunction);




