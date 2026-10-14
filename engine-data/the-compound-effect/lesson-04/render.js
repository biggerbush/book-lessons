rise($('whyc'),p(u,TM.title_card,TM.title_card+.6));
tf('whyp','translate(1300 360) scale('+(1+.04*Math.sin(t*3)).toFixed(3)+') translate(-1300 -360)');
rise($('nowp'),p(u,TM.title_card+5.4,TM.title_card+6));

rise($('man'),p(u,TM.tired_man,TM.tired_man+.5));
const f=TM.fuel_gauge;let k=0;
for(let i=0;i<5;i++){const a=f+.6+i*.9;k+=p(u,a,a+.4)/5;tk[i].setAttribute('opacity',p(u,a,a+.3))}
rise($('gauge'),p(u,f,f+.5));
tf('needle','rotate('+(-180*k).toFixed(1)+' 1100 520)');
$('needle').style.stroke=k>.99?'var(--loss)':'var(--ink)';
tf('manh','translate(0 '+(18*k).toFixed(1)+')');
rise($('empty'),p(u,f+5,f+5.6));

$('pl2').setAttribute('width',(760*p(u,TM.plank,TM.plank+1.2)).toFixed(1));
rise($('cash'),p(u,TM.cash,TM.cash+.5));
tf('cashm','translate(0 '+(8*Math.sin(t*2.4)).toFixed(1)+')');
rise($('no2'),p(u,TM.cash+3.8,TM.cash+4.4));

W3.forEach((w,i)=>{const on=u>=TM.fire+i*.05;w.setAttribute('fill',on?'var(--gain)':'var(--line)');w.setAttribute('fill-opacity',on?(.5+.5*Math.abs(Math.sin(t*5+i))).toFixed(2):1)});
rise($('fire3'),p(u,TM.fire,TM.fire+.4));
FC.forEach((cx,i)=>tf('flm'+i,'translate('+cx+' 330) scale('+(1+.05*Math.sin(t*7+i)).toFixed(3)+' '+(1+.15*Math.sin(t*9+i*2)).toFixed(3)+') translate('+(-cx)+' -330)'));
rise($('kid'),p(u,TM.child,TM.child+.5));
const w=p(u,TM.child+3.3,TM.child+5.3);
tf('walk','translate('+(300+940*w).toFixed(1)+' '+(-Math.abs(Math.sin(w*Math.PI*8))*6).toFixed(1)+')');
rise($('same'),p(u,TM.child+6.7,TM.child+7.2));
rise($('obv'),p(u,TM.child+10.5,TM.child+11.1));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
['v0','v1','v2','v3'].forEach((id,i)=>rise($(id),p(u,TM.notebook+1+i*.6,TM.notebook+1.5+i*.6)));
rise($('card'),p(u,TM.heart_icon,TM.heart_icon+.5));
rise($('hrt'),p(u,TM.heart_icon+1,TM.heart_icon+1.5));
$('lk').setAttribute('opacity',p(u,TM.heart_icon+1.5,TM.heart_icon+2.2));
$('fam').style.fill=u>=TM.heart_icon+2?'var(--gain)':'var(--ink)';
tf('hrtp','translate(800 420) scale('+(1+.08*Math.pow(Math.abs(Math.sin(t*3.5)),6)).toFixed(3)+')');
rise($('easy'),p(u,TM.heart_icon+7.8,TM.heart_icon+8.4));

rise($('tg'),p(u,TM.target,TM.target+.5));
rise($('ar'),p(u,TM.arrow,TM.arrow+.5));
tf('arm','translate('+(720*p(u,TM.arrow+.6,TM.arrow+2.6)).toFixed(1)+' 0)');
rise($('drift'),p(u,TM.arrow+6.2,TM.arrow+7));

[0,1,2].forEach(i=>{rise($('tc'+i),p(u,TM.trigger_list+i*.3,TM.trigger_list+.5+i*.3));rise($('ic'+i),p(u,TM.clock+i*1.6,TM.clock+.5+i*1.6))});
tf('hand','rotate('+(t*90%360).toFixed(1)+' 330 330)');
rise($('cup'),p(u,TM.pantry,TM.pantry+.5));rise($('bin'),p(u,TM.pantry,TM.pantry+.5));rise($('clr'),p(u,TM.pantry+.4,TM.pantry+.9));
JK.forEach(([g,x0,y0,x1,y1],i)=>{const a=TM.pantry+1+i*.5,q=p(u,a,a+1),hop=-120*Math.sin(Math.PI*q),s=1-.3*q;
  g.setAttribute('transform','translate('+(x0+(x1-x0)*q).toFixed(1)+' '+(y0+(y1-y0)*q+hop).toFixed(1)+') scale('+s.toFixed(3)+') translate('+(-x0)+' '+(-y0)+')')});

const sw=TM.swap_arrows,fb=TM.fruit_bowl;
const dx=-300*p(u,sw+.4,sw+1.2)+150*p(u,sw+2.2,sw+3.2)-150*p(u,fb,fb+.6);
tf('chg','translate('+dx.toFixed(1)+' 0)');
$('gapt').setAttribute('opacity',(p(u,sw+1,sw+1.4)*(1-p(u,fb,fb+.4))).toFixed(2));
const bk=p(u,fb+.2,fb+1);rise($('bowl'),bk);tf('bowlm','translate(0 '+(-200*(1-bk)).toFixed(1)+')');
rise($('btr'),p(u,fb+.8,fb+1.3));rise($('swa'),p(u,fb+.3,fb+.8));
rise($('bud'),p(u,TM.buddy,TM.buddy+.5));
CK.forEach((c,i)=>c.setAttribute('opacity',u>=TM.buddy+1.2+i*.6?1:0));

rise($('qa'),p(u,TM.question,TM.question+.5));rise($('qb'),p(u,TM.question+.4,TM.question+.9));rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
rise($('pad'),p(u,TM.question+1,TM.question+1.5));
rise($('whyb'),p(u,TM.question+1.4,TM.question+2));
tf('whybp','translate(1170 680) rotate('+(8*Math.sin(t*1.5)).toFixed(1)+') translate(-1170 -680)');
rise($('dig'),p(u,TM.question+6.6,TM.question+7.2));
rise($('shov'),p(u,TM.question+6.6,TM.question+7.2));
tf('shv','rotate('+(5*Math.sin(t*2.2)).toFixed(2)+' 1310 380)');
CLD.forEach((c,i)=>{const q=(t*.7+i/3)%1;c.setAttribute('cx',(1200+180*q).toFixed(1));c.setAttribute('cy',(495-120*Math.sin(Math.PI*q)).toFixed(1));c.setAttribute('opacity',(q<.1?q/.1:q>.85?(1-q)/.15:1).toFixed(2))});