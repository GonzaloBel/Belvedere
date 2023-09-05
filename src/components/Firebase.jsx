import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDOI_SMbwBaSLV_6e-u7qAz9Am9jXMdXqg",
  authDomain: "belvedere-f6abd.firebaseapp.com",
  projectId: "belvedere-f6abd",
  storageBucket: "belvedere-f6abd.appspot.com",
  messagingSenderId: "284915410175",
  appId: "1:284915410175:web:8ef400f5a2a5e5ad0598ca",
  measurementId: "G-1E55K7K48W",
};

initializeApp(firebaseConfig);

function App() {
  useEffect(() => {
    const db = getFirestore();
    const productcollection = collection(db, "Productos");
    getDocs(productcollection)
      .then((snapshot) => {
        snapshot.docs.map((product) => {
          console.log("product:", product.id);
          console.log("product:", product.data());
        });
        console.log("snapshot:", snapshot.docs);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);
}
