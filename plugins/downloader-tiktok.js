import { tiktok } from 'betabotz-tools';

let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`;
if (!args[0].match(/tiktok/gi)) throw `URL Yang Tuan Berikan *Salah!!!*`;
try {
let api = await tiktok(args[0]);
let caption = `◥ *T I K T O K  D O W N L O A D* ◤

• *Duration:* ${api.result.data.duration}
• *Description:* ${api.result.data.title}

${wm}`;
await conn.sendMessage(m.chat, { video: { url: api.result.data.play }, caption: caption })
await conn.sendFile(m.chat, api.result.data.music, 'kasar.mp3', null, m)
      } catch (e) {
		console.log(e)
		m.reply(`Sistem Yula *Error*`)
	}
};
handler.help = ['tiktok'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i;
handler.limit = true;
handler.register = false;
export default handler;