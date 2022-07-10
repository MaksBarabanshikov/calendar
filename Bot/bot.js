const {Telegraf} = require("telegraf")
const TOKEN = '5530433218:AAFiZkTO_4fsveAgKC_B7uigX7ZHAm-3nWA'
const bot = new Telegraf(TOKEN)

const web_link = 'https://gentle-pegasus-18a578.netlify.app/'

bot.start((ctx) =>
    ctx.reply('Welcome :)', {
        reply_markup: {
            keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
        },
    })
)

bot.launch()