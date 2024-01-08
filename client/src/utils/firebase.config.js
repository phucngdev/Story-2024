import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBENQzkSNY4NHsRpDQOhsMfPtCrDti_8Q0",
  authDomain: "story-900c7.firebaseapp.com",
  projectId: "story-900c7",
  storageBucket: "story-900c7.appspot.com",
  messagingSenderId: "386102964558",
  appId: "1:386102964558:web:bdb4fab64eff5cab24ee1f",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function Upload(file) {
  const fileObj = file.files[0];
  let fileUrl = "";
  if (fileObj) {
    const storageRef = ref(storage, `uploads/${fileObj.name}`);
    try {
      const snapshort = await uploadBytes(storageRef, fileObj);
      const downloadUrl = await getDownloadURL(snapshort.ref);
      fileUrl = downloadUrl;
    } catch (error) {
      console.log("Đã có lỗi xảy ra");
    }
  } else {
    console.log("Tên hình ảnh không được để trống");
  }
  return fileUrl;
}

export default Upload;
