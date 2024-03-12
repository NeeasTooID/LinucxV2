//https://github.com/BrunoSobrino/TheMystic-Bot-MD/blob/master/lib/ytdll.js#L46

/*let { youtubedl, youtubedlv2, youtubeSearch } = require('@bochilteam/scraper');

var handler = async (m, { conn, command, text, usedPrefix }) => {
  try {
    if (!text) {
      return conn.reply(m.chat, `Use an example: ${usedPrefix}${command} eula song`, m);
    }

    conn.sendMessage(m.chat, {
		react: {
			text: '▶️',
			key: m.key,
		}
	});

    let search = await youtubeSearch(text);

    if (!search || !search.video || !search.video[0]) {
      throw 'Video Tidak Ditemukan, Coba Judul Lain';
    }

    let vid = search.video[0];
    let { authorName, title, thumbnail, duration, durationS, viewH, publishedTime, url } = vid;
    let caption = `» *Duration:* ${duration}
» *Views:* ${viewH}
» *Uploads:* ${publishedTime}

YTdl by *https://github.com/BochilTeam/scraper*
Search by *https://github.com/BochilTeam/scraper*
Send by *Assisten YuLa*`;

    await conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'AUDIO SEDANG DI KIRIM',
body: 'Youtube Play by Assisten YuLa',
thumbnailUrl: thumbnail,
sourceUrl: "https://youtube.com",
mediaType: 1,
renderLargerThumbnail: true
}}})
    if (durationS > 1200) return m.reply(`_Duration: *( ${duration} )*_\n_Tidak dapat mengirim, maksimal durasi 20Menit *( 20:00 )*_`);
    const yt = await youtubedl(url).catch(async (_) => await youtubedlv2(url));
    const link = await yt.audio['128kbps'].download();
    let doc = {
      audio: {
        url: link,
      },
      mimetype: 'audio/mp4',
      fileName: `${title}`,
    };
    
    return conn.sendMessage(m.chat, doc, { quoted: m });
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'Terjadi kesalahan. Silakan coba lagi dengan benar....', m);
  }
};

handler.help = ['youtubeplay'].map((v) => v + ' <name>');
handler.tags = ['downloader'];
handler.command = /^(ytplay|play|youtubeplay|music)$/i;
handler.limit = true;

module.exports = handler*/

import ytdl from 'ytdl-core';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import search from 'yt-search';

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('*example*: .play eula song');
  try {
    let results = await search(text);
    let videoId = results.videos[0].videoId;
    let info = await ytdl.getInfo(videoId);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    let thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    let url = info.videoDetails.video_url;
    let duration = parseInt(info.videoDetails.lengthSeconds);
    let uploadDate = new Date(info.videoDetails.publishDate).toLocaleDateString();
    let views = info.videoDetails.viewCount;
    let minutes = Math.floor(duration / 60);
    let description = results.videos[0].description;
    let seconds = duration % 60;
    let durationText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K';
  } else {
    return views.toString();
  }
}

    let audio = ytdl(videoId, { quality: 'highestaudio' });
    let inputFilePath = 'tmp/' + title + '.webm';
    let outputFilePath = 'tmp/' + title + '.mp3';

    let viewsFormatted = formatViews(views);
    let infoText = `  ◦ *Duration*: ${durationText}
  ◦ *Upload*: ${uploadDate}
  ◦ *Views*: ${viewsFormatted}
  
YTdl By https://github.com/fent/node-ytdl-core
Search By https://github.com/talmobi/yt-search
Sent By Assistant Yula💕`;

    var pesan = conn.relayMessage(m.chat, {
                extendedTextMessage:{
                text: infoText, 
                contextInfo: {
                     externalAdReply: {
                        title: "AUDIO SEDANG DI KIRIM",
                        body: "Youtube Play by Assisten Yula",
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: thumbnailUrl,
                        sourceUrl: "https://youtube.com"
                    }
                }, mentions: [m.sender]
}}, {});

    audio.pipe(fs.createWriteStream(inputFilePath)).on('finish', async () => {
      ffmpeg(inputFilePath)
        .toFormat('mp3')
        .on('end', async () => {
          let thumbnailData = await conn.getFile(thumbnailUrl);
          let buffer = fs.readFileSync(outputFilePath);
          conn.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mpeg' }, { quoted: m });
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .on('error', (err) => {
          console.log(err);
          m.reply(`There was an error converting the audio: ${err.message}`);
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .save(outputFilePath);
    });

  } catch (e) {
    console.log(e);
    m.reply(`An error occurred while searching for the song: ${e.message}`);
  }
};

handler.help = ['youtubeplay'].map(v => v + ' name/url');
handler.tags = ['downloader'];
handler.command = /^(ytplay|play|youtubeplay|song|music)$/i;
handler.register = false
handler.premium = false;
handler.limit = true;

export default handler