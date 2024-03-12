import fetch from "node-fetch"
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw 'Masukkan Query Link!'
 try {
let anu = await fetch(`https://api.betabotz.eu.org/api/download/xvideosdl?url=${text}&apikey=${lann}`)
let hasil = await anu.json() 

conn.sendMessage(m.chat, { video: { url: hasil.result.url }, fileName: 'xnxx.mp4', mimetype: 'video/mp4' }, { quoted: m })
} catch (e) {
throw `*Server Error!*`
}
  }                                                    
handler.help = ['xvideosdl <url>']
handler.tags = ['nsfw', 'downloader']
handler.command = /^xvideosdl$/i
handler.limit = true
handler.nsfw = true

export default handler