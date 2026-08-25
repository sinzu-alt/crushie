module.exports.config = {
    name: "setadmin",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: setadmin",
    usage: "setadmin"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [setadmin] executed successfully!", event.threadID);
};
