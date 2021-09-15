import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  title : string = "Ayoub Eddarraz en train de finir cette page. Merci de visiter après la réparation.";

  constructor() { }

  ngOnInit(): void {
  }

}
