import { db, storageBucket } from '../Config/firebaseConfig';
import React, { useContext } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from 'firebase/firestore';
import { ref, uploadBytesResumable } from 'firebase/storage';

const FirestoreContext = React.createContext();
export const useFirestore = () => {
  return useContext(FirestoreContext);
};

const FirestoreProvider = ({ children }) => {
  const getDownloadURL = async (file, folder) => {
    if (!file) return;
    const uniqueID = Date.now() + Math.floor(Math.random()).toString();
    const storageRef = ref(storageBucket, `/${folder}/${uniqueID}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const refe = uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => console.log(err),
      () =>
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
    );
  };

  const getData = async (table, q) => {
    const dataRef = collection(db, table);
    try {
      if (q) {
        const qq = query(dataRef, q);
        const data = await getDocs(qq);
        return data.docs.map((doc) => ({ ...doc.data(), uid: doc.id }));
      } else {
        const data = await getDocs(dataRef);
        return data.docs.map((doc) => ({ ...doc.data(), uid: doc.id }));
      }
    } catch {
      return `Failed to Get Data from ${table}`;
    }
  };

  const addData = async (table, data) => {
    const dataRef = collection(db, table);
    try {
      await addDoc(dataRef, data);
    } catch {
      return `Failed to Add Data to ${table}`;
    }
  };

  const updateData = async (table, uid, data) => {
    const dataDocRef = doc(db, table, uid);
    try {
      await updateDoc(dataDocRef, data);
    } catch {
      return `Failed to Update Data`;
    }
  };

  const deleteData = async (table, uid, data) => {
    const dataDocRef = doc(db, table, uid);
    try {
      await deleteDoc(dataDocRef);
    } catch {
      return `Failed to Delete Data`;
    }
  };

  const value = { getData, addData, updateData, deleteData, getDownloadURL };
  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreProvider;
