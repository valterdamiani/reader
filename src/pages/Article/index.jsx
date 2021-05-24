import React, {useState, useEffect} from 'react';
import api from '../../providers/api';
import { useParams } from "react-router-dom";
import Title from '../../components/Title'; 
import ImageLink from '../../components/ImageLink';
import RedirectLink from '../../components/Link'
import Moment from 'moment';
import ActionButton from '../../components/ActionButton';

export default function Article () {
    let { slug } = useParams();

    const [articleInfo, setArticle] = useState([])
    const [pathUser, setPath] = useState([])

    useEffect(() => {
      api.get(`/articles/${slug}`)
        .then(res => {
          const article = res.data.article;
          const path = '/profile/' + res.data.article.author.username;
          setArticle( article );
          setPath( path );
        })
      }, [])  

    if(articleInfo != ''){
      return (<>
        <div class="article-page">
          <div class="banner">
            <div class="container">
              <Title label="How to build webapps that scale"/>
              <div class="article-meta">
                <ImageLink path={pathUser} imageSrc={articleInfo.author.image}/>
                <div class="info">
                  <RedirectLink path={pathUser} label={articleInfo.author.username} primaryClass="author"/>
                  <span class="date">{Moment(articleInfo.createdAt).format('MMM D')}</span>
                </div>
                <ActionButton action="follow" class="btn btn-sm btn-outline-secondary" set={articleInfo.author.username} label="Follow"  iconClass="ion-plus-round"/>
                &nbsp;&nbsp;
                <ActionButton action="favorite"  class="btn btn-sm btn-outline-primary" set={articleInfo.slug} label="Favorite Post" iconClass="ion-heart" counter={articleInfo.favoritesCount}/>
              </div>
            </div>
          </div>
          <div class="container page">
            <div class="row article-content">
              <div class="col-md-12">
                <p>{articleInfo.description}</p>
                <h2 id="introducing-ionic">{articleInfo.title}</h2>
                <p>{articleInfo.body}</p>
              </div>
            </div>
            <hr />
            <div class="article-actions">
              <div class="article-meta">
                <ImageLink path={pathUser} imageSrc={articleInfo.author.image}/>
                <div class="info">
                  <RedirectLink path={pathUser} label={articleInfo.author.username} primaryClass="author"/>
                  <span class="date">{Moment(articleInfo.createdAt).format('MMM D')}</span>
                </div>
                <ActionButton action="follow" class="btn btn-sm btn-outline-secondary" set={articleInfo.author.username} label="Follow"  iconClass="ion-plus-round" />
                &nbsp;
                <ActionButton action="favorite" class="btn btn-sm btn-outline-primary" set={articleInfo.slug} label="Favorite Post" iconClass="ion-heart" counter={articleInfo.favoritesCount}/>
              </div>
            </div>
          <div class="row">
            <div class="col-xs-12 col-md-8 offset-md-2">
            <form class="card comment-form">
              <div class="card-block">
                <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
              </div>
              <div class="card-footer">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                <button class="btn btn-sm btn-primary">
                Post Comment
                </button>
              </div>
            </form>
            <div class="card">
              <div class="card-block">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                <a href="" class="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                </a>
                &nbsp;
                <a href="" class="comment-author">Jacob Schmidt</a>
                <span class="date-posted">Dec 29th</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>)
  }else{
    return <div />
  };
}
