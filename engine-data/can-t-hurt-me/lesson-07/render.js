const k0=.94*p(u,TM.summit,TM.summit+3);
$('climb').setAttribute('cx',(1084+200*k0).toFixed(1));$('climb').setAttribute('cy',(671-350*k0).toFixed(1));
R('flag',TM.summit+3,u);R('nstart',TM.summit+3.6,u);

R('trophyG',TM.trophy,u);R('couchG',TM.couch,u);R('meter',TM.couch,u);
const e1=p(u,TM.couch+.5,TM.couch+4),h1=396*(1-.8*e1);
$('sitter').setAttribute('transform','translate(0 '+(24*e1).toFixed(1)+')');
$('edge').setAttribute('y',(652-h1).toFixed(1));$('edge').setAttribute('height',h1.toFixed(1));$('edge').setAttribute('fill',e1>.5?'var(--loss)':'var(--gain)');
R('dies',TM.couch+4.6,u,.6);

R('tri',TM.trident,u);R('tape',TM.trident+1.5,u);R('pest',TM.trident+5.5,u);
$('jpath').setAttribute('stroke-dashoffset',(JL*(1-p(u,TM.trident+5.8,TM.trident+9))).toFixed(1));
R('qq',TM.question,u);

R('tab',TM.ranger_tab,u);R('mudG',TM.mud,u);[0,1,2].forEach(i=>R('ml'+i,TM.mud+.8+i*1.1,u));
$('sold').setAttribute('transform','translate('+(160+880*p(u,TM.mud,TM.medal)).toFixed(1)+' '+(620-4*Math.abs(Math.sin(t*6))).toFixed(1)+')');
R('med',TM.medal,u);

R('crowdG',TM.crowd,u);
CD.forEach(([c,k])=>{const a=k&&u>=TM.crowd+1.2,b=k===2&&u>=TM.small_group;c.setAttribute('fill',b?'var(--gain)':a?'var(--ink)':'var(--muted)');c.setAttribute('fill-opacity',a?1:.45);c.setAttribute('r',b?26:a?20:18)});
$('ring1').setAttribute('opacity',p(u,TM.crowd+1.2,TM.crowd+1.8));$('ring2').setAttribute('opacity',p(u,TM.small_group,TM.small_group+.6));
R('u1',TM.crowd+.4,u);R('u2',TM.small_group+.4,u);R('coast',TM.small_group+6,u,.6);

const sl=TM.calendar+5.3,fs=(.35+.65*p(u,TM.fire,TM.fire+1.5))*(1-.45*p(u,sl,sl+1.5))*(1+.04*Math.sin(t*9));
$('flame').setAttribute('transform','translate(340 650) scale('+fs.toFixed(3)+')');
R('flameG',TM.fire,u);R('calG',TM.calendar,u);
CL.forEach((c,i)=>{const off=i>=21&&u>=sl,on=u>=TM.calendar+.3+i*.14;c.setAttribute('fill',off?'none':on?'var(--gain)':'var(--stage)');c.setAttribute('stroke',off?'var(--loss)':'var(--line)');c.setAttribute('stroke-dasharray',off?'8 6':'none')});
R('slide',sl,u,.6);

R('tbox',TM.toolbox,u);[0,1,2,3].forEach(i=>R('tc'+i,TM.mirror+i*1.5,u));R('gearsG',TM.gears,u);R('life',TM.gears+.8,u);
const ga=t*40;G1.setAttribute('transform','rotate('+ga.toFixed(1)+' 640 670)');G2.setAttribute('transform','rotate('+(18-ga).toFixed(1)+' 800 670)');

const by=640-260*p(u,TM.new_line,TM.new_line+1.2);
$('bar').setAttribute('y1',by.toFixed(1));$('bar').setAttribute('y2',by.toFixed(1));$('bar').setAttribute('stroke',u>=TM.new_line?'var(--gain)':'var(--ink)');
$('oldl').setAttribute('opacity',p(u,TM.new_line,TM.new_line+.6));
R('easyG',TM.old_line,u);R('newT',TM.new_line+1.2,u);R('opts',TM.new_line+1.6,u,.6);
const jk=(t%2)/2;$('jump').setAttribute('cx',(300+360*jk).toFixed(1));$('jump').setAttribute('cy',(742-(742-(by-50))*4*jk*(1-jk)).toFixed(1));
R('lad',TM.ladder,u);RG.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.ladder+.3+i*.35,TM.ladder+.6+i*.35)));
$('clim').setAttribute('cy',(674-408*p(u,TM.ladder+.6,TM.ladder+3.4)).toFixed(1));

const s8=SC[8][0]/K;R('qa',s8+.4,u);R('qb',s8+.8,u);R('padG',s8+.4,u);R('qc',TM.pen,u);
const wk=p(u,TM.pen+.3,TM.pen+2.3),wq=wpt(wk);
$('wr').setAttribute('stroke-dashoffset',(240*(1-wk)).toFixed(1));
$('pen').setAttribute('transform','translate('+wq[0].toFixed(1)+' '+wq[1].toFixed(1)+')');