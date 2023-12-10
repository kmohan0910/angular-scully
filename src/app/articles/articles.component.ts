import { Component, OnInit } from '@angular/core';
import {ScullyRoutesService, ScullyRoute} from '@scullyio/ng-lib'
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit{
  ngOnInit(): void {
      this.posts$= this.scullyService.available$.pipe(map(posts=>posts.filter(post=> post.title)))
  }
posts$ : Observable<ScullyRoute[]>| undefined;
  constructor(private scullyService : ScullyRoutesService)
{

}


}
