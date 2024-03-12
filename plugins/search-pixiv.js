import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
if (!text) throw `Contoh : \n.pixiv Eula Lawrence`
const { data } = await axios.get(`https://api.itsrose.life/searching/pixiv/?mode=search&query=${text}&random=5&r18=9`, {
    headers: { Authorization: `${global.rose}` }
  }).catch((e) => e?.response);
let img = data[Math.floor(Math.random() * data.length)].url;
        conn.sendFile(m.chat, img, 'img.png', `*Search results:* _${text}_`, m)
        	} catch (e) {
		console.log(e)
		throw `Pencarian Tidak Di Temukan!!!`
	}
}
handler.help = ['pixivimg'].map(v => v + ' query')
handler.tags = ['search']
handler.command = /^(pixiv|pixivimg)$/i
handler.limit = true
handler.nsfw = true

export default handler