const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347057254085";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_32_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDM5LFxuICAgICAgICA3LFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVkWThZbSszUGxmU21ZaG9qRFNDRlgwK2VpdDBaMEN5Q1hRNGVjbkQ4ejQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNUejR6VFVTUnlTNDFPVjlTQklBVlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzMyZWY5MjAtNmU5MS00NTlhLWExNWEtNmZlZmY3MmJiYzExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDkyLFxuICAgICAgMjA5LFxuICAgICAgMTk2LFxuICAgICAgMjA4LFxuICAgICAgMTMxLFxuICAgICAgNTYsXG4gICAgICAxNzksXG4gICAgICA5OSxcbiAgICAgIDg4LFxuICAgICAgMTIxLFxuICAgICAgMjAwLFxuICAgICAgNDYsXG4gICAgICAyMSxcbiAgICAgIDQxLFxuICAgICAgMzcsXG4gICAgICAxMzEsXG4gICAgICAxMjMsXG4gICAgICAxMjYsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxODUsXG4gICAgICAyMyxcbiAgICAgIDEzNCxcbiAgICAgIDEzMyxcbiAgICAgIDEzNCxcbiAgICAgIDE3NyxcbiAgICAgIDIzMyxcbiAgICAgIDI0MSxcbiAgICAgIDIzOSxcbiAgICAgIDQ0LFxuICAgICAgMTE2LFxuICAgICAgMTcsXG4gICAgICAxMzEsXG4gICAgICAxNDAsXG4gICAgICAyMTcsXG4gICAgICAxNTgsXG4gICAgICAxNDgsXG4gICAgICAzMixcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1QTDRDMlNOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDU3MjU0MDg1OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNzMyNDI3Mjg0NDgwOjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ015Tisrd0JFUGk1aDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTlR0MmJQUUdralRSd3ZmNjFOdFd4ajBXZndkRjQvQ1BvSnRJRzdJRS9YTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrdllWcGVIbUs2bUxpbHEzMGRodXVrS1dTTnF2TDdYN043UFJCeE5neUlBR0YrWFhwNmlvdHBJTHZ2OERjcTVUVkw4SDNJM0p5M2JnMEFzSHlBUGpDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGUFBKNXN1bjV0SXBDdGExdWU3cXBHcGxJdi9HYXVKVFJ6L1krbmFnYysybk95VEd2MlRTemRFOE1Ob0xCRnp3R3ZnaW11aUpJUlRFRDdWc2tuRkFqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDU3MjU0MDg1OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5Nzg2NzQ4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
