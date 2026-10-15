const sp=p(u,TM.spotlight,TM.spotlight+1.2);
$('cone').setAttribute('opacity',(sp*(.9+.1*Math.sin(t*3))).toFixed(3));$('pool').setAttribute('opacity',sp.toFixed(3));rise($('star0'),sp);

rise($('cardA'),p(u,TM.two_doors,TM.two_doors+.5));rise($('cardB'),p(u,TM.two_doors+.3,TM.two_doors+.8));
cells.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.spreadsheet+i*.06,TM.spreadsheet+i*.06+.3).toFixed(2)));
rise($('tale'),p(u,TM.storyteller,TM.storyteller+.6));pulse('hrt1',1245,400,1+.06*Math.sin(t*4));
const w1=p(u,TM.storyteller+4.1,TM.storyteller+4.8);$('paIn').setAttribute('opacity',(1-.6*w1).toFixed(2));rise($('winB'),w1);
rise($('quote'),p(u,TM.storyteller+7.1,TM.storyteller+7.7));

rise($('brainG'),p(u,TM.brain,TM.brain+.6));rise($('fire'),p(u,TM.campfire,TM.campfire+.6));
$('flame').setAttribute('transform','translate(380 640) scale('+(1+.06*Math.sin(t*9)).toFixed(3)+' '+(1+.1*Math.sin(t*7)).toFixed(3)+') translate(-380 -640)');
const v=TM.campfire+5,ms=p(u,v,v+1.4),mf=p(u,v+.4,v+1.8),df=p(u,v+2.4,v+3.6);
$('tokS').setAttribute('transform','translate('+(760+420*ms).toFixed(1)+' 400)');$('tokS').setAttribute('opacity',p(u,v,v+.3).toFixed(2));
$('tokF').setAttribute('transform','translate('+(760+420*mf+200*df).toFixed(1)+' '+(500+240*df).toFixed(1)+')');$('tokF').setAttribute('opacity',(p(u,v+.4,v+.7)*(1-df)).toFixed(2));
rise($('wired'),p(u,TM.brain+14.5,TM.brain+15.1));

rise($('cam'),p(u,TM.filmmaker,TM.filmmaker+.5));rise($('photos'),p(u,TM.photo_stack,TM.photo_stack+.6));
const al=TM.photo_stack+3.8;$('vf').setAttribute('opacity',p(u,al,al+.4).toFixed(2));$('vf').setAttribute('x',(755+65*Math.sin(t*.8)).toFixed(1));$('vf').setAttribute('y',(310+25*Math.sin(t*.6)).toFixed(1));
rise($('eqA'),p(u,TM.equation,TM.equation+.5));rise($('eqB'),p(u,TM.equation+1.2,TM.equation+1.7));
rise($('arr'),p(u,TM.equation+4.5,TM.equation+5.1));
const at=p(u,TM.equation+9.9,TM.equation+10.6);rise($('eye'),at);$('eyeIn').setAttribute('transform','translate(0 620) scale(1 '+(.1+.9*at).toFixed(3)+') translate(0 -620)');

rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5));
const ds=p(u,TM.dusty_shelf,TM.dusty_shelf+1.2);rise($('shelf'),p(u,TM.dusty_shelf,TM.dusty_shelf+.5));
$('rays').setAttribute('opacity',(1-ds).toFixed(2));$('bulbLit').setAttribute('opacity',(1-ds).toFixed(2));$('bulbOff').setAttribute('opacity',ds.toFixed(2));
$('dust').setAttribute('opacity',p(u,TM.dusty_shelf+.4,TM.dusty_shelf+1.6).toFixed(2));
rise($('mega'),p(u,TM.megaphone,TM.megaphone+.5));
WV.forEach((w,i)=>w.setAttribute('opacity',u>=TM.megaphone?(.3+.7*Math.abs(Math.sin(t*3-i*.8))).toFixed(2):0));
CR.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.megaphone+.5+i*.04,TM.megaphone+.8+i*.04).toFixed(2)));
rise($('half'),p(u,TM.megaphone+4.2,TM.megaphone+4.8));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
$('arcP').setAttribute('stroke-dashoffset',(1-p(u,TM.character,TM.character+2.4)).toFixed(3));
[0,1,2].forEach(i=>rise($('n'+i),p(u,TM.character+i*1.2,TM.character+i*1.2+.5)));
rise($('lis'),p(u,TM.listener,TM.listener+.6));
const fu=TM.listener+3.8;rise($('far'),p(u,fu,fu+.5));
$('fA').setAttribute('transform','translate('+(170+200*p(u,fu+.3,fu+1.5)).toFixed(1)+' 650)');
$('fS').setAttribute('transform','translate('+(200+880*p(u,fu+.3,fu+2.5)).toFixed(1)+' 780)');

rise($('shd'),p(u,TM.shield,TM.shield+.5));rise($('post'),p(u,TM.ad_poster,TM.ad_poster+.5));rise($('pz'),p(u,TM.ad_poster+1,TM.ad_poster+1.5));
pulse('hrt2',740,420,1+.07*Math.sin(t*4));
const mo=p(u,TM.magnifier+.3,TM.magnifier+2);$('mag').setAttribute('opacity',p(u,TM.magnifier,TM.magnifier+.5).toFixed(2));
$('mag').setAttribute('transform','translate('+(660+160*mo).toFixed(1)+' '+(400+40*Math.sin(t*1.2)).toFixed(1)+')');
rise($('bare'),p(u,TM.magnifier+1,TM.magnifier+1.6));rise($('cur'),p(u,TM.magnifier+4.9,TM.magnifier+5.5));

rise($('tb'),p(u,TM.thought_bubble,TM.thought_bubble+.6));
const q=TM.thought_bubble+4.9;rise($('qa'),p(u,q,q+.5));rise($('qb'),p(u,q+.4,q+.9));rise($('qc'),p(u,q+.8,q+1.3));rise($('qd'),p(u,q+1.3,q+1.8));
$('tbb').setAttribute('fill',u>=q+.8?'var(--gain)':'var(--line)');