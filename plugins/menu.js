const config = require('../config');
const moment = require('moment-timezone');
const { cmd, commands } = require('../command');
const axios = require('axios');

cmd({
  pattern: "menu",
  alias: ["allmenu", "Queen", "Asuna", "👸"],
  use: '.menu',
  desc: "Show all bot commands",
  category: "menu",
  react: "👸",
  filename: __filename
},
async (conn, mek, m, { from, reply }) => {
  try {
    const totalCommands = commands.length;
    const date = moment().tz("America/Port-au-Prince").format("dddd, DD MMMM YYYY");

    const uptime = () => {
      let sec = process.uptime();
      let h = Math.floor(sec / 3600);
      let m = Math.floor((sec % 3600) / 60);
      let s = Math.floor(sec % 60);
      return `${h}h ${m}m ${s}s`;
    };

    // Menu stylisé
    let menuText = `
╭━━━〔 *𝐐𝐔𝐄𝐄𝐍-𝐀𝐒𝐔𝐍𝐀* 〕━━╮
┃ ✦ ᴀᴜᴛʜᴏʀ : @${m.sender.split("@")[0]}
┃ ✦ ʀᴜɴᴛɪᴍᴇ : ${uptime()}
┃ ✦ ᴍᴏᴅᴇ : *${config.MODE}*
┃ ✦ ᴘʀᴇғɪx : [${config.PREFIX}]
┃ ✦ ᴄᴍᴅs : ${totalCommands}
┃ ✦ ᴅᴇᴠ : *ɪɴᴄᴏɴɴᴜ ʙᴏʏ x ᴅᴇᴠ ᴀꜱᴋ*
┃ ✦ ᴠᴇʀ : *1.0.0*
╰━━━━━━━━━━━━━━━━━╯

╭──〔 *WELCOME TO* 〕──╮
│ *♛ QUEEN ASUNA MD ♛*
╰─────────────────╯
`;

    // Regrouper les commandes par catégorie
    let category = {};
    for (let cmd of commands) {
      if (!cmd.category) continue;
      if (!category[cmd.category]) category[cmd.category] = [];
      category[cmd.category].push(cmd);
    }

    const keys = Object.keys(category).sort();
    for (let k of keys) {
      menuText += `\n╭───〔 *${k.toUpperCase()} MENU* 〕───╮`;
      const cmds = category[k].filter(c => c.pattern).sort((a, b) => a.pattern.localeCompare(b.pattern));
      cmds.forEach((cmd) => {
        const usage = cmd.pattern.split('|')[0]; // utilise seulement le premier alias
        menuText += `\n│ ✧ 👸${usage}`; // remplace le préfixe par 👸
      });
      menuText += `\n╰──────────────────╯`;
    }

    menuText += `\n`;

    const thumbnailUrl = 'https://files.catbox.moe/p1xybt.jpg';

    await conn.sendMessage(from, {
      image: { url: thumbnailUrl },
      caption: menuText,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: "QUEEN ASUNA MD",
          body: "MADE IN BY INCONNU BOY",
          mediaType: 4,
          renderLargerThumbnail: true,
          sourceUrl: 'https://github.com/INCONNU-BOY/QUEEN-ASUNA-MD'
        }
      }
    }, { quoted: mek });

  } catch (e) {
    console.error(e);
    reply(`❌ Error: ${e.message}`);
  }
});
