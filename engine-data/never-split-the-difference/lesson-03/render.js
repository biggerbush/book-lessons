const nm=p(u,TM.hook_door+7,TM.hook_door+7.8);
rise($('tag0'),p(u,TM.hook_door+1.5,TM.hook_door+2.1));
$('tagR').setAttribute('transform','rotate('+(5*Math.sin(t*2)).toFixed(2)+' 1330 300)');
$('agit').setAttribute('opacity',(1-nm).toFixed(2));
$('agit').setAttribute('transform','translate('+(3*Math.sin(t*20)*(1-nm)).toFixed(1)+' 0)');
setCls('who0',nm>.5?'gain':'loss'); $('sm0').setAttribute('opacity',nm);

rise($('tag1'),p(u,TM.label_tag,TM.label_tag+.5));
rise($('spot'),p(u,TM.label_tag+2.6,TM.label_tag+3.2));
$('spotL').setAttribute('stroke-dashoffset',(-(t*30)%20).toFixed(1));
rise($('bb1'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
rise($('bb2'),p(u,TM.speech_bubble+2.1,TM.speech_bubble+2.6));
setCls('th1',u>=TM.speech_bubble+1?'ink':'loss');

[0,1,2].forEach(i=>{const a=TM.three_phrases+i*1.3;rise($('ph'+i),p(u,a,a+.5))});
rise($('noI'),p(u,TM.no_i_sign,TM.no_i_sign+.5));
rise($('clk'),p(u,TM.pause_clock,TM.pause_clock+.5));
$('hand').setAttribute('transform','rotate('+(360*p(u,TM.pause_clock+.5,TM.pause_clock+5)).toFixed(1)+' 300 700)');

rise($('apt'),p(u,TM.apartment,TM.apartment+.5));
rise($('phone'),p(u,TM.phone_line,TM.phone_line+.5));
let wv='M280 560';for(let x=290;x<=1020;x+=10)wv+='L'+x+' '+(560+12*Math.sin((x-t*120)/30)).toFixed(1);$('wave').setAttribute('d',wv);
rise($('q1'),p(u,TM.open_door-7.2,TM.open_door-6.7));
rise($('q2'),p(u,TM.open_door-3.4,TM.open_door-2.9));
const op=p(u,TM.open_door,TM.open_door+1.2);$('door').setAttribute('width',(200-176*op).toFixed(1));
EM.forEach((g,i)=>{const a=TM.open_door+1+i*.5,k=p(u,a,a+1.5);g.setAttribute('transform','translate('+(1150+(160+i*60)*k).toFixed(1)+' 0)');g.setAttribute('opacity',u>=a?1:0)});
rise($('nosh'),p(u,TM.open_door+3,TM.open_door+3.5));

rise($('pn0'),p(u,TM.brain,TM.brain+.5));
const fw=1-.6*p(u,TM.brain+2,TM.brain+4);$('fearW').setAttribute('transform','translate(330 452) scale('+fw.toFixed(3)+') translate(-330 -452)');
const wb=TM.water_bucket;rise($('pn1'),p(u,wb,wb+.5));
const tl=115*p(u,wb+.5,wb+1.3);$('bkt').setAttribute('transform','translate(690 420) rotate('+tl.toFixed(1)+')');
const pour=tl>100&&u<wb+4.4;
DR.forEach((c,i)=>{const ph=(t*1.3+i/6)%1;c.setAttribute('cx',(735+ph*95).toFixed(1));c.setAttribute('cy',(441+ph*70+ph*ph*40).toFixed(1));c.setAttribute('opacity',pour?1:0)});
const fs=(1-.75*p(u,wb+1.4,wb+4))*(1+.06*Math.sin(t*12));$('fire').setAttribute('transform','translate(830 600) scale('+fs.toFixed(3)+')');
let sk='M830 585';for(let y=575;y>=465;y-=10)sk+='L'+(830+10*Math.sin(y/18+t*3)).toFixed(1)+' '+y;$('smoke').setAttribute('d',sk);
$('smoke').setAttribute('opacity',(.8*p(u,wb+3,wb+4)).toFixed(2));
const wg=TM.warm_glow;rise($('pn2'),p(u,wg,wg+.5));
const gl=1+.7*p(u,wg+.5,wg+3),gk=p(u,wg+.5,wg+1.2);$('core').setAttribute('transform','translate(1270 470) scale('+gl.toFixed(3)+')');
RG.forEach((c,i)=>{const ph=(t*.5+i/3)%1;c.setAttribute('r',(50*gl+ph*60).toFixed(1));c.setAttribute('opacity',((1-ph)*gk).toFixed(2))});

rise($('pap'),p(u,TM.list_paper,TM.list_paper+.5));
IT.forEach((e,i)=>{const a=TM.list_paper+4.6+i*.6;rise(e,p(u,a,a+.4))});
const mo=TM.mouth_open;rise($('rt5'),p(u,mo-.6,mo));
$('mouth').setAttribute('ry',(u>=mo&&u<mo+4.4?4+6*Math.abs(Math.sin(t*8)):0).toFixed(1));
rise($('sb5'),p(u,mo+.2,mo+.7));
FL.forEach((e,i)=>{const a=mo+.6+i*.6,k=p(u,a,a+.5);e.setAttribute('width',(FLW[i]*k).toFixed(1));e.setAttribute('opacity',u>=a?1:0)});
$('ar5').setAttribute('opacity',p(u,mo+.9,mo+1.4));
rise($('capt5'),p(u,mo+1,mo+1.6));

rise($('room6'),p(u,TM.boss_desk,TM.boss_desk+.5));
const c1k=p(u,TM.boss_desk+4.2,TM.boss_desk+4.7);rise($('c1'),c1k);
rise($('c2'),p(u,TM.shrug,TM.shrug+.5));
$('shr').setAttribute('opacity',p(u,TM.shrug,TM.shrug+.4));
const ns=p(u,TM.nod_smile,TM.nod_smile+.8),dn=u-TM.nod_smile;
setCls('bossP',ns>.5?'gain':'loss');
$('sm6').setAttribute('d','M1150 488q20 '+(-14+28*ns).toFixed(1)+' 40 0');
$('bossG').setAttribute('transform','translate(0 '+(dn>0&&dn<2.5?8*Math.sin(dn*8):0).toFixed(1)+')');
$('st6').setAttribute('opacity',(c1k*(1-ns)*(.6+.4*Math.sin(t*6))).toFixed(2));
rise($('capt6'),p(u,TM.nod_smile+1,TM.nod_smile+1.6));

const mv=TM.mirror_you;
rise($('qa'),p(u,mv,mv+.5));rise($('qb'),p(u,mv+.4,mv+.9));
rise($('duo7'),p(u,mv+.3,mv+.8));
rise($('tag7'),p(u,mv+.9,mv+1.4));
rise($('sp7'),p(u,mv+1.3,mv+1.8)*(1-p(u,mv+6.1,mv+6.5)));
rise($('qc'),p(u,mv+6.1,mv+6.6));
const dk=p(u,mv+6.3,mv+6.8);rise($('dotb'),dk);
DT.forEach((c,i)=>c.setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*2-i*.6))).toFixed(2)));