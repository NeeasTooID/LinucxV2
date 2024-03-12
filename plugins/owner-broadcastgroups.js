let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5 } detik`)
    for (let i of anu) {
    await conn.copyNForward(id, conn.cMods(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks ), true).catch(_ => _)
await delay(2000)
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgcbot <teks>']
handler.tags = ['owner']
handler.command = /^((broadcast|bc)gc)$/i

handler.owner = true

export default handler

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}