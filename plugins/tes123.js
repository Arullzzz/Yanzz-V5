let fs = require('fs')
let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Oke Bisa （ ・∀・）`

conn.sendMessage(m.chat, info, 'conversation', {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/fcaea82e59569e40317b8.jpg')).buffer(), contextInfo:{ mentionedJid: [m.sender], externalAdReply: {title: global.botwm, sourceUrl: '', body: '───────────···───────────', thumbnail: fs.readFileSync('./sticker/Images1.jpg')}}})
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm