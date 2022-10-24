import { initializeApp, cert, getAPP } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

import { ServiceAccount } from "../secrets.js";

export function dbConnect() {
  if (!getApps().length) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }
  return getFirestore();
}
