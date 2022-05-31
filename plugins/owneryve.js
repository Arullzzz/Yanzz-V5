let handler = function (m) {
	this.sendContact(m.chat, '6288287810316', 'Owner NekoBotz :)', m)
}

handler.customPrefix = ['🍭Owner Kannabot'] 
handler.command = new RegExp

module.exports = handler