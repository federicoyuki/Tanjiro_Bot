import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let txt = `ゲ◜៹ 𝓑𝓲𝓮𝓷𝓿𝓮𝓷𝓲𝓭𝓸 ៹◞ゲ\n${groupMetadata.subject}`
  let txt1 = `ゲ◜៹ 𝓐𝓭𝓲𝓸𝓼 ៹◞ゲ\n${groupMetadata.subject}`
  let groupSize = participants.length
  if (m.messageStubType == 27) {
    groupSize++;
  } else if (m.messageStubType == 28 || m.messageStubType == 32) {
    groupSize--;
  }

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `*╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─┈*
*┆  〘 🄱🅸🄴🅝🅅🅔🄽🅘🄳🅞 〙*
*├┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┈*
*┆➤ _Usuario_ » @${m.messageStubParameters[0].split`@`[0]}*
*┆✰ _Grupo_ » ${groupMetadata.subject}*
*╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┈*\n
${global.welcom1}\n✦ Ahora somos ${groupSize} Miembros.\n•(=^●ω●^=)• Disfruta tu estadía en el grupo!\n> ✐ Puedes usar *#help* para ver la lista de comandos.`    
    await conn.sendMini(m.chat, txt, textbot, bienvenida, img, img, redes, fkontak)
  }
  
  if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32)) {
    let bye = `*╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─┈*
*┆     〘 .🄱 .🅐 .🅈. ^^  〙*
*├┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┈*
*┆➤ _Usuario_ » @${m.messageStubParameters[0].split`@`[0]}*
*┆✰ _Grupo_ » ${groupMetadata.subject}*
*╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┈*\n
${global.welcom2}\n✦ Ahora somos ${groupSize} Miembros.\n•(=^●ω●^=)• Te esperamos pronto!\n> ✐ Puedes usar *#help* para ver la lista de comandos.`
    await conn.sendMini(m.chat, txt1, textbot, bye, img, img, redes, fkontak)
  }}
