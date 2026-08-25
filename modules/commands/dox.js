module.exports.config = {
    name: "dox",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: dox",
    usage: "dox"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [dox] executed successfully!", event.threadID);
};
