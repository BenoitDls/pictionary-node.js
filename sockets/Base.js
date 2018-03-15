module.exports = (io) => {
    function onConnection(socket) {
        socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
    }

    io.on('connection', onConnection);
}