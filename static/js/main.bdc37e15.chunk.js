(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"company_many":[{"job_title":"Full Stack Web Developer","company":"Railpod Inc","year":"Jan. 2019 - Aug. 2019","bullets":["Worked with the executive team to create major portions of the product","Created complex data visualization tools for track data using React that sped up the data analysis process by over 50%","Automated data uploading from robot to web portal using Django and AWS","Converted API that increased GPS accuracy from Java to Python to fit in with current codebase"]},{"job_title":"Cross Platform Mobile Developer","company":"Skillz Inc","year":"May 2018 - Aug. 2018","bullets":["Developed cross-platform features with React Native, Java, and Objective C","Integrated open-source React Native components into the product","Communicated with multiple teams to build components from design to production","Tested components to make sure they work under all possible conditions"]},{"job_title":"Computer Science Teaching Assistant","company":"Northeastern University","year":" Jan. 2017 - Current","bullets":["Tutored students to understand computer science fundamentals through Racket","Graded code to check for design, cleanliness, and functionality"]}],"skill_many":[{"skill":"React","skill_level":3},{"skill":"Django","skill_level":3},{"skill":"Javascript","skill_level":3},{"skill":"Java","skill_level":2},{"skill":"React Native","skill_level":2},{"skill":"SQL","skill_level":2},{"skill":"R","skill_level":1}]}')},,,function(e,a,t){e.exports=t.p+"static/media/me.04c267e7.png"},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(8),r=t.n(c),s=(t(15),t(1)),i=t(2),o=t(4),m=t(3),d=t(5),u=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.getSkillDescriptionText(),a=this.getSkillLevel();return n.a.createElement("div",{className:"my-3"},n.a.createElement("h3",null,"            ",this.props.skill,n.a.createElement("span",{className:"level"},e)),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})))}},{key:"getSkillDescriptionText",value:function(){return 1===this.props.skill_level?"Beginner":this.props.skill_level<=3?"Intermediate":"Expert"}},{key:"getSkillLevel",value:function(){return{1:30,2:50,3:70,4:100}[this.props.skill_level]}}]),a}(n.a.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",{className:"card-title"},this.props.job_title," - ",n.a.createElement("span",{className:"place"},this.props.company," ")," ",n.a.createElement("span",{className:"year"},"(".concat(this.props.year,")"))),n.a.createElement("ul",null,this.props.bullets.map((function(e,a){return n.a.createElement("li",{key:a},e)}))))}}]),a}(n.a.Component),h=t(9),v=t.n(h),k=t(6),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row header"},n.a.createElement("div",{className:"col-8 col-lg-3 offset-2"},n.a.createElement("img",{id:"resume-photo",src:v.a,alt:"Konstantin Rezchikov"})),n.a.createElement("div",{className:"col-8 offset-2 col-lg-4 offset-lg-0"},n.a.createElement("h1",{className:"name"},"Konstantin Rezchikov"),n.a.createElement("h2",{className:"description"},"Software Engineer | Web Developer"),n.a.createElement("ul",{className:"list-inline"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/konstantin-rezchikov/",target:"_blank"},n.a.createElement("i",{className:"fab fa-linkedin fa-3x"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/krezchikov42",target:"_blank"},n.a.createElement("i",{className:"fab fa-github fa-3x"})))))),n.a.createElement("div",null,n.a.createElement("div",{className:"row body"},n.a.createElement("div",{className:"col-12 col-lg-7 offset-lg-1"},n.a.createElement("div",{className:"card bg-light my-3"},n.a.createElement("div",{className:"card-header"},"About Me"),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},"Hi there! I'm Konstantin Rezchikov, a computer engineering and computer science student at Northeastern University. I've always loved the fact that I can bring someone's thoughts to life by typing a few lines of code. I'm excited by entrepreneurship and making products to change the world."))),n.a.createElement("div",{className:"card bg-light my-3"},n.a.createElement("div",{className:"card-header"},"Work Experience"),n.a.createElement("div",{className:"card-body"},k.company_many.map((function(e){return n.a.createElement(p,e)}))))),n.a.createElement("div",{className:"col-12 col-lg-3"},n.a.createElement("div",{className:"card bg-light my-3"},n.a.createElement("div",{className:"card-header"},"Contact me"),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},n.a.createElement("i",{className:"fas fa-map-marked"})," Boston, Massachussets"),n.a.createElement("p",{className:"card-text"},n.a.createElement("i",{className:"fas fa-envelope"})," rezchikov.k@husky.neu.edu"))),n.a.createElement("div",{className:"card bg-light my-3"},n.a.createElement("div",{className:"card-header"},"Skills"),n.a.createElement("div",{className:"card-body"},k.skill_many.map((function(e){return n.a.createElement(u,e," ")}))))))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.bdc37e15.chunk.js.map