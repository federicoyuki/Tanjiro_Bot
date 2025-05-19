import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['5491156178758', '𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 🜲', true],
  ['573015270038', ' soporte', true],
  ['13124976342', 'soporte', true], 
  ['51920826559', 'soporte', true], 
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['5491156178758'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16'
global.vs = '2.2.0'
global.nameqr = '𝑰𝒏𝒇𝒊𝒏𝒊𝒕𝒚𝑩𝒐𝒕-𝑴𝑫'
global.namebot = '◟𝑰𝒏𝒇𝒊𝒏𝒊𝒕𝒚 𝕄𝔻◞'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '𒆜꙰ꫂ𝙏𝘼𝙉𝙅𝙄𝙍𝙊-𝘽𝙊𝙏≛'
global.botname = 'ᬊᬁ࿔᭄ྀเ𝙏𝘼𝙉𝙅𝙄𝙍𝙊-𝘽𝙊𝙏✿'
global.wm = '⏤͟͟͞͞⋆⬪࣪ꥈ🍁★ ׄ ꒱ 𝘛𝘈𝘕𝘑𝘐𝘙𝘖-𝘉𝘖𝘛୭'
global.author = 'mᥲძᥱ ᑲᥡ :𝚃𝙰𝙽𝙹𝙸𝚁𝙾-𝙱𝙾𝚃'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ 𓊈💙 𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛 💙𓊉'
global.textbot = '「💙 𝙏𝘼𝙉𝙅𝙄𝙍𝙊-𝘽𝙊𝙏 👑」• By 𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛'
global.etiqueta = '✦𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛✰'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = 'coins'
global.welcom1 = '❍ Edita Con El Comando *#setwelcome*'
global.welcom2 = '❍ Edita Con El Comando *#setbye*'
global.banner = 'https://files.catbox.moe/71hbqs.jpg'
global.avatar = 'https://files.catbox.moe/dpjivg.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
global.comunidad1 = ''
global.channel = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
global.channel2 = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
global.md = 'https://github.com/The-27/Infinity-Bot-MD'
global.correo = 'blackoficial2025@gmail.com'
global.cn ='https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363417186717632@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
