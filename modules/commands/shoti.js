module.exports.config = {
    name: "shoti",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: shoti",
    usage: "shoti"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [shoti] executed successfully!", event.threadID);
};
