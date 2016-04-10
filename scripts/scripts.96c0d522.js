"use strict";angular.module("pontaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/hype-city",{templateUrl:"views/hype-city.html",controller:"HypeCityCtrl",controllerAs:"hypeCity"}).when("/dj-ponta",{templateUrl:"views/dj-ponta.html",controller:"DjPontaCtrl",controllerAs:"djPonta"}).when("/store",{templateUrl:"views/store.html",controller:"StoreCtrl",controllerAs:"store"}).otherwise({redirectTo:"/"})}]),angular.module("pontaApp").controller("MainCtrl",["$scope",function(a){a.sfora=!0,a.videos=["-kJFU0V70-0","0mRZLl5XScM","KIVE52-yldw","rbEreo1NVhs"],a.videoid="-kJFU0V70-0",a.cambiarVideo=function(b){a.videoid=b}}]),angular.module("pontaApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("pontaApp").controller("HypeCityCtrl",["$scope",function(a){a.sfora=!0,a.videos=["GRCpUTRST7w","doWmbadoKdo","IY9-7g6zpqw","mm7zu8keWO0"],a.videoid="GRCpUTRST7w",a.cambiarVideo=function(b){a.videoid=b}}]),angular.module("pontaApp").controller("DjPontaCtrl",["$scope",function(a){a.sfora=!0,a.videos=["-kJFU0V70-0","0mRZLl5XScM","KIVE52-yldw"],a.videoid="-kJFU0V70-0",a.cambiarVideo=function(b){a.videoid=b}}]),angular.module("pontaApp").controller("StoreCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("pontaApp").directive("youtube",["$window",function(a){return{restrict:"E",scope:{height:"@",width:"@",videoid:"@"},template:"<div></div>",link:function(b,c){var d=document.createElement("script");d.src="https://www.youtube.com/iframe_api";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(d,e);var f;a.onYouTubeIframeAPIReady=function(){f=new YT.Player(c.children()[0],{playerVars:{autoplay:1,html5:1,theme:"light",modesbranding:0,color:"white",iv_load_policy:3,showinfo:1,controls:1},height:b.height,width:b.width,videoId:b.videoid})},b.$watch("videoid",function(a,c){a!=c&&(f.cueVideoById(b.videoid),f.playVideo())}),b.$watch("height + width",function(a,c){a!=c&&f.setSize(b.width,b.height)})}}}]),angular.module("pontaApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/dj-ponta.html",'<div class="jumbotron jumbotron-transparent"> <div class="container"> <div class="row"> <div class="col-sm-6"> <div class="row"> <div class="col-sm-12"> <div class="embed-container" ng-if="sfora"> <youtube videoid="{{videoid}}"></youtube> </div> </div> <div class="hidden-xs col-sm-12 thumbs"> <div class="row"> <div class="col-sm-4 margin-top-20" ng-repeat="vids in videos"> <img ng-click="cambiarVideo(vids);" src="http://i.ytimg.com/vi_webp/{{vids}}/mqdefault.webp"> </div> </div> </div> </div> </div> <div class="col-sm-6 margin-top-20"> <div class="row"> <div class="col-xs-6 col-sm-6 thumb"> <img src="./images/dropbox.a3e95a3f.png"> <p class="thumb-title-big">PRESS KIT</p> </div> <div class="col-xs-6 col-sm-6 thumb"> <img src="./images/dropbox.a3e95a3f.png"> <p class="thumb-title-big">BOOKING</p> </div> <div class="col-sm-12"> <div class="row"> </div> </div> </div> </div> </div> </div> </div> <div class="row banners"> <div class="col-xs-6 col-sm-3"> <a href="https://www.kichink.com/stores/colectivocalavera#.VtkJKIzhAy4" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/calaverabanner_zpsqanaw3fa.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://www.micpolanco.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/MicPoanco_zpswnqozivd.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://blackflys.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/BlackFlys2_zps8dopocvj.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="https://www.facebook.com/thebox33/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/Sin-titulo-1_zpsdj8p7nwl.jpg"> </a> </div> </div>'),a.put("views/hype-city.html",'<div class="jumbotron jumbotron-transparent"> <div class="container"> <div class="row"> <div class="col-sm-8 col-sm-offset-2"> <div class="embed-container" ng-if="sfora"> <youtube videoid="{{videoid}}"></youtube> </div> </div> <div class="col-sm-12 thumbs"> <div class="row"> <div class="col-xs-6 col-sm-3 margin-top-20" ng-repeat="vids in videos"> <img ng-click="cambiarVideo(vids);" src="http://i.ytimg.com/vi_webp/{{vids}}/mqdefault.webp"> </div> </div> </div> </div> </div> </div> <div class="row banners"> <div class="col-xs-6 col-sm-3"> <a href="https://www.kichink.com/stores/colectivocalavera#.VtkJKIzhAy4" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/calaverabanner_zpsqanaw3fa.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://www.micpolanco.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/MicPoanco_zpswnqozivd.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://blackflys.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/BlackFlys2_zps8dopocvj.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="https://www.facebook.com/thebox33/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/Sin-titulo-1_zpsdj8p7nwl.jpg"> </a> </div> </div>'),a.put("views/main.html",'<div class="jumbotron jumbotron-transparent"> <div class="container"> <div class="row"> <div class="col-sm-8 col-sm-offset-2"> <div class="embed-container" ng-if="sfora"> <youtube videoid="{{videoid}}"></youtube> </div> </div> <div class="col-sm-12 thumbs"> <div class="row"> <div class="col-xs-6 col-sm-3 margin-top-20" ng-repeat="vids in videos"> <img ng-click="cambiarVideo(vids);" src="http://i.ytimg.com/vi_webp/{{vids}}/mqdefault.webp"> </div> </div> </div> </div> </div> </div> <div class="row banners"> <div class="col-xs-6 col-sm-3"> <a href="https://www.kichink.com/stores/colectivocalavera#.VtkJKIzhAy4" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/calaverabanner_zpsqanaw3fa.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://www.micpolanco.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/MicPoanco_zpswnqozivd.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="http://blackflys.mx/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/BlackFlys2_zps8dopocvj.gif"> </a> </div> <div class="col-xs-6 col-sm-3"> <a href="https://www.facebook.com/thebox33/" target="_blank"> <img src="http://i212.photobucket.com/albums/cc244/pontahouse/Sin-titulo-1_zpsdj8p7nwl.jpg"> </a> </div> </div>'),a.put("views/store.html",'<div style="width:100%; height:100%; position:relative; top:0px; left:0px"> <!-- Agregar ID de tu tienda --> <iframe src="https://www.kichink.com/stores/id/46225" width="100%" height="100%" frameborder="0"> <div style="width:300px; margin:40% auto; font-size:20px"> Tu navegador no permite mostrar la tienda en esta ventana. <!-- Agregar ID de tienda --> <a href="https://www.kichink.com/stores/id/46225"> Haz clic para abrir a en una nueva ventana. </a> </div> </iframe> </div>')}]);