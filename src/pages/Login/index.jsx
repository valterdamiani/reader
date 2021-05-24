import React, { useState } from "react";
import InputField from '../../components/InputField'
import GenericButton from '../../components/Button';
import RedirectLink from '../../components/Link';
import Title from '../../components/Title';
import api from '../../providers/api'
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

export default function Login ({data}) {
    let history = useHistory();

    const [user, setAuthEmail] = useState();
    const [pass, setAuthPass] = useState();
    const [authUser, setAuthUser] = useState();

    function sendAuthData () {
        const authUser = {
            user: {
                email: user, 
                password: pass
            }
            // user: {
            //     email: 'valterdamiani@hotmail.com', 
            //     password: '123456789'
            // }
        }
        api.post(`/users/login`, authUser)
        .then(response => {
            setAuthUser({response});
            localStorage.setItem('token', response.data.user.token);
            history.push('/');
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
                        <Title class="text-xs-center" label="Login"/>
                        <fieldset class="form-group">
                            <InputField class="form-control form-control-lg" type="text" onChange={setAuthEmail} placeholder="Your Email"/>
                        </fieldset>
                        <fieldset class="form-group">
                            <InputField class="form-control form-control-lg" type="password" placeholder="Password" onChange={setAuthPass}/>
                        </fieldset>
                        <GenericButton class="btn btn-lg btn-primary pull-xs-right" label="Login" data={sendAuthData}/>
                        <RedirectLink  path="/register" label="Don't have an account yet? Sign Up"/>
                    </div>
                </div>
            </div>
        </div>
    </>);
}