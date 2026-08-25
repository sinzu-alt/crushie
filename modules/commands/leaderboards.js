module.exports.config = {
    name: "leaderboards",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: leaderboards",
    usage: "leaderboards"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [leaderboards] executed successfully!", event.threadID);
};
