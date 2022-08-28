import { db } from "./FirebaseAuth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { grains } from "../UpdatedData";

const ref = collection(db, "grain");
export const addData = () => {
  grains.forEach(async (d) => {
    await addDoc(ref, {
      ...d,
    })
      .then((obj) => {
        console.log("Document is written by ID " + obj.id);
      })
      .catch((error) => {
        console.log("error : " + error);
      });
  });
};

export const getGrainsDocs = async () => {
  const data = await getDocs(ref);
  let temp = data.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return temp;
};
