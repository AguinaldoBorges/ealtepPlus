import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() news: any = [
    {
      title:'Title 1',
      content:'Content 1',
      link:'',
      image:'https://www.centreforcities.org/wp-content/uploads/2014/07/crowd-of-people.jpg'
    }
  ];
  @Input() categoryList: any = [
    'Desktop',
    'Windows',
    'Linux',
    'Mac',
    'Celular',
    'Android',
    'IOS',
    'Programação',
    'Facebook',
    'Instagram',
  ]

  constructor() { }

  ngOnInit(): void {
/*     this.getNews()
    console.log(this.buscar); */
    
  }

  /* getNews(){
    
    axios.get(`https://api.thenewsapi.com/v1/news/top?&search=tecnologia+${this.buscar}&locale=br&language=pt&api_token=IjnBBREOTQBaoc87ixTc8Lra4oFUbcR0zLIVKmdO`).then((response) => {
      console.log(response.data)
      this.news = response.data.data
    })
  } */

  getNews(searchMenu: string){
    console.log(searchMenu);
    axios.get(`https://api.thenewsapi.com/v1/news/top?&search=tecnologia+${searchMenu}&locale=br&language=pt&api_token=IjnBBREOTQBaoc87ixTc8Lra4oFUbcR0zLIVKmdO`).then((response) => {
      
    console.log(response.data)
      this.news = response.data.data
    })
  }

}
