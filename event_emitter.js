
const EventEmitter = require('events');
const emitter = new EventEmitter();
const LoggerEmitter = require('./logger_emitter');
const logger = new LoggerEmitter();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called.', arg);
});

logger.log('message');