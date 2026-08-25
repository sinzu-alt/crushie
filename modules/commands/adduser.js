module.exports.config = {
    name: "adduser",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: adduser",
    usage: "adduser"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [adduser] executed successfully!", event.threadID);
};
