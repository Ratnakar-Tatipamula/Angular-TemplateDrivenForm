import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name : any;
  email: any;
  password: any;
  constructor(){
       
  }

  onSubmit(value:any){
       //console.log("hello");
       this.name = value.name;
       this.email = value.email;
       this.password = value.password;
       console.log(this.name,this.email,this.password);
  }

}
