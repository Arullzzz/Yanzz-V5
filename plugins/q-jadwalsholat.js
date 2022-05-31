let bss = global.bs
let handler = async (m, { conn, text, usedPrefix: _p, args, command }) => {
	if (!text) throw `Harap masukan nama kota`
let j = await bss.jadwalsholat(text)
let { date, today } = j 
let { Shubuh, Dzuhur, Ashr, Maghrib, Isya } = today 
let a = `🌄 *Shubuh:* ${Shubuh}
🏙️ *Dzuhur:* ${Dzuhur}
🌇 *Ashr:* ${Ashr}
🌆 *Maghrib:* ${Maghrib}
🌃 *Isya:* ${Isya}`
m.reply(a)
}
handler.help = ['jadwalsholat <nama kota>']
handler.tags = ['quran']
handler.command = /^(jadwalsholat)$/i
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