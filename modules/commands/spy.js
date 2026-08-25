module.exports.config = {
    name: "spy",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: spy",
    usage: "spy"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [spy] executed successfully!", event.threadID);
};
