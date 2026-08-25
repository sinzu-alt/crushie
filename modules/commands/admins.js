module.exports.config = {
    name: "admins",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: admins",
    usage: "admins"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [admins] executed successfully!", event.threadID);
};
