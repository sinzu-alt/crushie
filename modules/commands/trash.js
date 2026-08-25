module.exports.config = {
    name: "trash",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: trash",
    usage: "trash"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [trash] executed successfully!", event.threadID);
};
