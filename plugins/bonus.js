let handler = async (m, { conn }) => {
  if (new Date - global.db.data.users[m.sender].lastclaim > 86400000) {
    conn.reply(m.chat, 'Cheat Active', m)  
    global.db.data.users[m.sender].exp += 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    global.db.data.users[m.sender].lastclaim = new Date * 1
  } else conn.reply(m.chat, 'Aktif:v', m)
}
handler.help = ['Cheat', 'Cheat']
handler.tags = ['owner']
handler.command = /^(bonus|hadiah)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

