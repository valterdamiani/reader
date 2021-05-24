import React, {useState, useEffect} from 'react';
import api from '../../providers/api';
import { useParams } from "react-router-dom";
import MyArticles from '../../components/MyArticles';
import FavoritedArticles from '../../components/FavoritedArticles';
import ActionButton from '../../components/ActionButton';

export default function Profile (props) {
    let { user } = useParams();
    const [profile, setProfile] = useState([]);
    const [myArticles, setMyArticles] = useState([]);
    const [favoritedArticles, setFavoritedArticles] = useState([]);

    useEffect(() => {
        api.get(`/profiles/${user}`)
        .then(res => {
          const profile = res.data.profile;
          setProfile( profile );
        });
   
        api.get(`/articles?author=${user}`)
        .then(res => {
          const myArticles = res.data.articles;
          setMyArticles( myArticles );
        });

        api.get(`/articles?favorited=${user}`)
        .then(res => {
          const favoritedArticles = res.data.articles;
          setFavoritedArticles( favoritedArticles );
        });
    }, [])   

    return (<>
       <div class="profile-page">

<div class="user-info">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 offset-md-1">
        <img src={profile.image} class="user-img" />
        <h4>{profile.username}</h4>
        <p>
         {profile.bio}
        </p>
        <ActionButton action="follow" class="btn btn-sm btn-outline-secondary action-btn" set={profile.username} label="Follow" content={profile.username}  iconClass="ion-plus-round"/>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">

    <div class="col-xs-12 col-md-10 offset-md-1">
      <div class="articles-toggle">
        <ul class="nav nav-pills outline-active">
          <li class="nav-item">
            <a class="nav-link active" href="">My Articles</a>
          </li>
        </ul>
      </div>
      {favoritedArticles.map(article => <FavoritedArticles data={article}/>)}
      {myArticles.map(my => <MyArticles data={my}/>)}
    </div>
  </div>
</div>

</div>
    </>);
}