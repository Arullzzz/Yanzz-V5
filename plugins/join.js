let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix }) => {
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
    message: `H - hawwOo. . . 〜(꒪꒳꒪)〜`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://telegra.ph/file/fcaea82e59569e40317b8.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let tag = `@${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
    let waofc = `@${'0'.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
 let ow = `@${'62831433937633'.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
 
    let teks = `👋 Hai !\nSaya Kanna BOT, Bot whatsapp yang dibangun dengan Nodejs 📊\nInvited By *@${m.sender.split`@`[0]}*\n\nOfficial *${waofc}*\nCreated By *${ow}*\nSupport *Nekopoi.care*`
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.relayWAMessage(conn.prepareMessageFromContent(res.gid, {
        "listMessage": {
          "title": `❏────────···[ *INVITE* ]···─────────❏`.trim(),
          "description": teks.trim(),
          "footerText": global.botdate,
          "buttonText": "Kanna BOT",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": 'LIST MENU',
                                         "rowId": ".menu"
                                    }, {
                                         "title": 'RULES',
                                         "rowId": ".rules"
                                    }, {
                                         "title": 'MY OWNER', 
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
                     }, {quoted: ftrol, contextInfo: { mentionedJid: conn.parseMention(teks)}}), {waitForAck: true})
    
}
handler.help = ['join <chat.whatsapp.com> <expired>']
handler.tags = ['owner']
handler.command = /^join$/i

handler.mods = true

module.exports = handler