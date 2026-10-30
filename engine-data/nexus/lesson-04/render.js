rise($('tbook'),p(u,TM.perfect_book,TM.perfect_book+.6));
$('trays').setAttribute('opacity',(p(u,TM.perfect_book+.6,TM.perfect_book+1.4)*(.6+.4*Math.sin(t*2))).toFixed(2));
rise($('treader'),p(u,TM.perfect_book+4.6,TM.perfect_book+5.1));

HP.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.3,TM.crowd+i*.3+.5)));
TG.forEach((g,i)=>{const a=TM.crowd+2.6+i*.9;rise(g,p(u,a,a+.4))});
rise($('scl'),p(u,TM.scales,TM.scales+.6));rise($('sl1'),p(u,TM.scales+.6,TM.scales+1.1));rise($('sl2'),p(u,TM.scales+5.7,TM.scales+6.2));
const ang=14*Math.sin(t*1.6)*(1-p(u,TM.scales+5.7,TM.scales+7.2)),sn=170*Math.sin(ang*Math.PI/180);
$('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 1170 320)');
$('panL').setAttribute('transform','translate(0 '+(-sn).toFixed(1)+')');$('panR').setAttribute('transform','translate(0 '+sn.toFixed(1)+')');

rise($('scr'),p(u,TM.scroll,TM.scroll+.6));
const ck=p(u,TM.scroll+5.8,TM.scroll+7.2);
$('coin').setAttribute('transform','translate('+(800-180*Math.sin(Math.PI*ck)).toFixed(1)+' 400)');
$('coin').setAttribute('opacity',(p(u,TM.scroll+5.4,TM.scroll+5.8)*(1-p(u,TM.scroll+7,TM.scroll+7.4))).toFixed(2));
rise($('nb'),p(u,TM.scroll+5.8,TM.scroll+6.3));
rise($('cpl'),p(u,TM.copies,TM.copies+.6));
CP.forEach((b,i)=>{const a=TM.copies+.6+i*.5,k=p(u,a,a+1.4);b.setAttribute('transform','translate('+(600+660*k).toFixed(1)+' '+(390+(HY[i]+50-390)*k).toFixed(1)+')');b.setAttribute('opacity',p(u,a-.2,a))});
rise($('shld'),p(u,TM.copies+4.6,TM.copies+5.2));rise($('sh2'),p(u,TM.copies+4.8,TM.copies+5.4));

PG.forEach(([g,x,y,r],i)=>{const j=PK.indexOf(i);let k=0,o=p(u,TM.pile_texts+i*.08,TM.pile_texts+i*.08+.4);
  if(j>=0){const a=TM.pile_texts+4.6+j*.9;k=p(u,a,a+1.4);o*=1-p(u,a+1.3,a+1.7)}else o*=1-.6*p(u,TM.church_elders+5,TM.church_elders+6);
  g.setAttribute('transform','translate('+(x+(1280-x)*k).toFixed(1)+' '+(y+(450-y)*k).toFixed(1)+') rotate('+(r*(1-k)).toFixed(1)+') scale('+(1-.4*k).toFixed(3)+')');g.setAttribute('opacity',o.toFixed(2))});
rise($('arr3'),p(u,TM.pile_texts+4,TM.pile_texts+4.5));rise($('sch'),p(u,TM.pile_texts+4.6,TM.pile_texts+5.1));
rise($('canon'),p(u,TM.pile_texts+4.6,TM.pile_texts+5.1));rise($('cl1'),p(u,TM.pile_texts+5,TM.pile_texts+5.5));
rise($('eld'),p(u,TM.church_elders,TM.church_elders+.5));rise($('cl2'),p(u,TM.church_elders+.6,TM.church_elders+1.1));
rise($('fal'),p(u,TM.church_elders+6.2,TM.church_elders+6.8));
const bad=u>=TM.church_elders+6.2;PPL.forEach(e=>e.setAttribute('class',bad?'loss':'ink'));

rise($('tab'),p(u,TM.question_mark,TM.question_mark+.6));
rise($('bq'),Math.min(p(u,TM.question_mark+2.2,TM.question_mark+2.7),1-p(u,TM.rabbi-.4,TM.rabbi)));
const rb=u>=TM.rabbi+.4;
CD.forEach((c,i)=>{const a=TM.question_mark+4.4+i*.9;rise(c[0],p(u,a,a+.4));c[1].textContent=rb?'!':'?';c[1].style.fill=rb?'var(--gain)':'var(--loss)';c[2].setAttribute('class',rb?'s-gain':'s-line');c[3].setAttribute('stroke',rb?'var(--gain)':'var(--ink)')});
rise($('rab'),p(u,TM.rabbi,TM.rabbi+.5));rise($('int'),p(u,TM.rabbi+.8,TM.rabbi+1.3));

const s5=SC[5][0]/K;rise($('bib'),p(u,s5+.4,s5+.9));rise($('mis'),p(u,TM.mishnah+.3,TM.mishnah+.8));rise($('tal'),p(u,TM.mishnah+3.6,TM.mishnah+4.1));
const sac=u>=TM.talmud_stack;$('talr').style.fill=sac?'var(--gain)':'var(--stage)';$('talt').style.fill=sac?'var(--on-gain)':'var(--ink)';
rise($('rd'),p(u,TM.talmud_stack+.3,TM.talmud_stack+.8));rise($('nxt'),p(u,TM.talmud_stack+6.9,TM.talmud_stack+7.4));

const s6=SC[6][0]/K;rise($('pb'),p(u,s6+.4,s6+.9));
const cw=p(u,TM.crown+5.9,TM.crown+7.4);
$('crw').setAttribute('transform','translate('+(330+720*cw).toFixed(1)+' '+(395-95*cw-80*Math.sin(Math.PI*cw)).toFixed(1)+')');
$('crw').setAttribute('opacity',p(u,TM.crown,TM.crown+.5));
rise($('tp'),p(u,TM.crown+5.5,TM.crown+6));
const il=p(u,TM.crown+7.2,TM.crown+7.8);rise($('ilink'),il);
const dk=(t*.45)%1,dq=QB(dk);$('idot').setAttribute('cx',dq[0].toFixed(1));$('idot').setAttribute('cy',dq[1].toFixed(1));
$('idot').setAttribute('opacity',(il*Math.min(1,dk*6,(1-dk)*6)).toFixed(2));
rise($('hr'),p(u,TM.hierarchy,TM.hierarchy+.6));
$('ivoc').setAttribute('opacity',(p(u,TM.hierarchy+5.8,TM.hierarchy+6.4)*(.5+.5*Math.abs(Math.sin(t*3)))).toFixed(2));
rise($('voc'),p(u,TM.hierarchy+5.8,TM.hierarchy+6.4));

rise($('scrn'),p(u,TM.podium,TM.podium+.5));rise($('spk'),p(u,TM.podium+.3,TM.podium+.8));
$('wv').setAttribute('opacity',(p(u,TM.podium+3.4,TM.podium+3.9)*(.5+.5*Math.abs(Math.sin(t*3)))).toFixed(2));
const mg=p(u,TM.magnifier,TM.magnifier+1.2);
$('mag').setAttribute('transform','translate('+(700-300*mg).toFixed(1)+' '+(720-195*mg).toFixed(1)+')');$('mag').setAttribute('opacity',p(u,TM.magnifier,TM.magnifier+.4));
rise($('k0'),p(u,TM.magnifier,TM.magnifier+.5));$('sk').setAttribute('x2',(830+510*p(u,TM.magnifier+2,TM.magnifier+2.6)).toFixed(1));
rise($('k1'),p(u,TM.magnifier+4.6,TM.magnifier+5.1));rise($('k2'),p(u,TM.magnifier+5.6,TM.magnifier+6.1));

rise($('qa'),p(u,TM.notebook,TM.notebook+.5));rise($('qb'),p(u,TM.notebook+.4,TM.notebook+.9));
rise($('nbk'),p(u,TM.notebook+.8,TM.notebook+1.3));rise($('qc'),p(u,TM.notebook+5.8,TM.notebook+6.3));