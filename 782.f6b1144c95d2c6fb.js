"use strict";(self.webpackChunkanimeApp=self.webpackChunkanimeApp||[]).push([[782],{4782:(j,u,a)=>{a.r(u),a.d(u,{CollectionsModule:()=>T});var p=a(9808),r=a(8698),t=a(1223),g=a(3188),l=a(9847);function f(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"a",6),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().consola(c)}),t.TgZ(2,"p",7),t._uU(3),t.qZA(),t._UZ(4,"img",8),t.TgZ(5,"p",9),t._uU(6),t.qZA(),t.TgZ(7,"p",10),t._uU(8," Cop/ Cu"),t.qZA(),t.TgZ(9,"p",11),t._uU(10),t.qZA()()()}if(2&o){const e=i.$implicit;t.xp6(3),t.Oqu(e.name),t.xp6(1),t.Q6J("src",e.funkoImage,t.LSH),t.xp6(2),t.hij(" $",e.price,""),t.xp6(4),t.hij("DISPONIBLES ",e.stock,"")}}function d(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"a",6),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().consola(c)}),t.TgZ(2,"p",7),t._uU(3),t.qZA(),t._UZ(4,"img",8),t.TgZ(5,"p",9),t._uU(6),t.qZA(),t.TgZ(7,"p",10),t._uU(8," Cop/ Cu"),t.qZA(),t.TgZ(9,"p",11),t._uU(10),t.qZA()()()}if(2&o){const e=i.$implicit;t.xp6(3),t.Oqu(e.name),t.xp6(1),t.Q6J("src",e.funkoImage,t.LSH),t.xp6(2),t.hij("$",e.price,""),t.xp6(4),t.hij("DISPONIBLES ",e.stock,"")}}function x(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"a",6),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().consola(c)}),t.TgZ(2,"p",7),t._uU(3),t.qZA(),t._UZ(4,"img",8),t.TgZ(5,"p",9),t._uU(6),t.qZA(),t.TgZ(7,"p",10),t._uU(8," Cop/ Cu"),t.qZA(),t.TgZ(9,"p",11),t._uU(10),t.qZA()()()}if(2&o){const e=i.$implicit;t.xp6(3),t.Oqu(e.name),t.xp6(1),t.Q6J("src",e.funkoImage,t.LSH),t.xp6(2),t.hij("$",e.price,""),t.xp6(4),t.hij("DISPONIBLES ",e.stock,"")}}const C=[{path:"",children:[{path:"agua",component:(()=>{class o{constructor(e,n,s){this.stockServ=e,this.router=n,this.buscar=s,this.respuesta=[],this.funkos_agua=[]}ngOnInit(){this.stockServ.getAllFunkos().subscribe(e=>{this.respuesta=e;for(let n=0;n<this.respuesta.length;n++)"Agua"==this.respuesta[n].coleccion&&(this.respuesta[n].stock<=0&&(console.log(this.respuesta),this.respuesta[n].coleccion="oculta",this.stockServ.putFunko(this.respuesta[n],this.respuesta[n]._id).subscribe(s=>console.log(s))),this.funkos_agua.push(this.respuesta[n]))})}consola(e){this.buscar.mostrarFunko(this.funkos_agua[e]._id,this.router.url)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.q),t.Y36(r.F0),t.Y36(l.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-agua"]],decls:12,vars:1,consts:[[1,"container"],["src","/assets/login-img/volver.png","height","20","width","20","routerLink","/home/main-collections",1,"flecha"],["src","/assets/tarjetas-colecciones/pngwing1.com.png",1,"animal"],[1,"contenedor"],["class","tarjeta","style","background-image: url('assets/fondos-tarjetas/tarjeta-agua.png');",4,"ngFor","ngForOf"],[1,"tarjeta",2,"background-image","url('assets/fondos-tarjetas/tarjeta-agua.png')"],[3,"click"],[1,"tarjeta_name"],[3,"src"],[1,"tarjeta_price"],[1,"info"],[1,"tarjeta_stock"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1)(2,"br")(3,"br"),t.TgZ(4,"h1"),t._uU(5,"Colecci\xf3n de Agua"),t.qZA(),t.TgZ(6,"h5"),t._uU(7,"Recomendada para ni\xf1os"),t.qZA(),t._UZ(8,"img",2)(9,"hr"),t.qZA(),t.TgZ(10,"div",3),t.YNc(11,f,11,4,"div",4),t.qZA()),2&e&&(t.xp6(11),t.Q6J("ngForOf",n.funkos_agua))},directives:[r.rH,p.sg],styles:[".flecha[_ngcontent-%COMP%]:hover{transform:scale(1.3);transition-duration:.1s;cursor:pointer}.tarjeta[_ngcontent-%COMP%]{min-width:180px;max-width:180px;height:320px;border:1px solid beige;border-radius:10px;margin-top:25px;margin-bottom:25px;padding-left:2%;cursor:pointer}.contenedor[_ngcontent-%COMP%]{padding-left:5%;width:100%;height:100%;display:flex;flex-wrap:wrap;gap:20px;background-image:url(/assets/tarjetas-colecciones/paisaje.jpg);background-repeat:repeat;background-size:cover}a[_ngcontent-%COMP%]{width:80%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-around;text-decoration:none}.animal[_ngcontent-%COMP%]{width:10%;margin-left:50%}img[_ngcontent-%COMP%]{max-width:90%;max-height:40%}.tarjeta_name[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif;font-size:90%;font-weight:300;color:#fff;margin-top:10px}.info[_ngcontent-%COMP%]{font-size:15px;color:#fff;font-weight:300;font-family:Times New Roman,Times,serif}.tarjeta_price[_ngcontent-%COMP%]{font-size:20px;margin-top:10px;font-family:Times New Roman,Times,serif;font-weight:400;color:#fff;line-height:20px}.tarjeta_stock[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif;font-size:10px;color:#fff}.tarjeta[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{transform:scale(1.02);transition-duration:.1s}.contenedor[_ngcontent-%COMP%]{overflow:hidden}"]}),o})()},{path:"aire",component:(()=>{class o{constructor(e,n,s){this.stockServ=e,this.router=n,this.buscar=s,this.respuesta=[],this.funkos_aire=[]}ngOnInit(){this.stockServ.getAllFunkos().subscribe(e=>{this.respuesta=e;for(let n=0;n<this.respuesta.length;n++)"Aire"==this.respuesta[n].coleccion&&(this.respuesta[n].stock<=0&&(console.log(this.respuesta),this.respuesta[n].coleccion="oculta",this.stockServ.putFunko(this.respuesta[n],this.respuesta[n]._id).subscribe(s=>console.log(s))),this.funkos_aire.push(this.respuesta[n]))})}consola(e){this.buscar.mostrarFunko(this.funkos_aire[e]._id,this.router.url)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.q),t.Y36(r.F0),t.Y36(l.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-aire"]],decls:12,vars:1,consts:[[1,"container"],["src","/assets/login-img/volver.png","height","20","width","20","routerLink","/home/main-collections",1,"flecha"],["src","/assets/tarjetas-colecciones/pngwing.com.png",1,"animal"],[1,"contenedor"],["class","tarjeta","style","background-image: url('assets/fondos-tarjetas/tarjeta-aire.png');",4,"ngFor","ngForOf"],[1,"tarjeta",2,"background-image","url('assets/fondos-tarjetas/tarjeta-aire.png')"],[3,"click"],[1,"tarjeta_name"],[3,"src"],[1,"tarjeta_price"],[1,"info"],[1,"tarjeta_stock"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1)(2,"br")(3,"br"),t.TgZ(4,"h1"),t._uU(5,"Colecci\xf3n de Aire"),t.qZA(),t.TgZ(6,"h5"),t._uU(7,"Recomendada para jovenes"),t.qZA(),t._UZ(8,"img",2)(9,"hr"),t.qZA(),t.TgZ(10,"div",3),t.YNc(11,d,11,4,"div",4),t.qZA()),2&e&&(t.xp6(11),t.Q6J("ngForOf",n.funkos_aire))},directives:[r.rH,p.sg],styles:[".flecha[_ngcontent-%COMP%]:hover{transform:scale(1.3);transition-duration:.1s}.animal[_ngcontent-%COMP%]{width:10%;margin-left:50%}img[_ngcontent-%COMP%]{cursor:pointer}.tarjeta[_ngcontent-%COMP%]{cursor:pointer;width:180px;height:320px;border:1px solid beige;border-radius:10px;margin-top:25px;margin-bottom:25px}.contenedor[_ngcontent-%COMP%]{width:100%;height:100%;padding-left:5%;display:flex;flex-wrap:wrap;gap:20px;background-image:url(/assets/tarjetas-colecciones/paisaje.jpg);background-repeat:repeat;background-size:cover}a[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-around;text-decoration:none}img[_ngcontent-%COMP%]{max-width:90%;max-height:40%}.tarjeta_name[_ngcontent-%COMP%]{margin-top:10px;font-family:Times New Roman,Times,serif;font-size:90%;font-weight:300;color:#fff}.info[_ngcontent-%COMP%]{font-size:20px;color:#fff;font-family:Times New Roman,Times,serif}.tarjeta_price[_ngcontent-%COMP%]{margin-top:10px;font-size:20px;font-family:Times New Roman,Times,serif;font-weight:400;color:#fff;line-height:20px}.tarjeta_stock[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif;font-size:10px;color:#fff}.tarjeta[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{transform:scale(1.02);transition-duration:.1s}.contenedor[_ngcontent-%COMP%]{overflow:hidden}"]}),o})()},{path:"tierra",component:(()=>{class o{constructor(e,n,s){this.stockServ=e,this.router=n,this.buscar=s,this.respuesta=[],this.funkos_tierra=[]}ngOnInit(){this.stockServ.getAllFunkos().subscribe(e=>{this.respuesta=e;for(let n=0;n<this.respuesta.length;n++)"Tierra"==this.respuesta[n].coleccion&&(this.respuesta[n].stock<=0&&(console.log(this.respuesta),this.respuesta[n].coleccion="oculta",this.stockServ.putFunko(this.respuesta[n],this.respuesta[n]._id).subscribe(s=>console.log(s))),this.funkos_tierra.push(this.respuesta[n]))})}consola(e){this.buscar.mostrarFunko(this.funkos_tierra[e]._id,this.router.url)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.q),t.Y36(r.F0),t.Y36(l.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tierra"]],decls:12,vars:1,consts:[[1,"container"],["src","/assets/login-img/volver.png","height","20","width","20","routerLink","/home/main-collections",1,"flecha"],["src","/assets/tarjetas-colecciones/pngwing2.com.png",1,"animal"],[1,"contenedor"],["class","tarjeta","style","background-image: url('assets/fondos-tarjetas/tarjeta-tierra.png');",4,"ngFor","ngForOf"],[1,"tarjeta",2,"background-image","url('assets/fondos-tarjetas/tarjeta-tierra.png')"],[3,"click"],[1,"tarjeta_name"],[3,"src"],[1,"tarjeta_price"],[1,"info"],[1,"tarjeta_stock"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1)(2,"br")(3,"br"),t.TgZ(4,"h1"),t._uU(5,"Colecci\xf3n de Tierra"),t.qZA(),t.TgZ(6,"h5"),t._uU(7,"Recomendada para adultos"),t.qZA(),t._UZ(8,"img",2)(9,"hr"),t.qZA(),t.TgZ(10,"div",3),t.YNc(11,x,11,4,"div",4),t.qZA()),2&e&&(t.xp6(11),t.Q6J("ngForOf",n.funkos_tierra))},directives:[r.rH,p.sg],styles:[".animal[_ngcontent-%COMP%]{width:10%;margin-left:50%}.flecha[_ngcontent-%COMP%]:hover{transform:scale(1.3);transition-duration:.1s}img[_ngcontent-%COMP%]{cursor:pointer}.tarjeta[_ngcontent-%COMP%]{min-width:180px;height:320px;border:1px solid beige;border-radius:10px;margin-top:25px;margin-bottom:25px}.contenedor[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer;display:flex;flex-wrap:wrap;gap:20px;padding-left:5%;background-image:url(/assets/tarjetas-colecciones/paisaje.jpg);background-repeat:repeat;background-size:cover}a[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-around;text-decoration:none}img[_ngcontent-%COMP%]{max-width:90%;max-height:40%}.tarjeta_name[_ngcontent-%COMP%]{margin-top:10px;font-family:Times New Roman,Times,serif;font-size:90%;font-weight:300;color:#fff}.info[_ngcontent-%COMP%]{font-size:20px;color:#fff;font-family:Times New Roman,Times,serif}.tarjeta_price[_ngcontent-%COMP%]{margin-top:10px;font-size:20px;font-family:Times New Roman,Times,serif;font-weight:400;color:#fff;line-height:20px}.tarjeta_stock[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif;font-size:10px;color:#fff}.tarjeta[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{transform:scale(1.02);transition-duration:.1s}.contenedor[_ngcontent-%COMP%]{overflow:hidden}"]}),o})()},{path:"**",redirectTo:"agua"}]}];let k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.Bz.forChild(C)],r.Bz]}),o})(),T=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,k]]}),o})()}}]);