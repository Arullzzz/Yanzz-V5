async function handler(m, { usedPrefix }) {
let fetch = require('node-fetch')
let { jadibot, anon } = global.db.data.settings[conn.user.jid]
const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `LIST BOT ⛩️`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://telegra.ph/file/fcaea82e59569e40317b8.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let tks = `┯ *BOT UTAMA*\n│ *Yanzz-Bot*\n│• wa.me/6282186172016?text=.menu\n╰────────────···\n\n`+ `❏ *JADIBOT* (${totaljadibot.length}/2)\n` + users.map(v => `╭────────────···\n│ *${v.name}*\n│• wa.me/` + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu\n╰────────────···`).join('\n\n')
  //let tkks = `🌟 *Bot Utama :*\n⤷ wa.me/6283143393763?text=.menu (KannaBot)\n\n`+ `🤖 *JadiBot :*\n` + users.map(v => '✎ wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))
  await conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `❏────────···[ *LIST BOT* ]···─────────❏`.trim(),
          "description": tks.trim(),
          "footerText": global.botdate,
          "buttonText": "Click Here",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": 'SCRIPT',
                                         "description": "Source code BOT",
                                         "rowId": ".sc"
                                    }, {
                                         "title": 'JADIBOT',
                                         "description": "Only Private Chat!",
                                         "rowId": ".jadibot"
                                    }, {
                                         "title": 'MY OWNER', 
                                         "description": "this is my onwer number if you want to buy premium",
                                         "rowId": ".owner"
                       }],
                                "title": "⎙ BOT Whatsapp"
                  }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                      }
                     }, {quoted: ftrol}), {waitForAck: true})
}
handler.command = handler.help = ['listjadibot','listbot','ljb']
handler.tags = ['jadibot']

module.exports = handler