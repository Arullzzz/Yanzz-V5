let fetch = require("node-fetch");
let handler = async (m, { conn }) => {
  let res = await fetch(global.API("https://api.waifu.pics/", "/nsfw/waifu"))
  let json = await res.json()
    conn.sendButtonImg(m.chat, json.url, "Stress sama kartun..", global.wm, "Next", ".nsfwwaifu", m)
};
handler.help = ["nsfwwaifu", "waifunsfw"];
handler.tags = ["hentai"];

handler.command = /^(nsfwwaifu|waifunsfw)$/i;

handler.premium = true

module.exports = handler;