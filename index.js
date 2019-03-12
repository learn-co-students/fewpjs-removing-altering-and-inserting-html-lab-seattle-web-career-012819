

document.querySelector('main').remove();

var newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerText = "I'm is the champion."

var element = document.querySelector('body');
element.appendChild(newHeader);
newHeader = document.querySelector('h1#victory');
