import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
   
  bigChart(){

    return[{
      name: 'China',
      data: [2.5, 2.6, 2.7, 2.9
      ]
  }, {
      name: 'USA',
      data: [5.1, 5.1, 5.2, 5.3
      ]
  }, {
      name: 'EU',
      data: [3.7, 2.9, 2.6, 2.7]
  }, {
      name: 'India',
      data: [0.5, 0.6, 0.7, 2.7]
    }];
  }
  cards(){
    return [71,78,39,60];
  }
  pieChart(){
    return [{
      name: 'Chrome',
      y: 70.67,
      sliced: true,
      selected: true
  }, {
      name: 'Edge',
      y: 14.77
  },  {
      name: 'Firefox',
      y: 4.86
  }, {
      name: 'Safari',
      y: 2.63
  }, {
      name: 'Internet Explorer',
      y: 1.53
  },  {
      name: 'Opera',
      y: 1.40
  }, {
      name: 'Sogou Explorer',
      y: 0.84
  }, {
      name: 'QQ',
      y: 0.51
  }, {
      name: 'Other',
      y: 2.6
  }]
  }
}
