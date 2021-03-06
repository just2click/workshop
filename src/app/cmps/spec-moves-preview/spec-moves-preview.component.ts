import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spec-moves-preview',
  templateUrl: './spec-moves-preview.component.html',
  styleUrls: ['./spec-moves-preview.component.scss']
})
export class SpecMovesPreviewComponent implements OnInit {
  @Input() move: any
  constructor() { }

  ngOnInit(): void {
  }

}
