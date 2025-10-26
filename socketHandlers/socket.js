const handleChatSocket = require('./handleChatSocket');
const handleNotificationSocket = require('./handleNotificationSocket');
const handleOrderStatus = require('./updateOrderStatus');

const initializeSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('🟢 Socket connected:', socket.id);

    handleChatSocket(io, socket); // Truyền socket hiện tại
    handleNotificationSocket(io, socket);
    handleOrderStatus(io, socket);

  });
  
};
module.exports = initializeSocket;