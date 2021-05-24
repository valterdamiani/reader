import React from "react";
import Moment from 'moment';
import RedirectLink from '../../components/Link';
import ImageLink from '../ImageLink';
import ActionButton from '../../components/ActionButton';

export default function Card (props) {
  let article = props.data;
  let formattedDate = article.createdAt;
  let pathUser = '/profile/' + article.author.username
  let pathArticle = '/article/' + article.slug

  return (
    <div class="article-preview">
      <div class="article-meta">
        <ImageLink path={pathUser} imageSrc={article.author.image}/>
        <div class="info">
          <RedirectLink  path={pathUser} primaryClass="author" label={article.author.username}/>
          <span class="date">{Moment(formattedDate).format('MMM D')}</span>
        </div>
        <ActionButton action="favorite"  class="btn btn-outline-primary btn-sm pull-xs-right" set={article.slug} iconClass="ion-heart" counter={article.favoritesCount}/>
      </div>
      <a class="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <RedirectLink path={pathArticle} label="Read more..."/>
      </a>
    </div>
  );
};