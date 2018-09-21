import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  beers:any;
  http:any;
  beerSearch:boolean;
  ingredients1:any;
  ingredients2:any;
  description:any;
  temp:any;
  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get("https://api.punkapi.com/v2/beers")
            .subscribe(data =>{
             this.beers=JSON.parse(data._body);
             this.ingredients1 = this.beers[0].ingredients['malt'];
             this.ingredients2 = this.beers[0].ingredients['hops'];
             console.log("BEER INGREDIENTS---->"+JSON.stringify(this.ingredients1));
             console.log("BEER INGREDIENTS---->"+JSON.stringify(this.ingredients2));
            },error=>{
                console.log(error);
            } );
            this.beerSearch = false;
  }
  Search1(){
    this.beerSearch = true;
    this.http.get("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=malt")
            .subscribe(data =>{
              this.temp=JSON.parse(data._body).query.search;
              console.log("TEMP-->"+JSON.stringify(this.temp));
            },error=>{
                console.log(error);
            } );
  }
  Search2(){
    this.beerSearch = true;
    this.http.get("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=beer")
            .subscribe(data =>{
              this.temp=JSON.parse(data._body).query.search;
              console.log("TEMP-->"+JSON.stringify(this.temp));
            },error=>{
                console.log(error);
            } );
  }
}
