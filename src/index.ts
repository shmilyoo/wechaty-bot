import { Wechaty, log, Message, Contact } from 'wechaty';
import { PuppetPadpro } from 'wechaty-puppet-padpro';
import { FileBox } from 'file-box';
import { ContactSelf } from 'wechaty/dist/src/user';
import { onMessage } from './onMessage';

const WECHATY_PUPPET_PADPRO_TOKEN = 'puppet_padpro_5665b9bd05fc9bd3';

const puppet = new PuppetPadpro({
  token: WECHATY_PUPPET_PADPRO_TOKEN
});

const bot = new Wechaty({ puppet });

bot
  .on('logout', onLogout)
  .on('login', onLogin)
  .on('scan', onScan)
  .on('error', onError)
  .on('message', onMessage);

bot.start().catch(async (e: Error) => {
  console.error('Bot start() fail:', e);
  await bot.stop();
  process.exit(-1);
});

function onScan(qrcode: string) {
  require('qrcode-terminal').generate(qrcode, { small: true });
  console.log(`Scan QR Code above to log in: `);
}

function onLogin(user: ContactSelf) {
  console.log(`${user.name()} login`);
  bot.say('Wechaty login').catch(console.error);
}

async function onLogout(user: ContactSelf) {
  console.log(`${user.name()} logouted`);
  await this.stop();
  process.exit(-1);
}

function onError(e: Error) {
  console.error('Bot error:', e);
}
