
import fetch from "node-fetch";

var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw 'Masukkan Query Link!'
 try {
let anu = await fetch(`https://api.betabotz.eu.org/api/download/xnxxdl?url=${text}&apikey=${global.lann}`)
let hasil = await anu.json() 

conn.sendMessage(m.chat, { video: { url: hasil.result.url }, fileName: 'xnxx.mp4', mimetype: 'video/mp4' }, { quoted: m })
 } catch (e) {
 throw `*Server error!*`
 }
}
handler.help = ['xnxxdl'].map(v => v + ' <url>')
handler.tags = ['nsfw', 'downloader']
handler.command = /^xnxxdl$/i
handler.nsfw = true
handler.limit = true

export default handler