const dk=p(u,TM.title_door+.4,TM.title_door+2);
  rise($('door0'),p(u,TM.title_door,TM.title_door+.5)); $('leaf').setAttribute('width',(120-96*dk).toFixed(1));
  $('glow').setAttribute('opacity',(dk*(.75+.25*Math.sin(t*2))).toFixed(2));
  [0,1,2].forEach(i=>drw($('tp'+i),p(u,TM.title_door+4+i*.4,TM.title_door+4.8+i*.4)));

  rise($('start'),p(u,TM.three_roads,TM.three_roads+.5)); rise($('faint'),p(u,TM.three_roads+.4,TM.three_roads+1));
  [0,4.2,7.6].forEach((o,i)=>{const a=TM.road_create+o; drw(RD[i][0],p(u,a,a+1)); rise(RD[i][1],p(u,a+.6,a+1.1))});

  rise($('bench'),p(u,TM.workbench,TM.workbench+.5));
  BK.forEach((b,i)=>{const a=TM.finished_task+i*.6,k=p(u,a,a+.5); b.setAttribute('opacity',k); b.setAttribute('transform','translate(0 '+(-(1-k)*120).toFixed(1)+')')});
  rise($('only'),p(u,TM.finished_task+3.5,TM.finished_task+4));
  rise($('cA'),p(u,TM.finished_task+6.1,TM.finished_task+6.6)); rise($('cB'),p(u,TM.finished_task+9.9,TM.finished_task+10.4));

  rise($('hut'),p(u,TM.camp_hut,TM.camp_hut+.5)); rise($('pris'),p(u,TM.camp_hut+5,TM.camp_hut+5.5)); rise($('rush'),p(u,TM.sunset,TM.sunset+.4));
  $('prisM').setAttribute('transform','translate('+(560*p(u,TM.sunset+1.5,TM.sunset+4.5)).toFixed(1)+' 0)');
  rise($('sun'),p(u,TM.sunset+1,TM.sunset+2)); $('ring').setAttribute('d',ringD(140+6*Math.sin(t*2)));
  rise($('clouds'),p(u,TM.sunset+6.6,TM.sunset+7.4)); rise($('beau'),p(u,TM.sunset+9,TM.sunset+9.6));

  rise($('lv'),p(u,TM.two_figures,TM.two_figures+.5)); rise($('bl'),p(u,TM.two_figures+.4,TM.two_figures+.9));
  rise($('gz'),p(u,TM.two_figures+3.4,TM.two_figures+3.9)); rise($('pt'),p(u,TM.two_figures+5,TM.two_figures+5.6));
  const sk=p(u,TM.seedling,TM.seedling+1.5); $('stem').setAttribute('d','M1340 640V'+(640-170*sk).toFixed(1)); $('stem').setAttribute('opacity',sk>0?1:0);
  rise($('leaves'),p(u,TM.seedling+1,TM.seedling+1.6)); rise($('grow'),p(u,TM.seedling+.5,TM.seedling+1.1));

  GT.forEach((g,i)=>rise(g,p(u,TM.closed_gate+i*.5,TM.closed_gate+i*.5+.5)));
  $('ln2').setAttribute('class',u>=TM.lone_walker?'s-gain':'s-line');
  rise($('wk'),p(u,TM.lone_walker,TM.lone_walker+.4));
  $('wkM').setAttribute('transform','translate('+(200+1050*p(u,TM.lone_walker+.3,TM.lone_walker+5)).toFixed(1)+' '+(-3*Math.abs(Math.sin(t*5))).toFixed(1)+')');
  rise($('qt'),p(u,TM.lone_walker+4.6,TM.lone_walker+5.2));

  rise($('dc'),p(u,TM.old_doctor,TM.old_doctor+.5));
  rise($('grief'),p(u,TM.old_doctor+.4,TM.old_doctor+1)*(1-p(u,TM.shield+7.4,TM.shield+8.4)));
  rise($('ch'),p(u,TM.empty_chair,TM.empty_chair+.5)); rise($('q1'),p(u,TM.empty_chair+.3,TM.empty_chair+.8));
  rise($('q2'),p(u,TM.empty_chair+5,TM.empty_chair+5.5)); rise($('sh'),p(u,TM.shield,TM.shield+.6));
  $('chairP').style.stroke=u>=TM.shield?'var(--gain)':'var(--ink)'; rise($('cm'),p(u,TM.shield+7.4,TM.shield+8));

  rise($('ws'),p(u,TM.warning_sign,TM.warning_sign+.5)); $('bang').setAttribute('opacity',(.7+.3*Math.sin(t*4)).toFixed(2));
  rise($('r1'),p(u,TM.warning_sign+3.7,TM.warning_sign+4.2)); rise($('r2'),p(u,TM.warning_sign+6.7,TM.warning_sign+7.2));

  rise($('nb'),p(u,TM.notebook,TM.notebook+.5)); rise($('ml'),p(u,TM.notebook+.5,TM.notebook+1));
  [0,1,2].forEach(i=>drw($('ck'+i),p(u,TM.notebook+1.5+i*1.5,TM.notebook+2+i*1.5)));
  rise($('qa'),p(u,TM.notebook+7.8,TM.notebook+8.3)); rise($('qb'),p(u,TM.notebook+8.2,TM.notebook+8.7));