const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const messageTitle = [
  'info',
  'success',
  'warning',
  'danger',
];

var wallethv = generateW();

function generateWx() {
    var length = 5,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function generateW() {
    var length = 4,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "0х";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
	retVal += "..." + generateWx() + " mint new NFT";
    return retVal;
}

const messageText = [
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW(),
  generateW()
];

const notificationz = document.querySelector('.notificationz');
const notificationz2 = document.querySelector('.notificationz2');
const notificationz3 = document.querySelector('.notificationz3');

function dismissMessage() {

  notificationz.classList.remove('received');
  if (mintnumber < 760) {
  generateMessage();
  }
}

function dismissMessage2() {

  notificationz2.classList.remove('received');
  if (mintnumber < 760) {
  setTimeout("generateMessage2();", 2000);
  }
}

function dismissMessage3() {

  notificationz3.classList.remove('received');
  if (mintnumber < 760) {
  setTimeout("generateMessage3();", 4000);
  }
}

function dismissMessageO() {
  setTimeout("notificationz.classList.remove('received');", 0);
  setTimeout("notificationz2.classList.remove('received');", 0);
  notificationz3.classList.remove('received');
  if (mintnumber < 760) {
  setTimeout("generateMessage();generateMessage2();generateMessage3();", 4000);
  }
}


function showMessage() {

  notificationz.classList.add('received');
  const button = document.querySelector('.notificationz__message button');
  button.addEventListener('click', dismissMessage, { once: true });
}

function showMessage2() {

  notificationz2.classList.add('received');
  const button2 = document.querySelector('.notificationz2__message button');
  button2.addEventListener('click', dismissMessage2, { once: true });
}

function showMessage3() {

  notificationz3.classList.add('received');
  const button3 = document.querySelector('.notificationz3__message button');
  button3.addEventListener('click', dismissMessage3, { once: true });
}

function generateMessage() {
  //const delay = Math.floor(Math.random() * 1000) + 1500;
  const delay = 1000 + getRandomInt(500);
  const timeoutID = setTimeout(() => {
    const title = randomItem(messageTitle);
    const text = generateW();

    const message = document.querySelector('.notificationz__message');

    message.querySelector('p').textContent = text;
    message.className = `notificationz__message message--info`;

    showMessage();
    clearTimeout(timeoutID);
  }, delay);
}

function generateMessage2() {
  //const delay = Math.floor(Math.random() * 1000) + 1000;
  const delay2 = 1500 + getRandomInt(1000);
  const timeoutID2 = setTimeout(() => {
    const title2 = randomItem(messageTitle);
    const text2 = generateW();

	const message2 = document.querySelector('.notificationz2__message');

	message2.querySelector('p').textContent = text2;
    message2.className = `notificationz2__message message--info`;

    showMessage2();
    clearTimeout(timeoutID2);
  }, delay2);
}

function generateMessage3() {
  //const delay = Math.floor(Math.random() * 1000) + 500;
  const delay3 = 2000 + getRandomInt(1000);
  const timeoutID3 = setTimeout(() => {
    const title3 = randomItem(messageTitle);
    const text3 = generateW();

	const message3 = document.querySelector('.notificationz3__message');

	message3.querySelector('p').textContent = text3;
    message3.className = `notificationz3__message message--info`;

    showMessage3();
    clearTimeout(timeoutID3);
  }, delay3);
}

generateMessage();
generateMessage2();
generateMessage3();

//setInterval("dismissMessage()", 8000);
//setInterval("dismissMessage2()", 6000);
//setInterval("dismissMessage3()", 4000);
setInterval("dismissMessageO()", 4000);

