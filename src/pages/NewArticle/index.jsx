import React, {useState} from 'react'
import InputField from '../../components/InputField'
import GenericButton from '../../components/Button';
import api from '../../providers/api'
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import TextField from '../../components/TextField';

export default function Register () {
    let history = useHistory();

    const [title, setTitle] = useState();
    const [detail, setDetail] = useState();
    const [content, setContent] = useState();
    const [tags, setTags] = useState();
    const [registerArticle, setRegisterArticle] = useState();

    
    function sendData () {
      let result = tags.split(/\s*,\s*/);
      const registerArticle = {
        article: {
          title: title, 
          description: detail, 
          body: content,
          tagList: result
        }
      }
      console.log('r', registerArticle);
    
        api.post(`/articles`, registerArticle)
        .then(response => {
          setRegisterArticle({response})
            swal("Registered Successfully").then( () => {
                history.push('/');
            });
        })
         .catch(error => {
            swal(error.message);
        });
    }

    return (<>
        <div class="editor-page">
          <div class="container page">
            <div class="row">

              <div class="col-md-10 offset-md-1 col-xs-12">
                  <fieldset>
                    <fieldset class="form-group">
                        <InputField class="form-control form-control-lg" type="text" placeholder="Article Title" onChange={setTitle}/>
                    </fieldset>
                    <fieldset class="form-group">
                        <InputField class="form-control" type="text" placeholder="What's this article about?" onChange={setDetail}/>
                    </fieldset>
                    <fieldset class="form-group">
                        <TextField class="form-control" rows="8" placeholder="Write your article (in markdown)" onChange={setContent}/>
                    </fieldset>
                    <fieldset class="form-group">
                        <InputField class="form-control" type="text" placeholder='Enter tags, separated by  " , "' onChange={setTags}/><div class="tag-list"></div>
                    </fieldset>
                    <GenericButton class="btn btn-lg pull-xs-right btn-primary" label="Publish Article" data={sendData}/>
                  </fieldset>
              </div>

            </div>
          </div>
        </div>
        </>
    );
}