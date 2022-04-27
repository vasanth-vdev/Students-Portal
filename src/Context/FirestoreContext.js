import { db } from '../Config/firebaseConfig';
import React, { useContext, useState, useEffect } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
} from 'firebase/firestore';
import { async } from '@firebase/util';

const FirestoreContext = React.createContext();
export const useFirestore = () => {
  return useContext(FirestoreContext);
};

const FirestoreProvider = ({ children }) => {
  const getData = async (table, q) => {
    const dataRef = collection(db, table);
    try {
      if (q) {
        const qq = query(dataRef, q);
        const data = await getDocs(qq);
      } else {
        const data = await getDocs(dataRef);
      }
      return data.docs.map((doc) => ({ ...doc.data(), uid: doc.id }));
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

  const value = {};
  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreProvider;
