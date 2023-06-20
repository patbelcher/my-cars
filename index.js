//import the tooosl the we need from firebase admin library
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

//import out credentials from secrets.js
import { creds } from "./secrets.js";

//connect to out firebase project, need credentials
initializeApp({
    credential: cert(creds),
});

//conect to firestore database - just ask
const db = getFirestore();

/*CREATE - add an item
const car = {
    Make:'Subaru',
    Model: 'Forrester',
    Color: 'Metalic gray',
    Year: 2019,
    Price: 34995
}

db.collection('cars').add(car)
.then(doc => {
    console.log('Car added: ' + doc.id);
})
.catch(console.error);

/*read the data
db.collection('cars').get()
.then (collection => {
    const cars = collection.docs.map(doc=>({id:doc.id, ...doc.data()}))
    console.table(cars);
})
.catch(console.error)
*/

/*update a single item
db.collection('cars').doc('dAbRSociwlAqzVlD0QCK')
        .update({status: 'SOLD'})
        .then(doc=> console.log('Updated document'))
        .catch(console.error)
*/

//delete an item
db.collection('cars').doc('BsndpHF78lfKxzG885v3')
.delete()
console.log('DELETED')
