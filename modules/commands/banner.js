module.exports.config = {
    name: "banner",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: banner",
    usage: "banner"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [banner] executed successfully!", event.threadID);
};
