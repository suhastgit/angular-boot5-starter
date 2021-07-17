import { Component, OnInit } from '@angular/core';
import { siteConfig } from 'src/assets/siteConfig';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sc = siteConfig; //object pulls site configs

  constructor() { }

  ngOnInit(): void {
  }

}
