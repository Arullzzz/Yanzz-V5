let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let os = require('os')
let { performance } = require('perf_hooks')
let neww = Math.round(performance.now())
let old = Math.round(performance.now())
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	
	let tag = `@${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
 let waofc = `@${'0'.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
 let ow = `@${'62831433937633'.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
 
	const hariRaya = new Date('January 1, 2023 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const hariRayaramadan = new Date('April 2, 2022 23:59:59')
    const sekarangg = new Date().getTime()
    const lebih = hariRayaramadan - sekarangg
    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
    const detikk = Math.floor( lebih % (1000 * 60) / 1000)
    const ultah = new Date('October 4, 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    
    let { money, age, exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let bzz = './audio/wibu.m4a'
	let platform = os.platform()
	let merk = conn.user.phone.device_manufacturer
	let mode = global.opts['self'] ? 'Private' : 'Publik'
	let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

 let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let neww = Math.round(performance.now())
    let old = Math.round(performance.now())
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    
    let premium = global.db.data.users[m.sender].premium
    let prems = `${premium ? 'Yes': 'No'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let wm = global.botwm
    let datebot = global.botdate
    let logo = global.logo
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let bioo = (await conn.getStatus(who).catch(console.error) || {}).status || ''
   
    const fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: '[❗] Memuat Menu...', 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    
    const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999,
    status: 1,
    surface : 1,
    message: `©️ Created By ℓettα - sαmα`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: fs.readFileSync('./thumbnail.jpg'), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    
    let txtmenu = `❏  *U S E R*
▸ *Name:* ${name}
▸ *Tag:* ${tag}
▸ *Bio:* ${bioo ? bioo : ''}
▸ *Status:* ${global.db.data.users[m.sender].premium ? 'Premium' : 'Free'} User
▸ *Limit:* ${global.db.data.users[m.sender].limit}

❏ *I N F O*
▸ *Runtime:* ${uptime}
▸ *Baterai:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
▸ *Prefix :* [ ${_p} ]
▸ *Total User:* ${Object.keys(global.db.data.users).length}
▸ *Jadibot:* ${totaljadibot.length}
▸ *Blocked:* ${conn.blocklist.length}
▸ *Chat Banned:* ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
▸ *User Banned:* ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}

❏ *TAHUN BARU*
▸ ${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik

❏ *RAMADHAN*
▸ ${harii} Hari ${jamm} Jam ${menitt} Menit ${detikk} Detik

❏ *ULANG TAHUN OWNER*
▸ ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik

✧
┬ 📮 *Note* :
│ Tolong jangan dispam ya biar ga delay
╰━━━━━━━━━━━━━━━━┈─◂
     ▌│█║▌║▌║║▌║▌║█│▌
     
*Official Bot By ${waofc}*
*Powered By ${ow}*`

let tkss = `*${ucapan()}*, ${name}`
 
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": tkss.trim(),
          "description": 'Created By ℓetta - Sama'.trim(),
          "footerText": '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
          "buttonText": "Click Here!",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": "Status Bot",
                                         "description": "Status dan Informasi Bot",
                                         "rowId": ".info"
                                    }, {
                                         "title": "Speed",
                                         "description": "Menampilkann Kecepatan Respon Bot",
                                         "rowId": ". ping"
                                    }, {
                                         "title": "Sewa Bot",
                                         "description": "Untuk kamu yang ingin melihat daftar harga Sewa Bot",
                                         "rowId": ".sewa"
                                         }, {
                                         "title": "Premium",
                                         "description": "Untuk kamu yang ingin melihat daftar harga Premium",
                                         "rowId": ".premium"
                       }],
                    "title": "━━━━━━━━━━━[ Tentang Bot dan Lainnya ]━━━━━━━━━━"
                }, {
                  "rows": [{
                  "title": "💬 ▪ Commands",
                  "description": "Semua Command Bot!",
                  "rowId": ".? all"
                }, {
                  "title": "🎮 ▪ Game",
                  "description": "Gamenya seru seru kak...",
                  "rowId": ".? game"
                }, {
                  "title": "🌱 ▪ Rpg",
                  "description": "Game Epic Rpg ! ",
                  "rowId": ".? rpg"
                }, {
                  "title": "✨ ▪ Exp & Limit",
                  "description": "Ayo tingkatkan level mu..!",
                  "rowId": ".? xp"
                }, {
                  "title": "🧩 ▪ Fun",
                  "description": "Sangat Family Friendly...",
                  "rowId": ".? fun"
                }, {
                  "title": "🎁 ▪ Gift",
                  "description": "Suprice!",
                  "rowId": ".? gift"
                }, {
                  "title": "🔞 ▪ Nsfw",
                  "description": "Adick adick jangan liat ya...",
                  "rowId": ".? nsfw"
                }, {
                  "title": "⛩️ ▪ Anime",
                  "description": "Bang? Anjir wibu...",
                  "rowId": ".? anime"
                }, {
                  "title": "📰 ▪ News",
                  "description": "Berita Doang kok kak...",
                  "rowId": ".? News"
                },  {
                  "title": "🕋 ▪ Islamic",
                  "description": "Tobat Yuk Kak...",
                  "rowId": ".? quran"
                }, {
                  "title": "📚 ▪ Edukasi",
                  "description": "Belajar kak biar pinter",
                  "rowId": ".? edukasi"
                }, {
                  "title": "🖼️ ▪ Image",
                  "description": "Radom Image & something...",
                  "rowId": ".? image"
                },  {
                  "title": "🎫 ▪ Sticker",
                  "description": "Membuat sticker yang unik!",
                  "rowId": ".? stiker"
                }, {
                  "title": "🐚 ▪ Kerang",
                  "description": "Hujan Kerang ajaib...!",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "📑 ▪ Quotes",
                  "description": "Random Teks...",
                  "rowId": ".? quotes"
                }, {
                  "title": "👑 ▪ Group Settings",
                  "description": "Admin Group Only!",
                  "rowId": ".? admin"
                }, {
                  "title": "👥 ▪ Group",
                  "description": "Group Only!",
                  "rowId": ".? grup"
                }, {
                  "title": "🌟 ▪ Premium",
                  "description": "Premium Users Only!",
                  "rowId": ".? premium"
                }, {
                  "title": "💻 ▪ Internet",
                  "description": "Cari Sesuatu yang menarik!",
                  "rowId": ".? internet"
                }, {
                  "title": "🎭 ▪ Anonymous",
                  "description": "Berbicara dengan orang tidak dikenal...",
                  "rowId": ".? anonymous"
                }, {
                  "title": "🖊️ ▪ Editz Menu",
                  "description": "Menulis dan Membuat Logo, dll...",
                  "rowId": ".? nulis"
                }, {
                  "title": "📥 ▪ Downloader",
                  "description": "Download Sesuatu diBot!",
                  "rowId": ".? downloader"
                }, {
                  "title": "🧰 ▪ Tools",
                  "description": "Mungkin ini bisa membantu mu...",
                  "rowId": ".? tools"
                }, {
                  "title": "📂 ▪ Database",
                  "description": "Menyimpan sesuatu DiBot",
                  "rowId": ".? database"
                }, {
                  "title": "🗳️ ▪ Vote & Absen",
                  "description": "Group only!",
                  "rowId": ".? vote"
                }, {
                  "title": "🎙️ ▪ Voice",
                  "description": "Voice Changer...",
                  "rowId": ".? audio"
                }, {
                  "title": "🤖 ▪ JadiBot",
                  "description": "Kok jadibot bang?",
                  "rowId": ".? jadibot"
                }, {
                  "title": "ℹ️ ▪ Info",
                  "description": "Fitur fitur info...",
                  "rowId": ".? info"
                }, {
                  "title": "❓ ▪ No Category",
                  "description": "Fitur yang terlupakan...",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "👩🏻‍💻 ▪ Owner",
                  "description": "Owner Only",
                  "rowId": ".? owner"
                }],
                                "title": "━━━━━━━━━━━━━━━━[ All - Menu ]━━━━━━━━━━━━━━━"
                                }, {
                                "rows": [{
                                "title": "🎐 Creator",
                                "description": "Pembuat kanna BOT",
                                "rowId": ".nowner"
                                }, {
                                "title": "🗳️  Donasi",
                                "description": "Donasi kak, jangan enak pakenya doang",
                                "rowId": ".donasi"
                                }, {
                                "title": "🔬 Script",
                                "description": "Script Bot",
                                "rowId": ".sc"
                                }, {
                                "title": "🎖️ Thanks To",
                                "description": "Terima kasih banyak untuk user yang telah berpartisipasi dalam bot",
                                "rowId": ".? thnks"
                                }],
                                "title": "━━━━━━━━━━━━━━━━[ Penutup ]━━━━━━━━━━━━━━━"
                            }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                    }
                 }, {quoted: ftrol, contextInfo: { mentionedJid: conn.parseMention(txtmenu) }}), { waitForAck: true })
                 }
  
 handler.help = ['simplemenu']
handler.tags = ['main']
handler.command = /^(simplemenu)$/i
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
 
 function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "🌄 Selamat pagi"
  }
  if (time > 10) {
    res = "☀️ Selamat siang"
  }
  if (time >= 15) {
    res = "🌇 Selamat sore"
  }
  if (time >= 18) {
    res = "🌙 Selamat malam"
  }
  return res
}