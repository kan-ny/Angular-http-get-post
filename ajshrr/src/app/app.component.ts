import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 name:string = '';
  rating:number;
  genre:string; 
  found:boolean;

  constructor(private httpClient:HttpClient){  }
  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.name =this.name.toLowerCase()
    this.found = false;
  }
  getProfile(){
    
    this.httpClient.get(`https://my-json-server.typicode.com/kan-ny/ajshrr/movies/?title=${this.name}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.rating = data[0].rating; //data[0].rating is variable name from json
          this.genre = data[0].genre;      //this.denre or this.rating is variable name declared in .ts
          this.found = true;
        }
      }
    )
  }

  postProfile(){
    this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
    {
      name:'mark',
      age: 41
    })
    .subscribe(
      (data:any) => {
        console.log(data.name, typeof(name));
      }
    )
  }

}