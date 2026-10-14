const wk=p(u,TM.bookshelf+5.8,TM.bookshelf+6.6);
SP0.forEach((s,i)=>{const a=TM.bookshelf+i*.05;s.setAttribute('opacity',(p(u,a,a+.3)*(1-.6*wk)).toFixed(2))});
rise($('weak0'),p(u,TM.bookshelf+5.8,TM.bookshelf+6.3));

GB1.forEach((b,i)=>{const a=TM.stack_books+i*.12;rise(b,p(u,a,a+.4))});
SB1.forEach((b,i)=>{const a=TM.stack_books+1.4+i*.15;rise(b,p(u,a,a+.4))});
rise($('broad1'),p(u,TM.stack_books+3.8,TM.stack_books+4.3));
rise($('bat1'),p(u,TM.battery,TM.battery+.5));
CL1.forEach((c,i)=>c.setAttribute('opacity',(.55+.45*Math.abs(Math.sin(t*1.5-i*.4))).toFixed(2)));
rise($('shelf1'),p(u,TM.battery+3.4,TM.battery+3.9));

rise($('ford2'),p(u,TM.henry_ford,TM.henry_ford+.5));
rise($('paper2'),p(u,TM.newspaper,TM.newspaper+.5));
rise($('sue2'),p(u,TM.newspaper+2.5,TM.newspaper+3));
rise($('law2'),p(u,TM.lawyer,TM.lawyer+.5));
rise($('quiz2'),p(u,TM.lawyer+6.2,TM.lawyer+6.7));

rise($('desk3'),p(u,TM.desk_buttons,TM.desk_buttons+.5));
B3.forEach(([b,d],i)=>{const a=i===2?TM.experts:TM.experts+5.4+i*.15;rise(b,p(u,TM.desk_buttons+.4+i*.2,TM.desk_buttons+.8+i*.2));
  d.setAttribute('class',u>=a?'gain':'ink');rise(E3[i],p(u,a+.3,a+.8));W3[i].setAttribute('opacity',p(u,a,a+.4));W3[i].setAttribute('stroke',u>=a?'var(--gain)':'var(--line)')});
rise($('why3'),p(u,TM.experts+5.4,TM.experts+6));

rise($('dip4'),p(u,TM.diploma,TM.diploma+.5));
rise($('stamp4'),p(u,TM.diploma+1,TM.diploma+1.4));
rise($('mind4'),p(u,TM.mind_gears,TM.mind_gears+.5));
const gr=t*50;$('gearA').setAttribute('transform','translate(860 420) rotate('+gr.toFixed(1)+')');$('gearB').setAttribute('transform','translate(960 490) rotate('+(-gr*1.4).toFixed(1)+')');
rise($('dev4'),p(u,TM.mind_gears+1,TM.mind_gears+1.6));
rise($('find4'),p(u,TM.mind_gears+6.2,TM.mind_gears+6.7));
rise($('use4'),p(u,TM.mind_gears+7,TM.mind_gears+7.5));

const lb=p(u,TM.lightbulb,TM.lightbulb+.6);
$('bulbc5').style.fill=lb>.5?'var(--gain)':'var(--stage)';
$('rays5').setAttribute('opacity',(lb*(.7+.3*Math.sin(t*4))).toFixed(2));
rise($('bp5'),p(u,TM.blueprint,TM.blueprint+.5));
BR.forEach(([g,e,sx,sy,sr,tx,ty],i)=>{const a=TM.blueprint+.8+i*.15,k=p(u,a,a+.8);
  g.setAttribute('transform','translate('+(sx+(tx-sx)*k).toFixed(1)+' '+(sy+(ty-sy)*k).toFixed(1)+') rotate('+(sr*(1-k)).toFixed(1)+')');e.setAttribute('class',k>.5?'gain':'ink')});
$('roof5').setAttribute('opacity',p(u,TM.blueprint+3.6,TM.blueprint+4.2));
$('ghost5').setAttribute('opacity',p(u,TM.blueprint+.8,TM.blueprint+1.6));
$('ghost5').setAttribute('stroke',u>=TM.blueprint+7?'var(--loss)':'var(--muted)');
rise($('nob5'),p(u,TM.blueprint+7,TM.blueprint+7.6));

rise($('puz6'),p(u,TM.puzzle,TM.puzzle+.6));
CD6.forEach((g,i)=>{const a=TM.phone_book+i*.5;rise(g,p(u,a,a+.4))});
P6.forEach(([e,dx,dy],i)=>{const a=TM.phone_book+1.8+i*.6,k=p(u,a,a+1);e.setAttribute('opacity',cl(k*4));e.setAttribute('transform','translate('+(dx*(1-k)).toFixed(1)+' '+(dy*(1-k)).toFixed(1)+')')});
rise($('you6'),p(u,TM.phone_book+5.8,TM.phone_book+6.3));
rise($('org6'),p(u,TM.phone_book+6.4,TM.phone_book+7));

rise($('tgt7'),p(u,TM.target,TM.target+.5));
const ak=p(u,TM.target+.6,TM.target+1.2);
$('arr7').setAttribute('transform','translate('+(330+300*(1-ak)).toFixed(1)+' '+(470-120*(1-ak)).toFixed(1)+')');$('arr7').setAttribute('opacity',cl(ak*5));
rise($('nb7'),p(u,TM.notebook,TM.notebook+.5));
NB.forEach(([g,b,s],i)=>{const a=TM.notebook+1.5+i*.4,k=p(u,a,a+.4);if(s){s.setAttribute('opacity',k);g.setAttribute('opacity',(1-.5*k).toFixed(2))}else b.setAttribute('fill',k>.5?'var(--gain)':'var(--line)')});
rise($('plan7'),p(u,TM.notebook+1,TM.notebook+1.5));
const f=.4*p(u,TM.notebook+2.5,TM.notebook+4.5)+.6*p(u,TM.checkmark,TM.checkmark+1.2),h=348*f;
$('pf7').setAttribute('y',(644-h).toFixed(1));$('pf7').setAttribute('height',h.toFixed(1));
rise($('pow7'),p(u,TM.checkmark+.4,TM.checkmark+1));
rise($('chk7'),p(u,TM.checkmark+1.2,TM.checkmark+1.7));

rise($('qa8'),p(u,TM.question,TM.question+.5));rise($('qb8'),p(u,TM.question+.4,TM.question+.9));rise($('qc8'),p(u,TM.question+.8,TM.question+1.3));
rise($('btns8'),p(u,TM.question+1.2,TM.question+1.7));
QB8.forEach(([c,tx],i)=>{const on=u>=TM.question+1.8+i*.5;c.setAttribute('fill',on?'var(--gain)':'var(--stage)');tx.style.fill=on?'var(--on-gain)':'var(--ink)'});
rise($('wr8'),p(u,TM.question+5,TM.question+5.5));