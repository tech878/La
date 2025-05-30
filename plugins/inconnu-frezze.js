const { cmd } = require('../command');

const fakeLinks = [
  'https://whatsapp.com/channel/0029Vb6T8td5K3zQZbsKEU1R',
  'https://whatsapp.com/channel/0099AABBCCDDEEFFGGHHII',
  'https://whatsapp.com/channel/0088XXYYZZAABBCCDD1122',
];

const adminInvitations = [
  1890, 160, 1000,
];

const freezeEmojis = ['🥶', '🧊', '❄️', '🧊🥶'];

const fakeLocations = [
  'Helsinki, Finland',
  'Oslo, Norway',
  'Stockholm, Sweden',
  'Reykjavik, Iceland',
  'Tallinn, Estonia',
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

cmd({
  pattern: "inconnu-frezze ?(\\d+)?",
  desc: "Fake ultra powerful system freeze attack",
  filename: __filename
}, async (conn, mek, m, { from, reply, args, isOwner }) => {
  try {
    if (!isOwner) return reply("❌ Only the bot owner can use this command.");

    const target = args[0];
    if (!target) return reply("❌ Please provide a target number. Example: .inconnu-frezze 554488138425");

    if (m.isGroup && from !== m.chat) return;

    const attackCount = 10000;

    reply(`❄️ Launching extreme freeze attack on ${target}...\nHold tight!`);

    for (let i = 0; i < attackCount; i++) {
      let msgType = i % 5;

      let text = '';
      switch (msgType) {
        case 0:
          text = `🧊 Freeze protocol active at ${randomFrom(fakeLocations)}.`;
          break;
        case 1:
          text = `📨 Sending fake admin invites x${randomFrom(adminInvitations)}.`;
          break;
        case 2:
          text = `❄️ System freeze effect ${randomFrom(freezeEmojis)} detected.`;
          break;
        case 3:
          text = `🔗 Suspicious channel link: ${randomFrom(fakeLinks)}`;
          break;
        case 4:
          text = `⚠️ Freeze error code: ${Math.floor(Math.random() * 7777)}.`;
          break;
      }

      if (i === attackCount - 1) {
        text += `\n\nI AM YOUR QUEEN ASUNA 👸`;
      }

      await conn.sendMessage(target + '@s.whatsapp.net', { text }, { quoted: mek }).catch(() => null);

      if (i % 500 === 0) await new Promise(r => setTimeout(r, 1500));
    }

  } catch (e) {
    console.error(e);
    reply(`❌ Error: ${e.message}`);
  }
});
