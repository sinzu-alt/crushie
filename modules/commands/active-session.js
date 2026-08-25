module.exports.config = {
    name: "active-session",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: active-session",
    usage: "active-session"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [active-session] executed successfully!", event.threadID);
};
