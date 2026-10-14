rise($('t_bub'),p(u,TM.gut_badge+.3,TM.gut_badge+.8)); rise($('t_badge'),p(u,TM.gut_badge+.8,TM.gut_badge+1.3));
$('t_bc').setAttribute('r',(34+3*Math.sin(t*3)).toFixed(1)); rise($('t_q'),p(u,TM.gut_badge+3,TM.gut_badge+3.6));

const k1=p(u,TM.check_mark,TM.check_mark+1);
cards.forEach((g,i)=>{const o=SCAT[i],q=1-k1;g.setAttribute('transform','translate('+(o[0]*q).toFixed(1)+' '+(o[1]*q).toFixed(1)+') rotate('+(o[2]*q).toFixed(1)+' '+(195+i*165)+' 335)');g.setAttribute('opacity',p(u,TM.story_book+i*.25,TM.story_book+i*.25+.4))});
$('st_link').setAttribute('opacity',p(u,TM.check_mark+.9,TM.check_mark+1.3)); rise($('st_chk'),p(u,TM.check_mark+1,TM.check_mark+1.5));
const sb=TM.check_mark+5.4; rise($('st_bars'),p(u,sb,sb+.5));
$('st_b1').setAttribute('width',(48+472*p(u,sb+.5,sb+1.7)).toFixed(1)); $('st_b2').setAttribute('width',(48+82*p(u,sb+.9,sb+2)).toFixed(1));

// log over the wall: tilted log held overhead, pushed up and over the wall top without touching it
rise($('sd_men'),p(u,TM.soldiers,TM.soldiers+.5));
const lw=TM.log_wall,ldx=-29.2*p(u,lw+1.5,lw+4),fx=250+ldx,bx=690+ldx,lift=p(u,lw+.2,lw+1),lg=$('sd_log');
lg.setAttribute('x1',fx.toFixed(1)); lg.setAttribute('y1',LY(fx).toFixed(1)); lg.setAttribute('x2',bx.toFixed(1)); lg.setAttribute('y2',LY(bx).toFixed(1));
lg.setAttribute('opacity',p(u,lw,lw+.5)); rise($('sd_rule'),p(u,lw+.6,lw+1.1));
rise($('sd_note'),p(u,TM.notepad,TM.notepad+.5)); rise($('sd_stamp'),p(u,TM.notepad+3,TM.notepad+3.5));
const led=u>=TM.notepad+1,gave=u>=TM.notepad+1.6;
men.forEach((m,i)=>{const c=i===1&&led?'gain':(i===3&&gave?'loss':'ink'); setC(m.f,c); setC(m.s,'s-'+c);
  const x=MX[i]; m.a.forEach((a,k)=>{const s=k?1:-1,sx=x+18*s,hx0=x+28*s,hy0=652; let tx=hx0,ty=hy0,hold=false;
    if(i<2){const hx=x+28*s; if(hx>=fx+4&&hx<=bx-4){tx=hx;ty=LY(hx)+13;hold=true}}
    else if(i===2&&s<0){tx=bx+4;ty=LY(bx)+10;hold=true}
    const q=hold?lift:0,ex=hx0+(tx-hx0)*q,ey=hy0+(ty-hy0)*q;
    a.setAttribute('d','M'+sx+' 604L'+ex.toFixed(1)+' '+ey.toFixed(1))})});

rise($('fb_card'),p(u,TM.report_card,TM.report_card+.5));
acts.forEach((a,i)=>rise(a,p(u,TM.report_card+1+i*.3,TM.report_card+1.4+i*.3)));
rise($('fb_coin'),p(u,TM.coin_flip,TM.coin_flip+.5));
const ca=t*2.5,cc=Math.cos(ca),sx=Math.max(.04,Math.abs(cc)),hop=-60*Math.abs(Math.sin(ca));
$('fb_cg').setAttribute('transform','translate(830 '+(430+hop).toFixed(1)+') scale('+sx.toFixed(3)+' 1)');
$('fb_cl').textContent=cc>=0?'H':'T'; $('fb_cl').style.fill=cc>=0?'var(--gain)':'var(--loss)';
const ny=TM.coin_flip+3.3; rise($('fb_next'),p(u,ny,ny+.5)); $('fb_cf').setAttribute('width',(44+356*p(u,ny+.6,ny+1.8)).toFixed(1));
rise($('fb_ill'),p(u,SC[3][1]/K-3.4,SC[3][1]/K-2.8));

rise($('pl_book'),p(u,TM.textbook,TM.textbook+.5)); rise($('pl_cal'),p(u,TM.calendar,TM.calendar+.5));
cells.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.6+i*.05?'var(--gain)':'var(--line)'));
rise($('pl_exp'),p(u,TM.expert,TM.expert+.5));

rise($('ov_ppl'),p(u,TM.forty_pct-.6,TM.forty_pct));
ov.forEach((f,i)=>{f.forEach(e=>e.setAttribute('opacity',i<4&&u>=TM.forty_pct+.6?.3:1)); setC(f,i>=4&&u>=TM.clock+.4?'gain':'ink')});
$('ov_x').setAttribute('opacity',p(u,TM.forty_pct+.6,TM.forty_pct+1)); rise($('ov_a'),p(u,TM.forty_pct+.3,TM.forty_pct+.8));
$('ov_40').textContent=Math.round(40*p(u,TM.forty_pct+.3,TM.forty_pct+1.5))+'%';
rise($('ov_b'),p(u,TM.clock,TM.clock+.5)); const ha=t*2;
$('ov_h').setAttribute('d','M590 500l'+(26*Math.sin(ha)).toFixed(1)+' '+(-26*Math.cos(ha)).toFixed(1)+'M590 500v-18');
rise($('ov_c'),p(u,TM.clock+3,TM.clock+3.5)); rise($('ov_d'),p(u,TM.eight_years,TM.eight_years+.5));
$('ov_8').textContent=Math.max(1,Math.round(8*p(u,TM.eight_years+.3,TM.eight_years+1.5)))+' years';

rise($('pf_best'),p(u,TM.best_case,TM.best_case+.5)); rise($('pf_ol'),p(u,TM.base_rate,TM.base_rate+.5));
bars.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.base_rate+i*.08,TM.base_rate+i*.08+.3)));
rise($('pf_typ'),p(u,TM.base_rate+1.4,TM.base_rate+1.9));
const ad=TM.base_rate+5; $('pf_you').setAttribute('opacity',p(u,ad,ad+.3)); $('pf_you').setAttribute('cx',(677+95*p(u,ad+.5,ad+1.6)).toFixed(1));
rise($('pf_adj'),p(u,ad+.3,ad+.8));

rise($('tc_th'),p(u,TM.thermometer,TM.thermometer+.5));
const mh=360*p(u,TM.thermometer+.2,TM.thermometer+1.5)+(u>=TM.thermometer+1.5?6*Math.sin(t*2):0);
$('tc_m').setAttribute('y',(640-mh).toFixed(1)); $('tc_m').setAttribute('height',(mh+30).toFixed(1));
rise($('tc_card'),p(u,TM.thermometer+3,TM.thermometer+3.5)); $('tc_no').setAttribute('opacity',p(u,TM.mirror,TM.mirror+.4));
rise($('tc_mir'),p(u,TM.mirror,TM.mirror+.5)); rise($('tc_ref'),p(u,TM.mirror+.8,TM.mirror+1.4));

const cb=SC[8][0]/K; rise($('cq_l'),p(u,cb+.3,cb+.8)); rise($('cq_g'),p(u,cb+.6,cb+1.1));
rise($('cq_a'),p(u,cb+3.4,cb+3.9)); rise($('cq_b'),p(u,cb+3.8,cb+4.3)); rise($('cq_c'),p(u,cb+4.2,cb+4.7));
const f=(t%6)/6,w=40*(1-f),y0=668-90*(1-f);
$('cq_top').setAttribute('points',(1390-w).toFixed(1)+','+y0.toFixed(1)+' '+(1390+w).toFixed(1)+','+y0.toFixed(1)+' 1390,668');
$('cq_bot').setAttribute('points','1345,772 1435,772 1390,'+(772-60*f).toFixed(1));