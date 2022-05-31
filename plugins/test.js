let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
Status: On...
Silahkan Ketik .menu Untuk Memulai Bot...
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(flu + '𝚈𝚊𝚗𝚣 𝙱𝚘𝚝')).buffer(), ext, '𝚈𝚊𝚗𝚣 𝙱𝚘𝚝 𝚂𝚒𝚊𝚙 𝙼𝚎𝚖𝚋𝚊𝚗𝚝𝚞 𝙺𝚊𝚖𝚞 (*´ω｀*)', 'Menu', '.?', 'Owner', '.nowner', m)

}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
