import { Component, OnInit } from '@angular/core';
import { siteConfig } from 'src/assets/siteConfig';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  sc = siteConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
