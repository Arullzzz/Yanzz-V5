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

 

const defaultMenu = {

    before: `
πͺΒ·Β·βββββ’γ ll ArullBotz ΰ½΄ΰ½»βΈΝ γβ’ββββΒ·Β·Ι

π *Name:* %name
π *Tags:* %tag
π *Premium:* %prems
π *Age:* %age
π *Limit:* %limit
π *Money:* %money
π *Role:* %role
π *Level:* %level [%xp4levelup]
π *Xp:* %exp / %maxexp
π *Total Xp:* %totalexp

              *γ llΔ± TODAY Δ±ll γ*
π Tanggal: *%week %weton, %date*
π Tanggal Islam: *%dateIslamic*
π Waktu: *%time*
π Uptime: *%uptime (%muptime)*
π Database: %rtotalreg dari %totalreg

                    *γ llΔ± INFO Δ±ll γ*      

π *Nama Bot:* %me
π *Owner Bot:* %ow
π *Mode:* ${global.opts['self'] ? 'Private' : 'Publik'}
π *Prefix:* [ Multi Prefix ]
π *Speed:* ${neww - old} ms
π *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? 'π pengisian' : ''}` : 'tidak diketahui'}
π *Uptime:* %uptime (%muptime)
π *Database:* %rtotalreg dari %totalreg


       *γ llΔ± INFO COMMAND Δ±ll γ*     

*β* = Premium
*β* = Limit

%readmore`.trimStart(),
  header: `β­ββββ *%category* ββββ³Ή`,
  body: `ββ¬‘ %cmd %islimit %isPremium`,
  footer: `β°β’βββββββββββββββββββ β³Ή`,
  after: `
β βββββββββββββββββββββββββββββββββββββββββββββ β.
`,
}

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

	

	//TAGS

	let tag = `@${m.sender.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

    let waofc = `@${'0'.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let ow = `@${'6285822347348'.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let nurt = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let mds = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let mds2 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let admn = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

  let par = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par2 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par3 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par4 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let tq = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par6 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 

	let bzz = './audio/ara-nabila.mp3'

	let platform = os.platform()

	let merk = conn.user.phone.device_manufacturer

	let mode = global.opts['self'] ? 'Private' : 'Publik'

	let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]

    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]



    let _uptime = process.uptime() * 1000

    let uptime = clockString(_uptime)

  let tags

  let teks = `${args[0]}`.toLowerCase()

  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'sound', 'vn', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner', 'gift', 'thnks']

  if (!arrayMenu.includes(teks)) teks = '404'

  if (teks == 'all') tags = {

    'main': 'Utama',

    'game': 'Game',

    'rpg': 'Epic Rpg',

    'xp': 'Exp & Limit',

    'fun': 'Fun',

    'jodoh': 'Jodoh',

    'gift': 'gift',

    'anime': 'Anime',

    'hentai': `NSFW`,

    'premium': 'Premium',

    'anonymous': 'Anonymous Chat',

    'kerang': 'Kerang Ajaib',

    'quotes': 'Quotes',

    'absen': 'Absen',

    'voting': 'vote',

    'admin': `Admin`,

    'group': 'Grup',

    'news': 'News',

    'internet': 'Internet',

    'edukasi': 'Edukasi',

    'quran': 'Islam',

    'image': 'Random Image',

    'sticker': 'Stiker',

    'nulis': 'MagerNulis & Logo',

    'audio': 'Pengubah Suara',
    
    'sound': 'Sound Music',
    
    'vn': 'Vn Imuet',
    
    'downloader': 'Downloader',

    'tools': 'Tools',

    'database': 'Database',

    'jadibot': 'Jadi Bot',

    'info': 'Info',

    '': 'Tanpa Kategori',

    'thnks': 'THANKS TO',

  }

  if (teks == 'game') tags = {

    'game': 'Game'

  }

  if (teks == 'xp') tags = {

    'xp': 'Exp & Limit'

  }

  if (teks == 'news') tags = {

    'news': 'News'

  }

  if (teks == 'edukasi') tags = {

    'edukasi': 'Edukasi'

  }

  if (teks == 'nsfw') tags = {

    'hentai': 'NSFW',

    'nsfw': 'HENTAI',

  }

  if (teks == 'stiker') tags = {

    'sticker': 'Stiker'

  }

  if (teks == 'rpg') tags = {

    'rpg': 'Epic Rpg'

  }

  if (teks == 'kerangajaib') tags = {

    'kerang': 'Kerang Ajaib'

  }

  if (teks == 'quotes') tags = {

    'quotes': 'Quotes'

  }

  if (teks == 'admin') tags = {

    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`

  }

  if (teks == 'grup') tags = {

    'group': 'Grup'

  }

  if (teks == 'premium') tags = {

    'premium': 'Premium'

  }

  if (teks == 'internet') tags = {

    'internet': 'Internet'

  }

  if (teks == 'image') tags = {

    'image': 'Random Image'

  }

  if (teks == 'anonymous') tags = {

    'anonymous': 'Anonymous Chat'

  }

  if (teks == 'nulis') tags = {

    'nulis': 'MagerNulis & Logo'

  }

  if (teks == 'downloader') tags = {

    'downloader': 'Downloader'

  }

  if (teks == 'tools') tags = {

    'tools': 'Tools'

  }

  if (teks == 'fun') tags = {

    'fun': 'Fun',

    'jodoh': 'Jodoh'

  }

  if (teks == 'jodoh') tags = {

    'jodoh': 'Jodoh'

  }

  if (teks == 'database') tags = {

    'database': 'Database'

  }

  if (teks == 'vote') tags = {

    'vote': 'Voting',

    'absen': 'Absen'

  }

    if (teks == 'anime') tags = {

    'anime': 'Anime'

  }

  if (teks == 'quran') tags = {

    'quran': 'Islam'

  }

  if (teks == 'gift') tags = {

    'gift': 'Gift'

  }

  if (teks == 'audio') tags = {

    'audio': 'Pengubah Suara'

  }
  
    if (teks == 'sound') tags = {
    'sound': 'Sound Music'

  }
  
  if (teks == 'vn') tags = {
    'vn': 'Vn Imuet'

  }
  if (teks == 'jadibot') tags = {

    'jadibot': 'Jadi Bot'

  }

  if (teks == 'info') tags = {

    'info': 'Info'

  }

  if (teks == 'tanpakategori') tags = {

    '': 'Tanpa Kategori'

  }

  if (teks == 'thnks') tags = {

    'thnks': 'THANKS TO'

  }

  if (teks == 'owner') tags = {

    'owner': 'Owner',

    'host': 'Host',

    'advanced': 'Advanced'

  }







  try {

    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))

    let { money, age, exp, limit, level, role, registered } = global.db.data.users[m.sender]

    let premium = global.db.data.users[m.sender].premium

    let prems = `${premium ? 'Yes': 'No'}`

    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

    let wm = global.botwm

    let datebot = global.botdate

    let logo = global.logo

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let bioo = (await conn.getStatus(who).catch(console.error) || {}).status || ''



//HITUNG MUNDUR

    const hariRaya = new Date('January 1, 2023 23:59:59')

    const sekarang = new Date().getTime()

    const Selisih = hariRaya - sekarang

    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));

    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))

    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)

    const hariRayaramadan = new Date('Maret 22, 2023 23:59:59')

    const sekarangg = new Date().getTime()

    const lebih = hariRayaramadan - sekarangg

    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));

    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))

    const detikk = Math.floor( lebih % (1000 * 60) / 1000)

const ultah = new Date('February 29, 2024 23:59:59')

    const sekarat = new Date().getTime() 

    const Kurang = ultah - sekarat

    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));

    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))

    const detek = Math.floor( Kurang % (1000 * 60) / 1000)

    

    let nama = await conn.getName(m.sender)

    let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}





  let logo2 = fs.readFileSync('src/logo2.jpg')

  kanna = fs.readFileSync('src/logo3.jpg')

  kannaImg = (await conn.prepareMessage('0@s.whatsapp.net', kanna, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage

  sumberImg = await (await fetch(fla + teks + ' menu')).buffer()

  image = (await conn.prepareMessage('0@s.whatsapp.net', logo2, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage

  //FAKE TROLI

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

    message: `Hai Kak ${name}!`, 

    orderTitle: `β?Menu βΈ`,

    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

    const ftroli = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `β?Menu βΈ`,

    thumbnail: await (await fetch(fla + teks)).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }



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

    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {

      return {

        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],

        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],

        prefix: 'customPrefix' in plugin,

        limit: plugin.limit,

        premium: plugin.premium,

        enabled: !plugin.disabled,

      }

    })

      

    let txtmenu = `
β­ββββββββββββββββββκ₯
β    γ *Ζ²ser ΖnfΟrmΞ±tΞΉΟn* γ
ββ¬βββββββββββββββββ β³Ή
ββ€β¦β *Nama :* *${name}*
βββ¦β *Exp :* *${exp}*
βββ¦β *Tag:* ${tag}
βββ¦β *Status:* ${premium ? 'Premium' : 'Free'} User
βββ¦β *Limit :* *${limit}*
βββ¦β *Level :* *${level}*
βββ¦β *Rank :* *${role}*
ββ¬βββββββββββββββββ β³Ή
ββ€         γ *CΞ±βendΞ±r*γ
βββββββββββββββββββ β³Ή
ββ¦β Hari: *${week}*
ββ¦β Weton: *${weton}*
ββ¦β Tanggal: *${date}*
ββ¦β Waktu: *${time}* 
ββ¦β Islam: *${dateIslamic}*
ββ¦β Uptime: *${uptime}*
ββ¬βββββββββββββββββ β³Ή
ββ€   γ *BΟt ΖnfΟrmΞ±tΞΉΟn* γ
βββββββββββββββββββ β³Ή
ββ¦β Aktif selama ${uptime}
ββ¦β Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? 'π Pengisian' : ''}` : 'β Tidak Diketahui'}
ββ¦β Prefix : [Multi Prefix]
ββ¦β *${Object.keys(global.db.data.users).length}* Pengguna
ββ¦β *${totaljadibot.length}* Jadibot
ββ¦β *${conn.blocklist.length}* Terblock
ββ¦β *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
ββ¦β *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
β°ββββββββββββββββββκ₯
*Official Bot By ${ArullBotz}*
*Powered By ${Arull}*`

    if (teks == '404') {

      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {

        "listMessage": {
          "title": `${ucapan()}, ${name} !`.trim(),
          "description": txtmenu.trim(),
          "footerText": 'π? *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
          "buttonText": "Click Here",
          "listType": "SINGLE_SELECT",
                        "sections": [
                              {
                                "rows": [{
                                         "title": "π βΊ Status ",
                                         "description": "Status BOT",
                                         "rowId": ".botstat"
                                    }, {
                                         "title": "β‘βΊ Speed ",
                                         "description": "Menampilkan Kecepatan Respon BOT",
                                         "rowId": ".ping"
                                    }, {
                                         "title": "ποΈβΊ Info ",
                                         "description": "Menampilkan Info BOT",
                                         "rowId": ".info"
                                    }, {
                                         "title": "π βΊ Developer Bot ",
                                         "description": "Kontak Creator Ku",
                                         "rowId": ".owner"
                                    }, {
                                         "title": "β βΊ Syarat Dan Peraturan ",
                                         "description": "Budayakan Membaca Sebelum Menggunakan Bot",
                                         "rowId": ".rules"
                                    }, {
                                         "title": "πͺ βΊ  Leaderboard",
                                         "description": "Cek Posisi Mu",
                                         "rowId": ".lb"  
                                    }, {
                                         "title": "π βΊ Group Official Bot",
                                         "description": "Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan",
                                         "rowId": ".gcbot"                                    
      }],             
                    "title": "β?Status γ"
                }, {
                  "rows": [{
                  "title": "γ π¬ γβΊ Semua Perintah",
                  "description": "Menampilkan semua fitur dari bot",
                  "rowId": ".? all"
                }, {              
                  "title": "γ π? γβΊ Game ",
                  "description": "Menampilkan fitur dari game",
                  "rowId": ".? game"
                }, {
                  "title": "γ π± γβΊ Rpg ",
                  "description": "Menampilkan fitur dari rpg ! ",
                  "rowId": ".? rpg"
                }, {
                  "title": "γ π γβΊ Exp & Limit ",
                  "description": "Menampilkan fitur dari xp",
                  "rowId": ".? xp"
                }, {
                  "title": "γ π§© γβΊ Fun ",
                  "description": "Menampilkan fitur dari fun",
                  "rowId": ".? fun"
                }, {
                  "title": "γ π γβΊ Gift ",
                  "description": "Menampilkan fitur dari gift!",
                  "rowId": ".? gift"
                }, {
                  "title": "γ π γβΊ Nsfw ",
                  "description": "Menampilkan fitur dari nsfw",
                  "rowId": ".? nsfw"
                }, {
                  "title": "γ β©οΈ γβΊ Anime ",
                  "description": "Menampilkan fitur dari anime",
                  "rowId": ".? anime"
                }, {
                  "title": "γ π° γβΊ News ",
                  "description": "Menampilkan fitur dari berita",
                  "rowId": ".? News"
                },  {
                  "title": "γ βͺοΈ γβΊ Islamic ",
                  "description": "Menampilkan fitur dari islam",
                  "rowId": ".? quran"
                }, {
                  "title": "γ π γβΊ Edukasi ",
                  "description": "Menampilkan fitur dari edukasi",
                  "rowId": ".? edukasi"
                }, {
                  "title": "γ πΌοΈ γβΊ Random Pict ",
                  "description": "Menampilkan fitur dari foto",
                  "rowId": ".? image"
                },  {
                  "title": "γ π« γβΊ Sticker ",
                  "description": "Menampilkan fitur dari sticker",
                  "rowId": ".? stiker"
                }, {
                  "title": "γ π γβΊ Kerang Ajaib",
                  "description": "Menampilkan fitur dari kerang ajaib",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "γ π΅ γβΊ Sound Music ",
                  "description": "Menampilkan fitur dari sound music",
                  "rowId": ".? sound"
                }, { 
                  "title": "γ π§ γβΊ Random Vn",
                  "description": "Menampilkan fitur dari rendom vn",
                  "rowId": ".? vn"                                                      
                }, {
                  "title": "γ π γβΊ Quotes ",
                  "description": "Menampilkan fitur dari random teks",
                  "rowId": ".? quotes"
                }, {
                  "title": "γ ποΈ  γβΊ Group Settings ",
                  "description": "Menampilkan fitur dari pengaturan grup",
                  "rowId": ".? admin"
                }, {
                  "title": "γ π₯ γβΊ Group ",
                  "description": "Menampilkan fitur dari group",
                  "rowId": ".? grup"
                }, {
                  "title": "γ π γβΊ Premium ",
                  "description": "Menampilkan fitur dari premium",
                  "rowId": ".? premium"
                }, {
                  "title": "γ π» γβΊ Internet ",
                  "description": "Menampilkan fitur dari internet",
                  "rowId": ".? internet"
                }, {
                  "title": "γ ποΈ γβΊ Editz Menu ",
                  "description": "Menampilkan fitur dari logo",
                  "rowId": ".? nulis"
                }, {
                  "title": "γ π© γβΊ Downloader ",
                  "description": "Menampilkan fitur dari download",
                  "rowId": ".? downloader"
                }, {
                  "title": "γ π­ γβΊ  Anonymous Chat",
                  "description": "Menampilkan fitur dari anonymous chat",
                  "rowId": ".? anonymous"  
                }, {              	
                  "title": "γ π§° γβΊ Tools ",
                  "description": "Menampilkan fitur dari tools",
                  "rowId": ".? tools"
                }, {
                  "title": "γ π γβΊ Database ",
                  "description": "Menampilkan fitur dari database",
                  "rowId": ".? database"
                }, {
                  "title": "γ π³οΈ γβΊ Vote & Absen ",
                  "description": "Menampilkan fitur dari vote",
                  "rowId": ".? vote"
                }, {
                  "title": "γ ποΈ γβΊ Voice Changer ",
                  "description": "Menampilkan fitur dari voice changer ",
                  "rowId": ".? audio"
                }, {
                  "title": "γ π γβΊ Multi-Session ",
                  "description": "Menampilkan fitur dari jadibot",
                  "rowId": ".? jadibot"
                }, {
                  "title": "γ βΉοΈ γβΊ Info ",
                  "description": "Menampilkan fitur dari info",
                  "rowId": ".? info"
                }, {
                  "title": "γ β γβΊ No Category ",
                  "description": "Menampilkan fitur dari tanpa kategori",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "γ π©π»βπ» γβΊ Owner ",
                  "description": "Menampilkan fitur dari owner",
                  "rowId": ".? owner"
                }],
                                "title": "β?Category γ"
                                }, {
                                "rows": [{                                	
                                "title": "π β«  Catatan Perubahan ",
                                "description": "Last Update Terakhir Di BOT",
                                "rowId": ".notes"                  
                }],                
                                "title": "β?Last Update γ"
                                }, {
                                "rows": [{                                	
                  "title": "γ π¨οΈ γβΊ Ziv Chat ",
                  "description": "Mengobrol Dengan Orang Lain",
                  "rowId": ". start"
                }],
                                "title": "β?Anonymous Chat γ"
                                }, {
                                "rows": [{                                	
                                         "title": "π£ βΊ Group Setting ",
                                         "description": "Setting Grup",
                                         "rowId": ".setelangrub" 
                                     }, {
                                         "title": "βοΈ βΊ Bot Setting ",
                                         "description": "Setting Bot",
                                         "rowId": ".botsett" 
                 }],
                                "title": "β?Pengaturan γ" 
                                }, {
                                "rows": [{
                                "title": "π³οΈ β«  Donasi ",
                                "description": "Donasi kak, jangan enak pakenya doang",
                                "rowId": ".donasi"
                                }, {
                                "title": "π β«  Sewa bot - Premium ",
                                "description": "Untuk kamu yang ingin melihat daftar harga sewa dan premium",
                                "rowId": ".sewa"
                                }, {
                                "title": "π β«  Premium ",
                                "description": "Menampilkan List Harga premium",
                                "rowId": ".premium"
                                }, {
                                "title": "π¬  β«  Source Code ",
                                "description": "Menampilkan Source Code Bot",
                                "rowId": ".sc"
                                }, {
                                "title": "π­ β«  Pertanyaan Tentang Bot Ini ",
                                "description": "Especially WhatsApp users whose numbers start with +212",
                                "rowId": ".QnA"
                                }, {
                                "title": "βοΈ β«  Kata penutup ",
                                "description": "Terimakasih untuk user yang telah menggunakan bot, jika ada kesalahan atau permintaan bisa chat ke nomor owner\nNote: chat P/mainΒ² tidak akan di respon(user bisa terkena banned/block)",
                                "rowId": ".creator"
                                }], 
                    "title": "β?Info Lainnya γ"
                }, {
                  "rows": [{
                  "title": "π₯γ Contributor γ",
                  "description": "Terima kasih banyak untuk user yang telah berpartisipasi",                  
                  "rowId": ".? thnks"
                       }],
                                "title": "β?Thanks To  γ"
                            }
                        ], "contextInfo": 

                         { "stanzaId": m.key.id,

                        "participant": m.sender,

                        "quotedMessage": m.message

                        }

                    }

                 }, {quoted: ftrol, contextInfo: { mentionedJid: conn.parseMention(txtmenu) }}), { waitForAck: true })

  

    }

        

    /*const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 9999,

    status: 1,

    surface : 1,

    message: '[ ! ] Memuat Menu ' + teks + '...\n ```[ ! ] Tunggu Sebentar```', 

    orderTitle: `β?Menu βΈ`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

    conn.reply(m.chat, '```[ ! ] wait...```', fload)*/

    // gunakan ini jika kamu menggunakan whatsapp bisnis

    //   throw `

    // βγ DAFTAR MENU γ

    // β ${_p + command} all

    // β ${_p + command} game

    // β ${_p + command} xp

    // β ${_p + command} stiker

    // β ${_p + command} kerang

    // β ${_p + command} quotes

    // β ${_p + command} admin

    // β ${_p + command} group

    // β ${_p + command} premium

    // β ${_p + command} internet

    // β ${_p + command} anonymous

    // β ${_p + command} nulis

    // β ${_p + command} downloader

    // β ${_p + command} tools

    // β ${_p + command} fun

    // β ${_p + command} database

    // β ${_p + command} vote

    // β ${_p + command} quran

    // β ${_p + command} audio

    // β ${_p + command} jadibot

    // β ${_p + command} info

    // β ${_p + command} tanpa kategori

    // β ${_p + command} owner

    // βββββ  

    //     `.trim()

    let groups = {}

    for (let tag in tags) {

      groups[tag] = []

      for (let plugin of help)

        if (plugin.tags && plugin.tags.includes(tag))

          if (plugin.help) groups[tag].push(plugin)

      // for (let tag of plugin.tags)

      //   if (!(tag in tags)) tags[tag] = tag

    }

    conn.menu = conn.menu ? conn.menu : {}

    let before = conn.menu.before || defaultMenu.before

    let header = conn.menu.header || defaultMenu.header

    let body = conn.menu.body || defaultMenu.body

    let footer = conn.menu.footer || defaultMenu.footer

    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after

    let _text = [

      before,

      ...Object.keys(tags).map(tag => {

        return header.replace(/%category/g, tags[tag]) + '\n' + [

          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {

            return menu.help.map(help => {

              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)

                .replace(/%islimit/g, menu.limit ? 'π»' : '')

                .replace(/%isPremium/g, menu.premium ? 'πΏ' : '')

                .trim()

            }).join('\n')

          }),

          footer

        ].join('\n')

      }),

      after

    ].join('\n')

    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''

    let replace = {

      '%': '%',

      p: uptime, muptime,

      me: conn.user.name,

      npmname: package.name,

      npmdesc: package.description,

      version: package.version,

      exp: exp - min,

      maxexp: xp,

      totalexp: exp,

      

      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,

      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',

      mds2, par6, tag, waofc, ow, mds, admn, nurt, par, par2, par3, par4, tq, jhari, jjam, mmmenit, ddetik, harii, jamm, menitt, detikk, ohari, ojam, onet, detek, mode, merk, platform, _p, money, age, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, neww, old,

      readmore: readMore

    }

    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])



    //MENU 3BUTTON PDF

    /*await conn.sendMessage(m.chat, { "contentText": 'ββββ [ *DASHBOARD* ] ββββ', "footerText": text,

"buttons": [

{buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1},

{buttonId: '.donasi', buttonText: {displayText: 'DONASI'}, type: 1},

{buttonId: '.rules', buttonText: {displayText: 'RULES'}, type: 1}

],

"headerType": "DOCUMENT", "documentMessage": {

            "url": "https://mmg.whatsapp.net/d/f/AsO5KpESy9E0WI72xEVp65rx505bQxvuIma79L8Ue076.enc",

            "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

            "title": "ness.docx",

            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",

            "fileLength": "99999999999999",

            "pageCount": 100,

            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",

            "fileName": 'ArullBotz',

            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",

            "directPath": "/v/t62.7118-24/35150115_287008086621545_8250021012380583765_n.enc?ccb=11-4&oh=6f0f730e5224c054969c276a6276a920&oe=61A21F46",

            "mediaKeyTimestamp": "1634472176",

            "jpegThumbnail": await (await fetch('https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg')).buffer(),

  }}, 'buttonsMessage', { quoted: ftroli, contextInfo: { mentionedJid: conn.parseMention(text), forwardingScore: 999, isForwarded: true, externalAdReply: { title: global.wm, body: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< πβ¨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :βΉ'])}`, description: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< πβ¨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :βΉ'])}`, mediaType: 2, thumbnail: await (await fetch(`${logos()}`)).buffer(), mediaUrl: `https://youtu.be/N60DXUDEhIE`}}})*/

      //MENU BUTTON VIDIO
      
      await conn.send2ButtonVid(m.chat, `${gifs()}`, text, '                     γ *Yanzz-Bot* γ', 'OWNER', '.owner', 'PING', '.ping', fkon, { contextInfo: { mentionedJid: conn.parseMention(text),
        externalAdReply: {
            title: `${ucapan()}`,
            body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QΟQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UΟU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :βΉ'])}`,
            description: `Tetap Semangat Yah Kak :3`,
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/72212de2826ec08f24b56.jpg')).buffer(),
         mediaUrl: `https://www.facebook.com/Inunime-107082474576049/`
        }
     }
    })
    
//MENU 3BUTTON LOCATION

    //await conn.send3ButtonLoc(m.chat, logo, 'Κ-`βββββββ[ *DASHBOARD* ]βββββββΒ΄-Ι' , text.trim(), 'Owner', '.nowner', 'Donasi', '.donasi', 'Rules', '.rules', m)

    

  //MENU SELECTION

    /*await conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {

        "listMessage": {

          "title": `β§ββββββββΒ·Β·Β·[ Dashboard ]Β·Β·Β·ββββββββββ§`.trim(),

          "description": `π? ΖΞ±Ι΄Ι΄Ξ± Π²ΟΡ `.trim(),

          "footerText": 

text,

          "buttonText": "Click Here!",

          "listType": "SINGLE_SELECT",

          "sections": [

                            {

                                "rows": [{

                                         "title": `π ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? 'π pengisian' : ''}` : 'tidak diketahui'}`,

                                         "rowId": "...."

                                    }, {

                                         "title": `β‘${neww - old}`,

                                         "rowId": ".ping"

                                    }, {

                                         "title": `β° ${uptime}`,

                                         "rowId": ".runtime"

                       }],

                    "title": "βββββββββββββββ[ Stats ]βββββββββββββββ"

                }, {

                	            "rows": [{

                                "title": "Donasi",

                                "rowId": ".donasi"

                                }, {

                                "title": "Sewa",

                                "rowId": ".sewa"

                                }, {

                                "title": "Premium",

                                "rowId": ".premium"

                                }, {

                                "title": "Script",

                                "rowId": ".sc"

                                }, {

                                "title": "Owner",

                                "rowId": ".owner"

                                }],

                                "title": "ββββββββββββββββ[ Info ]ββββββββββββββββ"

                  }

                        ], "contextInfo": 

                         { "stanzaId": m.key.id,

                        "participant": m.sender,

                        "quotedMessage": m.message

                        }

                      }

                     }, {}), {waitForAck: true})*/

                     

                     //MENU CATEGORY

  /*res = await conn.prepareMessageFromContent(m.chat, {

    "productMessage": {

      "product": {

        "productImage": image,

        "productId": "4938174216214248",

        "title": 'β§βββββββΒ·Β·Β·[ Menu ]Β·Β·Β·βββββββββ§',

        "description": `\n${wm}\n` + text,

        "retailerId": `${week}, ${date}  |  ΚΚ Κα΄α΄α΄α΄-sα΄α΄α΄ β·βͺ`,

        "url": '\n',

        "descriptionCount": "999999999",

        "productImageCount": "1",

      },

      "businessOwnerJid": "0@s.whatsapp.net",

      "contextInfo": {

        "forwardingScore": 9999,

        "isForwarded": true

      }

    }

  },

    { quoted: fkon })

  conn.relayWAMessage(res)*/



//MENU FAKEYOUTUBE

    /*conn.send3ButtonImg(m.chat, await (await fetch(fla + teks)).buffer(), 'Κ-`βββββββ[ *DASHBOARD* ]βββββββΒ΄-Ι' , text.trim(), 'Owner', '.nowner', 'Donasi', '.donasi', 'Rules', '.rules', ftrol, {

    quoted: m,

    contextInfo: {

        externalAdReply: {

            title: global.wm,

            body: `${pickRandom(['Tetap Semangat Puasa Nya β€οΈ', 'Udah Mandi Belum Kak? π', 'Semangat Ya Kak! π', 'Jangan Begadang Mulu Ya! π', 'Jangan Spam Ya Kak! π', 'Jangan Lupa Donasi Yak Kak! π', 'Jaga Kesehatan Yaw Kak! π₯°', 'Kalo Bosan Sama Haori Aja Kak π!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< πβ¨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :βΉ'])}`,

            description: `${pickRandom(['Tetap Semangat Puasa Nya β€οΈ', 'Udah Mandi Belum Kak? π', 'Semangat Ya Kak! π', 'Jangan Begadang Mulu Ya! π', 'Jangan Spam Ya Kak! π', 'Jangan Lupa Donasi Yak Kak! π'', 'Jaga Kesehatan Yaw Kak! π₯°', 'Kalo Bosan Sama Haori Aja Kak π!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< πβ¨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :βΉ'])}`,

            mediaType: 2,

          thumbnail: logo,

         mediaUrl: `https://youtu.be/OiTiqN9h4Xo`

        }

     }

    })*/



  /*conn.sendFile(m.chat, bzz, 'wibu.m4a', null, m, true, {

type: 'audioMessage', // paksa tanpa convert di ffmpeg

ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v

})*/

  } catch (e) {

    conn.reply(m.chat, 'Maaf, menu sedang error', m)

    throw e

  }

}

handler.help = ['menu', '?', 'help']

handler.tags = ['main']

handler.command = /^(menu|\?|m)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.register = false



handler.admin = false

handler.botAdmin = false



handler.fail = null

handler.exp = 3



module.exports = handler



function pickRandom(list) {

  return list[Math.floor(Math.random() * list.length)]

}



const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)



function logos() {

  const lgs = moment.tz('Asia/Jakarta').format('HH')

  res = "Selamat dinihari"

  if (lgs >= 4) {

    imp = 'https://telegra.ph/file/abff7903bd674a8f9d307.jpg'

  }

  if (lgs > 10) {

    imp = 'https://telegra.ph/file/ba940019735e224132f74.jpg'

  }

  if (lgs >= 15) {

    imp = 'https://telegra.ph/file/a332bbac803e3c631bb07.jpg'

  }

  if (lgs >= 18) {

    imp = 'https://telegra.ph/file/a5c91ab6c58c7be066654.jpg'

  }

  return imp

}

function gifs() {
  const _gif = moment.tz('Asia/Jakarta').format('HH')
  gif = "Selamat dinihari"
  if (_gif >= 4) {
    gif = 'https://telegra.ph/file/b7c6137acddd4d3ad549b.mp4'
  }
  if (_gif > 10) {
    gif = 'https://telegra.ph/file/3c293c40dfbdb559d7317.mp4'
  }
  if (_gif >= 15) {
    gif = 'https://telegra.ph/file/63918e5b529e0c76d30a2.mp4'
  }
  if (_gif >= 18) {
    gif = 'https://telegra.ph/file/787adc4d7364b72da75a9.mp4'
  }
  return gif
}

function logopdf() {

  const lgs = moment.tz('Asia/Jakarta').format('HH')

  res = "Selamat dinihari"

  if (lgs >= 4) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  if (lgs > 10) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  if (lgs >= 15) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  if (lgs >= 18) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  return imp

}



function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Good Morning π"
  if (time >= 4) {
    res = "Good Morning π"
  }
  if (time > 10) {
    res = "Good Afternoon βοΈ"
  }
  if (time >= 15) {
    res = "Good Evening π"
  }
  if (time >= 18) {
    res = "Good Night π"
  }
  return res
    }
