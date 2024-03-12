let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, `*I N F O   S C R I P T   Y U L A*

*Multi Auth ( Support Pairing Code )*
https://github.com/XM4ZE/XMYULA

*Recoded by Maximus*`)
}

handler.command = /^(sc|sourcecode|script)$/i

export default handler
