import { getDatabase, ref, set } from "firebase/database";


//Crear registro usuario bd 
export function writeUserData(uid, balance) {
    const db = getDatabase();
    set(ref(db, 'users/' + uid), {
        balance: balance,
        transacciones: []
    });
  }