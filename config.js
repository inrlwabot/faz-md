const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
module.exports = {
    VERSION: 'V 2.0.1',
    ALIVE: process.env.ALIVE || "dead",
    BLOCK_CHAT: process.env.BLOCK_CHAT || '',
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
    READ_MESSAGES: convertToBool(process.env.READ_MESSAGES) || false,
    PMB_VAR: convertToBool(process.env.PMB_VAR) || false,
    PMB: process.env.PMB || 'Personal messages not allowed. Blocking you',
    READ_COMMAND: convertToBool(process.env.READ_COMMAND) || true,
    USERNAME: process.env.USERNAME || '',
    SESSION: process.env.SESSION || '',
    IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
    RG: process.env.RG || '916235261803-1632403322@g.us',
    PASSWORD: process.env.PASSWORD || '',
    BOT_INFO: process.env.BOT_INFO || 'nothing',
    RBG_KEY: process.env.RBG_KEY || '',
    ALLOWED: process.env.ALLOWED || '91,94,212',
    CHATBOT: process.env.CHATBOT || 'off',
    HANDLERS: process.env.HANDLERS || '.,',
    STICKER_DATA: process.env.STICKER_DATA,
    BOT_NAME: process.env.BOT_NAME || 'FaZ-MD',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? 'Inrlmd' : process.env.AUDIO_DATA,
    TAKE_KEY: process.env.TAKE_KEY || '',
    MODE: process.env.MODE || 'public',
    WARN: process.env.WARN || 'unknown',
    ANTILINK_WARN: process.env.ANTILINK_WARN || '',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    
    };
