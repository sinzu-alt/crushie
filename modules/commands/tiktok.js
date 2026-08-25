module.exports.config = {
    name: "tiktok",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: tiktok",
    usage: "tiktok"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [tiktok] executed successfully!", event.threadID);
};
