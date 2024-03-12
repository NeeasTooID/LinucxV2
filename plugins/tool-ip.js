import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
	  if (!text) throw m.reply(`Example: ${usedPrefix}${command} 8.8.8.8`)
	  try {
      const data = await( await fetch(`https://ipwho.is/${text}`)).json()
           const cap = `🌐IP: ${data.ip}
🗄️ Type: ${data.type}
📍 Continent: ${data.continent}
🌎 Country: ${data.country}
🗾 Region: ${data.region}
🌇 City: ${data.city}
🔢 Zip Code: ${data.postal}
🚩 Latitude: ${data.latitude}
🏁 Longitude: ${data.longitude}
*ISP* Isp: ${data.connection.isp}
🏢 Organization: ${data.connection.org}
🕜 TimeZone: ${data.timezone.id} (${data.timezone.utc})`
           await conn.sendMessage(m.chat, { location: { degreesLatitude: data.latitude, degreesLongitude: data.longitude }},{ ephemeralExpiration: 604800 });

           await m.reply(cap)
      } catch (e) {
        console.log(e)
        m.reply('IP Not found')
   }
}
handler.command = /^(ip|cekip)$/i
handler.tags = ['tools']
handler.help = ['ip <8.8.8.8>']