let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/img/pikachu'))
  let json = await res.json()
  let stiker = await sticker(null, json.link, 'Sticker pack Gif Pikachu', ' By Ynz And Haori')
  if (stiker) return conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m, contextInfo:{externalAdReply: {title: 'Pikachu', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: 'https://bit.ly/3N024o9', thumbnail: await (await fetch('https://telegra.ph/file/e4d032a2fd88eeae0389b.jpg')).buffer(),}} 
    })
  throw stiker.toString()
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
handler.help = ['pikachu']
handler.tags = ['internet']
handler.customPrefix = /^pik{1,2}a(c{1,2}hu)?$/i
handler.command = new RegExp

module.exports = handler