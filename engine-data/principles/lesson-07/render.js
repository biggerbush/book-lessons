TB.forEach((b,i)=>rise(b,p(u,TM.title_card+i*.3,TM.title_card+i*.3+.5)));
const wk=p(u,TM.title_card+1.6,TM.title_card+2.6);
WIN.setAttribute('transform','translate(0 '+(-50*wk-4*wk*Math.sin(t*2)).toFixed(1)+')'); CROWN.setAttribute('opacity',wk);

rise($('boss'),p(u,TM.boss_desk,TM.boss_desk+.5)); rise($('team'),p(u,TM.boss_desk+.8,TM.boss_desk+1.3));
BG.forEach((b,i)=>rise(b,p(u,TM.quiet_team+i*.15,TM.quiet_team+i*.15+.4)));
TH.forEach((h,i)=>h.setAttribute('cy',(470+(u>=TM.quiet_team?7*Math.abs(Math.sin(t*3+i*.7)):0)).toFixed(1)));
rise($('merit'),p(u,TM.quiet_team+3.6,TM.quiet_team+4.2));

rise($('mail'),p(u,TM.email_screen,TM.email_screen+.5));
MB.forEach((r,i)=>r.setAttribute('width',(MW[i]*p(u,TM.email_screen+.4+i*.25,TM.email_screen+.9+i*.25)).toFixed(0)));
rise($('mgr'),p(u,TM.grade_d,TM.grade_d+.4)); rise($('grade'),p(u,TM.grade_d+.3,TM.grade_d+.9));
rise($('nopun'),p(u,TM.grade_d+4.8,TM.grade_d+5.3));
rise($('thumb'),p(u,TM.thumbs_up,TM.thumbs_up+.5)); rise($('more'),p(u,TM.thumbs_up+.6,TM.thumbs_up+1.1));
$('thIn').setAttribute('transform','rotate('+(4*Math.sin(t*3)).toFixed(1)+' 1350 480)');

rise($('rec'),p(u,TM.tape_recorder,TM.tape_recorder+.5));
SPK.forEach((s,i)=>s.setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' '+[220,400][i]+' 410)'));
$('recdot').setAttribute('opacity',Math.sin(t*4)>0?1:.25);
rise($('shelf'),p(u,TM.library_shelf,TM.library_shelf+.4));
TP.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.library_shelf+i*.06,TM.library_shelf+i*.06+.3)));
rise($('shlab'),p(u,TM.library_shelf+1,TM.library_shelf+1.5));
rise($('door'),p(u,TM.library_shelf+4.6,TM.library_shelf+5.1));
const dk=p(u,TM.open_door,TM.open_door+1); $('dpan').setAttribute('width',(260-200*dk).toFixed(1)); $('knob').setAttribute('cx',(1350-200*dk).toFixed(1));
rise($('honest'),p(u,TM.open_door+.8,TM.open_door+1.4));

rise($('phone'),p(u,TM.dot_app,TM.dot_app+.5));
let tpx=-1,tpy=0;
RR.forEach(([ds,s,y],i)=>{const a=TM.dot_app+.8+i*.7, n=s*p(u,a,a+.6);
  ds.forEach((d,k)=>d.setAttribute('fill',k<n-.01?'var(--gain)':'var(--line)'));
  if(u>=a&&u<a+.7){tpx=178+Math.max(0,Math.ceil(n)-1)*40; tpy=y+32}});
const tc=(t*3)%1;
TAP.setAttribute('cx',Math.max(tpx,178)); TAP.setAttribute('cy',tpy||362);
TAP.setAttribute('r',(14+10*tc).toFixed(1)); TAP.setAttribute('opacity',tpx<0?0:(1-tc).toFixed(2));
rise($('plink'),p(u,TM.score_grid,TM.score_grid+.5));
PK.forEach((c,j)=>{const f=(t*.9+j/3)%1; c.setAttribute('cx',(390+74*f).toFixed(1)); c.setAttribute('opacity',(Math.sin(f*Math.PI)).toFixed(2))});
rise($('grid'),p(u,TM.score_grid,TM.score_grid+.5));
CE.forEach((r,i)=>r.setAttribute('fill-opacity',(.06+.94*VV[i]*p(u,TM.score_grid+.5+(i%4)*.3,TM.score_grid+2+(i%4)*.3)).toFixed(2)));
rise($('scl'),p(u,TM.scale,TM.scale+.5));
const sa=-12*p(u,TM.scale+.8,TM.scale+2),sr=sa*Math.PI/180;
$('beam').setAttribute('transform','rotate('+sa.toFixed(2)+' 1250 330)');
$('panL').setAttribute('transform','translate('+(1250-150*Math.cos(sr)).toFixed(1)+' '+(330-150*Math.sin(sr)).toFixed(1)+')');
$('panR').setAttribute('transform','translate('+(1250+150*Math.cos(sr)).toFixed(1)+' '+(330+150*Math.sin(sr)).toFixed(1)+')');

rise($('gears'),p(u,TM.gears,TM.gears+.6)); rise($('glab'),p(u,TM.gears+.4,TM.gears+1));
const fx=TM.wrench+1.2, st=cl(u-TM.issue_log,0,fx-TM.issue_log), at=Math.max(0,u-TM.gears-st), brk=u>=TM.issue_log&&u<fx, fixd=u>=fx;
GR.forEach(([g,x,y,R,dr],i)=>g.setAttribute('transform','translate('+(x+(brk&&i===2?3*Math.sin(t*30):0)).toFixed(1)+' '+y+') rotate('+(dr*at*2200/R%360).toFixed(1)+')'));
GR[2][5].setAttribute('fill',brk?'var(--loss)':fixd?'var(--gain)':'var(--stage)');
rise($('log'),p(u,TM.issue_log-.3,TM.issue_log+.2));
[TM.issue_log+.3,TM.wrench,fx].forEach((a,i)=>rise(RW[i][0],p(u,a,a+.4)));
RW[0][1].setAttribute('fill',fixd?'var(--gain)':'var(--loss)');
const wq=p(u,TM.wrench,TM.wrench+.8); $('wr').setAttribute('opacity',u>=TM.wrench?1:0);
$('wr').setAttribute('transform','translate('+(840-100*wq).toFixed(1)+' '+(360+110*wq).toFixed(1)+') rotate('+(-135+(u>TM.wrench+.8&&u<fx+.4?15*Math.sin(t*12):0)).toFixed(1)+')');

rise($('loopg'),p(u,TM.loop_arrow,TM.loop_arrow+.5));
[TM.loop_arrow,TM.loop_arrow+1.8,TM.fix_choice].forEach((a,i)=>rise(LP[i],p(u,a,a+.5)));
const la=-Math.PI/2+Math.max(0,u-TM.loop_arrow)*1.3;
$('ldot').setAttribute('cx',(440+200*Math.cos(la)).toFixed(1)); $('ldot').setAttribute('cy',(500+200*Math.sin(la)).toFixed(1)); $('ldot').setAttribute('opacity',p(u,TM.loop_arrow,TM.loop_arrow+.5));
rise($('chart'),p(u,TM.rising_line,TM.rising_line+.5));
const sk=p(u,TM.rising_line+.3,TM.rising_line+5),tp=tip(900*sk);
$('stair').setAttribute('stroke-dashoffset',(900*(1-sk)).toFixed(1)); $('sdot').setAttribute('cx',tp[0].toFixed(1)); $('sdot').setAttribute('cy',tp[1].toFixed(1));

rise($('tbl'),p(u,TM.team_table,TM.team_table+.5));
rise($('k0'),p(u,TM.feedback_card,TM.feedback_card+.5)); rise($('k1'),p(u,TM.notebook,TM.notebook+.5)); rise($('k2'),p(u,TM.light_bulb,TM.light_bulb+.5));
const rl=(20+8*Math.sin(t*3))*p(u,TM.light_bulb+.4,TM.light_bulb+1);
RY.forEach(([e,a])=>e.setAttribute('d','M'+(1290+75*Math.cos(a)).toFixed(1)+' '+(400+75*Math.sin(a)).toFixed(1)+'L'+(1290+(75+rl)*Math.cos(a)).toFixed(1)+' '+(400+(75+rl)*Math.sin(a)).toFixed(1)));

const q0=SC[8][0]/K;
rise($('qa'),p(u,q0+.3,q0+.8)); rise($('qb'),p(u,q0+.7,q0+1.2));
rise($('qc'),p(u,TM.open_mic,TM.open_mic+.5)); rise($('qd'),p(u,TM.open_mic+.4,TM.open_mic+.9));
rise($('mic'),p(u,q0+1,q0+1.5));
$('wv').setAttribute('opacity',(p(u,TM.open_mic+.6,TM.open_mic+1.2)*(.55+.45*Math.sin(t*4))).toFixed(2));