import fetch from 'node-fetch';

let handler = async (m, { conn, text, command, usedPrefix }) => {
    if (command == 'stalkcodm') {
        if (!text) throw `Example: ${usedPrefix + command} 6290150021186841472`
        let result = await( await fetch(`https://api.lolhuman.xyz/api/codm/${text}?apikey=${global.lolkey}`)).json()
        let cap = `*Nickname:* ${result.result}
*User ID:* ${text}`
        m.reply(cap)
    }
    
    if (command == 'stalkfreefire') {
        if (!text) throw `Example: ${usedPrefix + command} 570098876`
        let result = await( await fetch(`https://api.betabotz.eu.org/api/stalk/ff?id=${text}&apikey=${global.lann}`)).json()
        let cap = `*Nickname:* ${result.result.userNameGame}
*User ID:* ${text}`
        m.reply(cap)
    }
    
    if (command == 'stalkhigghdomino') {
        if (!text) throw `Example: ${usedPrefix + command} 291756557`
        let result = await( await fetch(`https://api.lolhuman.xyz/api/higghdomino/${text}?apikey=${global.lolkey}`)).json()
        let cap = `*Nickname:* ${result.result}
*User ID:* ${text}`
        m.reply(cap)
    }
    
    if (command == 'stalksausageman') {
        if (!text) throw `Example: ${usedPrefix + command} 40vimt`
        let result = await( await fetch(`https://api.lolhuman.xyz/api/sausageman/${text}?apikey=${global.lolkey}`)).json()
        let cap = `*Nickname:* ${result.result}
*User ID:* ${text}`
        m.reply(cap)
    }
    
    if (command == 'stalksupersus') {
        if (!text) throw `Example: ${usedPrefix + command} 20431364`
        let result = await( await fetch(`http://api.botcahx.eu.org/api/stalk/supersus?id=${text}&apikey=${global.btc}`)).json()
        let cap = `*Nickname:* ${result.result.name}
*ID:* ${text}
*UserId:* ${result.result.userId}
*SpaceId:* ${result.result.spaceId}`
        m.reply(cap)
    }
    
    if (command == 'stalkml') {
        let [id, zoneId] = text.split(',');
        if (!id || !zoneId) throw `Example: ${usedPrefix + command} 84830127,2169`
        let result = await( await fetch(`https://api.betabotz.eu.org/api/stalk/ml?id=${id}&server=${zoneId}&apikey=${global.lann}`)).json()
        let cap = `*Nickname:* ${result.userName}
*User ID:* ${text}`
        m.reply(cap)
    }
}
handler.help = ['stalkfreefire', 'stalkml', 'stalkcodm', 'stalksupersus', 'stalkhigghdomino', 'stalksausageman']
handler.command = ['stalkfreefire', 'stalkml', 'stalkcodm', 'stalksupersus', 'stalkhigghdomino', 'stalksausageman']
handler.tags = ['tools']
handler.limit = true
export default handler