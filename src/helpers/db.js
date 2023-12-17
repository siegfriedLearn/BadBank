import { getDatabase, ref, set } from "firebase/database";


//Crear historial del usuario  
export function writeUserData(uid, balance) {
    const db = getDatabase();
    set(ref(db, 'users/' + uid), {
        balance: balance,
        transacciones: []
    });
  }