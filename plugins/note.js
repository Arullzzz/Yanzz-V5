let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = ` ╭─────[ *PEMBARUAN* ]─────✧
┴
│ PENAMBAHAN FITUR
│ 
│ FIKS YG EROR
│ 
│ DAH SEGITU AJA🗿
│ 
│ TOTAL FITUR SAAT INI 715
┬
╰──────────···`.trim()
  const button = {
        buttonText: 'CLICK HERE',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'BACK TO MENU', description: "KEMBALI KE MENU UTAMA", rowId:".?"},
        {title: 'SCRIPT', description: "SCRIPT YG DIPAKAI YANZZ BOT", rowId:".sc"},
        {title: 'GROUP BOT', description: "OFFICIAL GROUP BOT", rowId:".gcbot"},
        {title: 'CARA INVIT BOT', description: "TANYA OWNER", rowId:".owner"},
        {title: 'DONASI?', description: "DONASI AGAR BOT ON 24 JAM", rowId:".donasi"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(note|pembaruan)$/i
handler.help = ['pembaruan']
module.exports = handler
