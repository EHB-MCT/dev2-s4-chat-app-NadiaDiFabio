"use strict";

const chat = {
	author: "yourName",
	init() {
		this.fetchMessages();
	},
	sendMessage() {},
	fetchMessages() {
		fetch("https://dev2chat.onrender.com/messages.json")
			.then(function (response) {
				return response.json();
			})
			.then(function (messages) {
				console.log(messages);
				const render = messages[0].message;
			});
	},
	renderMessage(message) {},
};

chat.init();
