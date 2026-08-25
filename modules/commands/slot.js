module.exports.config = {
    name: "slot",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: slot",
    usage: "slot"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [slot] executed successfully!", event.threadID);
};
