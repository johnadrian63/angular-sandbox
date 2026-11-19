import { Component, OnInit } from "@angular/core";
import { io } from "socket.io-client";

@Component({
    selector: "app-poc.websocket",
    styleUrl: "./poc.websocket.css",
    templateUrl: "./poc.websocket.html",
    imports: [],
})
export class PocWebsocket implements OnInit {
    public ngOnInit(): void {
        const socket = io("https://api-sandbox-pearl.vercel.app");

        socket.on("connect", () => {
            console.log("connect");
        });
        socket.on("greet", (value) => {
            console.log("greet", value);
        });

        socket.on("events", () => {
            console.log("EEEE");
        });

        socket.on("reconnect", () => {
            console.log("reconnect");
        });
    }
}
