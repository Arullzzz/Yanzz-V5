const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const { EmojiAPI } = require("emoji-api")
let fetch = require('node-fetch')
const emoji = new EmojiAPI()

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
  let er = `contoh:
*${usedPrefix}emo(spasi)ap(spasi)❤️*
*${usedPrefix}emo ap ❤️*

┌〔 Opsi 〕
├ ap = apple
├ fa = facebook
├ go = google
├ ht = htc
├ lg
├ mi = microsoft
├ mo = mozilla
├ op = openmoji
├ pi = pixel
├ sa = samsung
├ tw = twitter
├ wh = whatsapp
└────

Hanya bisa 1 emoji, perhatikan spasi, jangan spam!

Mau bikin stiker bisa 2/3 emoji? klik http://wa.me/6282186172016?text=%23stikeremoji`
  if (!args[0]) throw er

  let template = (args[0] || '').toLowerCase()
  if (!args[1]) throw er
  if (/emo/i.test(command)) {
    try {
      switch (template) {
        case 'apple':
        case 'ip':
        case 'ap':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[0].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/f08ce1a1054ffed91c964.jpg')).buffer(),}}
              })
            })
          break
        case 'facebook':
        case 'fb':
        case 'fa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[6].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/2dcab78e18df171cb94b3.jpg')).buffer(),}}
              })
           })            
          break
        case 'google':
        case 'go':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[1].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/7f5c8601ddcb54a2ced5c.jpg')).buffer(),}}
              })
            })
          break
        case 'htc':
        case 'ht':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[12].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/7f5c8601ddcb54a2ced5c.jpg')).buffer(),}}
              })
            })
          break
        case 'lg':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[11].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/4cab177a97c27b46da54e.jpg')).buffer(),}}
              })
            })
          break
        case 'microsoft':
        case 'mc':
        case 'mi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[3].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/4cab177a97c27b46da54e.jpg')).buffer(),}}
              })
            })
          break
        case 'mozilla':
        case 'moz':
        case 'mo':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[13].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/4cab177a97c27b46da54e.jpg')).buffer(),}}
              })
            })
          break
        case 'openmoji':
        case 'omoji':
        case 'op':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[8].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/4cab177a97c27b46da54e.jpg')).buffer(),}}
              })
            })
          break
        case 'pixel':
        case 'pi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[7].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/4cab177a97c27b46da54e.jpg')).buffer(),}}
              })
            })
          break
        case 'samsung':
        case 'ss':
        case 'sa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[2].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/c01503935cd0044058c5d.jpg')).buffer(),}}
              })
            })
          break
        case 'twitter':
        case 'tw':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[5].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/4895648edaeee0a23a859.jpg')).buffer(),}}
              })
            })
          break
        case 'whatsapp':
        case 'wa':
        case 'wh':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[4].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m, contextInfo:{externalAdReply: {title: 'Nih Kak Sticker Emoji :3', body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, sourceUrl: '', thumbnail: await (await fetch('https://telegra.ph/file/614cb3c241a125549a2c0.jpg')).buffer(),}}
              })
            })
          break
      }
    } catch (e) {
      throw er
    }
  }
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
handler.help = ['semoji']
handler.tags = ['sticker']
handler.command = /^((s(tic?ker)?)?emo(ji)?)$/i

module.exports = handler