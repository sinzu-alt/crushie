module.exports.config = {
    name: "megaslot",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: megaslot",
    usage: "megaslot"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [megaslot] executed successfully!", event.threadID);
};
