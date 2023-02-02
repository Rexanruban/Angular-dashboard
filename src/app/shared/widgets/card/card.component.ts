import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() label!:string;
  @Input() total!:string;
  @Input() 
  percentage!: string;
  @Input()
  data!: any[];
  
  Highcharts = Highcharts;
  chartOptions = {};


  constructor(){}

  ngOnInit(): void {

    this.chartOptions={
      chart: {
        type: 'area',
        backgroundColor:null,
        borderwidth:0,
        margin:[2,2,2,2],
        height:60,

    },
    title: {
        useHTML: true,
        text: null,
        align: 'left'
    },
    subtitle: {
        text: null,
        align: 'left'
    },
   
    tooltip: {
       split:true,
       outside: true

    },
    legend:{
        enabled:false
    },
    credits:{
        enabled:false
    },
    XAxis:{
        lables:{
          enabled:false
        },
        startOnTick:false,
        endOnTick: false,
        tickOptions:[]

    },
    YAxis:{
        lables:{
          enabled:false
        },
        startOnTick:false,
        endOnTick: false,
        tickOptions:[]

    },

    exporting:{
    enabled:false
  },
    series: [{
        data:this.data
    }]
};
HC_exporting(Highcharts);
setTimeout(() => {
  window.dispatchEvent(new Event('resize'))
}, 300);
              
}
    }
    
  
  

