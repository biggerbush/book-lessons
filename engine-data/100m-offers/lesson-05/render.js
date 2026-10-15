const R=(el,a,d)=>RR(el,u,a,d);
  B0.forEach((g,i)=>{const a=TM.stack_blocks+i*.4;drop(g,p(u,a,a+.5),260)});
  R('silly',TM.stack_blocks+3);

  R('dream',TM.dream_cloud,.6);
  const k1=p(u,TM.path_line,TM.path_line+2.5);$('stair').setAttribute('stroke-dashoffset',(1050*(1-k1)).toFixed(1));
  SD.forEach((c,i)=>c.setAttribute('opacity',k1>=(i+1)/6-.01?1:0));
  ['bf','du','af'].forEach((id,i)=>R(id,TM.path_line+4.2+i*.6));

  OB.forEach((g,i)=>R(g,TM.obstacle_list+i*.45,.4));
  [0,1,2].forEach(i=>R('tg'+i,TM.obstacle_list+4.2+i*.5));
  R('val',TM.obstacle_list+8.4,.6);R('valt',TM.obstacle_list+9.2);
  PL.forEach((g,i)=>{const a=TM.pile_paper+i*.12;drop(g,p(u,a,a+.4),120)});
  R('pl1',TM.pile_paper);R('pl2',TM.pile_paper+1.4);

  R('own',TM.gym_owner);
  [TM.grocery_cart,TM.frying_pan,TM.restaurant].forEach((a,i)=>R('c3_'+i,a));

  R('lc0',TM.flip_arrow);R('lc1',TM.flip_arrow+.4);
  $('fa0').setAttribute('opacity',p(u,TM.flip_arrow+.6,TM.flip_arrow+1.2));
  $('fa1').setAttribute('opacity',p(u,TM.shopping_list+4.2,TM.shopping_list+4.6));
  R('howto',TM.flip_arrow+3);R('tpl',TM.flip_arrow+3.4);
  [TM.shopping_list,TM.shopping_list+4.2].forEach((a,i)=>{const k=p(u,a,a+.6),g=$('fr'+i);g.setAttribute('opacity',k>0?1:0);
    g.setAttribute('transform','translate(1140 0) scale('+Math.max(k,.001).toFixed(3)+' 1) translate(-1140 0)')});

  R('sol',TM.delivery_menu);R('br0',TM.one_on_one);R('br1',TM.phone_chat);
  DC.forEach((g,i)=>R(g,i<3?TM.one_on_one+i*1.2:i<5?TM.phone_chat+(i-3)*2:TM.phone_chat+6.1));
  R('bst',TM.phone_chat+6.1);

  R('sci',TM.scissors,.4);R('cutl',TM.scissors+.3);
  const sn=Math.abs(Math.sin(t*3))*14*p(u,TM.scissors,TM.scissors+.4);
  $('bl1').setAttribute('transform','rotate('+(-sn).toFixed(1)+' 1330 390)');$('bl2').setAttribute('transform','rotate('+sn.toFixed(1)+' 1330 390)');
  R('zones',TM.value_scale,.6);R('dots6',TM.value_scale+.3);
  D6.forEach(([c,k])=>{if(k=='c'){const b=p(u,TM.value_scale+2,TM.value_scale+3);c.setAttribute('fill',u>=TM.value_scale+1?'var(--loss)':'var(--muted)');c.setAttribute('opacity',(1-b).toFixed(2));c.setAttribute('transform','translate(0 '+(40*b).toFixed(1)+')')}
    else if(k=='k'){const a=p(u,TM.value_scale+5,TM.value_scale+5.5);c.setAttribute('fill',a>0?'var(--gain)':'var(--muted)');c.setAttribute('r',(18+6*a).toFixed(1))}});
  R('tpl6',TM.value_scale+10);R('ses6',TM.value_scale+10.4);
  const kx=p(u,TM.value_scale+11.5,TM.value_scale+12);
  $('sesx').setAttribute('opacity',kx.toFixed(3));$('ses6i').setAttribute('opacity',(1-.5*kx).toFixed(3));

  R('box',TM.gift_box,.4);
  PC.forEach((r,i)=>{const a=TM.gift_box+.3+i*.3,k=p(u,a,a+.6);r.setAttribute('transform','translate(0 '+(-310*(1-k)).toFixed(1)+')');r.setAttribute('opacity',k>0?1:0)});
  const kl=p(u,TM.gift_box+2.2,TM.gift_box+2.8);$('lid').setAttribute('transform','translate(0 '+(-120*(1-kl)).toFixed(1)+')');$('lid').setAttribute('opacity',kl.toFixed(3));
  R('dom',TM.gift_box+3);
  DM.forEach((r,i)=>{const a=TM.gift_box+3.4+i*.35;r.setAttribute('transform','rotate('+(72*p(u,a,a+.5)).toFixed(1)+' '+(670+i*70)+' 760)')});
  TW.forEach((g,i)=>{const a=TM.stack_tower+i*.35;drop(g,p(u,a,a+.5),300)});
  R('only',TM.stack_tower+2);R('nocmp',TM.stack_tower+2.5);

  R('np',TM.notepad);R('ins',TM.notepad+.3);
  NL.forEach((l,i)=>{const a=TM.notepad+.6+i*.4;l.setAttribute('stroke-dashoffset',(176*(1-p(u,a,a+.4))).toFixed(1))});
  R('qa',TM.notepad+5.4);R('qb',TM.notepad+5.8);$('ring').setAttribute('opacity',p(u,TM.notepad+6.2,TM.notepad+6.8));