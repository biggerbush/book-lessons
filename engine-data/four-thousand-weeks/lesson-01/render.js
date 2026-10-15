rise($('hg'),p(u,TM.hourglass,TM.hourglass+.6));
  const f=p(u,TM.hourglass+.4,TM.hourglass+8.5),ly=290+150*f,dx=78*(ly-276)/174;
  $('sandT').setAttribute('points',(1250+dx).toFixed(1)+','+ly.toFixed(1)+' '+(1430-dx).toFixed(1)+','+ly.toFixed(1)+' 1340,446');
  $('sandB').setAttribute('points','1262,616 1418,616 1340,'+(608-110*f).toFixed(1));
  $('stream').setAttribute('opacity',f>0&&f<1?1:0);

  rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  ['e1','e2','e3'].forEach((id,i)=>{const a=TM.calendar+.8+i*1.2;rise($(id),p(u,a,a+.5))});
  rise($('gridlab'),p(u,TM.grid,TM.grid+.5));
  ROWS.forEach((r,i)=>{const a=TM.grid+.3+i*.03;r.setAttribute('opacity',p(u,a,a+.3));r.setAttribute('fill',i<40&&u>=TM.pencil+.5+i*.06?'var(--ink)':'var(--line)')});
  rise($('pen'),p(u,TM.pencil,TM.pencil+.4));
  $('penm').setAttribute('transform','translate(1410 '+(252+280*p(u,TM.pencil+.5,TM.pencil+2.9)).toFixed(1)+') scale(.8)');
  rise($('half'),p(u,TM.pencil+1,TM.pencil+1.5));

  rise($('auth'),p(u,TM.author,TM.author+.5)); rise($('sheet'),p(u,TM.author+1,TM.author+1.5));
  rise($('wl'),p(u,TM.wish_list,TM.wish_list+.5));
  const ph=330*p(u,TM.wish_list,TM.wish_list+.8)+300*p(u,TM.overflow,TM.overflow+1.6);
  $('paper').setAttribute('d','M700 '+(230+ph).toFixed(1)+'V230H1180V'+(230+ph).toFixed(1));
  IT.forEach((g,i)=>{const a=i<4?TM.wish_list+.6+i*.5:TM.overflow+(i-4)*.4;rise(g,p(u,a,a+.4))});
  rise($('more'),p(u,TM.overflow+2,TM.overflow+2.6)); rise($('same'),p(u,TM.overflow+2.6,TM.overflow+3.2));

  rise($('cardo'),p(u,SC[3][0]/K+.4,SC[3][0]/K+.9));
  $('card').setAttribute('opacity',(1-.65*p(u,TM.shrug+1.5,TM.shrug+2.5)).toFixed(2));
  rise($('shr'),p(u,TM.shrug,TM.shrug+.5)); rise($('sign'),p(u,TM.someday_sign,TM.someday_sign+.6));
  [0,1,2].forEach(i=>{const a=TM.someday_sign+4.6+i*.6;rise($('den'+i),p(u,a,a+.5))});

  rise($('scr'),p(u,TM.scroll,TM.scroll+.6)); rise($('mag'),p(u,TM.magnifier,TM.magnifier+.5));
  $('magm').setAttribute('transform','translate(0 '+(8*Math.sin(t*2)).toFixed(1)+')');
  rise($('b1'),p(u,TM.magnifier+2.2,TM.magnifier+2.7)); rise($('b2'),p(u,TM.magnifier+3,TM.magnifier+3.4));
  $('b2r').setAttribute('width',(780*p(u,TM.magnifier+3.2,TM.magnifier+5.5)).toFixed(1));
  rise($('never'),p(u,TM.magnifier+5,TM.magnifier+5.6));

  rise($('phil'),p(u,TM.philosopher,TM.philosopher+.5)); rise($('wal'),p(u,TM.clock_figure,TM.clock_figure+.5));
  rise($('nox'),p(u,TM.clock_figure+2.5,TM.clock_figure+3)); rise($('made'),p(u,TM.clock_figure+5.8,TM.clock_figure+6.3));
  SQ.forEach(s=>s[0].setAttribute('fill',u>=TM.clock_figure+6.3+s[1]*2?'var(--gain)':'var(--line)'));
  rise($('who'),p(u,TM.clock_figure+7.5,TM.clock_figure+8.1));

  rise($('bp'),p(u,TM.backpack,TM.backpack+.5));
  const dr=p(u,TM.backpack+2,TM.backpack+3);
  $('bag').setAttribute('transform','translate('+(40*dr).toFixed(1)+' '+(230*dr).toFixed(1)+')');
  $('car').setAttribute('transform','translate(0 '+(16*(1-dr)).toFixed(1)+')');
  rise($('sp'),p(u,TM.signpost,TM.signpost+.6)); rise($('spot'),p(u,TM.spotlight,TM.spotlight+.6));
  $('cone').setAttribute('fill-opacity',(.18+.06*Math.sin(t*3)).toFixed(2));
  rise($('mean'),p(u,TM.spotlight+1.5,TM.spotlight+2.1));

  $('sun').setAttribute('transform','translate(0 '+(760-160*p(u,TM.sunrise,TM.sunrise+2.5)).toFixed(1)+')');
  $('rays').setAttribute('opacity',p(u,TM.sunrise+2,TM.sunrise+3));
  rise($('wk'),p(u,TM.sunrise+4.4,TM.sunrise+4.9));
  WK.forEach((b,i)=>b.setAttribute('fill',u>=TM.sunrise+5+i*.3?'var(--gain)':'var(--stage)'));
  rise($('st'),p(u,TM.sunrise+4.7,TM.sunrise+5.2)); rise($('purp'),p(u,TM.sunrise+5.5,TM.sunrise+6.1));

  rise($('mini'),p(u,TM.small_box,TM.small_box+.6)); rise($('ptw'),p(u,TM.small_box,TM.small_box+.5));
  $('ring').setAttribute('r',(12+8*Math.abs(Math.sin(t*3))).toFixed(1));
  $('hot').setAttribute('fill',u>=TM.small_box+4.5?'var(--gain)':'var(--stage)');
  rise($('qa'),p(u,TM.small_box+.4,TM.small_box+.9)); rise($('qb'),p(u,TM.small_box+1,TM.small_box+1.5));
  rise($('qc'),p(u,TM.small_box+4.5,TM.small_box+5)); rise($('lab'),p(u,TM.small_box+5.2,TM.small_box+5.7));