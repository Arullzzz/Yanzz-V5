let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let str = ` ✔️ *Succes Active Afk*
*❏ Name* : ${conn.getName(m.sender)}
*❏ Reason* : ${text ? '' + text : ''}
──────────────────────
`.trim()
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": str.trim(),
          "description": '📮 JANGAN GANGGU DIA!'.trim(),
          "footerText": global.botdate,
          "buttonText": "Kanna BOT",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": 'SCRIPT',
                                         "description": "Source Code Kanna BOT",
                                         "rowId": ".sc"
                                    }, {
                                         "title": 'MY OWNER', 
                                         "description": "list Owner Kanna BOT",
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
                     }, {}), {waitForAck: true})
}
handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler

let wm = global.botwm