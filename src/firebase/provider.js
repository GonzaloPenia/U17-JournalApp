import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        
    } catch (error) {
        console.log(error);
        
    }    

}