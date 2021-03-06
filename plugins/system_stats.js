/* Copyright (C) 2022 CYBER QUEEN
CODDED BY NICO
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ is Alive!```\n\nᎠҽѵҽӀօքҽɾ : ♦️⇝͜͡✪ஓீ͜ɴͥɪᴄᷧᴏᷟ࿐♠\n\n*ᴠᴇʀꜱɪᴏɴ:* ```Version 3.9.9-Public Edition```\n\n*ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ:* https://www.youtube.com/SLTechnicalTips\n\n*ᴘᴜʙʟɪᴄ ᴄᴏᴍᴍᴀɴᴅꜱ ɢʀᴏᴜᴘ:* https://chat.whatsapp.com/HB1qciGHnMtEIpicPkzwpd\n\n ᴡᴏʀᴋᴛʏᴘᴇ: Private\n\n```Thanks For Using ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © 2022 | ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
    
    Asena.addCommand({pattern: 'psysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true }, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ is Alive!```\n\nᎠҽѵҽӀօքҽɾ : ♦️⇝͜͡✪ஓீ͜ɴͥɪᴄᷧᴏᷟ࿐♠\n\n*ᴠᴇʀꜱɪᴏɴ:* ```Version 3.9.9-Public Edition```\n\n*ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ:* https://www.youtube.com/SLTechnicalTips\n\n*ᴘᴜʙʟɪᴄ ᴄᴏᴍᴍᴀɴᴅꜱ ɢʀᴏᴜᴘ:* https://chat.whatsapp.com/HB1qciGHnMtEIpicPkzwpd\n\n ᴡᴏʀᴋᴛʏᴘᴇ: Public\n\n```Thanks For Using ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © 2022 | ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴜᴇᴇɴᬐ*' })
     }
    }));
    
    /*Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC, deleteCommand: false }, (async (message, match) => {
       if (Config.ALIVE_LINK_STIC == 'default') {
       const sticker = await axios.get('https://i.ibb.co/XkWhjLh/Nt-OOzj-C3-HBAB.webp', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (sticker.data), MessageType.sticker, {quoted: message.data} )
       }else { if (!Config.ALIVE_LINK_STIC.includes('webp')){
        const sticker = await axios.get('https://i.ibb.co/XkWhjLh/Nt-OOzj-C3-HBAB.webp', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (sticker.data), MessageType.sticker, {quoted: message.data} )
    }else{
             const sticker = await axios.get(Config.ALIVE_LINK_STIC, {responseType: 'arraybuffer'})
            await message.client.sendMessage (message.jid, Buffer.from (sticker.data), MessageType.sticker, {quoted: message.data} )                                        
                                                                                                   }}
                                                                                                   
                                                                                                   
        
        var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    }));*/

    
    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
    
    Asena.addCommand({pattern: 'psysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true }, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
