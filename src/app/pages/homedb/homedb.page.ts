import {homedbCRUD , CustomerData} from './homedb_CRUD.service'
import { ModalController } from '@ionic/angular';
import { ChangeDetectorRef,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homedb',
  templateUrl: './homedb.page.html',
  styleUrls: ['./homedb.page.scss'],
})
export class HomedbPage implements OnInit {
 datalist : CustomerData[] = [] ;
  constructor(private dataService: homedbCRUD,
    private modalCtrl: ModalController,
    private cd: ChangeDetectorRef) {
    this.dataService.loadAllData().subscribe(res => {
    this.datalist = res;
    this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }

}
