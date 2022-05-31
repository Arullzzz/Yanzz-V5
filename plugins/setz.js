function handler(m) {
  this.send2Button(m.chat, `*「 SET MODE 」*`, `*M O D E :* ${global.opts['self'] ? 'Self' : 'Publik'}\n\n${global.botdate}`, `${global.opts['self'] ? 'PUBLIC' : 'SELF'}`, `${global.opts['self'] ? '.on public' : '.off public'}`, 'INFO', '.info', m)
}
let botol = global.botwm
let wait = global.wait
handler.help = ['set', 'mode']
handler.tags = ['owner']

handler.command = /^(set|mode)$/i
handler.owner = true

module.exports = handler