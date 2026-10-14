rise($('tgp'),p(u,TM.question,TM.question+.6));
  TC.forEach((c,i)=>c.setAttribute('opacity',p(t,.4+i*.4,.7+i*.4)));
  const sb=(362-70*(1-p(t,2.6,4))*Math.abs(Math.sin(t*2.2))).toFixed(1);
  $('tbar').setAttribute('y1',sb);$('tbar').setAttribute('y2',sb);$('tbar').style.stroke=t>4?'var(--gain)':'var(--loss)';

  rise($('h1a'),p(u,TM.party,TM.party+.5));rise($('h1b'),p(u,TM.party+3,TM.party+3.5));
  rise($('h2'),p(u,TM.book,TM.book+.5));
  $('bar1').setAttribute('width',(200*p(u,TM.book+.6,TM.book+1.6)).toFixed(1));
  $('bar0').setAttribute('width',(600*p(u,TM.book+2,TM.book+4)).toFixed(1));
  rise($('h3'),p(u,TM.smile,TM.smile+.5));rise($('h4'),p(u,TM.smile+5.2,TM.smile+5.8));

  const a2=p(u,TM.mckinsey,TM.mckinsey+1.2),b2=p(u,TM.fortune,TM.fortune+1.2);
  dr($('stairs'),.25*p(u,TM.orphan,TM.orphan+1)+.36*a2+.39*b2);
  rise($('gup'),p(u,TM.orphan,TM.orphan+.5));
  $('gupi').setAttribute('transform','translate('+(300+420*(a2+b2)).toFixed(1)+' '+(619-180*(a2+b2)-60*Math.sin(Math.PI*a2)-60*Math.sin(Math.PI*b2)).toFixed(1)+')');
  [TM.orphan,TM.mckinsey,TM.fortune].forEach((a,i)=>rise($('st'+i),p(u,a+.4,a+1)));
  $('gnum').textContent='$'+Math.round(100*p(u,TM.fortune+.6,TM.fortune+2))+' million';

  rise($('f3b'),p(u,TM.billionaire,TM.billionaire+.6));rise($('f3p'),p(u,TM.phone,TM.phone+.6));
  $('sig').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));
  rise($('f3j'),p(u,TM.prison,TM.prison+.5));rise($('f3t'),p(u,TM.prison+4.2,TM.prison+4.8));

  rise($('m4a'),p(u,TM.madoff,TM.madoff+.5));rise($('m4b'),p(u,TM.desk,TM.desk+.6));rise($('m4s'),p(u,TM.scheme-.6,TM.scheme));
  const cf=p(u,TM.scheme+2.4,TM.scheme+3.2);
  PY.forEach(([el,x,y,i,T])=>{el.setAttribute('opacity',p(u,TM.scheme+i*.12,TM.scheme+i*.12+.3));
    el.setAttribute('transform','translate('+((T[0]-x)*cf).toFixed(1)+' '+((T[1]-y)*cf).toFixed(1)+') rotate('+(T[2]*cf).toFixed(1)+' '+(x+50)+' '+(y+28)+')')});
  rise($('m4x'),p(u,TM.scheme+2.9,TM.scheme+3.4));
  rise($('m4c'),p(u,TM.scheme+3.2,TM.scheme+3.8));

  rise($('run'),p(u,TM.goalpost,TM.goalpost+.5));rise($('gp'),p(u,TM.goalpost,TM.goalpost+.5));
  const rx=200+680*cl(lin(u,TM.goalpost,TM.chase+4.5)),bob=6*Math.abs(Math.sin(t*6));
  $('runi').setAttribute('transform','translate('+rx.toFixed(1)+' '+(716-bob).toFixed(1)+')');
  $('gpi').setAttribute('transform','translate('+(rx+250+15*Math.sin(t*1.5)).toFixed(1)+' 0)');
  const lk=p(u,TM.ladder,TM.ladder+2);dr($('inc'),lk);dr($('exp'),lk);rise($('g5l'),p(u,TM.ladder+2,TM.ladder+2.5));
  RK.forEach((r,i)=>rise(r,p(u,TM.chase+i*.5,TM.chase+i*.5+.4)));rise($('rl'),p(u,TM.chase,TM.chase+.4));

  BR.forEach((g,i)=>{const a=i<2?TM.rookie+i*1.5:TM.ceiling+(i-2)*.5;rise(g,p(u,a,a+.5))});
  rise($('r6l'),p(u,TM.rookie,TM.rookie+.5));rise($('r6t'),p(u,TM.rookie+1.5,TM.rookie+2));
  $('comp').setAttribute('opacity',p(u,TM.rookie+3,TM.rookie+3.6));$('comp').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
  rise($('ceil'),p(u,TM.ceiling+2,TM.ceiling+2.6));rise($('nowin'),p(u,TM.ceiling+3.8,TM.ceiling+4.4));

  rise($('scl'),p(u,TM.scale,TM.scale+.6));
  let w=0;CHP.forEach((c,i)=>{const a=TM.family+i*1.1;rise(c,p(u,a,a+.4));w+=p(u,a,a+.6)});
  const th=-.2+.1*w,bx=380*Math.cos(th),by=380*Math.sin(th),L=[800-bx,330-by],R=[800+bx,330+by];
  $('beam').setAttribute('x1',L[0].toFixed(1));$('beam').setAttribute('y1',L[1].toFixed(1));$('beam').setAttribute('x2',R[0].toFixed(1));$('beam').setAttribute('y2',R[1].toFixed(1));
  const sp=q=>'M'+(q[0]-120).toFixed(1)+' '+(q[1]+150).toFixed(1)+'L'+q[0].toFixed(1)+' '+q[1].toFixed(1)+'L'+(q[0]+120).toFixed(1)+' '+(q[1]+150).toFixed(1);
  $('strs').setAttribute('d',sp(L)+sp(R));
  $('panL').setAttribute('transform','translate('+L[0].toFixed(1)+' '+(L[1]+150).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+R[0].toFixed(1)+' '+(R[1]+150).toFixed(1)+')');
  rise($('hrt'),p(u,TM.heart,TM.heart+.5));
  $('hrti').setAttribute('transform','translate(800 282) scale('+(1+.08*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(3)+')');
  rise($('k1'),p(u,TM.heart,TM.heart+.6));rise($('k2'),p(u,TM.heart+3.3,TM.heart+3.9));

  rise($('qa'),p(u,TM.pen,TM.pen+.5));rise($('qb'),p(u,TM.pen+.4,TM.pen+.9));rise($('qc'),p(u,TM.pen+.8,TM.pen+1.3));
  rise($('pad'),p(u,TM.pen,TM.pen+.5));dr($('wr'),p(u,TM.pen+.6,TM.pen+3));
  $('pen').setAttribute('transform','translate(0 '+(4*Math.sin(t*6)).toFixed(1)+')');
  rise($('nev'),p(u,TM.pen+4.6,TM.pen+5.2));