import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.scss']
})
export class LoadScreenComponent implements OnInit {
  @Input() onLoad: any;

  constructor() {}

  ngOnInit() {}
}
