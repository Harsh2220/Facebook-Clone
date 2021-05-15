import { React } from 'react';
import { auth, provider } from './Firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStatevalue } from './StateProvider';

function Login() {

    const [state, dispatch] = useStatevalue();

    const sendData = () => {

        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className="login">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="logo"/>
            <button className="button" onClick={sendData}>
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="logo"/> Log In With Google
            </button>
        </div>
    );
}

export default Login;
