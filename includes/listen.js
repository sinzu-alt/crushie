const fs = require("fs-extra");
const login = require("fca-unofficial");
const chalk = require("chalk");

// Siguraduhing nandiyan ang config.json
fs.existsSync("config.json") ? "" : console.log(chalk.red("Error: config.json missing!"));
const config = require("../config.json");

let credentials;
try {
    credentials = require("../appstate.json");
} catch (e) {
    console.log(chalk.red("Error: appstate.json missing! Please put your Facebook appstate cookie inside appstate.json"));
    process.exit(1);
}

login({ appState: credentials }, (err, api) => {
    if (err) {
        console.error(chalk.red("Login error: "), err);
        return;
    }

    api.setOptions({ listenEvents: true, updatePresence: true, forceLogin: true });
    console.log(chalk.green("[ SINZU BOT ]") + " Successfully logged in to Facebook Messenger!");

    // Load commands mula sa modules/commands folder
    const commands = new Map();
    const commandFiles = fs.readdirSync("./modules/commands").filter(file => file.endsWith(".js"));
    
    for (const file of commandFiles) {
        const command = require(`../modules/commands/${file}`);
        if (command.config && command.config.name) {
            commands.set(command.config.name, command);
            console.log(chalk.cyan(`Loaded command: ${command.config.name}`));
        }
    }

    // Pakikinig sa mga mensahe
    api.listenMqtt((err, event) => {
        if (err) return console.error(err);

        if (event.type === "message" || event.type === "message_reply") {
            const body = event.body ? event.body.trim() : "";
            if (!body.startsWith(config.PREFIX)) return;

            const args = body.slice(config.PREFIX.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();

            if (commands.has(commandName)) {
                const command = commands.get(commandName);
                try {
                    command.run({ api, event, args, config });
                } catch (error) {
                    console.error(error);
                    api.replyMessage("An error occurred while executing this command.", event.threadID);
                }
            } else {
                api.replyMessage(`Command not found! Type ${config.PREFIX}help to see commands.`, event.threadID);
            }
        }
    });
});
