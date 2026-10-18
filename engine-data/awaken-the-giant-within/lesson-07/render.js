const S8=SC[8][0]/K, R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));

  const gs=1+2.4*p(u,TM.giant,TM.giant+3)+.03*Math.sin(t*1.5);
  $('giant0').setAttribute('transform','translate(1300 720) scale('+gs.toFixed(3)+') translate(-1300 -720)');

  R('lad',TM.ladder); RG.forEach((g,i)=>rise(g,p(u,TM.ladder+.4+i*.6,TM.ladder+.9+i*.6)));
  R('mir',TM.mirror); R('cmp',TM.compass_arrow);
  const kc=p(u,TM.compass_arrow+.3,TM.compass_arrow+2.5);
  $('ndl').setAttribute('transform','rotate('+(-90+(1-kc)*110*Math.sin(t*4)).toFixed(1)+' 1280 450)');

  P2.forEach((q,i)=>{rise(q[0],p(u,TM.smoker_one,TM.smoker_one+.5)); const b=i?TM.speech_not:TM.speech_try; rise(q[1],p(u,b,b+.5));
    const m=TM.speech_not+(i?10:3); rise(q[2],p(u,m,m+.6))});

  R('rb',TM.rubber_band); R('anc',TM.anchor); R('nm',TM.anchor+3.4,.6); R('tl',TM.anchor+9,.6);
  const c=(t%3)/3, snap=c>=.75, st=snap?1-ease((c-.75)/.25):ease(c/.75), bx=330+310*st;
  $('ball').setAttribute('cx',bx.toFixed(1));
  $('band').setAttribute('d','M262 418L'+(bx-30).toFixed(1)+' 435L262 452');
  $('band').setAttribute('stroke-width',(9-4*st).toFixed(1));
  TR.forEach((e,k)=>{e.setAttribute('cx',(bx+(k+1)*44).toFixed(1)); e.setAttribute('opacity',snap&&c<.98?(.45-k*.13).toFixed(2):0)});
  $('rcl').setAttribute('opacity',snap?1:(c>.6?(c-.6)/.15*.3:0).toFixed(2));
  $('ball2').setAttribute('cy',(348+4*Math.sin(t*2)).toFixed(1));

  R('nb',TM.notebook); let tip=null;
  WL.forEach(w=>{const a=(w[4]?TM.arrow_up:TM.pen)+.4+w[5]*.8,k=p(u,a,a+.7);
    w[0].setAttribute('x2',(w[1]+w[2]*k).toFixed(1)); w[0].setAttribute('opacity',k>0?1:0); if(k>0)tip=[w[1]+w[2]*k,w[3]]});
  const pe=$('pen0'); pe.setAttribute('opacity',tip&&u<TM.arrow_up+5?1:0);
  if(tip)pe.setAttribute('transform','translate('+tip[0].toFixed(1)+' '+(tip[1]-4)+')');
  R('aup',TM.arrow_up); R('rd',TM.arrow_up+5.4,.6);

  STP.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.staircase+i*.15,TM.staircase+i*.15+.3)));
  R('stl',TM.staircase+2);
  TL.forEach((g,i)=>rise(g,p(u,TM.staircase+4.2+i*.6,TM.staircase+4.7+i*.6)));
  R('leap',TM.tiny_step); R('clb',TM.tiny_step);
  const f=12*p(u,TM.tiny_step+.5,TM.tiny_step+6.5),k=Math.min(11,Math.floor(f)),fr=f-k;
  $('clbm').setAttribute('transform','translate('+(652+64*f).toFixed(1)+' '+(744-36*f-20*Math.sin(Math.PI*fr)).toFixed(1)+')');

  R('tbx',TM.toolbox); R('dec',TM.decision_card);
  FU.forEach((g,i)=>rise(g,p(u,TM.decision_card+2+i*.6,TM.decision_card+2.5+i*.6)));
  R('brk',TM.decision_card+4.4);
  R('val',TM.value_list); R('idn',TM.value_list+3,.6);
  $('whl').setAttribute('transform','rotate('+(20*Math.sin(t*1.2)).toFixed(1)+' 1310 480)');

  R('act',TM.checkmark); R('idg',TM.checkmark+.8); R('arcs',TM.checkmark+4.6,.6);
  ['arcA','arcB'].forEach(i=>$(i).style.strokeDashoffset=(-t*30).toFixed(1));
  R('cal',TM.calendar); CK.forEach((e,n)=>e.setAttribute('opacity',u>=TM.calendar+.4+n*.14?1:0));
  $('idf').setAttribute('opacity',(.3+.7*p(u,TM.calendar,TM.calendar+4.4)).toFixed(2));
  R('real',TM.calendar+2.5,.6);

  R('qa',S8+.3); R('qb',S8+.8); R('qc',S8+1.3);
  $('ul').setAttribute('width',(560*p(u,S8+2,S8+3.5)).toFixed(1));
  R('qm',S8+5.4,.6); R('bed',S8+5.4,.6);