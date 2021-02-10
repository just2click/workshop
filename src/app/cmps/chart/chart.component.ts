import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Column, GoogleChartComponent } from 'angular-google-charts';

import { Subscription } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @ViewChild('chart', { static: true })
  public chart!: GoogleChartComponent;

  subscription: Subscription
  marketPrice: any
  @Input() dataM: any
  @Input() titleM: any
  @Input() optionsM: any
  @Input() nameM: any
  width = 350
  height = 200
  @Input() dataT: any
  @Input() titleT: any
  @Input() optionsT: any
  @Input() nameT: any
  type: any = 'LineChart'
  isDelay = false
  isLoad = false

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    setTimeout(() => this.isDelay = true, 1500)
  }
  load() {
    setTimeout(() => this.isLoad = true, 2)
  }
}
