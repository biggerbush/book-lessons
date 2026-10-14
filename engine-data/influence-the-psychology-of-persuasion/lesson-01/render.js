const c0=(t%2.4)/2.4,dn=c0<.12?c0/.12:c0<.25?1-(c0-.12)/.13:0;
$('cap0').setAttribute('transform',`translate(0 ${(18*dn).toFixed(1)})`);$('clk0').setAttribute('opacity',dn.toFixed(2));
rise($('bub0'),p(u,TM.your_yes+.6,TM.your_yes+1.1));

rise($('tk1'),p(u,TM.turkey,TM.turkey+.5));rise($('chA'),p(u,TM.chick,TM.chick+.5));pulse(wA,u>=TM.chick,t);
rise($('momA'),p(u,TM.chick+6.6,TM.chick+7.1));rise($('chB'),p(u,TM.chick+9.1,TM.chick+9.6));

const TA=TM.tape_player,TG=TA+6.5,TS=TA+10.3,fight=(u>=TM.polecat+1.5&&u<TA)||u>=TS;
rise($('tk2w'),p(u,TM.polecat,TM.polecat+.5));rise($('pc'),p(u,TM.polecat+.6,TM.polecat+1.1));
$('tk2').setAttribute('transform',`translate(${(180*p(u,TG-.8,TG)+(fight?8*Math.sin(t*30):0)).toFixed(1)} 0)`);
$('atk').setAttribute('opacity',fight?1:0);rise($('rec'),p(u,TA,TA+.5));pulse(wR,u>=TA&&u<TS,t);
$('wing').setAttribute('opacity',(p(u,TG,TG+.5)*(1-p(u,TS,TS+.3))).toFixed(2));
const ph=u>=TS?3:u>=TG?2:u>=TA?1:0,pc=$('pcCap');
pc.textContent=['Attacked on sight.','A cheep hidden inside.','Gathered under her wing.','Sound stops: attacked.'][ph];
pc.style.fill=['var(--loss)','var(--ink)','var(--gain)','var(--loss)'][ph];rise(pc,p(u,TM.polecat+1.5,TM.polecat+2));

const CB=TM.click_button,CW=CB+2.2,HH=TM.human_head;
rise($('btn3'),p(u,CB,CB+.5));rise($('cas'),p(u,CB+.4,CB+.9));
$('cap3').setAttribute('transform',`translate(0 ${(18*(p(u,CW,CW+.2)-p(u,CW+.5,CW+.8))).toFixed(1)})`);
const ra=u>CW?(u-CW)*300:0,rb=u>HH?(u-HH)*300:0;
RL.forEach((q,i)=>q[0].setAttribute('transform',`translate(${q[1]} ${q[2]}) rotate(${((i<2?ra:rb)%360).toFixed(1)})`));
FR.forEach((g,i)=>rise(g,p(u,CW+.6+i*.5,CW+1+i*.5)));rise($('hum'),p(u,HH,HH+.5));

rise($('cop'),p(u,TM.copier,TM.copier+.5));
[TM.speech_plain,TM.speech_real,TM.speech_empty].forEach((a,i)=>{const r=RW[i],k=i<2?p(u,a+.5,a+2):p(u,a+4.6,a+5.8),v=[60,94,93][i];
  rise(r[0],p(u,a,a+.5));r[1].setAttribute('width',(7.6*v*k).toFixed(1));r[2].setAttribute('x',(540+7.6*v*k).toFixed(1));r[2].textContent='≈'+Math.round(v*k)+'%'});
rise($('bec'),p(u,TM.speech_empty+7.1,TM.speech_empty+7.6));

const PT=TM.price_tag,mis=u>=PT;
rise($('case'),p(u,TM.shop,TM.shop+.5));rise($('note'),p(u,TM.note,TM.note+.5));rise($('tag'),p(u,PT,PT+.5));
$('noteTx').textContent=mis?'×2':'×½';$('noteTx').style.fill=mis?'var(--loss)':'var(--ink)';
$('noteLb').textContent=mis?'MISREAD: DOUBLE':'CUT PRICE IN HALF';$('noteLb').style.fill=mis?'var(--loss)':'var(--muted)';
const dbl=u>=PT+.8;$('tagTx').textContent=dbl?'$$':'$';$('tagLb').textContent=dbl?'PRICE DOUBLED':'PRICE TAG';
const soldOn=u>=PT+4.6;
ST.forEach((s,i)=>s.setAttribute('opacity',(1-.45*p(u,PT+3.8+i*.15,PT+4.1+i*.15)).toFixed(2)));
$('caseLb').textContent=soldOn?'TURQUOISE: SOLD OUT':'UNSOLD TURQUOISE';$('caseLb').style.fill=soldOn?'var(--gain)':'var(--muted)';
rise($('sold'),p(u,PT+4.6,PT+5));rise($('rule'),p(u,PT+5.6,PT+6.1));

rise($('clk'),p(u,TM.clock,TM.clock+.5));
$('hM').setAttribute('transform',`rotate(${(t*240%360).toFixed(1)} 300 470)`);$('hH').setAttribute('transform',`rotate(${(t*20%360).toFixed(1)} 300 470)`);
const BL=TM.brain_load;CD.forEach((g,i)=>rise(g,p(u,BL+i*.12,BL+i*.12+.3)));rise($('cardL'),p(u,BL+1.4,BL+1.9));
rise($('routes'),p(u,BL+2,BL+2.5));
const zp=ZG.getPointAtLength(ZL*((t*.12)%1));$('dz').setAttribute('cx',zp.x.toFixed(1));$('dz').setAttribute('cy',zp.y.toFixed(1));
$('dg').setAttribute('cx',(960+460*((t*.5)%1)).toFixed(1));
rise($('save'),p(u,BL+5.8,BL+6.3));

const PS=TM.puppet_string,PZ=TM.pause_sign,amp=p(u,PS,PS+.5)*(1-p(u,PZ,PZ+.6));
rise($('sp'),p(u,TM.salesperson,TM.salesperson+.5));rise($('pupw'),p(u,TM.salesperson+.6,TM.salesperson+1.1));
$('pup').setAttribute('transform',`rotate(${(7*amp*Math.sin(t*2.2)).toFixed(2)} 620 290)`);
rise($('fake'),p(u,PS,PS+.5));pulse(wF,u>=PS,t);rise($('yesP'),p(u,PS+1,PS+1.5));
$('strs').setAttribute('opacity',(1-.75*p(u,PZ,PZ+.6)).toFixed(2));rise($('pz'),p(u,PZ,PZ+.5));

const MR=TM.mirror;rise($('mir'),p(u,MR,MR+.5));rise($('qa'),p(u,MR+.3,MR+.8));rise($('ml'),p(u,MR+1,MR+1.5));
rise($('qb'),p(u,MR+4.2,MR+4.7));rise($('qc'),p(u,MR+4.8,MR+5.3));