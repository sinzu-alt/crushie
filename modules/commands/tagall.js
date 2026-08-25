module.exports.config = {
    name: "tagall",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: tagall",
    usage: "tagall"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [tagall] executed successfully!", event.threadID);
};
