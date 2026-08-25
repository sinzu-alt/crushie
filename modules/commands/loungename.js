module.exports.config = {
    name: "loungename",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: loungename",
    usage: "loungename"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [loungename] executed successfully!", event.threadID);
};
