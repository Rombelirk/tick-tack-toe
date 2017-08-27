import server from "./server";
import socketIo from "socket.io";
import {
    playerConnected,
    playerDisconnected,
    setPlayerName,
    startGameSearching,
    stopGameSearching
} from "./actions/mainHallActions";

const io = socketIo(server);

io.on('connection', socket => {

    playerConnected(socket.id);

    socket.on("disconnect", () => {
            playerDisconnected(socket.id);
            stopGameSearching(socket);
        }
    );

    socket.on("setPlayerName", data => setPlayerName(socket.id, data.name));

    socket.on("startGameSearching", () => {startGameSearching(socket)});

    socket.on("stopGameSearching", () => {stopGameSearching(socket)});

});

export default io;
