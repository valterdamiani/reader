import React, {useState} from 'react'
import InputField from '../../components/InputField'
import GenericButton from '../../components/Button';
import api from '../../providers/api'
import swal from 'sweetalert';
import {  useHistory } from "react-router-dom";

export default function Register () {
    let history = useHistory();

    const [username, setUser] = useState();
    const [password, setPass] = useState();
    const [email, setEmail] = useState();
    const [registerUser, setRegisterUser] = useState();

    function sendData () {
        console.log('chamou');

        const registerUser = {
            user: {
                username: username, 
                email: email, 
                password: password
            }
        }
    
        api.post(`/users`, registerUser)
        .then(response => {
            setRegisterUser({response})
            localStorage.setItem('token', response.data.token)
            console.log('rep', response.data.token);
            swal("Registered Successfully").then( () => {
                history.push('/login');
            });
        })
         .catch(error => {
            swal(error.message);
        });
    }

    return (<>
        <div class="auth-page">
            <div class="container page">
                <div class="row">
                    <div class="col-md-6 offset-md-3 col-xs-12">
                        <h1 class="text-xs-center">Sign up</h1>
                        <p class="text-xs-center"><a href="/login">Have an account?</a></p>
                        <fieldset class="form-group">
                            <InputField class="form-control form-control-lg" type="text" label="User" onChange={setUser} placeholder="Your Name"/>
                        </fieldset>
                        <fieldset class="form-group">
                            <InputField class="form-control form-control-lg" type="text" onChange={setEmail} placeholder="Your Email"/>
                        </fieldset>
                        <fieldset class="form-group">
                            <InputField class="form-control form-control-lg" type="password" label="Password" onChange={setPass} placeholder="Password"/>
                        </fieldset>
                        <GenericButton class="btn btn-lg btn-primary pull-xs-right" label="Sign up" data={sendData}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}