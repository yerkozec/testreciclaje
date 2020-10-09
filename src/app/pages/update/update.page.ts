import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest.service';
import { datosplasticos } from 'src/app/datosapi/datosapi.models';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  public plasticos: object
  id:number
  data:datosplasticos

  constructor(
    public apiServices:ApirestService
  ) { }

  ngOnInit() {
    this.fetchdata()
  }
  fetchdata(){
    this.apiServices.doVerPlastico().subscribe((plasticos)=>{
      this.plasticos = plasticos
    })
  }
  doupdate(id,item){
    this.id = id
    this.data = item
    this.apiServices.doUpdatePlastico(this.id, this.data).subscribe(plasticos =>{
      
    })
  }
}
