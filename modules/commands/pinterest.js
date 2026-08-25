module.exports.config = {
    name: "pinterest",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: pinterest",
    usage: "pinterest"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [pinterest] executed successfully!", event.threadID);
};
