module.exports.config = {
    name: "announcement",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: announcement",
    usage: "announcement"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [announcement] executed successfully!", event.threadID);
};
