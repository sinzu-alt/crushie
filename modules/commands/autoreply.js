module.exports.config = {
    name: "autoreply",
    version: "1.0.0",
    role: 0,
    description: "Toggle or manage auto-reply features for Sinzu Bot",
    usage: "autoreply [on/off]"
};

module.exports.run = async function({ api, event, args }) {
    const action = args[0] ? args[0].toLowerCase() : "";
    
    if (action === "on") {
        api.replyMessage("⚡ Auto-reply is now turned ON for Sinzu Bot.", event.threadID);
    } else if (action === "off") {
        api.replyMessage("⚡ Auto-reply is now turned OFF for Sinzu Bot.", event.threadID);
    } else {
        api.replyMessage("🤖 Sinzu Bot Autoreply Status: Active. Type '!autoreply on' or '!autoreply off' to change.", event.threadID);
    }
};
