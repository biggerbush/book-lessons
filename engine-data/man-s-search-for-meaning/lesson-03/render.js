rise($('lock'),p(u,TM.locked_gate,TM.locked_gate+.5));
rise($('inner'),p(u,TM.locked_gate+4.2,TM.locked_gate+5));
$('halo').setAttribute('opacity',(p(u,TM.locked_gate+4.6,TM.locked_gate+5.4)*(.55+.45*Math.sin(t*2))).toFixed(2));

rise($('pr'),p(u,TM.prisoner-.4,TM.prisoner+.1));
CHP.forEach(([g,k],i)=>{const a=TM.prisoner+.6+i*1.1;rise(g,p(u,a,a+.4));k.setAttribute('opacity',p(u,a+.6,a+.9))});
rise($('clk'),p(u,TM.clock,TM.clock+.5));
$('mh').setAttribute('transform','rotate('+(t*120%360).toFixed(1)+' 870 390)');$('hh').setAttribute('transform','rotate('+(t*10%360).toFixed(1)+' 870 390)');
rise($('lst'),p(u,TM.number_tag,TM.number_tag+.5));
ROWS.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.number_tag+.3+i*.15,TM.number_tag+.6+i*.15)));
rise($('tag'),p(u,TM.number_tag+.4,TM.number_tag+.9));
rise($('nof'),p(u,TM.number_tag+4,TM.number_tag+4.6));

rise($('hut'),p(u,TM.dark_hut,TM.dark_hut+.6));
const wx=320+830*p(u,TM.dark_hut+.6,TM.bread);
rise($('walk'),p(u,TM.dark_hut+.3,TM.dark_hut+.8));
WK.setAttribute('transform','translate('+wx.toFixed(1)+' '+(wx<1149?-4*Math.abs(Math.sin(t*5)):0).toFixed(1)+')');
HT.forEach(([c,x])=>c.setAttribute('opacity',u>=TM.dark_hut+.6&&wx>x+10?1:0));
$('bread').setAttribute('cx',(1190+50*p(u,TM.bread,TM.bread+1)).toFixed(1));$('bread').setAttribute('opacity',u>=TM.bread?1:0);
rise($('few'),p(u,TM.bread+3.3,TM.bread+3.8));
rise($('prf'),p(u,TM.bread+7,TM.bread+7.6));

rise($('hand'),p(u,TM.open_hand,TM.open_hand+.6));
$('orb').setAttribute('transform','translate(0 '+(4*Math.sin(t*2)).toFixed(1)+')');
rise($('att'),p(u,TM.open_hand+4.2,TM.open_hand+4.7));
rise($('fork'),p(u,TM.path_fork,TM.path_fork+.6));
const hb=Math.floor(t/1.6)%2;['br0','br1'].forEach((id,i)=>$(id).setAttribute('stroke',i===hb?'var(--gain)':'var(--line)'));
const pk=p(u,TM.path_fork+3.8,TM.path_fork+4.8);rise($('press'),pk);
PR.forEach(([g,dx,dy],i)=>{const o=-(1-pk)*70+5*Math.sin(t*5+i);g.setAttribute('transform','translate('+(dx*o).toFixed(1)+' '+(dy*o).toFixed(1)+')')});
rise($('nfd'),p(u,TM.path_fork+6.8,TM.path_fork+7.4));

rise($('fa'),p(u,TM.two_figures,TM.two_figures+.5));rise($('fb'),p(u,TM.two_figures+.3,TM.two_figures+.8));
const ck=p(u,TM.two_figures+5,TM.two_figures+6);setc(FA,ck>0?'loss':'ink');FA.setAttribute('transform','rotate('+(-12*ck).toFixed(1)+' 460 605)');
rise($('la'),ck);
const lk=p(u,TM.small_light,TM.small_light+.6);rise($('lb'),lk);$('lt').setAttribute('opacity',lk);
$('lr').setAttribute('opacity',(lk*.6).toFixed(2));$('lr').setAttribute('r',(24+8*Math.sin(t*3)).toFixed(1));
rise($('hd'),p(u,TM.small_light+2.5,TM.small_light+3));
const kk=p(u,TM.small_light+3.2,TM.small_light+4);$('knob').setAttribute('cx',(1225+110*kk).toFixed(1));$('knob').setAttribute('class',kk>.5?'gain':'loss');
rise($('cmp'),p(u,TM.small_light+9.5,TM.small_light+10.1));

rise($('sc'),p(u,TM.scales,TM.scales+.5));
const sa=-(8*p(u,TM.scales+.5,TM.scales+1.5)+8*p(u,TM.scales+2.9,TM.scales+4))*Math.PI/180,xL=460-220*Math.cos(sa),yL=300-220*Math.sin(sa);
$('beam').setAttribute('x1',xL.toFixed(1));$('beam').setAttribute('y1',yL.toFixed(1));$('beam').setAttribute('x2',(920-xL).toFixed(1));$('beam').setAttribute('y2',(600-yL).toFixed(1));
$('panL').setAttribute('transform','translate('+xL.toFixed(1)+' '+yL.toFixed(1)+')');$('panR').setAttribute('transform','translate('+(920-xL).toFixed(1)+' '+(600-yL).toFixed(1)+')');
rise($('crs'),p(u,TM.scales+2.9,TM.scales+3.5));
const shk=p(u,TM.seedling+3,TM.seedling+5.5),bh=250-120*shk;
$('bx').setAttribute('x',(1150-bh).toFixed(1));$('bx').setAttribute('y',(470-bh).toFixed(1));$('bx').setAttribute('width',(2*bh).toFixed(1));$('bx').setAttribute('height',(2*bh).toFixed(1));
$('bxl').setAttribute('y',(470-bh-20).toFixed(1));
$('bx0').setAttribute('opacity',(.7*cl(shk*4)).toFixed(2));
rise($('bxg'),p(u,TM.seedling,TM.seedling+.6));
const gk=p(u,TM.seedling+4,TM.seedling+6);rise($('sd'),p(u,TM.seedling+3.6,TM.seedling+4.1));
$('stem').setAttribute('d','M1150 518V'+(518-60*gk).toFixed(1));$('lv').setAttribute('opacity',cl((gk-.7)/.3));
rise($('spc'),p(u,TM.seedling+3.5,TM.seedling+4.1));

[TM.traffic_jam,TM.traffic_jam+4.2,TM.traffic_jam+5.2].forEach((a,i)=>rise(CD[i],p(u,a,a+.5)));
CR.setAttribute('transform','translate('+(2*Math.sin(t*6)).toFixed(1)+' 0)');
rise($('cc'),p(u,TM.traffic_jam+5.6,TM.traffic_jam+6.2));
rise($('pz'),p(u,TM.pause_button,TM.pause_button+.5));
rise($('rsp'),p(u,TM.pause_button+1.5,TM.pause_button+2));
rise($('mir'),p(u,TM.mirror,TM.mirror+.6));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
[TM.notebook+1.4,TM.pen_line,TM.pen_line+3].forEach((a,i)=>{rise($('r'+i),p(u,a,a+.4));WR[i].setAttribute('stroke-dashoffset',(1-p(u,a+.4,a+2.4)).toFixed(3))});
rise($('sun'),p(u,TM.sunrise,TM.sunrise+.3));
$('sunc').setAttribute('cy',(560+110*(1-p(u,TM.sunrise,TM.sunrise+1.6))).toFixed(1));
$('rays').setAttribute('opacity',p(u,TM.sunrise+1.2,TM.sunrise+1.8));
rise($('tmr'),p(u,TM.sunrise+1,TM.sunrise+1.5));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('qm'),p(u,TM.question_mark+1.2,TM.question_mark+1.7));