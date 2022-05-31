let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
	const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `BROADCAST GROUPS ✔️`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + 'bcgc')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  let content = (/bcgc|broadcastgroup|bcgrup|bcgrup|broadcastgc/i.test(text) ? text : text)
  for (let id of groups) conn.relayWAMessage(conn.prepareMessageFromContent(id, {
        "listMessage": {
          "title": `──────❏ *ʙʀᴏᴀᴅᴄᴀsᴛ* ❏──────`.trim(),
          "description": content.trim(),
          "footerText": 
global.botdate,
          "buttonText": "BROADCAST",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": 'MY OWNER',
                                         "rowId": ".nowner"
                                    }, {
                                         "title": 'LIST MENU',
                                         "rowId": ".simplemenu"
                                    }, {
                                         "title": 'SCRIPT',
                                         "rowId": ".sc"
                       }],
                                "title": global.wm
                  }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                      }
                     }, {quoted: ftroli}), {waitForAck: true})
  conn.reply(m.chat, `📨 Mengirim pesan broadcast ke ${groups.length} grup...`, m)
}
handler.help = ['broadcastgroups','bcgcs'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)(selc|s)$/i
handler.owner = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)