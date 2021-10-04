import { Location } from '@angular/common'
import { Component} from '@angular/core'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  noEsLogin = () => this.location.path() !== '/login'

  constructor(private location:Location){}

  
}

