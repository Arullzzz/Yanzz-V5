let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
ʚ───═[ 𝗚𝗥𝗨𝗣 𝗕𝗢𝗧 ]═───ɞ

https://chat.whatsapp.com/H1Bq00WkYh54vdw8dj4Kiy

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'KimakGroups')).buffer(), ext, '🎮 𝙷𝚊𝚘𝚛𝚒𝚋𝚘𝚝𝚣 𝙸𝚜 𝚃𝚑𝚎 𝙱𝚎𝚜𝚝', 'Siap Haori', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot2']
handler.tags = ['main']
handler.command = /^(gcbot2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
