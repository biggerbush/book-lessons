const k0=cl(t/9)*.95,ly=300+150*k0,hw=85*(455-ly)/155;
  $('sandT').setAttribute('points',(1330-hw).toFixed(1)+','+ly.toFixed(1)+' '+(1330+hw).toFixed(1)+','+ly.toFixed(1)+' 1330,455');
  $('sandB').setAttribute('points','1250,630 1410,630 1330,'+(630-140*k0).toFixed(1));
  $('stream').setAttribute('opacity',k0<.95?1:0); $('stream').setAttribute('stroke-dashoffset',(-t*60).toFixed(1));
  rise($('hg'),p(u,TM.hourglass,TM.hourglass+.6)); rise($('stay'),p(u,TM.hourglass+5,TM.hourglass+5.5));

  rise($('day'),p(u,TM.desk_job,TM.desk_job+.5)); rise($('pay'),p(u,TM.desk_job+4.2,TM.desk_job+4.7));
  rise($('night'),p(u,TM.moon,TM.moon+.5)); rise($('net'),p(u,TM.moon+3.7,TM.moon+4.3));

  rise($('tv'),p(u,TM.tv_remote,TM.tv_remote+.5)); $('scr').setAttribute('fill-opacity',(.25+.1*Math.sin(t*7)).toFixed(2));
  rise($('ph'),p(u,TM.tv_remote+3,TM.tv_remote+3.5)); rise($('lbtv'),p(u,TM.tv_remote+3,TM.tv_remote+3.5));
  PL.forEach((l,i)=>l.setAttribute('y',(380+((i*40+t*30)%150)).toFixed(1)));
  rise($('clk'),p(u,TM.clock,TM.clock+.5)); $('hand').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 830 440)');
  SQ.forEach((s,k)=>s.setAttribute('opacity',p(u,TM.clock+1+k*.12,TM.clock+1.3+k*.12)));
  rise($('huge'),p(u,TM.clock+3,TM.clock+3.6));

  // Gary: viewers grow column by column along the episode strip
  rise($('cam'),p(u,TM.camera,TM.camera+.5)); $('rec').setAttribute('opacity',Math.sin(t*5)>0?1:.2);
  rise($('eps'),p(u,TM.camera+2,TM.camera+2.5));
  VC.forEach((figs,i)=>{const a=i<6?TM.small_crowd+i*.3:TM.small_crowd+8+(i-6)*3/13;
    EP[i].setAttribute('fill',u>=Math.min(TM.camera+2.2+i*.6,a-.2)?'var(--gain)':'var(--stage)');
    const q=p(u,a,a+.8)*figs.length; figs.forEach((g,k)=>rise(g,cl(q-k)))});
  rise($('lbA'),p(u,TM.small_crowd+.5,TM.small_crowd+1));
  rise($('love'),p(u,TM.small_crowd+3.8,TM.small_crowd+4.4));
  rise($('shop'),p(u,TM.small_crowd+8,TM.small_crowd+8.5));
  rise($('lbB'),p(u,TM.small_crowd+10,TM.small_crowd+10.5));
  rise($('grow'),p(u,TM.small_crowd+10.6,TM.small_crowd+11.1));

  rise($('plant'),p(u,TM.seedling,TM.seedling+.5));
  const st=620-260*(.15+.85*p(u,TM.seedling,TM.big_crowd+1)); $('stem').setAttribute('d','M800 620V'+st.toFixed(1));
  LV.forEach((l,i)=>l.setAttribute('opacity',cl((LY[i]-st)/30)));
  rise($('early'),p(u,TM.seedling+4.6,TM.seedling+5.1));
  const fl=p(u,TM.seedling+6,TM.seedling+7.5); FL.forEach((g,i)=>{g.setAttribute('transform','translate('+(-(30+i*40)*fl).toFixed(1)+' 0)'); g.setAttribute('opacity',(1-.7*fl).toFixed(2))});
  rise($('give'),p(u,TM.seedling+11.6,TM.seedling+12.1));
  BC.forEach((c,i)=>rise(c,p(u,TM.big_crowd+i*.08,TM.big_crowd+.4+i*.08))); rise($('bct'),p(u,TM.big_crowd+.6,TM.big_crowd+1.1));

  // doors open: leaf narrows to its hinge, handle fades
  rise($('comm'),p(u,TM.coins,TM.coins+.5)); rise($('doors'),p(u,TM.coins+.6,TM.coins+1.1));
  DR.forEach(([pg,hd,lb,lk],i)=>{const k=p(u,TM.coins+3.4+i*.9,TM.coins+4+i*.9);
    pg.setAttribute('width',(144*(1-.85*k)).toFixed(1)); hd.setAttribute('opacity',cl(1-2*k).toFixed(2));
    lb.setAttribute('opacity',k); lk.setAttribute('opacity',p(u,TM.handshake+i*.3,TM.handshake+.4+i*.3))});
  rise($('listen'),p(u,TM.handshake+.6,TM.handshake+1.2));

  // seesaw: pans attached to beam ends by matching stems
  rise($('scl'),p(u,TM.scale,TM.scale+.5));
  const an=(-8*p(u,TM.gold_bag+.5,TM.gold_bag+1.5)+18*p(u,TM.tree+.5,TM.tree+2.5))*Math.PI/180,bc=300*Math.cos(an),bs=300*Math.sin(an);
  const xL=800-bc,yL=500-bs,xR=800+bc,yR=500+bs;
  $('beam').setAttribute('x1',xL.toFixed(1)); $('beam').setAttribute('y1',yL.toFixed(1)); $('beam').setAttribute('x2',xR.toFixed(1)); $('beam').setAttribute('y2',yR.toFixed(1));
  [[xL,yL,'stL','pnL','itL'],[xR,yR,'stR','pnR','itR']].forEach(([x,y,s,pn,it])=>{
    $(s).setAttribute('x1',x.toFixed(1)); $(s).setAttribute('y1',y.toFixed(1)); $(s).setAttribute('x2',x.toFixed(1)); $(s).setAttribute('y2',(y-40).toFixed(1));
    $(pn).setAttribute('x',(x-100).toFixed(1)); $(pn).setAttribute('y',(y-52).toFixed(1));
    $(it).setAttribute('transform','translate('+x.toFixed(1)+' '+(y-52).toFixed(1)+')')});
  rise($('bag'),p(u,TM.gold_bag,TM.gold_bag+.5));
  const ts=.3+.7*p(u,TM.tree,TM.tree+3);
  $('trk').setAttribute('x',(-9*ts).toFixed(1)); $('trk').setAttribute('y',(-80*ts).toFixed(1)); $('trk').setAttribute('width',(18*ts).toFixed(1)); $('trk').setAttribute('height',(80*ts).toFixed(1));
  [[0,-120,44],[-38,-92,30],[38,-92,30]].forEach((c,i)=>{const e=$('tc'+i); e.setAttribute('cx',(c[0]*ts).toFixed(1)); e.setAttribute('cy',(c[1]*ts).toFixed(1)); e.setAttribute('r',(c[2]*ts).toFixed(1))});
  $('tree').setAttribute('opacity',p(u,TM.scale+2.2,TM.scale+2.7));
  rise($('lbL'),p(u,TM.gold_bag,TM.gold_bag+.5)); rise($('lbL2'),p(u,TM.gold_bag+2,TM.gold_bag+2.5));
  rise($('lbR'),p(u,TM.scale+2.2,TM.scale+2.7)); rise($('lbR2'),p(u,TM.tree,TM.tree+.5));

  rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  CE.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.5+i*.15?'var(--gain)':'var(--line)'));
  rise($('imp'),p(u,TM.calendar+2.1,TM.calendar+2.6)); rise($('mtn'),p(u,TM.mountain,TM.mountain+.5));
  const cb=12*p(u,TM.mountain+.5,TM.mountain+5.5); ST.forEach((s,i)=>s.setAttribute('opacity',cl(cb-i+1)));
  $('clb').setAttribute('cx',(600+cb*46).toFixed(1)); $('clb').setAttribute('cy',(688-cb*38.6+3*Math.sin(t*6)).toFixed(1));
  rise($('step'),p(u,TM.mountain+1.5,TM.mountain+2.1));

  const S8=SC[8][0]/K;
  rise($('qt'),p(u,S8+.3,S8+.8)); rise($('clk2'),p(u,S8+.6,S8+1.1)); $('wedge').setAttribute('opacity',(.7+.3*Math.sin(t*3)).toFixed(2));
  rise($('qt2'),p(u,S8+1.2,S8+1.7)); rise($('qa'),p(u,S8+5.8,S8+6.3)); rise($('qb'),p(u,S8+6.3,S8+6.8));
  HR.forEach((h,i)=>h.setAttribute('fill',u>=S8+7+i*.15?'var(--gain)':'var(--line)'));