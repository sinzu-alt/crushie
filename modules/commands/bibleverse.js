module.exports.config = {
    name: "bibleverse",
    version: "1.0.0",
    role: 0,
    description: "Sinzu Bot command: bibleverse",
    usage: "bibleverse"
};

module.exports.run = async function({ api, event, args }) {
    api.replyMessage("⚡ Sinzu Bot Command [bibleverse] executed successfully!", event.threadID);
};
