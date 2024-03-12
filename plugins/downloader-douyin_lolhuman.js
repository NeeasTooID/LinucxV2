import fetch from 'node-fetch';
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://v.douyin.com/iXpBGvx/`
if (!args[0].match(/douyin/gi)) throw `URL Yang Tuan Berikan *Salah!!!*`
 try {
 let tioxd = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolkey}&url=${args[0]}`)
 conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
if (!tioxd.ok) throw await tioxd.text()
let tiodl = await tioxd.json()
if (!tiodl.status) throw tiodl
let { 
title, 
link, 
author, 
statistic
} = tiodl.result
await conn.sendFile(m.chat, link, 'tiovid.mp4', `┌─❖\n│「 *D O U Y I N  D L* 」\n└┬❖ 「  I N F O ⁩ 」\n   │✑ *Username :* ${author.username}\n   │✑ *Nickname :* ${author.nickname}\n   │\n   │✑ *Play :* ${statistic.play_count}\n   │✑ *Like :* ${statistic.like_count}\n   │✑ *Share :* ${statistic.share_count}\n   │✑ *Comment :* ${statistic.comment_count}\n   └───────────────┈ ⳹`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
   } catch (e) {
		console.log(e)
		m.reply(`Sistem Yula *Error*`)
	}
}
handler.help = ['douyin'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(douyin|douyindl)$/i
handler.register = false
handler.limit = true

export default handler