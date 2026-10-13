CD.forEach((g,i)=>{const a=TM.goal_stack+i*.18,k=p(u,a,a+.4),o=p(u,TM.goal_stack+2.6,TM.goal_stack+3.6),w=i===3,y=280+i*76;
  g.setAttribute('transform','translate('+(w?0:90*o).toFixed(1)+' '+(w?y+(441-y)*o:y).toFixed(1)+')');g.setAttribute('opacity',(k*(w?1:1-o)).toFixed(3))});

rise($('wb'),p(u,TM.whiteboard,TM.whiteboard+.5));
GF.forEach((f,i)=>{const a=TM.whiteboard+.8+i*.3;rise(f[0],p(u,a,a+.4));f[2].setAttribute('opacity',p(u,TM.whiteboard+4.5+i*.08,TM.whiteboard+4.8+i*.08));
  f[1].setAttribute('width',(260*GP[i]*p(u,TM.tired_team+4.6,TM.tired_team+6)).toFixed(1))});
rise($('team'),p(u,TM.tired_team,TM.tired_team+.5));$('thr').setAttribute('opacity',p(u,TM.tired_team+.5,TM.tired_team+1.5));
rise($('ye'),p(u,TM.tired_team+4.6,TM.tired_team+5.2));

const BC=[TM.bar_two,TM.bar_ten,TM.bar_twenty];
rise($('ax'),p(u,TM.chart_axes,TM.chart_axes+.6));
SQ.forEach(([r,gi,k,on])=>{const a=BC[gi],f=on&&u>=a+1.2;r.setAttribute('opacity',p(u,a+k*.05,a+k*.05+.3));r.setAttribute('fill',f?'var(--gain)':'var(--stage)');r.setAttribute('stroke',f?'var(--gain)':'var(--ink)')});
BC.forEach((a,i)=>rise($('r'+i),p(u,a+1.4,a+1.9)));
rise($('dr'),p(u,TM.bar_twenty+2.5,TM.bar_twenty+3.1));

rise($('twr'),p(u,TM.control_tower,TM.control_tower+.5));
PL.forEach(([e,x,y,a],i)=>{e.setAttribute('transform','translate('+(x+14*Math.sin(t*.7+i)).toFixed(1)+' '+(y+8*Math.cos(t*.9+i*1.3)).toFixed(1)+') rotate('+a+') scale(.7)');
  e.setAttribute('opacity',p(u,TM.planes_sky+i*.15,TM.planes_sky+i*.15+.4))});
const lk=p(u,TM.landing_plane,TM.landing_plane+4.5),lx=440+800*lk,ly=540+232*lk,lo=p(u,TM.landing_plane,TM.landing_plane+.4);
$('lp').setAttribute('transform','translate('+lx.toFixed(1)+' '+ly.toFixed(1)+') rotate('+(16*(1-cl((lk-.75)/.25))).toFixed(1)+') scale(1.4)');$('lp').setAttribute('opacity',lo);
$('beam').setAttribute('x2',lx.toFixed(1));$('beam').setAttribute('y2',ly.toFixed(1));$('beam').setAttribute('opacity',lo);
rise($('landnow'),p(u,TM.landing_plane+5.8,TM.landing_plane+6.4));

const dim=u>=TM.quote_card+7.3;
BL.forEach((b,i)=>{const a=i<3?TM.idea_bulbs+i*.3:TM.idea_bulbs+3+(i-3)*.1;rise(b[0],p(u,a,a+.35));
  b[1].setAttribute('fill',i&&dim?'var(--line)':'var(--gain)');if(!i)b[1].setAttribute('r',(34+(dim?4*Math.abs(Math.sin(t*3)):0)).toFixed(1))});
rise($('qt'),p(u,TM.quote_card,TM.quote_card+.6));rise($('sayno'),p(u,TM.quote_card+7.3,TM.quote_card+7.9));

rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qtx'),p(u,TM.question_mark+4.6,TM.question_mark+5.2));
TL.forEach((e,i)=>{const a=TM.question_mark+5.4+i*.15;rise(e[0],p(u,a,a+.4))});
const mg=p(u,TM.magnifier,TM.magnifier+1.5),cand=u>=TM.magnifier+1.5,ur=u>=TM.magnifier+3.8;
$('mag').setAttribute('transform','translate('+(220+460*mg).toFixed(1)+' 640)');$('mag').setAttribute('opacity',p(u,TM.magnifier,TM.magnifier+.3));
TL[2][1].setAttribute('fill',cand?'var(--gain)':'var(--stage)');TL[2][1].setAttribute('stroke',cand?'var(--gain)':'var(--ink)');TL[2][2].style.fill=cand?'var(--on-gain)':'';
rise($('cnd'),p(u,TM.magnifier+1.5,TM.magnifier+2));
TL[4][1].setAttribute('stroke',ur?'var(--loss)':'var(--ink)');rise($('urg'),p(u,TM.magnifier+3.8,TM.magnifier+4.3));rise($('noturg'),p(u,TM.magnifier+3.8,TM.magnifier+4.4));

['f0','f1','f2'].forEach((id,i)=>{const a=TM.two_flags+.3+i*.5;rise($(id),p(u,a,a+.4))});
rise($('fx'),p(u,TM.two_flags+2.2,TM.two_flags+2.6));rise($('fl'),p(u,TM.two_flags+2.6,TM.two_flags+3.1));
rise($('pt'),p(u,TM.org_pyramid,TM.org_pyramid+.5));
BT.forEach((b,i)=>{const a=TM.org_pyramid+2.5+i*.4;rise(b,p(u,a,a+.4))});rise($('batl'),p(u,TM.org_pyramid+3.8,TM.org_pyramid+4.3));

GR.forEach(([g,cx,cy,n],i)=>g.setAttribute('transform','rotate('+((i%2?-1:1)*t*240/n).toFixed(2)+' '+cx+' '+cy+')'));
rise($('gr'),p(u,TM.gears,TM.gears+.5));rise($('ops'),p(u,TM.gears+3,TM.gears+3.5));
$('cone').setAttribute('opacity',(p(u,TM.spotlight,TM.spotlight+.6)*(.9+.1*Math.sin(t*3))).toFixed(3));
$('tgc').setAttribute('fill',u>=TM.spotlight?'var(--gain)':'var(--line)');
rise($('spl'),p(u,TM.spotlight+.5,TM.spotlight+1));rise($('rest'),p(u,TM.spotlight+5.4,TM.spotlight+6));

rise($('pad'),p(u,TM.notepad,TM.notepad+.5));
$('circ').setAttribute('stroke-dashoffset',(1-p(u,TM.notepad+2,TM.notepad+3.2)).toFixed(3));
rise($('qa'),p(u,TM.notepad+.3,TM.notepad+.8));rise($('qb'),p(u,TM.notepad+.7,TM.notepad+1.2));rise($('qc'),p(u,TM.notepad+1.1,TM.notepad+1.6));
rise($('wk'),p(u,TM.notepad+5.8,TM.notepad+6.4));