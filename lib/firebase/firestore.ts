import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  QueryConstraint,
  DocumentData,
  WithFieldValue
} from 'firebase/firestore';
import { db } from './config';

/**
 * Generic Firestore utility functions
 * These functions provide a basic CRUD interface for any collection
 */

// Get all documents from a collection
export const getCollection = async <T extends Record<string, any>>(collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as (T & { id: string })[];
};

// Get a single document by ID
export const getDocument = async <T extends Record<string, any>>(collectionName: string, docId: string) => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() } as T & { id: string };
};

// Add a new document to a collection
export const addDocument = async <T extends Record<string, any>>(collectionName: string, data: T) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
};

// Update a document
export const updateDocument = async <T extends Record<string, any>>(
  collectionName: string,
  docId: string,
  data: Partial<T>
) => {
  const docRef = doc(db, collectionName, docId);
  await updateDoc(docRef, data as any);
};

// Delete a document
export const deleteDocument = async (collectionName: string, docId: string) => {
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
};

// Query a collection
export const queryCollection = async <T extends Record<string, any>>(
  collectionName: string,
  constraints: QueryConstraint[]
) => {
  const q = query(collection(db, collectionName), ...constraints);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as (T & { id: string })[];
}; 