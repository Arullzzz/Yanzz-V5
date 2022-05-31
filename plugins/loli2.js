let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, args, command }) => {
let res = 'https://kannxapi.herokuapp.com/'
conn.sendButtonImg(m.chat, await ( await fetch(res + 'api/randomimage/loli')).buffer(), 'Tch, Dasar Pedofil', global.botwm, 'AGAIN', `${usedPrefix + command}`, m)
}
handler.help = ['loli2']
handler.tags = ['anime']
handler.command = /^(loli2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler