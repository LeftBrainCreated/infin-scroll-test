import { ChangeDetectorRef, Component } from '@angular/core';
import { Collection, Item } from './interfaces/interfaces';
import { DbSqlService } from './services/db-sql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Collection[] = [];
  page: number = 0;

  constructor(
    private dbApi: DbSqlService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dbApi.dataObs.subscribe(val => {
      if (val.append != true) {
        this.items = [];
      } 

      if (val.reset) {
        this.page = 1;
      }

      val.data.data.forEach((res: any) => {
        console.log(res);

        var collection: Collection;
        var existingCollection = this.items.filter(i => i.ownerId == res.ownerId);

        // if (existingCollection.length == 0) {
          collection = {
            ownerId: res.ownerId
            , totalCount: res.totalCount
            , filteredCount: res.filteredCount
            , userId: res.userId
            , totalPrice: res.totalPrice
            , items: []
          }

          collection.items.push(res);
          this.items.push(collection);
        // } else {
        //   collection = existingCollection[0];
        //   collection.items.push(res);
        // }
      })

      this.cdr.detectChanges();
    })

  }

}