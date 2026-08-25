module.exports.config = {
    name: "qic",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: qic",
    usage: "qic"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [qic] executed successfully!", event.threadID);
};
