module.exports.config = {
    name: "dailytask",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: dailytask",
    usage: "dailytask"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [dailytask] executed successfully!", event.threadID);
};
