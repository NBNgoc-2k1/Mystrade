import {
    doc, getDoc, getDocs, updateDoc, addDoc,
    collection, serverTimestamp,
    query, orderBy, deleteDoc,
} from '@firebase/firestore'
import {  database } from '../firebase-config'

export const GetSingleData = async (collection:any, uid:any) => {
    const snapshot = await getDoc(doc(database, collection, uid))
    const data = snapshot.data();
    if (data)
        data.id = snapshot.id
    return data
}

export const GetAllOrderedBlogs = async (fieldPath:any,collectionName:any) => {
    const data:any = [];
    const dataCollection = collection(database, collectionName);
    const orderByCreatedQueryAndLimit = query(dataCollection, orderBy(fieldPath, 'desc'));
    const dataSnapshot = await getDocs(orderByCreatedQueryAndLimit);

    
    dataSnapshot.forEach((doc) => {
        const dataDoc = doc.data();
        dataDoc.id = doc.id
        data.push(dataDoc)
    })

    return data
}

export const GetAllUser = async () => {
    const users:any = [];
    const userCollection = collection(database, "users");
    const usersSnapshot = await getDocs(userCollection);

    usersSnapshot.forEach((doc) => {
        const userDoc = doc.data();
        userDoc.id = doc.id;
        users.push(userDoc)
    })

    return users
}