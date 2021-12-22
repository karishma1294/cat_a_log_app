import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  showImageTimes = [{
    "src": "../../assets/cat-image.jpg",
    "cardTitle":"Cat1"
  }, {
    "src": "../../assets/cat-image.jpg",
    "cardTitle":"Cat1"
  }, {
    "src": "https://placekitten.com/200/300",
    "cardTitle":"Cat1"
  }];
  addCatButtonClicked=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openAddCat(){
    this.addCatButtonClicked=!this.addCatButtonClicked;
    this.router.navigateByUrl("/addCat");
  }
}
