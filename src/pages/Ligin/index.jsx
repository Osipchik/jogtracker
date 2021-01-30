import React  from 'react';
import { useHistory } from 'react-router-dom';
import { RoundedButton } from '../../components/Buttons';
import {BearFace} from "../../Icons";
import '../../styles/login.css';


function Login() {
    const history = useHistory();

    const onClick = () => {
        history.replace('/jogs');
    }

    return (
        <div className="login-container center">
            <div className="flex-center">
                <span className="login-margin">
                    <BearFace/>
                </span>

                <RoundedButton
                    displayName="Let me in"
                    className="login-button"
                    onClick={onClick}
                />
            </div>
        </div>
    )
}


export default Login;