let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `*Join Ke Grup Official Haoribotz*`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: '💌 › Group Haoribotz', description: "Group Utama Haoribotz", rowId:".gcbot1"},
        {title: '✉️ › Gruop Kimak All Bot', description: "Group Kedua", rowId:".gcbot2"},
        {title: '✉️ › Group OneBot', description: "Gruop Ketiga", rowId:".gcbot3"},
        {title: '🎐 › Owner', description: "Creator Haoribotz >ω<", rowId:".nowner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot|grupbot|botgrup)$/i
handler.help = ['gcbot', 'grupbot', 'botgrup']
module.exports = handler
