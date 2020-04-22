const agSender = require('unifiedpush-node-sender');

const settings = {
  url: 'http://localhost:9999',
  applicationId: 'B868CC08-BCC8-4A0A-B21E-1AC56AF0C734',
  masterSecret: '4F30BA41-3278-4983-8F99-0EEA138F7F1A'
};

const message = {
  alert: 'alert text',
  priority: 'high',
}

agSender(settings).then((client) => {
  client.sender.send(message).then((response) => {
    console.log('success', response);
  })
});
