import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest.service';

@Component({
  selector: 'app-vidrio',
  templateUrl: './vidrio.page.html',
  styleUrls: ['./vidrio.page.scss'],
})
export class VidrioPage implements OnInit {
  public vidrios: object
  constructor(
   public apiservices: ApirestService
  ) { }

  ngOnInit() {
    this.VerVidrio()
  }

  VerVidrio(){
    this.apiservices.doVerVidrio().subscribe((Vidrios)=>{
      this.vidrios = Vidrios
    })
  }
}
