import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createGauge();
  }

  createGauge() {
    setInterval(function () {
      const gaugeElement = document.querySelector(".gauge");

      function setGaugeValue(gauge: any, value: number) {
        if (value < 0 || value > 1) {
          return;
        }

        gauge.querySelector(".niddle").style.transform = `rotate(${value / 2
          }turn)`;
        gauge.querySelector(".gaugeCover").textContent = `${Math.round(
          value * 100
        )}`;
      }

      var random = Math.random();
      console.log(random)

      setGaugeValue(gaugeElement, random);

    }, 2000);

  }


}
