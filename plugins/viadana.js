let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Dana
╠➥ *088272489919*
║- Owner Bot:
║- wa.me/6282186172016
╠═〘 YANZ 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'Grup@broadcast') 
}
handler.help = ['viadana']
handler.tags = ['info']
handler.command = /^viadana$/i

module.exports = handler
