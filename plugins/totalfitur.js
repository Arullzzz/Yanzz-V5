let handler = async (m, { conn }) => {
let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.sendButton(m.chat, `*Total Fitur:* ${totalfeatures}`, global.botdate, 'Info', '.info', m) 
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler