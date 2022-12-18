import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  //template: `<p>Hello World!</p>`,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  //styles:['']
})
export class AppComponent{

    name = 'luis ramierz'
    imgUrl = "https://picsum.photos/id/237/500/500"
    images = [
      "https://picsum.photos/id/237/500/500",
      "https://picsum.photos/id/237/500/500",
      "https://picsum.photos/id/237/500/500"
    ]
    currentDate = new Date()
    cost = 2000
    temperature = 25.3
    pizza = {
      toppings: ['tomatoes', 'cheese'],
      size: 'Large'
    }
    blueClass = false;
    fontSize = 16
    
    getName = () => {
      return this.name
    }

    // This helps angular understand what we are sending in
    changeImage = (e: KeyboardEvent) => {
      // Force typescript to interpret as another type - type assertion
      this.imgUrl = (e.target as HTMLInputElement).value;
    }


    logImage = (e:string) => {
      console.log(e)
    }
}