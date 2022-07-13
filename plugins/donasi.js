let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0853-8016-6282]
│ •  [0852-9537-4964]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
