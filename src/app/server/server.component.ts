// IF WE ARE BINDING AN OBJECT,USE NG

import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  public coClass = "color-class"; // CLASS BINDING
  // USE [ngClass] for OBJECTS

  hasError = true; // STYLE BINDING
  setColor = "yellow";
  setColors = {
    color: "blue",
    fontStyle: "italic"
  };

  message = ""; // TEMPLATE REFERENCE VARIABLE
  logMessage(input) {
    console.log(input);
    console.log(input.type);
    console.log(input.value);
    this.message = input.value;
  }

  name: string = "Biswa Bhusan Gupta"; // INTERPOLATION
  roll: number = 1805030;
  university: string = "KIIT University";
  getUniversity() {
    return this.university;
  }

  allowServer = false; // PROPERTY/ATTRIBUTE BINDING --> WE ARE BINDING PROPERTY VALUES TO HTML ATTRIBUTES --> BASICALLY BINDING TO DOM PROPERTIES
  class: string = "CS1";

  infoStatus = "Create a Information!"; // EVENT BINDING
  myName = "";
  onClick(event) {
    this.infoStatus = "Information Created! Server is " + this.serverName;
    console.log(event.type);
  }

  serverName = "Angular"; // TWO WAY BINDING

  onInput(event) {
    // updateServerName(event: Event) {
    console.log(event);
    console.log(event.type); // --> INPUT
    console.log(event.target.type); // --> TEXT
    console.log(event.target.value); // --> VALUE
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  // EXERCISE :
  username = "";
  onUser() {
    this.username = "";
  }
}
