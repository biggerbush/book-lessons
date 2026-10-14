rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.6));
  $('swh').setAttribute('transform',`rotate(${((t*120)%360).toFixed(1)} 1330 400)`);

  rise($('lp'),p(u,TM.loop_circle,TM.loop_circle+.6));
  const SA=[TM.build_step,TM.build_step+1.7,TM.build_step+3.3];
  ND.forEach((n,i)=>{const a=TM.loop_circle+2.4+i*.7,on=u>=SA[i];rise(n[0],p(u,a,a+.4));n[1].setAttribute('fill',on?'var(--gain)':'var(--stage)');n[1].setAttribute('stroke',on?'var(--gain)':'var(--ink)');n[2].style.fill=on?'var(--on-gain)':''});
  const w=1.3*Math.max(0,u-TM.build_step)+2.2*Math.max(0,u-TM.timer-1)*p(u,TM.timer+1,TM.timer+3),da=-Math.PI/2+w;
  $('lpd').setAttribute('cx',(520+230*Math.cos(da)).toFixed(1));$('lpd').setAttribute('cy',(520+230*Math.sin(da)).toFixed(1));$('lpd').setAttribute('opacity',u>=TM.build_step?1:0);
  rise($('tmr'),p(u,TM.timer,TM.timer+.6));const tb=p(u,TM.timer+.8,TM.timer+3);
  $('tbar').setAttribute('width',(464-300*tb).toFixed(1));$('tbar').setAttribute('class',tb>.99?'gain':'loss');

  rise($('pile'),p(u,TM.envelopes,TM.envelopes+.6));rise($('fam'),p(u,TM.two_kids,TM.two_kids+.6));rise($('batch'),p(u,TM.stack_folded,TM.stack_folded+.5));
  BS.forEach((sh,i)=>sh.forEach((s,k)=>{const a=TM.stack_folded+.6+i*1.6+k*.14;s.setAttribute('opacity',p(u,a,a+.2))}));

  rise($('pipe'),p(u,TM.single_letter,TM.single_letter+.5));
  const s3=TM.single_letter+.6,e3=Math.max(0,u-s3),ph=(e3%3)/3,mx=220+ph*1080,nd=Math.min(5,Math.floor(e3/3));
  $('mov').setAttribute('transform',`translate(${(mx-40).toFixed(1)} 354)`);$('mov').setAttribute('opacity',((u>=s3?1:0)*(ph>.9?(1-ph)/.1:1)).toFixed(2));
  ST.forEach((r,i)=>r.setAttribute('stroke',u>=s3&&Math.abs(mx-220-i*300)<90?'var(--gain)':'var(--ink)'));
  DN.forEach((g,k)=>g.setAttribute('opacity',k<nd?1:0));
  rise($('sws'),p(u,TM.single_letter+6.6,TM.single_letter+7.1));
  rise($('race'),p(u,TM.finish_flag,TM.finish_flag+.5));
  const rw=1100*lin(u,TM.finish_flag+.4,TM.finish_flag+3.8);
  $('rb0').setAttribute('width',rw.toFixed(1));$('rb1').setAttribute('width',Math.min(700,rw).toFixed(1));
  rise($('dk1'),rw>=699?p(u,TM.finish_flag+.4+3.4*700/1100,TM.finish_flag+.8+3.4*700/1100):0);
  rise($('dk0'),rw>=1099?p(u,TM.finish_flag+3.8,TM.finish_flag+4.2):0);

  const m4=p(u,TM.magnifier,TM.magnifier+.6);rise($('pan'),m4);rise($('e4'),m4);rise($('mag'),p(u,TM.magnifier+.3,TM.magnifier+.9));
  $('magi').setAttribute('transform',`translate(${(14*Math.sin(t*1.5)).toFixed(1)} ${(10*Math.cos(t*1.9)).toFixed(1)})`);
  rise($('fit'),p(u,TM.wrong_size,TM.wrong_size+.6));rise($('f1'),p(u,TM.wrong_size+3,TM.wrong_size+3.6));
  PL.forEach((s,j)=>{const a=TM.big_pile+j*.02;s.setAttribute('opacity',p(u,a,a+.15))});
  const x4=p(u,TM.big_pile+2.2,TM.big_pile+2.6);$('px').setAttribute('opacity',x4);rise($('f2'),x4);

  rise($('box'),p(u,TM.product_box,TM.product_box+.6));rise($('row0'),p(u,TM.big_launch,TM.big_launch+.5));
  $('gl').setAttribute('width',(1000*p(u,TM.big_launch+.5,TM.big_launch+4)).toFixed(1));
  rise($('gb'),p(u,TM.big_launch+4,TM.big_launch+4.4));$('gf').setAttribute('opacity',p(u,TM.big_launch+4.6,TM.big_launch+5));
  rise($('row1'),p(u,TM.tiny_updates,TM.tiny_updates+.4));
  TY.forEach((q,i)=>{const a=TM.tiny_updates+.3+i*.28;q[0].setAttribute('opacity',p(u,a,a+.2));q[1].setAttribute('opacity',p(u,a+.2,a+.4))});
  rise($('days'),p(u,TM.tiny_updates+3.6,TM.tiny_updates+4.2));

  rise($('off'),p(u,TM.imvu_office,TM.imvu_office+.6));$('cnt').textContent='~'+Math.round(50*p(u,TM.imvu_office+.6,TM.imvu_office+2.4));
  rise($('cust'),p(u,TM.imvu_office+1,TM.imvu_office+1.6));
  const sh=u>=TM.shield;rise($('shd'),p(u,TM.shield,TM.shield+.6));
  PK.forEach((k,i)=>{const q=(t*.22+i/6)%1;let x=420+q*780,f=sh&&x>900?'var(--gain)':'var(--ink)',vis6=x<696||x>904;
    if(sh&&i%3===1&&q>.35){const r=(q-.35)/.65;x=Math.min(690,420+.35*780)+0;x=680-r*260;f='var(--loss)';vis6=true}
    if(sh&&i%3===1&&q<=.35&&x>680){vis6=false}
    k.setAttribute('x',(x-14).toFixed(1));k.setAttribute('fill',f);k.setAttribute('opacity',(u>=TM.imvu_office+.6&&vis6)?1:0)});
  rise($('dl'),p(u,TM.dial,TM.dial+.6));
  $('ndl').setAttribute('transform',`rotate(${(-170+145*p(u,TM.dial+.4,TM.dial+1.6)+3*Math.sin(t*6)).toFixed(1)} 1240 700)`);

  rise($('cards'),p(u,TM.arrow_back,TM.arrow_back+.6));rise($('bk'),p(u,TM.arrow_back+1,TM.arrow_back+1.6));
  const C7=[TM.hammer,TM.ruler,TM.question_mark];
  CD.forEach((c,i)=>{const a=C7[i],on=u>=a;rise(c[1],p(u,a,a+.5));c[0].setAttribute('stroke',on?'var(--gain)':'var(--ink)');c[0].setAttribute('stroke-width',on?7:4)});

  rise($('cal'),p(u,TM.calendar,TM.calendar+.6));const lit=Math.floor(t*3)%13;
  CC.forEach((c,k)=>c.setAttribute('fill',k<lit?'var(--gain)':'var(--line)'));
  rise($('qa'),p(u,TM.calendar,TM.calendar+.5));rise($('qb'),p(u,TM.calendar+.4,TM.calendar+.9));rise($('qc'),p(u,TM.calendar+.8,TM.calendar+1.3));
  rise($('cut'),p(u,TM.scissors,TM.scissors+.5));const sx=1380-1140*p(u,TM.scissors+.5,TM.scissors+4);
  $('sc').setAttribute('transform',`translate(${sx.toFixed(1)} 760) scale(1 ${(.75+.25*Math.abs(Math.sin(t*8))).toFixed(2)})`);
  $('cutl').setAttribute('d',`M${Math.min(sx+70,1460).toFixed(1)} 760H1460`);