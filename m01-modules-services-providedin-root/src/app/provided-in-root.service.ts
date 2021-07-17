import { Injectable } from "@angular/core";

let count = 0;

@Injectable({ providedIn: 'root' })
export class ProvidedInRootService {
  constructor() {
    count += 1;
    console.log(`Instantiated ${count} times!`);
  }
}