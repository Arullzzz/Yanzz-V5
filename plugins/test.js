let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
Status: On...
Silahkan Ketik .menu Untuk Memulai Bot...
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(flu + 'ππππ£ π±ππ')).buffer(), ext, 'ππππ£ π±ππ ππππ πΌπππππππ πΊπππ (*Β΄Οο½*)', 'Menu', '.?', 'Owner', '.nowner', m)

}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
