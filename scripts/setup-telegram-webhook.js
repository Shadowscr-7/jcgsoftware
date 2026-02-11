#!/usr/bin/env node

/**
 * Script para configurar el webhook de Telegram
 * 
 * Uso:
 * node scripts/setup-telegram-webhook.js
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🤖 Configuración de Webhook de Telegram\n');
console.log('Este script te ayudará a configurar el webhook de tu bot de Telegram.\n');

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  try {
    // Get bot token
    const botToken = await question('👉 Ingresa tu TELEGRAM_BOT_TOKEN: ');
    
    if (!botToken || botToken.trim() === '') {
      console.error('❌ El token no puede estar vacío');
      process.exit(1);
    }

    // Get domain
    const domain = await question('👉 Ingresa tu dominio (ejemplo: https://tu-portfolio.com): ');
    
    if (!domain || domain.trim() === '') {
      console.error('❌ El dominio no puede estar vacío');
      process.exit(1);
    }

    const cleanDomain = domain.trim().replace(/\/$/, ''); // Remove trailing slash
    const webhookUrl = `${cleanDomain}/api/telegram`;

    console.log('\n📡 Configurando webhook...\n');

    // Set webhook
    const setWebhookUrl = `https://api.telegram.org/bot${botToken.trim()}/setWebhook?url=${encodeURIComponent(webhookUrl)}`;
    
    console.log(`🔗 URL del webhook: ${webhookUrl}`);
    console.log('\n⏳ Configurando...\n');

    const response = await fetch(setWebhookUrl);
    const data = await response.json();

    if (data.ok) {
      console.log('✅ ¡Webhook configurado exitosamente!\n');
      console.log('📝 Detalles:');
      console.log(`   - URL: ${webhookUrl}`);
      console.log(`   - Estado: Activo`);
      console.log('\n💡 Ahora tu bot recibirá notificaciones cuando haya nuevas conversaciones.\n');
    } else {
      console.error('❌ Error al configurar el webhook:');
      console.error(JSON.stringify(data, null, 2));
    }

    // Get webhook info
    console.log('\n🔍 Verificando configuración...\n');
    const infoUrl = `https://api.telegram.org/bot${botToken.trim()}/getWebhookInfo`;
    const infoResponse = await fetch(infoUrl);
    const infoData = await infoResponse.json();

    if (infoData.ok) {
      console.log('📊 Información del webhook:');
      console.log(JSON.stringify(infoData.result, null, 2));
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

main();
