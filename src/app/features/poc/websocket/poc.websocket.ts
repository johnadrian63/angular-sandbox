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
        // const socketUrl = "https://nestjs-swart-sigma.vercel.app/";
        // const socketUrl = "https://api-sandbox-pearl.vercel.app";
        // const socketUrl = "https://apisandbox-flame.vercel.app";
        const socketUrl = "http://localhost:3000";
        // const socketUrl = "https://nestjs-dozk.vercel.app/";

        const socket = io(socketUrl, {
            transports: ["websocket"]
        });

        socket.on("connect", () => {
            console.log("connect");
        });

        socket.on("greet", (events) => {
            console.log("websocket response:", events);
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
