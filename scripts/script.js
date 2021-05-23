var pop;

function setup() {
	pop = new Audio('pop.mp3');
	chatbot.replyDelay = 500;
	chatbot.getDB('1QVQC1DZN5drhhawbIwrl3WSJO6c99JYiyXPxT4Ur6sU').then(data => {
	chatbot.db = data;
	chatbot.loadFiles(['bot.rive']);
});
}



window.onload = setup;