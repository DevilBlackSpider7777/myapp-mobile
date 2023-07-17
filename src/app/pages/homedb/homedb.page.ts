import {homedbCRUD , CustomerData} from './homedb_CRUD.service'
import { ModalController } from '@ionic/angular';
import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { create } from 'domain';

@Component({
  selector: 'app-homedb',
  templateUrl: './homedb.page.html',
  styleUrls: ['./homedb.page.scss'],
})
export class HomedbPage implements OnInit {
 datalist : CustomerData[] = [] ;
  constructor(private dataService: homedbCRUD,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private cd: ChangeDetectorRef) {
    this.dataService.loadAllData().subscribe(res => {
    this.datalist = res;
    this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }
async adddata(){
  const alert = await this.alertCtrl.create({
    header: 'Create',
    subHeader: 'Fill the form',
    inputs: [
      {
        name: 'intelno',
        type: 'text',
        placeholder: 'name'
      },
      {
        name: 'intelno',
        type: 'text',
        placeholder: 'price'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text : 'create',
        handler: (data) => {
         const CustomerData : CustomerData = {
         fullname: data.inpname,
         price: data.inprice,
        }
        this.dataService.createData(CustomerData); 
      }
    }
    ] 
  });
  (await alert).present();
}
}
