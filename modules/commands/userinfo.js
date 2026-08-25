module.exports.config = {
    name: "userinfo",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: userinfo",
    usage: "userinfo"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [userinfo] executed successfully!", event.threadID);
};
