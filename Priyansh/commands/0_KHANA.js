const fs = require("fs");
module.exports.config = {
	name: "Khana",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("KHANA") ||
     react.includes("khana") || react.includes("lunch") ||  react.includes("nasta") || 
react.includes("breakfast") ||
react.includes("dinner") ||
react.includes("khaa lo")) {
		var msg = {
				body: `💝𝐌𝐚𝐝𝐞 𝐁𝐲:-☞𝗣𝗥𝗜𝗡𝗖𝗘 𝗕𝗪𝗕𝗜𝗘𝗪☜\n🙂 आओ बेबी मेरे साथ खा लो खाना 🙂`,attachment: fs.createReadStream(__dirname + `/noprefix/khana.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍲", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
