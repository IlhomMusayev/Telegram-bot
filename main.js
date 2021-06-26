// const chatId = 1760336445
// const fileId = 'BQACAgQAAxkDAAMeYNcpaDweIptfM-VPtVV5-hOea3YAAi8CAAJZ3GxQPqNSWHYncEcgBA'
// // ;(async () => {
// //    let response = await fetch(`https://api.telegram.org/bot${TOKEEN}/getUpdates`)
   
// //     response = await response.json()
// //     console.log(response.result[0].message.text);
// // })() 

// ;(async () => {
//    let response = await fetch(`https://api.telegram.org/bot${TOKEEN}/sendMessage`,{
//        method: "POST",
//        headers: {
//            "Content-Type": "application/json"
//        }, 
//        body: JSON.stringify({
//            chat_id: chatId, 
//            text: "salom",
//             reply_markup: {
//                 resize_keyboard: true,
//                 one_time_keyboard: true,
//                 keyboard: [
//                     [
//                         {
//                             text: "Button 1",
//                             request_contact: true
//                         },
//                     ]
//                 ]    
//             }
//        }
//        )
//    })
   
//     response = await response.json()
//     console.log(response);
// })() 
const telegramBot = require('node-telegram-bot-api')
const Controllers = require("./controllers")
const { TOKEN, OPTIONS } = require("./config") 
const postgres = require("./modules/postgress")


console.log(TOKEN);
const bot = new telegramBot(TOKEN, OPTIONS)

async function main(){
    const psql = await postgres()
    
    await bot.on('text', async (message) => {
        Controllers.MessageController(message, bot, psql)
    })

}main()

