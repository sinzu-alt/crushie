module.exports.config = {
    name: "platgenerator",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: platgenerator",
    usage: "platgenerator"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [platgenerator] executed successfully!", event.threadID);
};
