let handler = async (m, { conn }) => {
let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.send3Button(m.chat, `*Total Fitur:* ${totalfeatures}`, global.botdate, 'Info', '.info', 'Back To Menu', '.menu', 'Test Speed', '#speed' m) 
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler
