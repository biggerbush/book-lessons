const R=(e,a,d=.5)=>rise(typeof e=='string'?$(e):e,p(u,a,a+d));
  let sv='M1200 470';for(let x=1200;x<=1480;x+=20)sv+='L'+x+' '+(470+4*Math.sin(x/40+t*1.5)).toFixed(1);$('sea').setAttribute('d',sv);
  $('boat').setAttribute('transform','translate(0 '+(3*Math.sin(t*1.5+1)).toFixed(1)+')');
  R('tg',TM.calm_sea); dr($('root'),p(u,TM.calm_sea+1,TM.calm_sea+4));

  R('mk1',TM.economist); R('ch1',TM.economist+3); dr($('cy'),p(u,TM.economist+3,TM.economist+6)); R('qcard',TM.quote_card); R('bk',TM.quote_card+4);

  YB.forEach((g,i)=>R(g,TM.good_years+i*.3)); R('yl',TM.good_years+3);
  const rk=[TM.confidence,TM.confidence+3.4,TM.borrowing]; RW.forEach((r,i)=>R(r[0],rk[i]));
  const wv=[.25+.7*p(u,TM.confidence,TM.confidence+3),.8-.65*p(u,TM.confidence+3.4,TM.confidence+6.4),.2+.75*p(u,TM.borrowing,TM.borrowing+2.5)];
  RW.forEach((r,i)=>r[1].setAttribute('width',(960*wv[i]).toFixed(1))); R('bb',TM.borrowing+.5);

  const wb=(u>TM.crack&&u<TM.crack+.9)?2*Math.sin(t*30):0;
  TW.forEach((b,i)=>{const a0=TM.crack+.8+(6-i)*.06,k=p(u,a0,a0+1),f=FT[i],x=b[2]+(f[0]-b[2])*k,y=b[3]+(f[1]-b[3])*k,a=f[2]*k+wb*(1-k);
    b[0].setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+a.toFixed(1)+')');
    b[0].setAttribute('opacity',p(u,TM.stack+i*.4,TM.stack+i*.4+.3)); b[1].setAttribute('stroke',u>=TM.stack+3?'var(--loss)':'var(--ink)')});
  $('shk').setAttribute('cx',(1460-300*p(u,TM.crack,TM.crack+.8)).toFixed(1)); $('shk').setAttribute('opacity',u>=TM.crack?1-p(u,TM.crack+1.6,TM.crack+2.2):0);
  R('t31',TM.stack); R('t32',TM.stack+3); R('t33',TM.crack); R('t34',TM.crack+4.2);

  R('mk4',TM.timeline); R('br4',TM.timeline+3); R('pt4',TM.flat_line+1);
  const xl=u<TM.flat_line?160+400*p(u,TM.timeline,TM.timeline+2.5):560+780*p(u,TM.flat_line,TM.flat_line+3);
  $('gl').setAttribute('points',GL.filter(q=>q[0]<=xl).map(q=>q[0]+','+q[1].toFixed(1)).join(' '));
  HS.forEach((h,i)=>R(h,TM.house+i*.3)); R('hl',TM.house+.5);

  BR.forEach((b,i)=>R(b,TM.falling_bar+i*.1));
  const fk=p(u,TM.falling_bar+1.2,TM.falling_bar+2.4),fs=196-436*fk,fb=$('fb');
  fb.setAttribute('y',fs>=0?460-fs:460); fb.setAttribute('height',Math.abs(fs).toFixed(1)); fb.setAttribute('fill',fk>.5?'var(--loss)':'var(--gain)'); fb.setAttribute('opacity',p(u,TM.falling_bar+.6,TM.falling_bar+.9));
  R('cl5',TM.falling_bar+1.8); R('bt5',TM.falling_bar+3.7); R('soil',TM.soil); dr($('plant'),p(u,TM.soil+.6,TM.soil+2.6)); R('cr5',TM.soil+2.4);

  R('hd',TM.human_head); R('pd',TM.pendulum);
  const an=38*p(u,TM.pendulum,TM.pendulum+2)*Math.sin(t*1.8)*Math.PI/180,bx=1100+300*Math.sin(an),by=240+300*Math.cos(an);
  $('arm').setAttribute('x2',bx.toFixed(1)); $('arm').setAttribute('y2',by.toFixed(1)); $('bob').setAttribute('cx',bx.toFixed(1)); $('bob').setAttribute('cy',by.toFixed(1)); $('bob').setAttribute('fill',an<0?'var(--gain)':'var(--loss)');
  GN.forEach((g,i)=>{const a=TM.pendulum+3.8+i*.6;R(g[0],a);const c=u<a+1.2?'var(--gain)':'var(--muted)';g[1].style.fill=c;g[2].style.fill=c});
  R('gl6',TM.pendulum+3.8); R('bt6',TM.pendulum+10.4);

  R('wl',TM.wallet); R('ckf',TM.checklist);
  CK.forEach((c,i)=>{const a=TM.checklist+.4+i*1.6;R(c[0],a);dr(c[1],p(u,a+.6,a+1))});
  R('al',TM.alarm); $('lamp').setAttribute('fill-opacity',u>=TM.alarm?(.45+.55*Math.abs(Math.sin(t*4))).toFixed(2):.2); R('mg',TM.alarm+5);

  const q8=SC[8][0]/K; R('q0',q8+.3); R('qg',q8+.6); R('qa',q8+4.4); R('qb',q8+4.8); R('qc',q8+5.2);