import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timeStamp,
} from '../firebase/config';

const useStorage = file => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      snapshot => {
        let precentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(precentage);
      },
      err => {
        setError(err);
      },
      async () => {
        const urlAddress = await storageRef.getDownloadURL();
        collectionRef.add({ url: urlAddress, createdAt: timeStamp() });
        setUrl(urlAddress);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
