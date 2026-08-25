module.exports.config = {
    name: "song",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: song",
    usage: "song"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [song] executed successfully!", event.threadID);
};
