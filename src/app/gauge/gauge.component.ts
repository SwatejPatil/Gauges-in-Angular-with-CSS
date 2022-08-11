import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createGauge(){
   
    // var  V_LL = this.ChartData[0].V_LL;
    // V_LL =   V_LL/1000;

    // var  KVA = this.ChartData[0].KVA;
    //           KVA =   KVA/1000;


      // console.log(KVA);


      // console.log(Number(V_LL));
      


        setInterval(function(){


          const gaugeElement = document.querySelector(".gauge");

          function setGaugeValue(gauge: any, value: number) {
            if (value < 0 || value > 0.45) {
              return;
            }

            gauge.querySelector(".gauge__fill").style.transform = `rotate(${
              value / 0.93
            }turn)`;
            gauge.querySelector(".gauge__cover").textContent = `${Math.round(
              value * 1000
            )}`;
          }

          var random = Math.random();
        // setGaugeValue(gaugeElement, Number(V_LL));

        setGaugeValue(gaugeElement, random);

        }, 1000);  
        
        

        
      


        setInterval(function(){
          

          const gaugeElement1 = document.querySelector(".gauge1");

          function setGaugeValue(gauge: any, value: number) {
            if (value < 0 || value > 0.7) {
              return;
            }

            gauge.querySelector(".gauge__fill1").style.transform = `rotate(${
              value / 1.5
            }turn)`;
            gauge.querySelector(".gauge__cover1").textContent = `${Math.round(
              value * 1000
            )}`;
          }

          var random = Math.random();
          console.log(random);
          
        // setGaugeValue(gaugeElement1, Number(KVA));
        setGaugeValue(gaugeElement1, random);

        }, 1000); 
}


}
