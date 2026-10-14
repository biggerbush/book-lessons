rise($('hb'),p(u,TM.hook_box,TM.hook_box+.6));
$('hbw').setAttribute('transform',`rotate(${(2*Math.sin(t*1.6)).toFixed(2)} 1320 450)`);
rise($('okb'),p(u,TM.hook_box+7.2,TM.hook_box+7.8));

rise($('ws'),p(u,TM.workshop,TM.workshop+.5));
const sk=p(u,TM.workshop+.6,TM.workshop+1);
SPK.forEach((s,i)=>s.setAttribute('opacity',(sk*(.5+.5*Math.sin(t*4+i*1.7))).toFixed(2)));
TL.forEach((m,i)=>m.setAttribute('opacity',p(u,TM.workshop+.5+i*.4,TM.workshop+.7+i*.4)));
rise($('ld'),p(u,TM.launch_day,TM.launch_day+.5));
const wv=p(u,TM.empty_store,TM.empty_store+.5),wd=Math.max(0,u-TM.empty_store);
WK.forEach((g,i)=>{const x=(i*205+110*wd)%820;g.setAttribute('transform',`translate(${(640+x).toFixed(1)} 0)`);g.setAttribute('opacity',(wv*cl(Math.min(x,820-x)/60)).toFixed(2))});
rise($('nos'),p(u,TM.empty_store+1.2,TM.empty_store+1.7));

rise($('mv'),p(u,TM.mvp_label,TM.mvp_label+.5));
rise($('lr'),p(u,TM.mvp_label+3.4,TM.mvp_label+3.9));
rise($('gg'),p(u,TM.effort_dial,TM.effort_dial+.5));
const nk=p(u,TM.effort_dial+.4,TM.effort_dial+1.6);
ND.forEach(([n,cx],i)=>{const a=(i?90-70*nk:90+70*nk)*Math.PI/180;n.setAttribute('x2',(cx+100*Math.cos(a)).toFixed(1));n.setAttribute('y2',(480-100*Math.sin(a)).toFixed(1))});
rise($('qq'),p(u,TM.question,TM.question+.5));

rise($('nk'),p(u,TM.nick,TM.nick+.5));
rise($('tb'),p(u,TM.shoe_box,TM.shoe_box+.5));
rise($('wh'),p(u,TM.warehouse,TM.warehouse+.5));
$('whx').setAttribute('opacity',p(u,TM.warehouse+1.6,TM.warehouse+2));
rise($('sm'),p(u,TM.warehouse+2.4,TM.warehouse+2.9));

rise($('c0'),p(u,TM.camera,TM.camera+.5));
$('fl').setAttribute('opacity',(u>=TM.camera+.6?Math.pow(Math.max(0,Math.sin(t*5)),4):0).toFixed(2));
rise($('a0'),p(u,TM.website,TM.website+.4)); rise($('c1'),p(u,TM.website,TM.website+.5));
TI.forEach((g,i)=>rise(g,p(u,TM.website+.4+i*.3,TM.website+.7+i*.3)));
rise($('a1'),p(u,TM.receipt,TM.receipt+.4)); rise($('c2'),p(u,TM.receipt,TM.receipt+.5));
const bk=p(u,TM.receipt+1.5,TM.receipt+2.6);
$('bx').setAttribute('transform',`translate(${(-40*(1-bk)).toFixed(1)} 0)`); $('bx').setAttribute('opacity',bk);

const s5=SC[5][0]/K;
rise($('pf'),p(u,s5+.6,s5+1.1));
$('pfb').setAttribute('width',(14*p(u,s5+1,s5+2)).toFixed(1));
rise($('ns'),p(u,s5+3,s5+3.5));
rise($('cu'),p(u,TM.customer,TM.customer+.5));
rise($('opt'),p(u,TM.customer+.8,TM.customer+1.3));
rise($('ckh'),p(u,TM.checkmark,TM.checkmark+.4));
TK.forEach(([g,k],i)=>{const a=TM.checkmark+i*.6;rise(g,p(u,a,a+.4));k.setAttribute('opacity',p(u,a+.4,a+.7))});

rise($('scr'),p(u,TM.video_screen,TM.video_screen+.5));
$('pl').setAttribute('opacity',(p(u,TM.video_screen,TM.video_screen+.5)*(1-p(u,TM.demo_click,TM.demo_click+.4))).toFixed(2));
$('pg').setAttribute('width',(600*p(u,TM.demo_click,TM.demo_click+5)).toFixed(1));
const dd=u-TM.demo_click;
$('fd').setAttribute('x',(350+220*ease((Math.max(0,dd)%1.6)/1.6)).toFixed(1)); $('fd').setAttribute('opacity',dd>0?1:0);
rise($('ch'),p(u,TM.waitlist-.3,TM.waitlist+.2));
$('wl').setAttribute('stroke-dashoffset',(1-p(u,TM.waitlist+.3,TM.waitlist+2.3)).toFixed(3));
rise($('ovn'),p(u,TM.waitlist+1.4,TM.waitlist+1.9));
rise($('cap'),p(u,TM.waitlist+2.4,TM.waitlist+3));

rise($('bf'),p(u,TM.blush_face,TM.blush_face+.5));
const bl=(.45+.3*Math.sin(t*3)).toFixed(2); $('ck0').setAttribute('opacity',bl); $('ck1').setAttribute('opacity',bl);
rise($('sc'),p(u,TM.scale,TM.scale+.5));
const tp=p(u,TM.early_user+.5,TM.early_user+1.5),ang=12*tp+4*Math.sin(t*2)*(1-tp),ar=ang*Math.PI/180,dx=200*Math.cos(ar),dy=200*Math.sin(ar);
$('bmg').setAttribute('transform',`rotate(${ang.toFixed(2)} 800 330)`);
$('pL').setAttribute('transform',`translate(${(800-dx).toFixed(1)} ${(330-dy).toFixed(1)})`);
$('pR').setAttribute('transform',`translate(${(800+dx).toFixed(1)} ${(330+dy).toFixed(1)})`);
rise($('eu'),p(u,TM.early_user,TM.early_user+.5));

rise($('pk'),p(u,TM.pencil,TM.pencil+.5));
const f=p(u,TM.pencil+.6,TM.pencil+3),fs=f*4,fi=Math.min(3,Math.floor(fs)),fr=fs-fi;
$('pc').setAttribute('transform',`translate(${(SQ[fi][0]+(SQ[fi+1][0]-SQ[fi][0])*fr).toFixed(1)} ${(SQ[fi][1]+(SQ[fi+1][1]-SQ[fi][1])*fr).toFixed(1)})`);
$('sq').setAttribute('stroke-dashoffset',(1-f).toFixed(3));
rise($('qa'),p(u,TM.pencil+4.6,TM.pencil+5.1)); rise($('qb'),p(u,TM.pencil+5,TM.pencil+5.5)); rise($('qc'),p(u,TM.pencil+5.4,TM.pencil+5.9));