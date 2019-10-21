import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  DemoData = [
    {
      name:'Pharaohs Palace',
      stars: 4.8,
      address: '11890 Douglas Rd Ste 105',
      photo: 'https://firebasestorage.googleapis.com/v0/b/account-based-mockup.appspot.com/o/Pharaohs%20Place.PNG?alt=media&token=05aefc22-d014-41dc-b771-9583e5f22028'
    },
    {
      name:"Joe's Sports Bar & Grill",
      stars: 4.3,
      address: '11950 Jones Bridge Rd',
      photo: "https://firebasestorage.googleapis.com/v0/b/account-based-mockup.appspot.com/o/Joe's%20Sports%20Bar%20%26%20Grill.PNG?alt=media&token=cca1e8e1-3df2-42b6-875c-ba8aa2927438"
    },
    {
      name:'Waffle House',
      stars: 4.1,
      address: '10792 Jones Bridge Rd',
      photo: 'https://firebasestorage.googleapis.com/v0/b/account-based-mockup.appspot.com/o/WaHo.PNG?alt=media&token=6fb29565-9577-4284-ab74-2a42b1c796ad'
    },
    {
      name:'Hen Mother Cookhouse',
      stars: 4.6,
      address: '11705 Jones Bridge Rd',
      photo: 'https://firebasestorage.googleapis.com/v0/b/account-based-mockup.appspot.com/o/HenMother.PNG?alt=media&token=38e348b0-caf2-480e-af99-f541584787a7'
    },
    {
      name:'Mavericks Cantina',
      stars: 4.8,
      address: '11030 Medlock Bridge Rd Suite 160',
      photo: 'https://firebasestorage.googleapis.com/v0/b/account-based-mockup.appspot.com/o/Mavericks.PNG?alt=media&token=cfd63205-1797-4918-81ed-8d5eb95804f9'
    }
  ]
  constructor() { }

  search():any[] {
    return this.DemoData;
  }
}
