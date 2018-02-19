import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent implements OnInit {
  softwaresObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.softwaresObservable = this.getSoftwares('/softwares');
  }

  getSoftwares(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
