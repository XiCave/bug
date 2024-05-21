/*
*/

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'https://chat.whatsapp.com/CjRuVIjBOYeLEpflkvtO1z'
global.ig = '-'
global.thumb = fs.readFileSync("./tenkadata/image/thumb.jpg")
global.email = 's.rainstoreid@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot Panel 」—————//
global.ownername = 'RainStoreID'
global.domain = ''
global.apikey2 = '' // Isi Apikey Pltc Lu
global.capikey2 = ''
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.owner = ['6285263390832']
global.nomorown = '6285263390832'
global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'

global.botname = 'RainBotzz - MD'
global.packname = 'RainBotzz - MD'
global.author = `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: RqinMC\nBot: 085263390832`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'RainMc☆☆' //Jangan Di Ubah Takut Error
global.sp = '⭔'
global.anticall = true
// Global Mess Tinggal ganti ajah nam aditnya mwhehe
global.mess = {
    success: 'ɴɪʜ ᴋᴀᴋ ᴅᴏɴᴇ ><',
    admin: '❗ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ ᴄᴜᴍᴀ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ',
    botAdmin: 'ᴀᴋᴜ... ᴀᴋᴜᴜᴜ ʙᴇʟᴜᴍ ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴋᴀᴋ😣',
    owner: 'ᴍᴀᴀғ ᴋᴀᴋ ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴍᴀs ᴅᴀғғᴢ',
    group: 'ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴏᴜᴘ',
    private: 'ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ',
    bot: 'ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴍᴇᴍʙᴇʀ ʙᴏᴛ',
    wait: 'ʙᴇɴᴛᴀʀ ʏᴀʜ ᴋᴀᴋ, ʜᴇʜᴇ~',
    endLimit: 'ʏᴀʜʜ ʟɪᴍɪᴛ ᴋᴀᴍᴜ ʜᴀʙɪs ɴɪʜ ᴋᴀᴋ😣\n\n🎯 *ᴘʀᴇᴍɪᴜᴍ ᴄᴜᴍᴀ sᴇᴘᴜʟᴜʜ ʀɪʙᴜ ᴘᴇʀᴍᴀɴᴇɴ* 😋',
    error: '🚫 ғɪᴛᴜʀ ɪɴᴋ sᴇᴅᴀɴɢ ᴅᴀʟᴀᴍ ᴘᴇɴɢᴀᴡᴀsᴀɴ ᴍᴀs ᴅᴀғғᴢ, ᴛɪᴅᴀᴋ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ',
    prem: 'ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴍᴇᴍʙᴇʀ ᴘʀᴇᴍɪᴜᴍ\n\n♨️ ʙᴇʟɪ ᴘʀᴇᴍ? ᴛᴀɴʏᴀ ᴀᴊᴀ ᴍᴀs ᴅᴀғғᴢ 😉',
}

global.limitawal = {
    premium: "Infinity",
    free: 50
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})