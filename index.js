const express = require("express");
const path = require("path");
const { spawn } = require("child_process");
const fs = require("fs-extra");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`[ SINZU WEB ] Dashboard running on http://localhost:${PORT}`);
});

// Start bot listener process
function startBot() {
    const child = spawn("node", ["includes/listen.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (code) => {
        if (code !== 0) {
            console.log("Restarting bot...");
            startBot();
        }
    });
}

// Uncomment to run bot engine alongside web dashboard
// startBot();
