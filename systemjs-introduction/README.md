# Jspm and SystemJs Introduction

To install Jspm and SystemJs:

    npm install -g jspm

To install the libraries needed by the page:

    jspm install jquery
    
To create the javascript bundle:
 
    jspm bundle-sfx --minify src/main bundle.min.js
    
To install a simple web server:

    npm install -g http-server

To run the page:

    http-server . 
    
Open the browser in this URL:

    http://localhost:8080
    
