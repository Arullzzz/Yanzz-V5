let fs = require ('fs')
let path = require('path')
let util = require('util')
let os = require('os')
let fetch = require('node-fetch')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
  let format = sizeFormatter({
      std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
      decimalPlaces: 2,
      keepTrailingZeroes: false,
      render: (literal, symbol) => `${literal} ${symbol}B`,
      })

let handler  = async (m, { conn, usedPrefix }) => { 
  const cpus = os.cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
      return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
     last.total += cpu.total
     last.speed += cpu.speed / length
     last.times.user += cpu.times.user
     last.times.nice += cpu.times.nice
     last.times.sys += cpu.times.sys
     last.times.idle += cpu.times.idle
     last.times.irq += cpu.times.irq
     return last
}, {
    speed: 0,
    total: 0,
    times: {
    user: 0,
    nice: 0,
    sys: 0,
    idle: 0,
    irq: 0
   }
})
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  await m.reply('▰▰▰▰▱▱▱▱▱▱ ʟᴏᴀᴅɪɴɢ...')
  let neww = Math.round(performance.now())
  const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `© Kanna BOT || 2022`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://telegra.ph/file/f87047ec6e5f0d4a9ea91.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let tag = `@${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
    let waofc = `@${'0'.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
 let ow = `@${'62831433937633'.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
  let str = `*━━━━━━❏ B O T  S T A T I S T I C ❏━━━━━━*
              
👩🏻‍💻 *Owner:* wa.me/${global.owner[0]}
🧪 *Mode:* ${global.opts['self'] ? 'Private' : 'Publik'}
📊 *Versi:* ${package.version}
💻 *Platform:* ${os.platform()}
🗃️ *Lib:* Baileys 4.0.0
🏮 *Type:* NodeJs
🧿 *Server:* ${os.hostname()}
🔎 *Browser:* ${conn.browserDescription[1]}
*🏢 Hostname:* ${conn.browserDescription[0]}
📢 *Report:* wa.me/${global.owner[0]}
⭕ *Prefix:* (# / ! .)
🍃 *Speed:* ${neww - old} *ms*
👥 *Total user:* ${totalreg} *user*
⏰ *Uptime:* ${uptime}


*━━━━━━❏ P H O N E  S T A T I S T I C ❏━━━━━━*

*🪀 Whatsapp V:* ${conn.user.phone.wa_version}
*🔋 Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
*🛑 RAM:* ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
*🔵 Free RAM:* ${format(os.freemem())}
*📈 MCC:* ${conn.user.phone.mcc}
*📉 MNC:* ${conn.user.phone.mnc}
*📊 OS Version:* ${os.platform()} ${conn.user.phone.os_version}
*📫 Merk Hp:* ${conn.user.phone.device_manufacturer}
*📮 Versi Hp:* ${conn.user.phone.device_model}
`
conn.send2Button(m.chat, str, global.botdate, 'Owner', '.owner', 'Donasi', '.donasi', ftrol, { contexInfo: { mentionedJid: conn.parseMention(str)}})

}
handler.help = ['info']
handler.tags = ['main']
handler.command = /^(info)$/i

handler.fail = null

module.exports = handler
let botol = global.botwm


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, 'H ', m, 'M ', s, 'S '].map(v => v.toString().padStart(2, 0) ).join('')
}