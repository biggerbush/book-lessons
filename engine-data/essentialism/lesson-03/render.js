rise($('jug'),p(u,TM.juggler,TM.juggler+.6));
const dr=p(u,TM.juggler+3.8,TM.juggler+4.8);
BL.forEach((b,i)=>{const a=t*2.2+i*1.2566;let x=1340+120*Math.cos(a),y=540+60*Math.sin(a);if(i==4){x+=(1450-x)*dr;y+=(760-y)*dr*dr}b.setAttribute('cx',x.toFixed(1));b.setAttribute('cy',y.toFixed(1))});

rise($('doors'),p(u,TM.open_door-.6,TM.open_door));
DR.forEach((d,i)=>{const a=i==2?TM.open_door:TM.closed_doors+i*.25,k=p(u,a,a+.8),w=i==2?110-80*k:110+60*k;
  d[1].setAttribute('width',w.toFixed(1));d[2].setAttribute('cx',(d[0]+w-20).toFixed(1));
  if(i!=2)d[1].setAttribute('fill',k>.95?'var(--loss)':'var(--stage)');d[3].setAttribute('opacity',k)});
const wk=p(u,TM.open_door+.6,TM.open_door+2.4);
$('walker').setAttribute('transform','translate(0 '+(200*(1-wk)).toFixed(1)+')');$('walker').setAttribute('opacity',p(u,TM.open_door+.4,TM.open_door+.8));
rise($('clk'),p(u,TM.clock,TM.clock+.5));
const wa=300*p(u,TM.clock+.5,TM.clock+4),wr=(wa-90)*Math.PI/180;
$('wedge').setAttribute('d','M1360 450V362A88 88 0 '+(wa>180?1:0)+' 1 '+(1360+88*Math.cos(wr)).toFixed(1)+' '+(450+88*Math.sin(wr)).toFixed(1)+'Z');
$('hand').setAttribute('transform','rotate('+((t*60)%360).toFixed(1)+' 1360 450)');
rise($('tro'),p(u,TM.clock+4.8,TM.clock+5.4));

rise($('busy'),p(u,TM.busy_person,TM.busy_person+.5));
rise($('fit'),p(u,TM.todo_list,TM.todo_list+.5));
const th=u>=TM.thin_lines;let n=0;
const st=IT.map((q,i)=>{const a=i==0?TM.busy_person+1:TM.todo_list+(i-1)*.6;if(u>=a)n++;return a});
IT.forEach((q,i)=>{const k=p(u,st[i],st[i]+.4);rise(q[0],k);q[1].setAttribute('opacity',k);
  q[1].setAttribute('stroke-width',th?2:Math.max(2,30/Math.max(n,1)).toFixed(1));q[1].setAttribute('stroke',th?'var(--loss)':'var(--gain)')});
$('bp').setAttribute('transform','translate('+(th?2*Math.sin(t*30):0).toFixed(1)+' 0)');
rise($('thin'),p(u,TM.thin_lines,TM.thin_lines+.6));

rise($('map'),p(u,TM.plane,TM.plane+.6));
const f=.15+.7*((t*.2)%1),fo=Math.min(1,Math.min(f-.15,.85-f)/.06);
SW.setAttribute('transform','translate('+(900+520*f).toFixed(1)+' '+(560-90*f).toFixed(1)+') rotate(-9.8) scale(.8)');SW.setAttribute('opacity',fo.toFixed(2));
CD.forEach((c,i)=>{const a=TM.crossed_meal+i*.7;rise(c[0],p(u,a,a+.4));drw(c[1],p(u,a+.5,a+.75));drw(c[2],p(u,a+.75,a+1));
  c[3].setAttribute('stroke',u>=a+.75?'var(--loss)':'var(--line)')});
$('routes').setAttribute('opacity',p(u,TM.short_route,TM.short_route+.4));
RT.forEach((r,i)=>drw(r,p(u,TM.short_route+i*.4,TM.short_route+i*.4+.6)));
rise($('wins'),p(u,TM.short_route+5.4,TM.short_route+6));

rise($('cop'),p(u,TM.rival_plane,TM.rival_plane+.6));
const wob=u>=TM.split_arrows?10*Math.sin(t*3):0;
CP.setAttribute('transform','translate(190 '+(460+4*Math.sin(t*2)).toFixed(1)+') rotate('+wob.toFixed(1)+') scale(1.4)');
drw($('pb'),p(u,TM.split_arrows,TM.split_arrows+1.2));drw($('pf'),p(u,TM.split_arrows+.3,TM.split_arrows+1.5));
rise($('lbls'),p(u,TM.split_arrows+1,TM.split_arrows+1.5));
const sd=u>=TM.money_drain+3;$('pb').setAttribute('stroke',sd?'var(--loss)':'var(--ink)');$('lbb').style.fill=sd?'var(--loss)':'';
rise($('drain'),p(u,TM.split_arrows+3,TM.split_arrows+3.6));
const dd=p(u,TM.money_drain,TM.money_drain+4),h=384*(1-.85*dd);
$('cash').setAttribute('y',(652-h).toFixed(1));$('cash').setAttribute('height',h.toFixed(1));
DP.forEach((c,i)=>{const g=(t*1.2+i/3)%1;c.setAttribute('cy',(672+90*g).toFixed(1));c.setAttribute('opacity',u>=TM.money_drain?(1-g).toFixed(2):0)});
rise($('cost'),p(u,TM.money_drain+.4,TM.money_drain+1));
rise($('stamp'),p(u,TM.money_drain+3,TM.money_drain+3.4));

rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));
$('oqs').setAttribute('x2',(112+468*p(u,TM.question_mark+2.4,TM.question_mark+3)).toFixed(1));
rise($('nq'),p(u,TM.question_mark+2.8,TM.question_mark+3.4));
rise($('sc'),p(u,TM.scales,TM.scales+.6));
$('beam').setAttribute('transform','rotate('+(3*Math.sin(t*1.5)).toFixed(2)+' 1180 330)');
rise($('clar'),p(u,TM.scales+5,TM.scales+5.6));

const c1=p(u,TM.spotlight,TM.spotlight+.6),bb=p(u,TM.two_paths+7,TM.two_paths+7.6),cc=p(u,TM.two_paths+11.1,TM.two_paths+11.7);
rise($('me'),c1);
rise($('paths'),p(u,TM.two_paths,TM.two_paths+.6));rise($('optP'),p(u,TM.two_paths+.6,TM.two_paths+1.1));rise($('optF'),p(u,TM.two_paths+1.2,TM.two_paths+1.7));
const sP=1-.2*bb,sF=1-.2*bb+.4*cc;
$('optPi').setAttribute('transform','translate(450 330) scale('+sP.toFixed(3)+') translate(-450 -330)');$('optPi').setAttribute('opacity',((1-.3*bb)*(1-.3*cc)).toFixed(2));
$('optFi').setAttribute('transform','translate(1150 330) scale('+sF.toFixed(3)+') translate(-1150 -330)');$('optFi').setAttribute('opacity',(1-.3*bb+.3*cc).toFixed(2));
$('halo').setAttribute('opacity',cc.toFixed(2));$('halo').setAttribute('stroke-width',(6+2*cc*Math.abs(Math.sin(t*2))).toFixed(1));
$('lblP').style.fill=cc>.5?'var(--muted)':'var(--ink)';$('lblF').style.fill=cc>.5?'var(--gain)':'var(--ink)';
FAM.forEach(e=>e.setAttribute('class',cc>.5?'gain':'ink'));$('pfam').setAttribute('class',cc>.5?'s-gain':'s-line');
rise($('bad'),bb*(1-cc));rise($('good'),cc);

rise($('nb'),p(u,TM.notebook,TM.notebook+.6));
drw(SCR[0],p(u,TM.notebook+3.4,TM.notebook+4.6));drw(SCR[1],p(u,TM.notebook+4.8,TM.notebook+6));
rise($('row3'),p(u,TM.crossed_item,TM.crossed_item+.4));drw(SCR[2],p(u,TM.crossed_item+.3,TM.crossed_item+1.3));
$('xs').setAttribute('x2',(470+460*p(u,TM.crossed_item+1.5,TM.crossed_item+2.1)).toFixed(1));
rise($('ans'),p(u,TM.crossed_item+4.6,TM.crossed_item+5.2));

rise($('mir'),p(u,TM.mirror,TM.mirror+.6));
rise($('qa'),p(u,TM.mirror,TM.mirror+.5));rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9));rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
rise($('nm'),p(u,TM.mirror+3,TM.mirror+3.6));