$('tarm').setAttribute('transform','translate('+(4*Math.sin(t*18)).toFixed(1)+' '+(3*Math.cos(t*18)).toFixed(1)+')');
rise($('spark'),p(u,TM.title_itch,TM.title_itch+.5)*(.6+.4*Math.sin(t*6)));

rise($('desk'),p(u,TM.narrator_desk,TM.narrator_desk+.5));rise($('bub1'),p(u,TM.itch_bubble,TM.itch_bubble+.5));rise($('mir'),p(u,TM.mirror,TM.mirror+.6));

rise($('stu'),p(u,TM.design_studio,TM.design_studio+.5));rise($('mailg'),p(u,TM.client_emails,TM.client_emails+.4));
ENV.forEach(([g,e],i)=>{const a=TM.client_emails+i*.25;g.setAttribute('opacity',p(u,a,a+.3));g.setAttribute('transform','translate('+(e[0]+3*Math.sin(t*3+i)).toFixed(1)+' '+e[1]+') rotate('+(e[2]+4*Math.sin(t*2+i)).toFixed(1)+')')});
const ob=TM.basecamp_app+5.4;rise($('app'),p(u,TM.basecamp_app,TM.basecamp_app+.6));
$('own').setAttribute('opacity',1-p(u,ob,ob+.4));$('main').setAttribute('opacity',p(u,ob,ob+.4));
PP.forEach((g,i)=>rise(g,p(u,ob+i*.12,ob+i*.12+.4)));rise($('cap2'),p(u,ob+.3,ob+.9));

rise($('ok3'),p(u,TM.thumbs_up,TM.thumbs_up+.5));rise($('ok3b'),p(u,TM.thumbs_up+3,TM.thumbs_up+3.5));
rise($('gs3'),p(u,TM.guess_cloud,TM.guess_cloud+.5));$('x3').setAttribute('opacity',p(u,TM.guess_cloud+1,TM.guess_cloud+1.4));
rise($('lp3'),p(u,TM.test_loop,TM.test_loop+.5));const da=-Math.PI/2+t*1.6;$('dot3').setAttribute('cx',(1220+160*Math.cos(da)).toFixed(1));$('dot3').setAttribute('cy',(430+160*Math.sin(da)).toFixed(1));
rise($('lp3c'),p(u,TM.test_loop+1,TM.test_loop+1.6));

rise($('vac'),p(u,TM.vacuum,TM.vacuum+.5));const sh=384-334*p(u,TM.vacuum+.8,TM.vacuum+4.5);$('suck').setAttribute('height',sh.toFixed(1));$('suck').setAttribute('y',(692-sh).toFixed(1));
rise($('ws'),p(u,TM.workshop,TM.workshop+.6));rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5)*(.8+.2*Math.sin(t*5)));rise($('cap4'),p(u,TM.lightbulb+.6,TM.lightbulb+1.2));

BL.forEach((g,i)=>rise(g,p(u,TM.idea_pile+i*.08,TM.idea_pile+i*.08+.3)));rise($('tag'),p(u,TM.idea_pile+3.4,TM.idea_pile+3.9));
CR.forEach((g,i)=>rise(g,p(u,TM.crowd_heads+i*.1,TM.crowd_heads+i*.1+.3)));rise($('cr5l'),p(u,TM.crowd_heads+1,TM.crowd_heads+1.5));
rise($('bld'),p(u,TM.builder,TM.builder+.5));BK.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.builder+.8+i*.6,TM.builder+1+i*.6)));
$('ham').setAttribute('transform','translate(1240 540) rotate('+(-20+25*Math.sin(t*6)).toFixed(1)+')');

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));rise($('exc'),p(u,TM.calendar+2,TM.calendar+2.5));
rise($('x6a'),p(u,TM.clock_evening,TM.clock_evening+.4));rise($('x6b'),p(u,TM.clock_evening+.4,TM.clock_evening+.8));
let j=0;CE.forEach((c,i)=>{if(i%7>=5){const a=TM.clock_evening+.6+j*.4;j++;c.style.fill=u>=a?'var(--gain)':'var(--stage)'}});
rise($('clk'),p(u,TM.clock_evening,TM.clock_evening+.5));const ha=t*.5,ma=t*3;
$('hh').setAttribute('d','M760 420L'+(760+55*Math.sin(ha)).toFixed(1)+' '+(420-55*Math.cos(ha)).toFixed(1));$('mh').setAttribute('d','M760 420L'+(760+85*Math.sin(ma)).toFixed(1)+' '+(420-85*Math.cos(ma)).toFixed(1));
$('bar6').setAttribute('width',(240*p(u,TM.clock_evening+.5,TM.clock_evening+4)).toFixed(1));
rise($('cl6'),p(u,TM.prototype,TM.prototype+.5));$('cl6c').setAttribute('opacity',(1-.6*p(u,TM.prototype+2,TM.prototype+2.6)).toFixed(2));
rise($('rb6'),p(u,TM.prototype+1,TM.prototype+1.5));rise($('cap6'),p(u,TM.prototype+1.6,TM.prototype+2.2));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));IT.forEach((g,i)=>rise(g,p(u,TM.notebook+1.4+i*.6,TM.notebook+1.4+i*.6+.4)));
$('ring7').setAttribute('stroke-dashoffset',(1-p(u,TM.circle_one,TM.circle_one+.8)).toFixed(3));rise($('pay'),p(u,TM.circle_one+.6,TM.circle_one+1.1));
rise($('tb'),p(u,TM.toolbox,TM.toolbox+.6));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));
rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));rise($('qd'),p(u,TM.question_mark+1.2,TM.question_mark+1.7));
rise($('qm'),p(u,TM.question_mark+1.6,TM.question_mark+2.1)*(.85+.15*Math.sin(t*3)));