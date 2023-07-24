import {homedbCRUD , CustomerData} from './homedb_CRUD.service'
import { AlertController, ModalController } from '@ionic/angular';
import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { create } from 'domain';

@Component({
  selector: 'app-homedb',
  templateUrl: './homedb.page.html',
  styleUrls: ['./homedb.page.scss'],
})
export class HomedbPage implements OnInit {
 datalist : CustomerData[] = [] ;
  //alertController: any;
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
    header: 'ADD',
    subHeader: 'to name and price',
    inputs: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'name'
      },
      {
        name: 'price',
        type: 'number',
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
        text : 'adddata',
        handler: (data) => {
         const CustomerData : CustomerData = {
         fullname: data.name,
         price: data.price,
        }
        this.dataService.createData(CustomerData); 
      }
    }
    ] 
  });
  (await alert).present();
  
}

async DeleteData(customer: CustomerData){
  const alert = this.alertCtrl.create({
    header: "Delete",
    message: "Are you sure?",

    buttons: [
      {
        text: "Cancel",
        role: "cancel",         
      },

      {
        text: "Yes",
        handler: () => {
          this.dataService.deleteData(customer)
          this.cd.detectChanges();
        }
        
      }
    ]
  });

  (await alert).present();
}
async EditData(customerEditData: CustomerData){
  const alert = this.alertCtrl.create({
    header: "EDIT",
    inputs: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'name'
      },
      {
        name: 'price',
        type: 'number',
        placeholder: 'price'
      },

  ],

  buttons: [
    {
      text: "Cancel",
      role: "cancel",
    },
    {
      text: "Edit",
      handler: (data) => {
        const customerEdit:CustomerData = {
          fullname: data.name,
          price: data.price,
        }

        this.dataService.editData(customerEdit);
      }
    }
  ]
  });
  (await alert).present();
}


}
