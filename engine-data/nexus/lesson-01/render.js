rise($('t_me'),p(u,TM.sapiens,TM.sapiens+.5));rise($('t_lbl'),p(u,TM.sapiens+.8,TM.sapiens+1.3));
TS.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.sapiens+.4+i*.3,TM.sapiens+.7+i*.3)));
rise($('t_q'),p(u,TM.puzzle,TM.puzzle+.5));$('t_qt').setAttribute('transform','rotate('+(8*Math.sin(t*2)).toFixed(1)+' 1210 340)');

BK.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.library+i*.04,TM.library+i*.04+.3)));
rise($('l_gal'),p(u,TM.galaxy,TM.galaxy+.5));rise($('l_cell'),p(u,TM.galaxy+.8,TM.galaxy+1.3));
$('l_arm').setAttribute('transform','translate(960 370) rotate('+(t*10%360).toFixed(1)+')');
WN.forEach((g,i)=>rise(g,p(u,TM.warning+i*1.4,TM.warning+i*1.4+.5)));

rise($('n0'),p(u,TM.chain,TM.chain+.5));
rise($('a1'),p(u,TM.arrow_truth,TM.arrow_truth+.4));rise($('n1'),p(u,TM.arrow_truth+.3,TM.arrow_truth+.8));
rise($('a2'),p(u,TM.arrow_wisdom,TM.arrow_wisdom+.4));rise($('n2'),p(u,TM.arrow_wisdom+.3,TM.arrow_wisdom+.8));
rise($('nv_gap'),p(u,TM.arrow_wisdom+3.3,TM.arrow_wisdom+3.8));
GQ.forEach((q,i)=>q.setAttribute('fill',u>=TM.arrow_wisdom+4+i*.25?'var(--gain)':'var(--stage)'));

rise($('p_srv'),p(u,TM.tech_campus,TM.tech_campus+.5));rise($('p_pipe'),p(u,TM.open_pipes,TM.open_pipes+.5));
const edge=x=>cl((x-450)/30)*cl((1390-x)/30);
PL.forEach((d,i)=>{const x=450+((i*117.5+t*140)%940),k=cl((x-500)/600);
  d.setAttribute('cx',x.toFixed(1));d.setAttribute('cy',(410+20*Math.sin(i*1.7)).toFixed(1));
  d.setAttribute('r',(12*(1-.75*k)).toFixed(1));d.setAttribute('opacity',(edge(x)*(1-k)).toFixed(2))});
PT.forEach((d,i)=>{const x=450+((i*117.5+58+t*140)%940);
  d.setAttribute('cx',x.toFixed(1));d.setAttribute('cy',(410+20*Math.sin(i*2.3+1)).toFixed(1));d.setAttribute('opacity',edge(x).toFixed(2))});
PX.forEach((d,i)=>{const x=900+((i*61.25+30+t*140)%490);
  d.setAttribute('cx',x.toFixed(1));d.setAttribute('cy',(410+22*Math.sin(i*1.3+2)).toFixed(1));d.setAttribute('opacity',(cl((x-900)/80)*cl((1390-x)/30)).toFixed(2))});
rise($('p_hope'),p(u,TM.open_pipes+6.6,TM.open_pipes+7.1));rise($('p_hist'),p(u,TM.open_pipes+8.8,TM.open_pipes+9.4));

rise($('pr'),p(u,TM.press,TM.press+.5));
const py=400+30*Math.abs(Math.sin(t*2));$('pr_plat').setAttribute('y',py.toFixed(1));$('pr_scr').setAttribute('y2',py.toFixed(1));
FL.forEach((f,i)=>{const c=(t*.5+i/4)%1;f.setAttribute('x',(420+130*c).toFixed(1));f.setAttribute('y',(480-70*Math.sin(c*Math.PI)).toFixed(1));f.setAttribute('opacity',((1-c)*(u>=TM.press?1:0)).toFixed(2))});
rise($('tl'),p(u,TM.telescope,TM.telescope+.5));rise($('pa'),p(u,TM.pamphlets,TM.pamphlets+.5));
rise($('wb'),p(u,TM.witch_book,TM.witch_book+.5));rise($('wf'),p(u,TM.witch_book+5,TM.witch_book+5.6));

const fl=p(u,TM.cheap_story+8.3,TM.cheap_story+9.8),sa0=.16-.32*fl,ca=Math.cos(sa0),sa=Math.sin(sa0);
$('sc_beam').setAttribute('transform','rotate('+(-sa0*57.3).toFixed(2)+' 800 330)');
$('sc_L').setAttribute('transform','translate('+(800-300*ca).toFixed(1)+' '+(330+300*sa).toFixed(1)+')');
$('sc_R').setAttribute('transform','translate('+(800+300*ca).toFixed(1)+' '+(330-300*sa).toFixed(1)+')');
const nc=(u>=TM.cheap_story?3:0)+Math.floor(18*fl);CD.forEach((c,i)=>c.setAttribute('opacity',i<nc?1:0));
rise($('sc'),p(u,TM.scale,TM.scale+.5));rise($('sc_tl'),p(u,TM.scale+1.8,TM.scale+2.3));rise($('sc_tr'),p(u,TM.cheap_story,TM.cheap_story+.5));
rise($('sc_cost'),p(u,TM.cheap_story+2.9,TM.cheap_story+3.5));rise($('sc_fl'),p(u,TM.cheap_story+8.3,TM.cheap_story+8.9));

rise($('so'),p(u,TM.sorcerer,TM.sorcerer+.5));
BR.forEach((b,i)=>b.setAttribute('transform','translate(0 '+(10*Math.sin(t*4+i*1.3)).toFixed(1)+')'));
$('so_x').setAttribute('opacity',p(u,TM.sorcerer+4.6,TM.sorcerer+5.1));
rise($('nw_w'),p(u,TM.network,TM.network+.6));
$('nw').setAttribute('transform','translate('+(60*p(u,TM.crowd,TM.crowd+4)).toFixed(1)+' 0)');
rise($('cr'),p(u,TM.crowd,TM.crowd+.5));

rise($('rm'),p(u,TM.raw_material,TM.raw_material+.5));
$('ar').setAttribute('opacity',p(u,TM.raw_material+1,TM.raw_material+1.5));
rise($('mg_w'),p(u,TM.magnifier,TM.magnifier+.5));rise($('mg_c'),p(u,TM.magnifier+.6,TM.magnifier+1.1));
$('mg').setAttribute('transform','translate('+(340+150*Math.sin(t*1.2)).toFixed(1)+' '+(500+30*Math.sin(t*2)).toFixed(1)+')');
rise($('fn'),p(u,TM.filter,TM.filter+.5));rise($('ft'),p(u,TM.filter+.6,TM.filter+1.2));
FD.forEach((d,i)=>{const c=(t*.35+i/14)%1,sx=920+i*36;let x=1150,y,o=1;if(c<.6){const k=c/.6;x=sx+(1150-sx)*k;y=240+300*k}else{y=540+(c-.6)/.4*200;o=i%4?0:1}d.setAttribute('cx',x.toFixed(1));d.setAttribute('cy',y.toFixed(1));d.setAttribute('opacity',o)});

rise($('qa'),p(u,TM.challenge,TM.challenge+.5));rise($('qb'),p(u,TM.challenge+.4,TM.challenge+.9));rise($('qc'),p(u,TM.challenge+.8,TM.challenge+1.3));
rise($('ch_g'),p(u,TM.challenge+1.3,TM.challenge+1.8));