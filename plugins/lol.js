


const config = require('../config');
const moment = require('moment-timezone'); // Assure-toi que moment est bien installé
const { cmd, commands } = require('../command');

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🍂",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const startTime = Date.now();
        const message = await conn.sendMessage(from, { text: '*I AM YOUR QUEEN ASUNA 👸...*' });
        const endTime = Date.now();
        const ping = endTime - startTime;

        await conn.sendMessage(from, {
            text: `
╭━━〔 *📡 SPEED TEST* 〕━━╮
┃ 👑 *Reine* : QUEEN ASUNA MD
┃ ⚡ *Ping* : ${ping} ms
┃ 🕒 *Heure* : ${moment().tz("Africa/Abidjan").format("HH:mm:ss")}
╰━━━━━━━━━━━━━━━━━━━━━━╯
`.trim()
        }, { quoted: message });

    } catch (e) {
        console.error(e);
        reply('❌ Erreur lors du test de vitesse.');
    }
});
