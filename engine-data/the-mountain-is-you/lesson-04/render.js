rise($('env0'),p(u,TM.envelope,TM.envelope+.6));
$('bob0').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5)).toFixed(1)+')');
$('ltr0').setAttribute('transform','translate(0 '+(-110*p(u,TM.envelope+1,TM.envelope+2.5)).toFixed(1)+')');

rise($('wv1'),p(u,TM.wave,TM.wave+.5));
const wl=160+720*p(u,TM.wave+.2,TM.wave+2); let wd='M160 '+(470+50*Math.sin(160/45-t*3)).toFixed(1);
for(let x=170;x<=wl;x+=10)wd+='L'+x+' '+(470+50*Math.sin(x/45-t*3)).toFixed(1); WV.setAttribute('d',wd);
rise($('wv1b'),p(u,TM.wave+4,TM.wave+4.5));
rise($('sw1'),p(u,TM.steering_wheel,TM.steering_wheel+.5));
$('whl1').setAttribute('transform','rotate('+(12*Math.sin(t*1.2)).toFixed(1)+' 1200 450)');
rise($('st1'),p(u,TM.steering_wheel+4,TM.steering_wheel+4.6));

rise($('bx2'),p(u,TM.locked_box,TM.locked_box+.5));
const lk=p(u,TM.locked_box+3.8,TM.locked_box+4.4);
LK2.forEach((c,i)=>{const f=(t*.4+i/6)%1;c.setAttribute('cy',(395-140*f).toFixed(1));c.setAttribute('cx',(340+i*40+20*Math.sin(t*2+i)).toFixed(1));c.setAttribute('opacity',(lk*(1-f)).toFixed(2))});
rise($('lkt2'),lk);
rise($('cl2'),p(u,TM.storm_cloud,TM.storm_cloud+.5));
$('mv2').setAttribute('transform','translate('+(1160+70*Math.sin(t*1.7)).toFixed(1)+' 0)');
rise($('bt2'),p(u,TM.storm_cloud+5,TM.storm_cloud+5.6));

rise($('bd3'),p(u,TM.fence,TM.fence+.5));
const ia=p(u,TM.fence+.8,TM.fence+2), ax=880-268*ia, ay=220+143*ia;
$('ar3').setAttribute('d','M880 220L'+ax.toFixed(1)+' '+ay.toFixed(1)); $('ar3h').setAttribute('cx',ax.toFixed(1)); $('ar3h').setAttribute('cy',ay.toFixed(1));
$('bu3').setAttribute('opacity',p(u,TM.fence+1.8,TM.fence+2.1));
$('bu3').setAttribute('transform','translate(633 352) scale('+(1+.12*Math.sin(t*6)).toFixed(3)+')');
rise($('ht3'),p(u,TM.fence+5,TM.fence+5.5));
rise($('hd3'),p(u,TM.open_hand,TM.open_hand+.5));
$('henv3').setAttribute('transform','translate(0 '+(8*Math.sin(t*1.6)).toFixed(1)+')');
rise($('ms3'),p(u,TM.open_hand+1,TM.open_hand+1.5));
const sk=p(u,TM.open_hand+2,TM.open_hand+2.6);
$('sk3').setAttribute('x2',(1222+92*sk).toFixed(1)); $('sk3').setAttribute('y2',(786-76*sk).toFixed(1));

rise($('c4a'),p(u,TM.teardrop,TM.teardrop+.5));
$('dr4').setAttribute('transform','translate(0 '+(5*Math.sin(t*1.4)).toFixed(1)+')');
$('hh4').setAttribute('opacity',p(u,TM.teardrop+2.5,TM.teardrop+3));
rise($('v4a'),p(u,TM.teardrop+2.5,TM.teardrop+3));
rise($('c4b'),p(u,TM.compass,TM.compass+.5));
$('nd4').setAttribute('transform','rotate('+(65*(1-p(u,TM.compass+2.5,TM.compass+4))+4*Math.sin(t*2)).toFixed(1)+' 1000 470)');
rise($('v4b'),p(u,TM.compass+2.5,TM.compass+3));
rise($('dv4'),p(u,TM.compass+5.8,TM.compass+6.4));

rise($('bb5'),p(u,TM.two_voices,TM.two_voices+.5));
rise($('pd5'),p(u,TM.calm_pond,TM.calm_pond+.5));
RP5.forEach((e,i)=>{const f=(t*.25+i/3)%1;e.setAttribute('rx',(20+190*f).toFixed(1));e.setAttribute('ry',(6+57*f).toFixed(1));e.setAttribute('opacity',(1-f).toFixed(2))});
rise($('bl5'),p(u,TM.alarm_bell,TM.alarm_bell+.5));
$('bli5').setAttribute('transform','rotate('+(14*Math.sin(t*14)).toFixed(1)+' 1150 382)');
rise($('ar5'),p(u,TM.alarm_bell+2.5,TM.alarm_bell+3));
rise($('pn5'),p(u,TM.alarm_bell+5.4,TM.alarm_bell+6));

rise($('ph6'),p(u,TM.phone,TM.phone+.5));
$('st6').setAttribute('opacity',p(u,TM.phone+1.5,TM.phone+1.9));
$('st6').setAttribute('transform','translate(400 240) scale('+(1+.12*Math.sin(t*7)).toFixed(3)+')');
rise($('tb6'),p(u,TM.thought_bubble,TM.thought_bubble+.5));
rise($('sp6'),p(u,TM.thought_bubble+3.4,TM.thought_bubble+3.8));
rise($('nb6'),p(u,TM.notebook,TM.notebook+.5));
rise($('as6'),p(u,TM.notebook+5.8,TM.notebook+6.3));

[TM.pause_button,TM.name_tag,TM.signpost].forEach((a,i)=>rise($('k7'+i),p(u,a,a+.5)));
$('pz7').setAttribute('r',(90+4*Math.sin(t*2)).toFixed(1));
$('nm7').textContent=u>=TM.name_tag+2.5?'fear.':'anger.';
$('sg7').setAttribute('fill',u>=TM.signpost+1.5?'var(--gain)':'var(--line)');
rise($('dc7'),p(u,TM.signpost+3,TM.signpost+3.6));

const z=SC[8][0]/K;
rise($('ec8'),p(u,z+.3,z+.8)); rise($('qa'),p(u,z+.3,z+.8)); rise($('qb'),p(u,z+.7,z+1.2));
rise($('qc'),p(u,z+5.5,z+6)); rise($('qd'),p(u,z+5.9,z+6.4));
$('envc8').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5)).toFixed(1)+')');