import React, {useState} from 'react';
import api from '../../providers/api'
import swal from 'sweetalert';
import TextField from '../../components/TextField';
import InputField from '../../components/InputField';
import GenericButton from '../../components/Button';
import { useHistory } from "react-router-dom";

export default function Register () {
    let history = useHistory();

    const [urlImage, setUrl] = useState();
    const [username, setUser] = useState();
    const [userBio, setBio] = useState();
    const [email, setEmail] = useState();
    const [password, setPass] = useState();

    const [updateUser, setUpdateUser] = useState();

    function sendData () {
        const updateUser = {
            user: {
                email: email, 
                username: username, 
                password: password,
                image: urlImage, 
                bio: userBio, 
            }
        }
        api.put(`/user`, updateUser)
        .then(response => {
            setUpdateUser({response})
            swal("Registered Successfully").then( () => {
                history.push('/profile');
            });
        })
         .catch(error => {
            swal(error.message);
        });
    }

    return (<>
      <div class="settings-page">
        <div class="container page">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Your Settings</h1>
              <fieldset>
                  <fieldset class="form-group">
                    <InputField class="form-control" type="text" placeholder="URL of profile picture"  onChange={setUrl}/>
                  </fieldset>
                  <fieldset class="form-group">
                    <InputField class="form-control form-control-lg" type="text" placeholder="Your Name"  onChange={setUser}/>
                  </fieldset>
                  <fieldset class="form-group">
                    <TextField class="form-control form-control-lg" rows="8" placeholder="Short bio about you"  onChange={setBio}/>
                  </fieldset>
                  <fieldset class="form-group">
                    <InputField class="form-control form-control-lg" type="text" placeholder="Email"  onChange={setEmail}/>
                  </fieldset>
                  <fieldset class="form-group">
                    <InputField class="form-control form-control-lg" type="password" placeholder="Password"  onChange={setPass}/>
                  </fieldset>
                  <GenericButton class="btn btn-lg btn-primary pull-xs-right" label="Update Settings" data={sendData}/>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
</>)
}
 