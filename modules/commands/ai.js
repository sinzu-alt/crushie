module.exports.config = {
    name: "ai",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: ai",
    usage: "ai"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [ai] executed successfully!", event.threadID);
};
