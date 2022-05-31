let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Pulsa
╠➥ *082186172016*
╠➥ Chat Owner:
║- wa.me/6288272489919
╠═〘 YAN 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viapulsa']
handler.tags = ['info']
handler.command = /^viapulsa$/i

module.exports = handler
