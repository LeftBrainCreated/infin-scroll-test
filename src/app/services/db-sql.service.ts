import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DbSqlService {
  public dataObs = new Subject<any>();

  initGetItemsHandler(skip: number = 0, take: number = 0) {
    var resetPage = false;

    return new Promise(async (res, rej) => {
      if (skip < 0) {
        resetPage = true;
        skip = 0;
      }

      var data = {
        "status":"success",
        "data":[
            {
                "userId":14069,
                "totalPrice":42.40007,
                "totalLandScore":5556.458265,
                "totalCount":212,
                "filteredCount":212,
                "itemId":"4289265565",
                "ownerId":"0x3faac4a9c852466ebdbf73c7fa005a97be8da5f7",
                "x":-88,
                "y":-99,
            },
            {
                "userId":14069,
                "totalPrice":42.40007,
                "totalLandScore":5556.458265,
                "totalCount":212,
                "filteredCount":212,
                "itemId":"4289265566",
                "ownerId":"0x3faac4a9c852466ebdbf73c7fa005a97be8da5f7",
                "x":-88,
                "y":-98,
            },
            {
                "userId":14069,
                "totalPrice":42.40007,
                "totalLandScore":5556.458265,
                "totalCount":212,
                "filteredCount":212,
                "itemId":"4289265567",
                "ownerId":"0x3faac4a9c852466ebdbf73c7fa005a97be8da5f7",
                "x":-88,
                "y":-97,
            },
            {
                "userId":14069,
                "totalPrice":42.40007,
                "totalLandScore":5556.458265,
                "totalCount":212,
                "filteredCount":212,
                "itemId":"4289331101",
                "ownerId":"0x3faac4a9c852466ebdbf73c7fa005a97be8da5f7",
                "x":-87,
                "y":-99,
            },
            {
                "userId":19217,
                "totalPrice":61.5,
                "totalLandScore":7471.666596,
                "totalCount":205,
                "filteredCount":205,
                "itemId":"4292083722",
                "ownerId":"0x8af82c463bbafb5bf14d12da654acfa066cf9769",
                "x":-44,
                "y":10,
            },
            {
                "userId":19217,
                "totalPrice":61.5,
                "totalLandScore":7471.666596,
                "totalCount":205,
                "filteredCount":205,
                "itemId":"4292083723",
                "ownerId":"0x8af82c463bbafb5bf14d12da654acfa066cf9769",
                "x":-44,
                "y":11,
            },
            {
                "userId":19217,
                "totalPrice":61.5,
                "totalLandScore":7471.666596,
                "totalCount":205,
                "filteredCount":205,
                "itemId":"4292083724",
                "ownerId":"0x8af82c463bbafb5bf14d12da654acfa066cf9769",
                "x":-44,
                "y":12,
            },
            {
                "userId":19217,
                "totalPrice":61.5,
                "totalLandScore":7471.666596,
                "totalCount":205,
                "filteredCount":205,
                "itemId":"4292083725",
                "ownerId":"0x8af82c463bbafb5bf14d12da654acfa066cf9769",
                "x":-44,
                "y":13,
            },
            {
                "userId":14237,
                "totalPrice":63.040009999999995,
                "totalLandScore":7776.666604,
                "totalCount":203,
                "filteredCount":203,
                "itemId":"4292149278",
                "ownerId":"0x424c4932091a89b481e6ff013d3a5c23d3203da2",
                "x":-43,
                "y":30,
            },
            {
                "userId":14237,
                "totalPrice":63.040009999999995,
                "totalLandScore":7776.666604,
                "totalCount":203,
                "filteredCount":203,
                "itemId":"4292149279",
                "ownerId":"0x424c4932091a89b481e6ff013d3a5c23d3203da2",
                "x":-43,
                "y":31,
            },
            {
                "userId":14237,
                "totalPrice":63.040009999999995,
                "totalLandScore":7776.666604,
                "totalCount":203,
                "filteredCount":203,
                "itemId":"4292149280",
                "ownerId":"0x424c4932091a89b481e6ff013d3a5c23d3203da2",
                "x":-43,
                "y":32,
            },
            {
                "userId":14237,
                "totalPrice":63.040009999999995,
                "totalLandScore":7776.666604,
                "totalCount":203,
                "filteredCount":203,
                "itemId":"4292214814",
                "ownerId":"0x424c4932091a89b481e6ff013d3a5c23d3203da2",
                "x":-42,
                "y":30,
            },
            {
                "userId":22871,
                "totalPrice":61.5162385105001,
                "totalLandScore":7646.874928,
                "totalCount":202,
                "filteredCount":202,
                "itemId":"4293066787",
                "ownerId":"0xbf71eae704ad8bb20b74051b1f2c82d6b4220b76",
                "x":-29,
                "y":35,
            },
            {
                "userId":22871,
                "totalPrice":61.5162385105001,
                "totalLandScore":7646.874928,
                "totalCount":202,
                "filteredCount":202,
                "itemId":"4293066788",
                "ownerId":"0xbf71eae704ad8bb20b74051b1f2c82d6b4220b76",
                "x":-29,
                "y":36,
            }
        ]
      };

      this.dataObs.next({
        append: skip > 0,
        data: data,
        reset: resetPage
      });
      res(true);
    })
  }
}