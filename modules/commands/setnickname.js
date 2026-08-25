module.exports.config = {
    name: "setnickname",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: setnickname",
    usage: "setnickname"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [setnickname] executed successfully!", event.threadID);
};
