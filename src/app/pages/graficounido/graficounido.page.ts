import { Component, OnInit, ViewChild } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest.service';
import {HttpClient} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';
import { delay } from 'q';


@Component({
  selector: 'app-graficounido',
  templateUrl: './graficounido.page.html',
  styleUrls: ['./graficounido.page.scss'],
})
export class GraficounidoPage implements OnInit {
  @ViewChild('hrzChartUnido', {static:false}) hrzChartUnido;
  hrzPieUnido: any;
  i: number;

  public DataPlasticos = new Array();
  public DataTotalPlastico = new Array();

  public DataMetal = new Array();
  public DataTotalMetal = new Array();
  
  public DataVidrio = new Array();
  public DataTotalVidrio = new Array();

  constructor(
    private http: HttpClient, 
    public apiRest: ApirestService,
    public storage: Storage
  ) { }

  ngOnInit() {
  }

  async fetchdata(){
    this.apiRest.doVerPlastico().subscribe((plastico)=>{
      this.DataPlasticos = plastico
      for(this.i = 0; this.i<plastico.length;this.i++){
        this.DataPlasticos[this.i] = plastico[this.i].cantidad;
        this.DataPlasticos[this.i] = (this.DataPlasticos[this.i] * 25);
        this.DataTotalPlastico = this.DataPlasticos.reduce((previous, current) => current += previous); 
      }
    })
    this.apiRest.doVerMetal().subscribe((Metal)=>{
      this.DataMetal = Metal
      for(this.i = 0; this.i<Metal.length;this.i++){
        this.DataMetal[this.i] = Metal[this.i].kilos;
        this.DataMetal[this.i] = (this.DataMetal[this.i] * 70);
        this.DataTotalMetal = this.DataMetal.reduce((previous, current) => current += previous); 
      }
    })
    this.apiRest.doVerVidrio().subscribe((Vidrio)=>{
      this.DataVidrio = Vidrio
      for(this.i = 0; this.i<Vidrio.length;this.i++){
        this.DataVidrio[this.i] = Vidrio[this.i].cantKg;
        this.DataVidrio[this.i] = (this.DataVidrio[this.i] * 20);
        this.DataTotalVidrio = this.DataVidrio.reduce((previous, current) => current += previous); 
      }
    })
    await delay(3000);
    this.createHrzChartUnido();
  }

  createHrzChartUnido() {
    console.log("deberia abrir grafico");
    let ctx = this.hrzChartUnido.nativeElement;
    this.hrzPieUnido = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Metal","Plastico","Vidrio"],
        datasets: [{
          label: 'Comparación entre materiales',
          data: [this.DataTotalPlastico,this.DataTotalMetal,this.DataTotalVidrio],
          backgroundColor: [
            'rgb(255, 215, 255)',
            'rgb(255,0,0)',
            'rgb(0,255,0)',
          ],
          borderColor: [
            'rgb(    128, 120, 128)',
            'rgb(0,0,255)',
            'rgb(100,0,100)'
          ],
          borderWidth: 1
        }]
      }
    });
  }
}