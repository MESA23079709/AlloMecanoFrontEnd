import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { Mecanicien } from './service/Mecaniciens';
import { MecanicienService } from './service/mecanicien.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
 // standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //imports: [RouterOutlet],// MenuComponent, MecanComponent],
  //declarations:[MenuComponent],
})
export class AppComponent {
  public mecaniciens: Mecanicien[]=[];
  constructor(private mecanicienService:MecanicienService){
    
  }
  ngOnInit(){
    this.getMecaniciens();
  }
  public getMecaniciens():void{
    this.mecanicienService.getMecaniciens().subscribe(
      (response: Mecanicien[])=>{
        this.mecaniciens=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      )
    
  }

}
