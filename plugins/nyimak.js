let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/nyimak.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Haori Nyimak Aja Deh :v*', 'status@broadcast')
}

handler.customPrefix = /^(Nyimak|nyimak|Menyimak|menyimak)$/i
handler.command = new RegExp

module.exports = handler
