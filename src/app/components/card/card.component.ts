import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  news: any = [
    {
      title:'Title 1',
      content:'Content 1',
      link:'',
      image:'https://www.centreforcities.org/wp-content/uploads/2014/07/crowd-of-people.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews(){
    axios.get('https://gnews.io/api/v4/search?q=tecnologia&country=br&lang=pt&token=c5a46e7d9a93f783261a0a0dc210abce').then((response) => {
      console.log(response.data)
      this.news = response.data.articles
    })
  }

}
