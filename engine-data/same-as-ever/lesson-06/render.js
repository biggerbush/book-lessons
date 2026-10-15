const gr=.15+.85*p(u,TM.oak_tree,TM.oak_tree+3);
tf($('oak'),'translate(1320 700) scale('+gr.toFixed(3)+') translate(-1320 -700)');
const fk=p(u,TM.oak_tree+4,TM.oak_tree+4.6);
const chr=p(u,TM.oak_tree+4.3,TM.oak_tree+6);
CAN.forEach(c=>c.style.fill=chr>.3?'var(--muted)':'var(--gain)');
$('canopy').setAttribute('opacity',(1-.5*chr).toFixed(2));
tf($('canopy'),'translate(1320 430) scale('+(1-.3*chr).toFixed(3)+') translate(-1320 -430)');
$('fire').setAttribute('opacity',fk.toFixed(2));
FL.forEach(([g,q],i)=>{const sx=q[2]*fk*(1+.06*Math.sin(t*7+i)),sy=q[2]*fk*(.85+.2*Math.sin(t*9+i*2)),rt=5*Math.sin(t*6+i*1.7);
  tf(g,'translate('+q[0]+' '+q[1]+') rotate('+rt.toFixed(2)+') scale('+sx.toFixed(3)+' '+sy.toFixed(3)+')')});
rise($('lb0'),p(u,TM.oak_tree+1,TM.oak_tree+1.5));rise($('lb1'),p(u,TM.oak_tree+4.2,TM.oak_tree+4.7));

dr($('crash'),p(u,TM.crash_chart,TM.crash_chart+2.4));dr($('plunge'),p(u,TM.crash_chart+2.4,TM.crash_chart+2.7));
rise($('days'),p(u,TM.crash_chart+2.7,TM.crash_chart+3.1));
EV.forEach((g,i)=>{const a=TM.crash_chart+3.6+i*.6;rise(g,p(u,a,a+.4))});
const hk=p(u,TM.headline,TM.headline+.4);rise($('paper'),hk);
tf($('paperIn'),'rotate('+(3*Math.sin(t*18)*hk*(1-p(u,TM.headline+.4,TM.headline+1.6))).toFixed(2)+' 1230 460)');

BR.forEach((b,i)=>{const a=TM.stair_steps+i*.5;b.setAttribute('opacity',p(u,a,a+.3))});
rise($('yay'),p(u,TM.stair_steps+2,TM.stair_steps+2.5));
rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
CD.forEach((c,i)=>{const a=TM.calendar+.4+i*.05;c.setAttribute('opacity',p(u,a,a+.2))});
rise($('nohead'),p(u,TM.calendar+4.1,TM.calendar+4.6));

rise($('plane'),p(u,TM.wright_plane,TM.wright_plane+.5));
tf($('planeIn'),'translate('+(30*p(u,TM.wright_plane,TM.wright_plane+3)).toFixed(1)+' '+(6*Math.sin(t*2)-20*p(u,TM.wright_plane,TM.wright_plane+3)).toFixed(1)+')');
rise($('crowd'),p(u,TM.wright_plane+4.1,TM.wright_plane+4.6)*(1-.5*p(u,TM.empty_paper,TM.empty_paper+.6)));
rise($('paper3'),p(u,TM.empty_paper,TM.empty_paper+.5));
rise($('yrs'),p(u,TM.years_pass,TM.years_pass+.5));
TK.forEach((c,i)=>c.setAttribute('fill',u>=TM.years_pass+.4+i*.3?'var(--gain)':'var(--line)'));
rise($('yrsEnd'),p(u,TM.years_pass+4,TM.years_pass+4.5));

rise($('heart'),p(u,TM.heart_icon,TM.heart_icon+.5));
tf($('heartIn'),'translate(330 440) scale('+(1+.06*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(3)+')');
rise($('ch4'),p(u,TM.falling_line,TM.falling_line+.5));
dr($('hline'),p(u,TM.falling_line+.3,TM.falling_line+3.5));
SV.forEach((c,i)=>{const a=TM.falling_line+6.2+i*.02;c.setAttribute('opacity',p(u,a,a+.3))});
rise($('svlab'),p(u,TM.falling_line+6.2,TM.falling_line+6.7));
rise($('nn'),p(u,TM.no_news,TM.no_news+.6));

// scale: pivot raised to y=440 so the lowered pan stays well above the floor at y=760
rise($('sc5'),p(u,TM.news_scale,TM.news_scale+.5));
const PY=440,an=-13*p(u,TM.news_scale+3.8,TM.news_scale+5)*Math.PI/180,bx=300*Math.cos(an),by=300*Math.sin(an);
const bm=$('beam');bm.setAttribute('x1',(560-bx).toFixed(1));bm.setAttribute('y1',(PY-by).toFixed(1));bm.setAttribute('x2',(560+bx).toFixed(1));bm.setAttribute('y2',(PY+by).toFixed(1));
tf($('lp'),'translate('+(560-bx).toFixed(1)+' '+(PY-by).toFixed(1)+')');tf($('rp'),'translate('+(560+bx).toFixed(1)+' '+(PY+by).toFixed(1)+')');
rise($('face'),p(u,TM.gloomy_face,TM.gloomy_face+.5));rise($('f1'),p(u,TM.gloomy_face+.8,TM.gloomy_face+1.3));rise($('f2'),p(u,TM.gloomy_face+2,TM.gloomy_face+2.5));

rise($('ch6'),p(u,TM.investor,TM.investor+.5));
C6.forEach((g,i)=>{const a=TM.investor+3.8+i*.4;rise(g,p(u,a,a+.4))});
dr($('g6'),p(u,TM.investor,TM.investor+9));
$('dip').setAttribute('opacity',p(u,TM.investor+7.2,TM.investor+7.6));
const z=1+2*p(u,TM.long_view,TM.long_view+1.2)*(1-p(u,TM.long_view+3.7,TM.long_view+5));
tf($('zg'),'translate(1184 '+DY.toFixed(1)+') scale('+z.toFixed(3)+') translate(-1184 '+(-DY).toFixed(1)+')');
rise($('zl'),p(u,TM.long_view,TM.long_view+.5));
const zo=u>=TM.long_view+3.7;$('zlt').textContent=zo?'ZOOMED OUT: THE GROWTH IS REAL':'ZOOMED IN: IT LOOKS LIKE LOSS';$('zlt').style.fill=zo?'var(--gain)':'var(--loss)';

AL.forEach((a,i)=>{const s=TM.photo_album+i*.5;rise(a[0],p(u,s,s+.4));a[1].setAttribute('stroke',(i===0||i===3)&&u>=TM.photo_album+3.5?'var(--gain)':'var(--line)')});
rise($('log'),p(u,TM.progress_log,TM.progress_log+.5));
LG.forEach((g,i)=>{const a=TM.progress_log+1+i*.8;rise(g,p(u,a,a+.4))});

rise($('qa'),p(u,TM.magnifier,TM.magnifier+.5));rise($('qb'),p(u,TM.magnifier+.4,TM.magnifier+.9));rise($('qc'),p(u,TM.magnifier+.8,TM.magnifier+1.3));
rise($('mag'),p(u,TM.magnifier+1.5,TM.magnifier+2));rise($('ml'),p(u,TM.magnifier+7,TM.magnifier+7.5));
tf($('magIn'),'translate('+(24*Math.sin(t*.9)).toFixed(1)+' '+(12*Math.sin(t*1.4)).toFixed(1)+')');