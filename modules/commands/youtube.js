module.exports.config = {
    name: "youtube",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: youtube",
    usage: "youtube"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [youtube] executed successfully!", event.threadID);
};
