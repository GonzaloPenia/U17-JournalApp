import { singInWithGoogle } from '../../firebase/provider';
import { checkingCredentials } from "./"

export const  checkingAuthentication = (email,password) => { 
    return async (dispatch) => {
        dispatch( checkingCredentials() );
    }
 }
export const  startGoogleSingIn = () => { 
    return async (dispatch) => {
        dispatch( checkingCredentials() );
        const result= singInWithGoogle();
    }
 }