import { Wechaty, log, Message, Contact } from 'wechaty';

export async function onMessage(this: Wechaty, msg: Message) {
  log.info('Bot', '(message) %s', msg);
  if (msg.self()) {
    return;
  }
  if (msg.age() > 60) {
    console.log('Message discarded because its TOO OLD(than 1 minute)');
    return;
  }
  const filehelper = this.Contact.load('filehelper');
  // filehelper.say(msg.text());

  const sender = msg.from();
  const receiver = msg.to();
  const text = msg.text();
  const room = msg.room();

  if (room) {
    log.info('room message');
  } else {
    log.info('not room message');
  }
}
