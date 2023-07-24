import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc, updateDoc} from'@angular/fire/firestore';
import { Observable, map } from 'rxjs';

export interface CustomerData {
id?: string;
fullname: string;
//ispostpaid: boolean;
price: number;
//telno: string;

}

@Injectable({
providedIn: 'root'
})

export class homedbCRUD {
deleteData(customer: CustomerData) {
  const notesRef=doc(this.firestore,'StudentCollection/'+customer.id);
  return deleteDoc(notesRef)
}
editData(customerEdit: CustomerData) {
    const notesRef=doc(this.firestore,'StudentCollection/'+customerEdit.id);
    return setDoc(notesRef,{fullname:customerEdit.fullname,price:customerEdit.price});
}

private _DB : any;
constructor(private firestore: Firestore) { }

loadAllData(): Observable<CustomerData[]> {
    const notesRef = collection(this.firestore, 'StudentCollection');
    return collectionData(notesRef, { idField: 'id'}) as Observable<CustomerData[]>;
}
createData(tmpObj: CustomerData) {
    const notesRef = collection(this.firestore, 'StudentCollection');
        
   return addDoc(notesRef, {       
        fullname: tmpObj.fullname,
        price: tmpObj.price,
   });
}
}