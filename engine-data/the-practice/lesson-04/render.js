rise($('chairs'),p(u,TM.empty_room,TM.empty_room+.6));
rise($('spot'),p(u,TM.spotlight,TM.spotlight+.6));

CR.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.05,TM.crowd+i*.05+.4)));
$('rays').setAttribute('opacity',p(u,TM.crowd+4.2,TM.crowd+4.8));
const bl=p(u,TM.blurry_work,TM.blurry_work+1.5);
B.forEach((c,i)=>{c.setAttribute('cx',(360+40*bl*Math.cos(i*Math.PI/4)).toFixed(1));c.setAttribute('cy',(440+40*bl*Math.sin(i*Math.PI/4)).toFixed(1));c.setAttribute('opacity',bl)});
$('core').style.fill=bl>.4?'var(--muted)':'var(--gain)';$('core').setAttribute('fill-opacity',(1-.6*bl).toFixed(2));
rise($('bland'),p(u,TM.blurry_work+1,TM.blurry_work+1.6));

rise($('card'),p(u,TM.question_card,TM.question_card+.5));
rise($('qtext'),p(u,TM.question_card+4.2,TM.question_card+4.7));
const skp=p(u,TM.sketch_person,TM.sketch_person+.8), mk0=p(u,TM.question_card,TM.question_card+.6);
$('mkt').setAttribute('opacity',(mk0*(1-.85*skp)).toFixed(2));
rise($('mktL'),mk0*(1-skp));
rise($('sk'),p(u,TM.sketch_person,TM.sketch_person+.6));rise($('skL'),p(u,TM.sketch_person+.6,TM.sketch_person+1.1));
rise($('care0'),p(u,TM.sketch_person+5.3,TM.sketch_person+5.8));rise($('care1'),p(u,TM.sketch_person+5.9,TM.sketch_person+6.4));

rise($('evd'),p(u,TM.tiny_circle,TM.tiny_circle+.6));rise($('tiny'),p(u,TM.tiny_circle+.8,TM.tiny_circle+1.4));
const fw=p(u,TM.few_fans+.4,TM.few_fans+1.6);
rise($('fewA'),p(u,TM.few_fans,TM.few_fans+.5));rise($('manyB'),p(u,TM.few_fans+.3,TM.few_fans+.8));
FA.forEach(r=>{const h=166*fw;r.setAttribute('y',(476-h).toFixed(1));r.setAttribute('height',h.toFixed(1))});
MB.forEach(r=>{const h=22*fw;r.setAttribute('y',(664-h).toFixed(1));r.setAttribute('height',h.toFixed(1))});
SP.forEach((c,i)=>{const on=u>=TM.few_fans+4.6+i*.2;c.setAttribute('fill',on?'var(--gain)':'var(--muted)');c.setAttribute('fill-opacity',on?1:.6)});
$('spr').setAttribute('opacity',p(u,TM.tiny_circle,TM.tiny_circle+.6));

rise($('bef'),p(u,TM.arrow_change,TM.arrow_change+.5));
const ar=p(u,TM.arrow_change+4.2,TM.arrow_change+5.6);
$('arr').setAttribute('stroke-dashoffset',(730*(1-ar)).toFixed(1));$('arr').setAttribute('opacity',ar>0?1:0);
$('arrH').setAttribute('opacity',p(u,TM.arrow_change+5.4,TM.arrow_change+5.7));
rise($('chg'),p(u,TM.arrow_change+4.4,TM.arrow_change+4.9));rise($('aft'),p(u,TM.arrow_change+5.5,TM.arrow_change+6));
[0,1,2].forEach(i=>rise($('c'+i),p(u,TM.before_after+i*1.2,TM.before_after+i*1.2+.5)));
rise($('aim'),p(u,TM.before_after+5.4,TM.before_after+6));

rise($('sw'),p(u,TM.songwriter,TM.songwriter+.5));rise($('par'),p(u,TM.songwriter+1,TM.songwriter+1.5));
const nv=p(u,TM.songwriter+1.5,TM.songwriter+2.2);
NT.forEach((g,i)=>{const f=(t*.15+i/4)%1;g.setAttribute('transform','translate('+(380+760*f).toFixed(1)+' '+(330-40*Math.sin(f*Math.PI*2)).toFixed(1)+')');g.setAttribute('opacity',(nv*Math.min(1,f*8,(1-f)*8)).toFixed(2))});
SL.forEach((s,i)=>{rise(s[0],p(u,TM.lullaby,TM.lullaby+.5));const k=p(u,TM.lullaby+.6+i,TM.lullaby+1.4+i),v=cl(s[3]+(1-k)*(.4+.25*Math.sin(t*2.2+i*2)),0,1);
 s[1].setAttribute('cx',(320+660*v).toFixed(1));rise(s[2],k)});
rise($('zz'),p(u,TM.lullaby+4.6,TM.lullaby+5.2));

const nev=p(u,TM.sign_not_you+9.5,TM.sign_not_you+10);
$('aud').setAttribute('stroke',nev>.5?'var(--gain)':'var(--line)');$('aud').setAttribute('stroke-dasharray',nev>.5?'14 10':'none');
rise($('crit'),p(u,TM.critic,TM.critic+.5));rise($('bub'),p(u,TM.critic+.6,TM.critic+1.1));
rise($('sign'),p(u,TM.sign_not_you,TM.sign_not_you+.6));
rise($('verd'),p(u,TM.sign_not_you+4.6,TM.sign_not_you+5.1));strike('vs',1072,388,p(u,TM.sign_not_you+5.4,TM.sign_not_you+6));
rise($('never'),nev);

rise($('road'),p(u,TM.split_path,TM.split_path+.5));
const ba=p(u,TM.split_path+.4,TM.split_path+1.4),bb=p(u,TM.split_path+.8,TM.split_path+1.8);
$('brA').setAttribute('stroke-dasharray',(326*ba).toFixed(1)+' 2000');$('brA').setAttribute('opacity',ba>0?1:0);$('brB').setAttribute('opacity',(bb*.6).toFixed(2));
rise($('la'),p(u,TM.split_path+1.2,TM.split_path+1.7));rise($('lb'),p(u,TM.split_path+1.6,TM.split_path+2.1));
rise($('comp'),p(u,TM.compass,TM.compass+.5));
const cs=p(u,TM.compass+.5,TM.compass+2.5);$('ndl').setAttribute('transform','rotate('+((1-cs)*70*Math.sin(t*3)).toFixed(1)+' 1140 460)');
rise($('qold'),p(u,TM.compass+6.2,TM.compass+6.7));strike('qs',112,280,p(u,TM.compass+6.9,TM.compass+7.4));rise($('qnew'),p(u,TM.compass+7.4,TM.compass+8));

rise($('qa'),p(u,TM.notebook,TM.notebook+.5));rise($('qb'),p(u,TM.notebook+.4,TM.notebook+.9));rise($('qc'),p(u,TM.notebook+.8,TM.notebook+1.3));
rise($('nb'),p(u,TM.notebook+.3,TM.notebook+.9));
NL.forEach((l,i)=>{const k=p(u,TM.notebook+1.2+i*.8,TM.notebook+1.9+i*.8);l.setAttribute('stroke-dasharray',(230*k).toFixed(1)+' 2000');l.setAttribute('opacity',k>0?1:0)});
rise($('only'),p(u,TM.notebook+7.3,TM.notebook+7.9));