const R=(e,a,d=.5)=>rise(typeof e==='string'?$(e):e,p(u,a,a+d));
const k0=p(u,TM.wheat_stalk,TM.wheat_stalk+2.2);W0.setAttribute('transform',`translate(1360 800) scale(${(.05+.95*k0).toFixed(3)}) translate(-1360 -800)`);
R('t_man',TM.wheat_stalk+1.2);R('t_leash',TM.wheat_stalk+5);R('t_q',TM.wheat_stalk+5.4);

R('origin',TM.wild_grass);$('ring').setAttribute('r',(20+10*Math.abs(Math.sin(t*2))).toFixed(1));R('olbl',TM.wild_grass+.6);
const RR=1100*p(u,TM.world_map,TM.world_map+4);MD.forEach(([c,d])=>c.setAttribute('fill',d<RR||(d<14&&u>=TM.wild_grass)?'var(--gain)':'var(--line)'));
R('wl',TM.world_map+.4);R('cap1',TM.world_map+4.6);

R('f2',TM.farmer);R('stalks2',TM.farmer+.3);R('sun2',TM.farmer);
const kr=p(u,TM.rocks+.8,TM.rocks+2.5);RK.forEach((e,i)=>{const k=cl(kr*1.6-i*.2);e.setAttribute('transform',`translate(0 ${(-50*k).toFixed(1)})`);e.setAttribute('opacity',1-k)});
const kw=p(u,TM.weeds+.8,TM.weeds+3);WD.forEach((e,i)=>{const k=cl(kw*1.6-i*.2),x=600+i*240;e.setAttribute('transform',`translate(${x} 600) scale(${(1-k).toFixed(3)}) translate(${-x} -600)`)});
[TM.rocks,TM.weeds,TM.weeds+5.7,TM.weeds+6.5].forEach((a,i)=>R(KC[i],a));R('bucket',TM.weeds+5.7);
const kp=p(u,TM.weeds+6.5,TM.weeds+8.5);PS.forEach((g,i)=>{const x=700+i*240+30*Math.sin(t*3+i),y=350+12*Math.sin(t*5+i*2)-120*kp;g.setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)})`);g.setAttribute('opacity',(p(u,TM.weeds+5.7,TM.weeds+6.2)*(1-kp)).toFixed(2))});

R('spine',TM.skeleton);
const bd=p(u,TM.skeleton+1.5,TM.skeleton+4);let sx=300,sy=760,sa=0;const SPT=[];
VB.forEach((e,i)=>{sa=bd*.12*i;e.setAttribute('transform',`translate(${sx.toFixed(1)} ${sy.toFixed(1)}) rotate(${(sa*57.3).toFixed(1)})`);SPT.push([sx,sy,sa]);sx+=40*Math.sin(sa);sy-=40*Math.cos(sa)});
HD.setAttribute('cx',(sx+8*Math.sin(sa)).toFixed(1));HD.setAttribute('cy',(sy-8*Math.cos(sa)).toFixed(1));
[2,5,8].forEach((v,i)=>{const q=SPT[v],a=TM.skeleton+6.5+i*.8;MK[i].setAttribute('cx',(q[0]+44*Math.cos(q[2])).toFixed(1));MK[i].setAttribute('cy',(q[1]+44*Math.sin(q[2])).toFixed(1));MK[i].setAttribute('r',(12+3*Math.abs(Math.sin(t*3+i))).toFixed(1));MK[i].setAttribute('opacity',p(u,a,a+.4));R('pl'+i,a)});
R('bowl3',TM.grain_bowl);const kv=p(u,TM.grain_bowl+1.5,TM.grain_bowl+2.5);
$('variety').setAttribute('opacity',(p(u,TM.grain_bowl,TM.grain_bowl+.5)*(1-kv)).toFixed(2));$('variety').setAttribute('transform',`translate(0 ${(-40*kv).toFixed(1)})`);
R('grains',TM.grain_bowl+2);[2.4,3.4,4.4].forEach((d,i)=>R('gl'+i,TM.grain_bowl+d));

R('vill',TM.village);R('anim',TM.village+.6);R('v_l',TM.village+1);R('fp',TM.village+1.5);R('f_l',TM.village+2);
GM.forEach(([g,x,y,h],i)=>{const a=TM.germs+ORD.indexOf(h)*.5+(i%2)*.2,k=p(u,a,a+.4);g.setAttribute('opacity',k);g.setAttribute('transform',`translate(${x} ${y}) scale(${(k*(1+.12*Math.sin(t*4+i))).toFixed(3)})`)});
HU.forEach((e,h)=>e.setAttribute('stroke',u>=TM.germs+ORD.indexOf(h)*.5?'var(--loss)':'var(--ink)'));R('g_l',TM.germs+.5);
const kd=p(u,TM.dry_field,TM.dry_field+1.5);$('okf').setAttribute('opacity',1-kd);$('dryf').setAttribute('opacity',kd);$('cracks').setAttribute('opacity',kd);
$('rain').setAttribute('opacity',1-kd);$('rain').setAttribute('transform',`translate(0 ${((t*60)%30).toFixed(1)})`);
LC.forEach((e,i)=>{e.setAttribute('cx',(960+((i*83+t*110)%460)).toFixed(1));e.setAttribute('cy',(440+(i*37)%90+8*Math.sin(t*5+i)).toFixed(1))});
$('loc').setAttribute('opacity',p(u,TM.dry_field+2,TM.dry_field+2.6));R('d_l',TM.dry_field+1);

R('w5',TM.house);R('house5',TM.house+.3);R('fld5',TM.farmer_hut);R('p5',TM.farmer_hut+.3);
const kk=p(u,TM.farmer_hut+.8,TM.farmer_hut+3.5),bob=kk>0&&kk<1?-6*Math.abs(Math.sin(t*8)):0;
P5.setAttribute('transform',`translate(${(830-370*kk).toFixed(1)} ${bob.toFixed(1)})`);$('win5').setAttribute('fill',kk>=1?'var(--gain)':'var(--stage)');
R('l5a',TM.farmer_hut+3.5);R('l5b',TM.farmer_hut+3.8);R('quo5',TM.farmer_hut+5.4,.6);

R('ring6',TM.family);[TM.family+5.4,TM.family+6.2,TM.family+7,TM.crowd].forEach((a,i)=>R(NP[i],a));
FM.forEach((f,i)=>{const a=i<2?TM.family+.4:i<6?TM.family+6+(i-2)*.4:TM.crowd+.5+(i-6)*.3;R(f,a,.4)});
const oa=t*1.2;$('orb').setAttribute('cx',(560+230*Math.cos(oa)).toFixed(1));$('orb').setAttribute('cy',(500+230*Math.sin(oa)).toFixed(1));$('orb').setAttribute('opacity',p(u,TM.crowd+.5,TM.crowd+1));
R('forage',TM.crowd+1.5);R('nox',TM.crowd+3,.3);R('cap6',TM.crowd+5.4,.6);

R('hc',TM.headcount);const kh=Math.round(108*p(u,TM.headcount,TM.headcount+3.5));
HC.forEach((c,i)=>c.setAttribute('fill',i===59&&u>=TM.scales?'var(--loss)':i<kh?'var(--gain)':'var(--line)'));
R('hl',TM.headcount+2);R('ne',TM.scales);R('ind',TM.scales+.5);R('il',TM.scales+1.2);R('cap7',TM.scales+5.4,.6);

R('qa',TM.your_chores);R('qb',TM.your_chores+.4);R('cg',TM.your_chores+1);R('qm',TM.your_chores+5.8);
CP.setAttribute('transform',`rotate(${(8+6*Math.sin(t*1.5)).toFixed(1)} 1320 820)`);