const tc=TM.title_card;
  tl.forEach((g,i)=>rise(g,p(u,tc+i*.15,tc+i*.15+.4)*(i===1||i===4?1:1-.6*p(u,tc+3,tc+3.6))));
  tR.forEach((r,i)=>r.setAttribute('opacity',p(u,tc+2.2+i*.3,tc+2.6+i*.3)));
  tS.forEach((s,i)=>s.setAttribute('stroke-dashoffset',1-p(u,tc+3+i*.15,tc+3.4+i*.15)));

  const tw=TM.todo_wall,tp=TM.tiny_person,nv=p(u,tp+6.2,tp+7.2),ng=u>=tp+11.2;
  NT.forEach(([g,q,r],i)=>{const a=tw+((i*37)%84)/84*3.5;rise(g,p(u,a,a+.3)*(r?1:1-.65*nv));q.setAttribute('fill',r&&nv>0?'var(--gain)':ng&&!r?'var(--loss)':'var(--line)')});
  rise($('me'),p(u,tp,tp+.5));rise($('n1a'),p(u,tp+6.2,tp+6.8));rise($('n1b'),p(u,tp+11.2,tp+11.8));

  const ss=TM.scissors,cb=TM.cut_branches,sa=12*Math.abs(Math.sin(t*3));let cj=0;
  rise($('sc'),p(u,ss,ss+.5));$('bA').setAttribute('transform',`rotate(${(-sa).toFixed(1)} 1361 340)`);$('bB').setAttribute('transform',`rotate(${sa.toFixed(1)} 1361 340)`);
  rise($('root'),p(u,ss+.6,ss+1));
  BR.forEach(([pa,n,c],i)=>{const d=p(u,ss+1+i*.2,ss+2.2+i*.2),o=p(u,ss+2+i*.2,ss+2.3+i*.2),k=c?p(u,cb+cj*.5,cb+cj*.5+.3):0;if(c){cj++;c.setAttribute('opacity',k)}
    const g=!c&&u>=cb+2.4;pa.setAttribute('stroke-dashoffset',1-d);pa.setAttribute('opacity',1-.75*k);n.setAttribute('opacity',o*(1-.75*k));
    pa.setAttribute('stroke',g?'var(--gain)':'var(--ink)');n.setAttribute('fill',g?'var(--gain)':'var(--ink)');n.setAttribute('r',g?22:16)});
  rise($('n2a'),p(u,cb+4.6,cb+5.2));rise($('n2b'),p(u,cb+7.9,cb+8.5));

  const pl=TM.pilot,l25=TM.list_25,c5=TM.circle_five;
  rise($('pplw'),p(u,pl,pl+.5));rise($('plane'),p(u,pl+.6,pl+1.1));
  $('planeM').setAttribute('transform',`translate(${(10*Math.sin(t*1.2)).toFixed(1)} ${(4*Math.sin(t*2)).toFixed(1)})`);
  rise($('pad'),p(u,l25,l25+.5));$('cnt').textContent=Math.round(25*p(u,l25+.3,l25+2.8));
  LI.forEach((g,i)=>rise(g,p(u,l25+.3+i*.1,l25+.6+i*.1)*(CI.includes(i)?1:1-.55*p(u,c5+2.4,c5+3))));
  LR.forEach((r,i)=>r.setAttribute('opacity',p(u,c5+i*.4,c5+i*.4+.3)));
  rise($('myth'),p(u,c5+4.6,c5+5.2));

  const lt=TM.list_twenty,sp=TM.stop_sign;
  rise($('top5'),p(u,lt,lt+.5));rise($('mlab'),p(u,lt+.5,lt+1));
  M20.forEach((r,i)=>{const a=lt+.6+i*.06;rise(r,p(u,a,a+.3));r.setAttribute('stroke',u>=sp?'var(--loss)':'var(--ink)')});
  rise($('stop'),p(u,sp,sp+.4));rise($('bad'),p(u,sp+3.8,sp+4.3));
  FB.forEach(([g,cx,cy,a],i)=>{const k=p(u,sp+4.3+i*.3,sp+5+i*.3);g.setAttribute('transform',`translate(0 ${(-230*(1-k)).toFixed(1)}) rotate(${(a*k).toFixed(1)} ${cx} ${cy})`)});
  rise($('wkg'),p(u,lt+1,lt+1.5));WK.forEach((w,i)=>w.setAttribute('fill',u>=sp+6.9+i*.12?'var(--loss)':'var(--line)'));
  rise($('mid'),p(u,sp+6.4,sp+7));

  const mh=TM.messy_house,pn=TM.paused_novel,sl=TM.spotlight,sk=p(u,sl,sl+.6);
  rise($('k0'),p(u,mh,mh+.5)*(1-.55*sk));rise($('mess'),p(u,mh+6.2,mh+6.7));
  rise($('k1'),p(u,pn,pn+.5)*(1-.55*sk));rise($('pz'),p(u,pn+.6,pn+1));rise($('k2'),p(u,pn+1.5,pn+2));
  rise($('cone'),sk);[0,1,2].forEach(i=>rise($('tg'+i),sk));
  $('kr2').style.stroke=sk>0?'var(--gain)':'var(--line)';rise($('frees'),p(u,sl+.8,sl+1.4));

  const ts=TM.three_slots,wl=TM.waiting_line,fa=wl+4.9,pr0=.55+.45*p(u,fa,fa+1.4),dn=p(u,fa+1.6,fa+2.4),mv=p(u,fa+2.2,fa+3.4);
  rise($('slots'),p(u,ts,ts+.5));rise($('que'),p(u,wl,wl+.5));
  SB[0].setAttribute('y',330-80*dn);SB[0].setAttribute('opacity',1-dn);
  $('chk').setAttribute('transform',`translate(0 ${(-80*dn).toFixed(1)})`);$('chk').setAttribute('opacity',p(u,fa+1.3,fa+1.6)*(1-dn));
  BF.forEach((b,i)=>b.setAttribute('width',(120*(i?[.35,.5][i-1]+.12*p(u,ts,fa+6):pr0*(1-mv)+.15*p(u,fa+3.4,fa+6))).toFixed(1)));
  QB.forEach((q,i)=>{if(i<5)q.setAttribute('x',140+i*110+110*mv);else{q.setAttribute('x',690+240*mv);q.setAttribute('y',345-15*mv);q.setAttribute('fill',mv>.8?'var(--gain)':'var(--line)')}});
  rise($('fin'),p(u,fa,fa+.6));

  const ec=TM.empty_chair,oh=TM.open_hands,o7=p(u,oh,oh+1.5),se=p(u,oh+6.1,oh+7.6);
  rise($('chair'),p(u,ec,ec+.5));
  FL.forEach((g,i)=>{const a=ec+.4+i*.2;g.setAttribute('opacity',p(u,a,a+.4)*(1-.65*o7));g.setAttribute('transform',`translate(${(6*Math.sin(t*7+i)*(1-o7)).toFixed(1)} ${(-50*o7).toFixed(1)})`)});
  rise($('hands'),p(u,oh,oh+.5));
  RG.forEach((c,i)=>{c.setAttribute('r',(46+i*16+150*(1-se)).toFixed(1));c.setAttribute('opacity',se*(1-i*.4))});
  rise($('setl'),p(u,oh+6.1,oh+6.7));

  const yl=TM.your_list;
  rise($('yl'),p(u,yl,yl+.5));YR.forEach((r,i)=>r.setAttribute('opacity',p(u,yl+1.5+i*.5,yl+1.8+i*.5)));
  YS.setAttribute('stroke-dashoffset',1-p(u,yl+5.7,yl+6.3));
  rise($('qa'),p(u,yl,yl+.5));rise($('qb'),p(u,yl+.4,yl+.9));rise($('qc'),p(u,yl+.8,yl+1.3));rise($('ql'),p(u,yl+5.7,yl+6.3));