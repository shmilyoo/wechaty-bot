import { Wechaty, log, Message, Contact } from 'wechaty';
import { ContactType } from 'wechaty-puppet';

export async function onMessage(this: Wechaty, msg: Message) {
  log.info('Bot', '(message) %s', msg);
  if (msg.self()) {
    return;
  }
  if (msg.age() > 60) {
    console.log('Message discarded because its TOO OLD(than 1 minute)');
    return;
  }
  const room = msg.room();
  if (room) {
    await handleRoomMessage(msg);
  } else if (msg.from().type() === ContactType.Personal) {
    await handlePersonalMessage(msg);
  } else {
    log.info('receive a message neither from persion nor from group, skip it');
  }
}

async function handleRoomMessage(msg: Message) {
  log.info('room message: ', msg.text());
  const message = msg.text().trim();
  if (!message) return;
  if (message[0] !== '/') {
    // not order
  }
}

async function handlePersonalMessage(msg: Message) {
  log.info('not room message: ');
  const sender = msg.from();
  switch (msg.type()) {
    case Message.Type.Text:
      log.info('receive an text message', msg.text());
      break;
    case Message.Type.Attachment:
      log.info('receive an attachment');
      break;
    default:
      break;
  }
}

/*
msg.type() !== bot.Message.Type.Text

const fileBox = FileBox.fromUrl('https://chatie.io/wechaty/images/bot-qr-code.png')
await msg.say(fileBox)

contact.type() === Contact.Type.Personal

const file = await contact.avatar()
const name = file.name
await file.toFile(name, true)

// const filehelper = this.Contact.load('filehelper');
// filehelper.say(msg.text());



*/
