module.exports.config = {
    name: "help",
    version: "1.0.0",
    role: 0,
    description: "Displays all available commands of Sinzu Bot",
    usage: "help"
};

module.exports.run = async function({ api, event, config }) {
    const commandsList = [
        "autoreply", "dailytask", "slot", "banner", "shoti", 
        "tiktok", "youtube", "song", "ai", "megaslot", 
        "setnickname", "loungename", "adduser", "acceptuser", "pinterest", 
        "setadmin", "announcement", "currency", "tagall", "platgenerator", 
        "spy", "dox", "trash", "leaderboards", "qic", 
        "bibleverse", "userinfo", "admins", "active-session"
    ];

    let msg = `🤖 === [ SINZU BOT COMMANDS ] === 🤖\n\n`;
    commandsList.forEach((cmd, index) => {
        msg += `${index + 1}. ${config.PREFIX}${cmd}\n`;
    });
    msg += `\nTotal Commands: ${commandsList.length}\nType ${config.PREFIX}[command] to use.`;

    api.replyMessage(msg, event.threadID);
};
