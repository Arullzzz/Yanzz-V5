let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Dompet'
  let botol = global.botwm
  let fetch = require('node-fetch')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { atm, name, tigame, user, level, role, money, premium, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let wm = global.botdate
    let str = `
╭─────❏「 BANK 」❏───
│📛 *Name* : ${username}
│ 💳 *Bank* : ${atm}
│ 💹 *Money* : ${money}
│🎫 *Limit* : ${limit}
│✨ *Exp* : ${exp}
│📊 *Level* : ${level}
│📍 *Role* : ${role}
╰─────────❏

`.trim()
    let mentionedJid = [who]
    conn.sendButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/b83a30633c4b5b99effd8.jpg')).buffer(),str, `${wm}`, 'Inventory', '.inv', m)
  }
}
handler.help = ['bank']
handler.tags = ['xp']
handler.register = true
handler.command = /^bank$/i
module.exports = handler