import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWsJg8TjvvGIqGYWmo_9ZE8QjwNircXro",
  authDomain: "dummy-17fb2.firebaseapp.com",
  projectId: "dummy-17fb2",
  storageBucket: "dummy-17fb2.appspot.com",
  messagingSenderId: "461761926653",
  appId: "1:461761926653:web:3ca7d8eefad471ee5af594",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
