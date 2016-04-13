"use strict";angular.module("pontaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/hype-city",{templateUrl:"views/hype-city.html",controller:"HypeCityCtrl",controllerAs:"hypeCity"}).when("/dj-ponta",{templateUrl:"views/dj-ponta.html",controller:"DjPontaCtrl",controllerAs:"djPonta"}).when("/store",{templateUrl:"views/store.html",controller:"StoreCtrl",controllerAs:"store"}).otherwise({redirectTo:"/"})}]),angular.module("pontaApp").controller("MainCtrl",["$scope",function(a){a.sfora=!0,this.active=!0,this.actived="active",a.videos=["-kJFU0V70-0","0mRZLl5XScM","KIVE52-yldw","rbEreo1NVhs"],a.videoid="-kJFU0V70-0",a.cambiarVideo=function(b){a.videoid=b}}]),angular.module("pontaApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("pontaApp").controller("HypeCityCtrl",["$scope",function(a){a.sfora=!0,this.active=!0,a.videos=["GRCpUTRST7w","doWmbadoKdo","IY9-7g6zpqw","mm7zu8keWO0"],a.videoid="GRCpUTRST7w",a.cambiarVideo=function(b){a.videoid=b}}]),angular.module("pontaApp").controller("DjPontaCtrl",["$scope",function(a){a.sfora=!0,this.active=!0,a.videos=["-kJFU0V70-0","0mRZLl5XScM","KIVE52-yldw"],a.videoid="-kJFU0V70-0",a.cambiarVideo=function(b){a.videoid=b}}]),angular.module("pontaApp").controller("StoreCtrl",function(){this.active=!0}),angular.module("pontaApp").directive("youtube",["$window","youTubeApiService",function(a,b){return{restrict:"E",scope:{height:"@",width:"@",videoid:"@"},template:"<div></div>",link:function(a,c){function d(a,b){return new YT.Player(b.children()[0],{playerVars:{autoplay:0,html5:1,theme:"light",modesbranding:0,color:"white",iv_load_policy:3,showinfo:1,controls:1},height:a.height,width:a.width,videoId:a.videoid})}var e,f=document.createElement("script"),g=document.getElementsByTagName("script")[0];f.src="https://www.youtube.com/iframe_api",g.parentNode.insertBefore(f,g),b.onReady(function(){e=d(a,c)}),a.$watch("videoid",function(b,c){b!==c&&(e.cueVideoById(a.videoid),e.playVideo())}),a.$watch("height + width",function(b,c){b!==c&&e.setSize(a.width,a.height)})}}}]),angular.module("pontaApp").directive("navbar",function(){return{restrict:"E",replace:!0,templateUrl:"views/navbar.html"}}),angular.module("pontaApp").service("youTubeApiService",["$q","$window",function(a,b){var c=a.defer(),d=c.promise;return b.onYouTubeIframeAPIReady=function(){c.resolve()},{onReady:function(a){d.then(a)}}}]),angular.module("pontaApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/dj-ponta.html",'<navbar></navbar> <div class="jumbotron jumbotron-transparent"> <div class="container"> <div class="row"> <div class="col-sm-6"> <div class="row"> <div class="col-sm-12"> <div class="embed-container" ng-if="sfora"> <youtube videoid="{{videoid}}"></youtube> </div> </div> <div class="hidden-xs col-sm-12 thumbs"> <div class="row"> <div class="col-sm-4 margin-top-20" ng-repeat="vids in videos"> <img ng-click="cambiarVideo(vids);" src="http://i.ytimg.com/vi_webp/{{vids}}/mqdefault.webp"> </div> </div> </div> </div> </div> <div class="col-sm-6 margin-top-20"> <div class="row"> <div class="col-xs-6 col-sm-6 thumb"> <img src="./images/dropbox.a3e95a3f.png"> <p class="thumb-title-big">PRESS KIT</p> </div> <div class="col-xs-6 col-sm-6 thumb"> <img src="./images/dropbox.a3e95a3f.png"> <p class="thumb-title-big">BOOKING</p> </div> <div class="col-sm-12"> <div class="row"> </div> </div> </div> </div> </div> </div> </div> <div class="row banners"> <div class="col-xs-6 col-sm-3"> <a href="https://www.kichink.com/stores/colectivocalavera#.VtkJKIzhAy4" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/calaverabanner_zpsqanaw3fa.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://www.micpolanco.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/MicPoanco_zpswnqozivd.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://blackflys.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/BlackFlys2_zps8dopocvj.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="https://www.facebook.com/thebox33/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/Sin-titulo-1_zpsdj8p7nwl.jpg"> </a> </div> </div>'),a.put("views/hype-city.html",'<navbar></navbar> <div class="jumbotron jumbotron-transparent"> <div class="container"> <div class="row"> <div class="col-sm-8 col-sm-offset-2"> <div class="embed-container" ng-if="sfora"> <youtube videoid="{{videoid}}"></youtube> </div> </div> <div class="col-sm-12 thumbs"> <div class="row"> <div class="col-xs-6 col-sm-3 margin-top-20" ng-repeat="vids in videos"> <img ng-click="cambiarVideo(vids);" src="http://i.ytimg.com/vi_webp/{{vids}}/mqdefault.webp"> </div> </div> </div> </div> </div> </div> <div class="row banners"> <div class="col-xs-6 col-sm-3"> <a href="https://www.kichink.com/stores/colectivocalavera#.VtkJKIzhAy4" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/calaverabanner_zpsqanaw3fa.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://www.micpolanco.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/MicPoanco_zpswnqozivd.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://blackflys.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/BlackFlys2_zps8dopocvj.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="https://www.facebook.com/thebox33/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/Sin-titulo-1_zpsdj8p7nwl.jpg"> </a> </div> </div>'),a.put("views/main.html",'<navbar></navbar> <div class="jumbotron jumbotron-transparent"> <div class="container"> <div class="row"> <div class="col-sm-8 col-sm-offset-2"> <div class="embed-container" ng-if="sfora"> <youtube videoid="{{videoid}}"></youtube> </div> </div> <div class="col-sm-12 thumbs"> <div class="row"> <div class="col-xs-6 col-sm-3 margin-top-20" ng-repeat="vids in videos"> <img ng-click="cambiarVideo(vids);" src="http://i.ytimg.com/vi_webp/{{vids}}/mqdefault.webp"> </div> </div> </div> </div> </div> </div> <div class="row banners"> <div class="col-xs-6 col-sm-3"> <a href="https://www.kichink.com/stores/colectivocalavera#.VtkJKIzhAy4" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/calaverabanner_zpsqanaw3fa.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://www.micpolanco.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/MicPoanco_zpswnqozivd.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://blackflys.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/BlackFlys2_zps8dopocvj.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="https://www.facebook.com/thebox33/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/Sin-titulo-1_zpsdj8p7nwl.jpg"> </a> </div> </div>'),a.put("views/navbar.html",'<div class="navbar navbar-default" role="navigation"> <div class=""> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav"> <li> <a href="#/"> <img ng-if="main.active == true" src="./images/pestana-left-active.35a8482a.png" class="hidden-xs"> <img ng-if="main.active != true" src="./images/pestana-left.e420a727.png" class="hidden-xs"> <span class="btn-text" ng-class="{active: main.active}">PONTA HOUSE</span> <img ng-if="main.active == true" src="./images/pestana-right-active.ff44bda4.png" class="hidden-xs"> <img ng-if="main.active != true" src="./images/pestana-right.7cf17325.png" class="hidden-xs"> </a> </li> <li> <a href="#/hype-city"> <img ng-if="hypeCity.active == true" src="./images/pestana-left-active.35a8482a.png" class="hidden-xs"> <img ng-if="hypeCity.active != true" src="./images/pestana-left.e420a727.png" class="hidden-xs"> <span class="btn-text" ng-class="{active: hypeCity.active}">HYPE CITY</span> <img ng-if="hypeCity.active == true" src="./images/pestana-right-active.ff44bda4.png" class="hidden-xs"> <img ng-if="hypeCity.active != true" src="./images/pestana-right.7cf17325.png" class="hidden-xs"> </a> </li> <li> <a href="#/dj-ponta"> <img ng-if="djPonta.active == true" src="./images/pestana-left-active.35a8482a.png" class="hidden-xs"> <img ng-if="djPonta.active != true" src="./images/pestana-left.e420a727.png" class="hidden-xs"> <span class="btn-text" ng-class="{active: djPonta.active}">DJ PONTA</span> <img ng-if="djPonta.active == true" src="./images/pestana-right-active.ff44bda4.png" class="hidden-xs"> <img ng-if="djPonta.active != true" src="./images/pestana-right.7cf17325.png" class="hidden-xs"> </a> </li> <li> <a href="#/store"> <img ng-if="store.active == true" src="./images/pestana-left-active.35a8482a.png" class="hidden-xs"> <img ng-if="store.active != true" src="./images/pestana-left.e420a727.png" class="hidden-xs"> <span class="btn-text" ng-class="{active: store.active}">STORE</span> <img ng-if="store.active == true" src="./images/pestana-right-active.ff44bda4.png" class="hidden-xs"> <img ng-if="store.active != true" src="./images/pestana-right.7cf17325.png" class="hidden-xs"> </a> </li> </ul> <div class="navbar-bottom hidden-xs"></div> </div> </div> </div>'),a.put("views/store.html",'<navbar></navbar> <div style="width:100%; height:100%; position:relative; top:0px; left:0px"> <!-- Agregar ID de tu tienda --> <iframe src="https://www.kichink.com/stores/id/46225" width="100%" height="100%" frameborder="0"> <div style="width:300px; margin:40% auto; font-size:20px"> Tu navegador no permite mostrar la tienda en esta ventana. <!-- Agregar ID de tienda --> <a href="https://www.kichink.com/stores/id/46225"> Haz clic para abrir a en una nueva ventana. </a> </div> </iframe> </div>')}]);