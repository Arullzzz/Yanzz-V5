// ******************* CONFIG.JS **********************
// RECODE BY Ynz-Bot

// Options (Jangan diganti)
let scraper = require('@bochilteam/scraper')
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let wktuh = moment.tz('Asia/Jakarta').format('HH')
let wktum = moment.tz('Asia/Jakarta').format('mm')
let wktus = moment.tz('Asia/Jakarta').format('ss')


function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

// Global Staff
global.DeveloperMode = 'false' //Buat Mode True False Moderator
global.linkGC = ['https://chat.whatsapp.com/LDN0EeJfASs0lbUhJsOJu1'] // ganti jadi group lu
global.owner = ['6285822347348', '6285822347348' ,'6285822347348'] // Put your number here
global.mods = ['6285822347348'] // Want some help?
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'cristian9407',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'wEDTUsWj',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'ArullBotz' \n\n\n\n\n\\n\n\n\nDah Apa Lagi Bang Liat Liat🗿\n'
global.author = '۰ ⸼'

// BOT WM
global.botwm = '▧ ArullBotz | © Arull' //UBAH SETERAHMU
global.wm = '© 2022 By Arull'
global.botdate = `❏ ${wktuh} H  ${wktum} M  ${wktus} S\n❏ ${week} ${date}`

// LOGO
global.imagebot = `https://telegra.ph/file/793b6accf3758f092742a.jpg`
global.logo = fs.readFileSync('./src/logo3.jpg')
global.thumb1 = 'https://telegra.ph/file/5a882b8558fd1d2bd03fa.jpg'
global.thumb2 = 'https://telegra.ph/file/f87047ec6e5f0d4a9ea91.jpg'
global.thumb3 = 'https://telegra.ph/file/88edbb01051b397574def.jpg'
global.thumb4 = 'https://telegra.ph/file/7957630a57078c5ec0400.jpg'
global.logoowner = fs.readFileSync('./src/owner.jpg')

// HANTAI
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg','https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg','https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg']

//TEXT BOT
global.wait = '```┌▰▰▰▱▱▱▱▱▱▱┐Loading...```'
global.rpg = '[ ! ] Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT'
global.nsfw = '[ ! ] Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '```404 error```'
global.pref = '( # . ! /)'
global.CanvasAPI = '';
global.bs = scraper
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 9999 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
