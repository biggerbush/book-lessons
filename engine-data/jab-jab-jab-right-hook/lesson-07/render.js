const S=i=>SC[i][0]/K,R=(id,a,d=.5)=>rise($(id),p(u,a,a+d)),dr=(id,k)=>$(id).setAttribute('stroke-dashoffset',(1-k).toFixed(3));
  tR.setAttribute('transform','translate('+(1300+18*Math.sin(t*.6)).toFixed(1)+' '+(380+10*Math.sin(t*.9)).toFixed(1)+') rotate('+(3*Math.sin(t*.5)).toFixed(2)+')');
  tG.setAttribute('cx',(40+30*Math.max(0,Math.sin(t*3))).toFixed(1));

  R('sm',TM.moving_ring+4.2);
  const kR=p(u,TM.moving_ring,TM.crowd+4.5),rx=k=>300+940*k,cx1=rx(kR);
  rise($('mRing'),p(u,TM.moving_ring-.4,TM.moving_ring+.2)); mR.setAttribute('transform','translate('+cx1.toFixed(1)+' 580)'); dr('trail',kR);
  TL.forEach((g,i)=>{const a=TM.fading_logo+i;rise(g,p(u,a,a+.5)*(i==2?1-.7*p(u,a+1.2,a+2.4):1))});
  CR.forEach((c,i)=>{const a=(10+40*i)*Math.PI/180;c.setAttribute('cx',(cx1+CRR*Math.cos(a)).toFixed(1));c.setAttribute('cy',(580+CRR*Math.sin(a)+3*Math.sin(t*2+i)).toFixed(1))});
  R('crowd1',TM.crowd); R('flw',TM.crowd+.8);

  R('ph0',TM.vine_phone); $('loop').setAttribute('transform','rotate('+((t*140)%360).toFixed(1)+' 430 440)');
  R('ph1',TM.snap_ghost); const cy3=(t%3)/3; $('photo').setAttribute('opacity',(cy3<.5?1:Math.max(0,1-(cy3-.5)*4)).toFixed(2));
  $('ghost').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');
  rise($('shrug'),p(u,TM.snap_ghost+5.3,TM.snap_ghost+5.8)*(1-.6*p(u,TM.snap_ghost+9.5,TM.snap_ghost+10)));
  R('ropes',TM.snap_ghost+9.5); R('gsaw',TM.snap_ghost+9.9);

  R('arr',S(3)+.3); R('qs',TM.quiet_stage); const wo=p(u,TM.quiet_stage+.5,TM.quiet_stage+1);
  WV.forEach(w=>{const f=(t*.6+w.f)%1,r=60+140*f,x=(440+w.s*r*.82).toFixed(1);w.e.setAttribute('d','M'+x+' '+(470-r*.57).toFixed(1)+'A'+r.toFixed(1)+' '+r.toFixed(1)+' 0 0 '+(w.s>0?1:0)+' '+x+' '+(470+r*.57).toFixed(1));w.e.setAttribute('opacity',(wo*(1-f)).toFixed(2))});
  R('chart',TM.stopwatch-.2); dr('cv',p(u,TM.stopwatch,TM.stopwatch+3.5));
  $('swh').setAttribute('transform','rotate('+(360*p(u,TM.stopwatch,TM.stopwatch+5)).toFixed(1)+' 1420 300)');
  R('early',TM.stopwatch+1.2); R('late',TM.stopwatch+5.4); CD.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.stopwatch+5.4+i*.08,TM.stopwatch+5.8+i*.08)));

  R('tt',TM.test_tube); const L=560-220*p(u,TM.test_tube+.3,TM.test_tube+2);
  $('liq').setAttribute('d','M207 '+L.toFixed(1)+'V560a33 33 0 0 0 66 0V'+L.toFixed(1)+'z');
  BB.forEach((b,i)=>{const f=(t*.5+i/3)%1;b.setAttribute('cy',(585-f*(585-L)).toFixed(1));b.setAttribute('opacity',L<550?1:0)});
  R('nb',TM.notebook); RW.forEach((g,i)=>rise(g,p(u,TM.notebook+.6+i*.6,TM.notebook+1+i*.6)));
  R('tgt',TM.notebook+5);
  JB.forEach((j,i)=>{const a=TM.notebook+5.4+i*.7,k=p(u,a,a+.4);j.c.setAttribute('cx',(800+(j.x-800)*k).toFixed(1));j.c.setAttribute('cy',(450+(j.y-450)*k).toFixed(1));j.c.setAttribute('opacity',u>=a?1:0);j.c.setAttribute('fill',k>=1?(j.h?'var(--gain)':'var(--loss)'):'var(--ink)')});
  R('miss',TM.notebook+9.2);

  R('tools',TM.heart); const ti=Math.floor(t/1.5)%3; TS.forEach((s,i)=>s.setAttribute('opacity',i===ti?1:0));
  R('hrt',TM.heart+1.8); $('hb').setAttribute('transform','translate(760 430) scale('+(1.3*(1+.06*Math.pow(Math.abs(Math.sin(t*2.6)),6))).toFixed(3)+')');
  R('noticed',TM.heart+3.4);
  BU.forEach((b,i)=>rise(b,p(u,TM.reply_bubble+i*1.1,TM.reply_bubble+i*1.1+.4)));
  R('chatL',TM.reply_bubble+4.4); R('any',TM.reply_bubble+5.8);

  R('cal',TM.calendar); CE.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.4+i*.12?'var(--gain)':'var(--stage)'));
  R('gwc',TM.calendar+.3); dr('gw0',p(u,TM.calendar+.5,TM.calendar+3.8));
  R('sale',TM.tired_boxer); dr('gw1',p(u,TM.tired_boxer+.6,TM.tired_boxer+2.8)); R('tb',TM.tired_boxer+2.4);
  R('nv0',TM.tired_boxer+6.2); R('nv1',TM.tired_boxer+9.2);

  R('c1',TM.checklist-.3); [0,1,2].forEach(i=>$('ck'+i).setAttribute('opacity',p(u,TM.checklist+.6+i*.5,TM.checklist+.9+i*.5)));
  R('c2',TM.new_account-.3); R('c3',TM.glove-.3);
  const jab=u>=TM.glove?Math.abs(Math.sin(t*3)):0;
  $('gl').setAttribute('transform','translate('+(30*jab).toFixed(1)+' 0)');
  $('glm').setAttribute('opacity',(u>=TM.glove?.3+.7*jab:.3).toFixed(2));

  const s8=S(8); R('qa',s8+.3); R('qb',s8+.7); R('qc',s8+1.1); R('qd',s8+4.6,.6);
  rise($('eRing'),p(u,s8+1.6,s8+2.2)); const g8=p(u,s8+4.6,s8+5.4); eG.setAttribute('cx',(90-100*g8).toFixed(1)); eG.setAttribute('opacity',g8>0?1:0);