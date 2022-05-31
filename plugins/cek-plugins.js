let handler = async (m, { args, usedPrefix, text, command }) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} muhammad`
    let { total, success, last, lastSuccess } = global.db.data.stats[text + '.js']
    conn.send2Button(m.chat, `
📑 *Plugins:* ${args[0]}
*💬 Total :* ${total}
*✔️ Succes :* ${success}
${readMore}
*🕔 Last time used:* ${new Date(last)}
*🕔 Last time it worked:* ${new Date(lastSuccess)}
`, global.botdate, 'INFO', 'info', 'OWNER', '.owner', m)
}

handler.help = ['plugins'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^plugins$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)