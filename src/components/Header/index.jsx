import React from "react";
import RedirectLink from '../Link';

export default function Header () {
      return (<>
        <head>
            <meta charset="utf-8"/>
            <title>Reader</title>
            <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css"/>
            <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css"/>
            <link rel="stylesheet" href="//demo.productionready.io/main.css"/>
        </head>
        <body>
            <nav class="navbar navbar-light">
            <div class="container">
                <a class="navbar-brand" href="/">Reader</a>
                <ul class="nav navbar-nav pull-xs-right">
                    <RedirectLink primaryClass="nav-link" secondaryClass="nav-item" path="/" icon="" label="Home"/>
                    <RedirectLink primaryClass="nav-link" secondaryClass="nav-item" path="/new-article" icon="ion-compose" label="New Post"/>
                    <RedirectLink primaryClass="nav-link" secondaryClass="nav-item" path="/settings" icon="ion-gear-a" label="Settings"/>
                    <RedirectLink primaryClass="nav-link" secondaryClass="nav-item" path="/register" icon="" label="Sign Up"/>             
                    <RedirectLink primaryClass="nav-link" secondaryClass="nav-item" path="/login" icon="" label="Sign In"/>             
                </ul>
            </div>
            </nav>
        </body>
      </>
    );
}