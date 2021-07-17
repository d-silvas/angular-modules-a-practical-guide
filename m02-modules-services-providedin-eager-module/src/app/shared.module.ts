import { Injectable, NgModule } from "@angular/core";

let count = 0;

@Injectable()
export class SharedService {
  constructor() {
    count += 1;
    console.log(`Instantiated ${count} times!`);
  }
}

@NgModule({
  providers: [SharedService]
})
export class SharedModule {}