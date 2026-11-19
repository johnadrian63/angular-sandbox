import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { io } from "socket.io-client";

@Component({
    selector: "app-poc.websocket",
    styleUrl: "./poc.websocket.css",
    templateUrl: "./poc.websocket.html",
    imports: [],
})
export class PocWebsocket implements OnInit {

    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public ngOnInit(): void {
        const socketUrl = "https://api-sandbox-pearl.vercel.app";
        // const socketUrl = "http://localhost:3000";

        const socket = io(socketUrl, {
            transports: ['websocket']
        });

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

    public testCors(): void {
        const url = "https://api-sandbox-pearl.vercel.app/json";

        this.httpClient.get(url)
            .subscribe((response) => {
                console.log("response", response);
            });
    }
}
