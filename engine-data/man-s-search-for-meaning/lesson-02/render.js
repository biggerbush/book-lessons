RG.forEach((c,i)=>{const a=TM.frankl_arrive+[.6,1.4,5][i];c.setAttribute('opacity',p(u,a,a+.6));c.setAttribute('r',(RR[i]+3*Math.sin(t*2+i)).toFixed(1))});

const st=[TM.stage_arrival,TM.stage_camp,TM.stage_freedom];
DR.forEach(([g,r,ic],i)=>{const a=TM.three_doors+i*.3;rise(g,p(u,a,a+.5));rise(ic,p(u,st[i],st[i]+.5));r.setAttribute('stroke',u>=st[i]?['var(--loss)','var(--muted)','var(--gain)'][i]:'var(--ink)')});
$('d_dot').setAttribute('cx',(320+480*(p(u,st[1],st[1]+.8)+p(u,st[2],st[2]+.8))).toFixed(1));$('d_dot').setAttribute('opacity',p(u,st[0],st[0]+.4));

const tk=p(u,TM.train_station,TM.train_station+1.6);
$('tr_train').setAttribute('transform','translate('+(-260*(1-tk)).toFixed(1)+' 0)');$('tr_train').setAttribute('opacity',tk);
rise($('tr_people'),p(u,TM.train_station+1,TM.train_station+1.5));rise($('tr_lab'),p(u,TM.train_station+4.9,TM.train_station+5.4));
rise($('tr_bub'),p(u,TM.hope_bubble,TM.hope_bubble+.5));
const tb=p(u,TM.torn_bubble,TM.torn_bubble+1.2);
$('tr_L').setAttribute('transform',`translate(${(-70*tb).toFixed(1)} ${(60*tb).toFixed(1)}) rotate(${(-10*tb).toFixed(1)} 1080 400)`);
$('tr_R').setAttribute('transform',`translate(${(70*tb).toFixed(1)} ${(60*tb).toFixed(1)}) rotate(${(10*tb).toFixed(1)} 1080 400)`);
BO.forEach(e=>{e.setAttribute('stroke-opacity',(1-.65*tb).toFixed(2));e.setAttribute('stroke-dasharray',tb>0?'14 10':'none')});
rise($('tr_real'),p(u,TM.torn_bubble+.4,TM.torn_bubble+1));

rise($('gh_ppl'),p(u,TM.grim_jokes,TM.grim_jokes+.5));rise($('gh_jl'),p(u,TM.grim_jokes,TM.grim_jokes+.5));
GH.forEach((b,i)=>{const a=TM.grim_jokes+.6+i*.4;rise(b,p(u,a,a+.4))});
rise($('gh_q'),p(u,TM.question_mark,TM.question_mark+.5));
const bk=p(u,TM.question_mark+5,TM.question_mark+6.2);
$('gh_obs').setAttribute('transform','translate('+(140*bk).toFixed(1)+' 0)');$('gh_obs').setAttribute('opacity',p(u,TM.question_mark+.4,TM.question_mark+1));
$('gh_line').setAttribute('d','M1050 470H'+(1140+140*bk).toFixed(0));
rise($('gh_back'),bk);rise($('gh_frame'),bk);rise($('gh_cope'),p(u,TM.question_mark+5.4,TM.question_mark+6));

const gr=p(u,TM.grey_figures+5,TM.grey_figures+8),amp=60*(1-.9*gr);let wp='';
for(let x=120;x<=1480;x+=10)wp+=x+','+(330+amp*Math.sin(x/40+t*3)*(.6+.4*Math.sin(x/170))).toFixed(1)+' ';
$('ap_wave').setAttribute('points',wp);
AF.forEach((g,i)=>{const a=TM.grey_figures+i*.2;rise(g,p(u,a,a+.5));g.setAttribute('fill-opacity',(1-.65*gr).toFixed(2))});
rise($('ap_sub'),p(u,TM.grey_figures+5,TM.grey_figures+5.5));rise($('ap_eyes'),p(u,TM.watching_eyes,TM.watching_eyes+.6));

rise($('sp_meal'),p(u,TM.soup_bowl,TM.soup_bowl+.5));
ST.forEach((s,i)=>s.setAttribute('opacity',(.3+.5*Math.abs(Math.sin(t*1.3+i))).toFixed(2)));
$('sp_spoon').setAttribute('transform','translate(0 '+(-30*Math.abs(Math.sin(t*1.6))).toFixed(1)+')');
rise($('sp_win'),p(u,TM.soup_bowl+3.8,TM.soup_bowl+4.3));rise($('sp_eyes'),p(u,TM.window_frame,TM.window_frame+.6));
rise($('sp_keep'),p(u,TM.window_frame+4.1,TM.window_frame+4.6));rise($('sp_deep'),p(u,TM.window_frame+5.5,TM.window_frame+6));

rise($('sh_arr'),p(u,TM.shell_armor,TM.shell_armor+.5));
SA.forEach((a,i)=>{const dy=(i-1)*100,edge=600-Math.sqrt(40000-dy*dy)-10,c=(t*.6+i*.33)%1,tip=240+(edge-240)*c;
  a.setAttribute('d',`M${(tip-110).toFixed(1)} ${520+dy}H${tip.toFixed(1)}m-18-18 18 18-18 18`);a.setAttribute('opacity',(c<.8?1:(1-c)/.2).toFixed(2))});
const sk=p(u,TM.shell_armor+4.2,TM.shell_armor+5.6);
$('sh_shell').setAttribute('stroke-dashoffset',(1257*(1-sk)).toFixed(0));rise($('sh_def'),sk);
rise($('sh_bat'),p(u,TM.shell_armor+8.8,TM.shell_armor+9.3));$('sh_fill').setAttribute('width',(332*p(u,TM.shell_armor+9.2,TM.shell_armor+11)).toFixed(1));

const go=1-.8*p(u,TM.open_gate,TM.open_gate+1.4);
$('fr_gl').setAttribute('transform',`matrix(${go.toFixed(3)} 0 0 1 ${(170*(1-go)).toFixed(1)} 0)`);
$('fr_gr').setAttribute('transform',`matrix(${go.toFixed(3)} 0 0 1 ${(450*(1-go)).toFixed(1)} 0)`);
FL.forEach((g,i)=>{const a=TM.meadow_flowers+i*.15;rise(g,p(u,a,a+.4))});
const wk=p(u,TM.meadow_flowers,TM.meadow_flowers+4);
$('fr_walk').setAttribute('transform',`translate(${(300*wk).toFixed(1)} ${(wk>0&&wk<1?-4*Math.abs(Math.sin(t*5)):0).toFixed(1)})`);
$('fr_walk').setAttribute('opacity',p(u,TM.open_gate+.8,TM.open_gate+1.4));
rise($('fr_bar'),p(u,TM.meadow_flowers+1,TM.meadow_flowers+1.5));
$('fr_fill').setAttribute('width',(300*p(u,TM.meadow_flowers+5.6,TM.meadow_flowers+9.5)).toFixed(1));
rise($('fr_re'),p(u,TM.meadow_flowers+5.4,TM.meadow_flowers+5.9));
rise($('fr_home'),p(u,TM.bitter_cloud,TM.bitter_cloud+.5));
$('fr_cloud').setAttribute('transform','translate('+(10*Math.sin(t*.9)).toFixed(1)+' 0)');

rise($('ys_a'),p(u,TM.mirror,TM.mirror+.5));rise($('ys_b'),p(u,TM.mirror+.4,TM.mirror+.9));
rise($('ys_c'),p(u,TM.mirror+6.2,TM.mirror+6.7));rise($('ys_d'),p(u,TM.mirror+6.6,TM.mirror+7.1));
rise($('ys_mir'),p(u,TM.mirror+.8,TM.mirror+1.4));$('ys_shine').setAttribute('opacity',(.4+.6*Math.abs(Math.sin(t*1.2))).toFixed(2));