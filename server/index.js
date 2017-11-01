import server from "./server";
import config from "config";
import io from "./socket";

server.listen(config.port);
console.log("listening on port " + config.port + "...");



