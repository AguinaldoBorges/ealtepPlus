import { Component, Input, OnInit, Output } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  buscador:string = '';
  listNews: any;

  constructor() { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews(){
    
    axios.get(`https://api.thenewsapi.com/v1/news/top?&search=tecnologia+${this.buscador}&locale=br&language=pt&api_token=IjnBBREOTQBaoc87ixTc8Lra4oFUbcR0zLIVKmdO`).then((response) => {
      console.log(response.data)
      this.listNews = response.data.data
    })
  }

}
