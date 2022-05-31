let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Update Terakhir')).buffer(), `
Catatan Perubahan :
`.trim(), 'Senin, 20 April 2022 : V. 4.05\n\n◇ Penambahan Fitur : Catatan Perubahan\n\n◇ Update Tampilan\n\n◇ Perbaiki Berapa Bug Seperti Wm Stiker \n\n◇ Total Fitur saat ini: 524\n\n© Ynz', 'Ok Ynz :3', 'Ok')
handler.help = ['note']
handler.tags = ['info']
handler.command = /^(catatanperubahan|perubahan|notes)$/i

module.exports = handler
