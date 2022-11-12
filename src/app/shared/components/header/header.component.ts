import { Component, OnInit } from '@angular/core';
import { rout } from 'src/app/core/config/routes';
interface bavBar{
  name:string,
  src:string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pages:bavBar[]=[{name:"home",src:rout.webSite.home},{name:"order",src:rout.webSite.orders}]
  constructor() { }

  ngOnInit(): void {
  }

}
