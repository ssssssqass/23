const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🌐 بوت mohammadking3 يعمل 24/7'));
app.listen(3000, () => console.log('🌐 Web server running on port 3000'));

const botArgs = {
    host: 'Goldmc.xyz',
    port: 25565,
    username: 'mohammadking3',
    version: '1.20.1'
};

function createBot() {
    const bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        console.log('[✔] البوت mohammadking3 دخل اللوبي');
        
        // تسجيل الدخول بعد 7 ثوانٍ
        setTimeout(() => {
            bot.chat('/login 1234567'); 
            console.log('[🔑] تم تسجيل دخول mohammadking3');
        }, 7000);

        // دخول السيرفايفل بعد 20 ثانية
        setTimeout(() => {
            bot.chat('/survival');
            console.log('[↕] البوت الآن في السيرفايفل (ساعة عمل)');
        }, 20000);

        // إغلاق الاتصال يدوياً بعد ساعة لتجديد الاتصال
        setTimeout(() => {
            console.log('🔄 تجديد الاتصال لـ mohammadking3...');
            bot.quit();
        }, 3600000); 
    });

    bot.on('error', (err) => console.log('خطأ في البوت:', err));
    
    // إعادة الدخول بعد دقيقتين من الخروج
    bot.on('end', () => {
        console.log('🔄 استراحة دقيقتين ثم العودة...');
        setTimeout(createBot, 120000);
    });
}

createBot();
