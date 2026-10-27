rise($('tug'),p(u,TM.tug_of_war,TM.tug_of_war+.6));
const dr=p(u,TM.tug_of_war+5.8,TM.tug_of_war+6.8),jt=(1-dr)*2*Math.sin(t*9),ang=-14*(1-dr)+jt,ar=ang*Math.PI/180;
$('tugP').setAttribute('transform',`rotate(${ang.toFixed(2)} 1140 585)`);
const hx=1140+48*Math.cos(ar)+40*Math.sin(ar),hy=585+48*Math.sin(ar)-40*Math.cos(ar),sx=hx+(1190-hx)*dr,sy=hy+(596-hy)*dr,qx=(sx+1338)/2+(1270-(sx+1338)/2)*dr,qy=(sy+530)/2+(650-(sy+530)/2)*dr;
$('rope').setAttribute('d',`M${sx.toFixed(1)} ${sy.toFixed(1)}Q${qx.toFixed(1)} ${qy.toFixed(1)} 1338 530`);
$('nowC').setAttribute('stroke',dr>.5?'var(--gain)':'var(--ink)');$('nowC').setAttribute('r',(62+dr*3*Math.sin(t*2)).toFixed(1));

const fw=14*Math.sin(t*3);$('flagP').setAttribute('d',`M240 300C300 ${(300-fw).toFixed(1)} 380 ${(300+fw).toFixed(1)} 440 300V420C380 ${(420+fw).toFixed(1)} 300 ${(420-fw).toFixed(1)} 240 420Z`);
rise($('fl'),p(u,TM.white_flag,TM.white_flag+.5));rise($('fx'),p(u,TM.white_flag+3.8,TM.white_flag+4.3));rise($('rv'),p(u,TM.river,TM.river+.5));
FL.forEach((f,i)=>f.setAttribute('stroke-dashoffset',(-t*(60+i*15)).toFixed(1)));
$('leaf').setAttribute('transform',`translate(${(700+(t*90)%700).toFixed(1)} ${(480+10*Math.sin(t*2)).toFixed(1)}) rotate(${(12*Math.sin(t*1.5)).toFixed(1)})`);
rise($('acc'),p(u,TM.river+6.2,TM.river+6.8));

const lift=p(u,TM.shovel+1.5,TM.shovel+4.5);
$('car').setAttribute('transform',`translate(480 ${(600-40*lift+(u<TM.shovel?2*Math.sin(t*20):0)).toFixed(1)})`);
rise($('cm'),p(u,TM.mud_car,TM.mud_car+.5));rise($('say0'),p(u,TM.mud_car+5,TM.mud_car+5.5));
$('sk0').setAttribute('x2',(992+440*p(u,TM.mud_car+6.5,TM.mud_car+7.2)).toFixed(1));
rise($('st1'),p(u,TM.shovel,TM.shovel+.5));rise($('sh'),p(u,TM.shovel,TM.shovel+.5));$('shR').setAttribute('transform',`rotate(${(10*Math.sin(t*4)).toFixed(1)} 900 380)`);
rise($('st2'),p(u,TM.shovel+1.8,TM.shovel+2.3));rise($('fin'),p(u,TM.shovel+4.6,TM.shovel+5.2));

rise($('dfr'),p(u,TM.three_doors,TM.three_doors+.5));rise($('i0'),p(u,TM.exit_sign,TM.exit_sign+.4));rise($('i1'),p(u,TM.wrench,TM.wrench+.4));rise($('i2'),p(u,TM.open_door,TM.open_door+.4));
$('wr').setAttribute('transform',`rotate(${(180*p(u,TM.wrench,TM.wrench+1.4)).toFixed(1)} 800 420)`);
const op=p(u,TM.open_door,TM.open_door+1.2),rx=1380-170*op;
$('dp2').setAttribute('d',`M1140 240L${rx.toFixed(1)} ${(240-20*op).toFixed(1)}L${rx.toFixed(1)} ${(580+20*op).toFixed(1)}L1140 580Z`);
$('dp2').setAttribute('opacity',p(u,TM.three_doors,TM.three_doors+.5));
rise($('cmp'),p(u,TM.open_door+2.6,TM.open_door+3.2));

rise($('rs'),p(u,TM.clenched_fist,TM.clenched_fist+.5));rise($('fist'),p(u,TM.clenched_fist+.4,TM.clenched_fist+.9));
const tk=p(u,TM.clenched_fist+4.2,TM.clenched_fist+4.7);$('tz').setAttribute('opacity',tk);$('tz').setAttribute('transform',`translate(${(2*Math.sin(t*23)).toFixed(1)} 0)`);
rise($('cl'),tk);const st=p(u,TM.storm_cloud,TM.storm_cloud+.6),cs=1+.15*st;
$('cp').style.fill=u>=TM.storm_cloud?'var(--loss)':'var(--muted)';$('cp').setAttribute('transform',`translate(330 262) scale(${cs.toFixed(3)}) translate(-330 -262)`);
rise($('ch'),st);$('b2').setAttribute('width',(300*p(u,TM.storm_cloud+2.5,TM.storm_cloud+3.5)).toFixed(1));
rise($('l2'),p(u,TM.storm_cloud+2.8,TM.storm_cloud+3.3));rise($('tw'),p(u,TM.storm_cloud+3,TM.storm_cloud+3.6));

rise($('hh'),p(u,TM.heavy_heart,TM.heavy_heart+.5));
$('hp').setAttribute('transform',`translate(340 ${(440+20*p(u,TM.heavy_heart+.5,TM.heavy_heart+2.5)).toFixed(1)}) scale(${(1+.03*Math.sin(t*1.6)).toFixed(3)})`);
rise($('ar5'),p(u,TM.heavy_heart+4.2,TM.heavy_heart+4.7));rise($('bd'),p(u,TM.heavy_heart+4.6,TM.heavy_heart+5.1));
rise($('cd'),p(u,TM.candle,TM.candle+.5));$('flm').setAttribute('transform',`translate(1080 582) scale(${(1+.06*Math.sin(t*7)).toFixed(3)} ${(1+.1*Math.sin(t*5.3)).toFixed(3)}) translate(-1080 -582)`);
CHP.forEach((g,i)=>{const a=TM.candle+1.5+i*.6;rise(g,p(u,a,a+.4))});
rise($('pc5'),p(u,TM.candle+6.5,TM.candle+7.1));

rise($('cf'),p(u,TM.calm_figure-.6,TM.calm_figure));
ARG.forEach((g,i)=>{const a=TM.calm_figure+1+i*.5;rise(g,1-p(u,a,a+.6))});
$('en').setAttribute('width',(280*p(u,TM.calm_figure+1.5,TM.calm_figure+4.5)).toFixed(1));
rise($('bl'),p(u,TM.lightbulb,TM.lightbulb+.5));const lit=p(u,TM.lightbulb+.4,TM.lightbulb+.9);
$('bc').setAttribute('fill',lit>.5?'var(--gain)':'var(--stage)');$('rays').setAttribute('opacity',lit);
rise($('tg'),p(u,TM.lightbulb+.4,TM.lightbulb+.9));
const ak=p(u,TM.lightbulb+4.6,TM.lightbulb+5.2);$('ar6').setAttribute('transform',`translate(${(1150+140*ak).toFixed(1)} 410)`);$('ar6').setAttribute('opacity',u>=TM.lightbulb+4.6?1:0);
rise($('eff'),p(u,TM.lightbulb+4.6,TM.lightbulb+5.2));

rise($('frm'),p(u,TM.puzzle,TM.puzzle+.5));
PZ.forEach((g,i)=>{const a=i<3?TM.puzzle+2.5+i*2.5:TM.open_hand;pin(g,p(u,a,a+.7),OFF[i][0],OFF[i][1])});
rise($('hd'),p(u,TM.open_hand+.4,TM.open_hand+1));
$('ck').setAttribute('stroke-dashoffset',(230*(1-p(u,TM.open_hand+.8,TM.open_hand+1.6))).toFixed(1));
rise($('yes7'),p(u,TM.open_hand+.8,TM.open_hand+1.4));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('qm'),p(u,TM.question_mark+.2,TM.question_mark+.8));rise($('dr8'),p(u,TM.question_mark+1.4,TM.question_mark+1.9));rise($('lab8'),p(u,TM.question_mark+7.4,TM.question_mark+8));