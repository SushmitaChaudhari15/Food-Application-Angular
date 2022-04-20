import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggle:boolean=true;
  constructor(private resnder:Renderer2) { }

  ngOnInit(): void {
  }

  showToggle(){
  this.toggle=!this.toggle;
  }
}
