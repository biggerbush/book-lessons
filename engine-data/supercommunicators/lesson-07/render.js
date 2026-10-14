rise($('tf'),p(u,TM.two_faces,TM.two_faces+.6));
const ph=(t*.6)%2,te=ease(ph<1?ph:2-ph);
$('tdot').setAttribute('cx',(1150+180*te).toFixed(1));$('tdot').setAttribute('cy',(330-60*Math.sin(Math.PI*te)).toFixed(1));
op($('tb0'),ph<1?1:.3);op($('tb1'),ph<1?.3:1);

rise($('sb'),p(u,TM.scoreboard,TM.scoreboard+.5));
const sx=p(u,TM.open_door-.6,TM.open_door);
$('sbx').setAttribute('x2',130+540*sx);$('sbx').setAttribute('y2',260+280*sx);op($('sbx'),sx>0?1:0);
rise($('arw'),p(u,TM.open_door,TM.open_door+.5));rise($('dr'),p(u,TM.open_door,TM.open_door+.5));
rise($('dbl'),p(u,TM.open_door+.6,TM.open_door+1.1));rise($('dbr'),p(u,TM.open_door+1.2,TM.open_door+1.7));
rise($('d2a'),p(u,TM.open_door+1.8,TM.open_door+2.3));
const ck=p(u,TM.open_door+2.4,TM.open_door+3);
op($('dck'),ck);$('dck').setAttribute('transform','translate(1240 370) scale('+(.6+.4*ck+.04*Math.sin(t*3)*ck).toFixed(3)+') translate(-1240 -370)');
rise($('gl'),p(u,TM.open_door+4.6,TM.open_door+5.2));

rise($('law'),p(u,TM.cia_officer,TM.cia_officer+.5));rise($('str'),p(u,TM.stranger,TM.stranger+.5));
const kk=p(u,TM.key+.3,TM.key+1.8),ul=p(u,TM.key+1.8,TM.key+2.3);
$('ky').setAttribute('transform','translate('+(470+384*kk).toFixed(1)+' 468)');op($('ky'),p(u,TM.key,TM.key+.4));
op($('att'),p(u,TM.key,TM.key+.6));
$('shk').setAttribute('transform','translate(0 '+(-18*ul).toFixed(1)+')');
const op2=ul>0;$('shk').setAttribute('class',op2?'s-gain':'s-loss');$('lkb').setAttribute('class',op2?'gain':'loss');SF.forEach(e=>e.setAttribute('class',op2?'gain':'loss'));
rise($('nk'),p(u,TM.key+2.5,TM.key+3.1));

rise($('rad'),p(u,TM.radar,TM.radar+.5));
$('swp').setAttribute('x2',(360+180*Math.cos(t*2)).toFixed(1));$('swp').setAttribute('y2',(500+180*Math.sin(t*2)).toFixed(1));
BB.forEach((b,i)=>{const a=TM.three_bubbles+i*1.8;rise(b.g,p(u,a,a+.5));b.r.setAttribute('stroke',u>TM.three_bubbles+5.5&&Math.floor(t/1.2)%3===i?'var(--gain)':'var(--ink)')});
rise($('pz'),p(u,TM.three_bubbles+6.5,TM.three_bubbles+7));

rise($('gp'),p(u,TM.target,TM.target+.5));
rise($('ctg'),p(u,TM.target+.3,TM.target+.8));
const mg=p(u,TM.handshake,TM.handshake+1.4);
GB.forEach((b,i)=>{const bx=b.x+(800-b.x)*mg,by=300+130*mg,bob=4*Math.sin(t*2+i*1.5)*(1-mg);
  b.g.setAttribute('transform','translate('+bx.toFixed(1)+' '+(by+bob).toFixed(1)+') scale('+(1-.6*mg).toFixed(3)+')');
  op(b.g,p(u,TM.target+.8+i*.8,TM.target+1.3+i*.8)*(1-p(u,TM.handshake+1,TM.handshake+1.4)))});
GAR.forEach((g,i)=>op(g,p(u,TM.handshake+i*.2,TM.handshake+.6+i*.2)));
CTC.setAttribute('class',u>=TM.handshake+1.2?'gain':'loss');
CTC.setAttribute('r',(32+(u>=TM.handshake+1.2?4*Math.abs(Math.sin(t*3)):0)).toFixed(1));
rise($('sh'),p(u,TM.handshake+1.2,TM.handshake+1.7));rise($('wt'),p(u,TM.handshake+1.8,TM.handshake+2.3));

rise($('fp'),p(u,TM.heart,TM.heart+.5));op($('bh'),p(u,TM.heart,TM.heart+.5));
$('bh').setAttribute('transform','translate(800 470) scale('+(1+.06*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(3)+')');
$('bh').setAttribute('fill-opacity',(.15+.85*p(u,TM.mirror+1.6,TM.mirror+2.4)).toFixed(2));
rise($('qb5'),p(u,TM.question_mark,TM.question_mark+.5));
CH[0].setAttribute('fill',u>=TM.mirror?'var(--gain)':'var(--line)');CH[1].setAttribute('fill',u>=TM.mirror+1.6?'var(--gain)':'var(--line)');
const fq=p(u,TM.mirror+.2,TM.mirror+1.6),fi=1-fq;
$('fd').setAttribute('cx',(fi*fi*300+2*fq*fi*800+fq*fq*1300).toFixed(1));$('fd').setAttribute('cy',(fi*fi*560+2*fq*fi*260+fq*fq*560).toFixed(1));op($('fd'),fq>0&&fq<1?1:0);
rise($('sf'),p(u,TM.mirror+2.4,TM.mirror+2.9));

rise($('ip'),p(u,TM.id_badges,TM.id_badges+.5));
rise($('wl'),p(u,TM.id_badges+.5,TM.id_badges+1)*(1-p(u,TM.bridge,TM.bridge+.8)));
BD.forEach((b,i)=>{const a=TM.id_badges+2.8+(i%4)*.5,sh=(i%4)%2===1&&u>=TM.bridge;rise(b.g,p(u,a,a+.4));b.r.setAttribute('stroke',sh?'var(--gain)':'var(--ink)');b.r.setAttribute('fill',sh?'var(--gain)':'var(--stage)');b.e.style.fill=sh?'var(--on-gain)':''});
ARC.forEach(a=>op(a,p(u,TM.bridge+.4,TM.bridge+.9)));
draw($('brd'),p(u,TM.bridge+.8,TM.bridge+2.2));
rise($('hm'),p(u,TM.bridge+6.2,TM.bridge+6.8));

DL.forEach((d,i)=>{rise(d.g,p(u,TM.four_steps+i*.4,TM.four_steps+i*.4+.4));
  d.n.textContent=u>=TM.four_steps+2.2?['3','1','4','2'][i]:String(i+1);op(d.n,1-p(u,TM.dial,TM.dial+.5));
  const k=p(u,TM.dial,TM.dial+.5),a=-Math.PI/2+Math.sin(t*.9+i*1.7)*1.6;op(d.nd,k);op(d.hb,k);
  d.nd.setAttribute('x2',(d.x+70*Math.cos(a)).toFixed(1));d.nd.setAttribute('y2',(440+70*Math.sin(a)).toFixed(1))});
rise($('blb'),p(u,TM.lightbulb,TM.lightbulb+.5));
$('bulbc').setAttribute('fill',u>=TM.lightbulb+.6?'var(--gain)':'var(--stage)');op($('rays'),p(u,TM.lightbulb+.6,TM.lightbulb+1.1));
rise($('cur'),p(u,TM.lightbulb+.6,TM.lightbulb+1.2));rise($('prc'),p(u,TM.lightbulb+6.2,TM.lightbulb+6.8));

rise($('qa'),p(u,TM.calendar,TM.calendar+.5));rise($('qb'),p(u,TM.calendar+.4,TM.calendar+.9));rise($('qc'),p(u,TM.calendar+.8,TM.calendar+1.3));
rise($('cal'),p(u,TM.calendar+1.2,TM.calendar+1.7));draw($('calc'),p(u,TM.calendar+1.9,TM.calendar+2.7));