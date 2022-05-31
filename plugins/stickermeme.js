const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
        quoted: m, contextInfo:{externalAdReply: {title: 'Yanzz', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/4cab177a97c27b46da54e.jpg')).buffer(),}} 
    })

}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
handler.help = ['stikermeme <teks atas>|<teks bawah>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?meme)$/i

handler.limit = true

module.exports = handler