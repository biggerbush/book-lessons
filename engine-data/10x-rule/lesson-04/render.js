avgTD.forEach((e,i)=>{const x=(i*55+t*40)%385;e.setAttribute('cx',(1100+x).toFixed(1));e.setAttribute('opacity',cl(Math.min(x,385-x)/40).toFixed(2))});
const gk=(t*.3)%1,gm=1-gk;avgTG.setAttribute('cx',(gm*gm*1200+2*gm*gk*1400+gk*gk*1440).toFixed(1));avgTG.setAttribute('cy',(gm*gm*470+2*gm*gk*470+gk*gk*280).toFixed(1));
avgRZ('tcrowd',u,TM.crowd_path);

avgRZ('bell',u,TM.middle_line);avgBD.forEach(([e,c])=>e.setAttribute('opacity',p(u,TM.middle_line+.3+c*.08,TM.middle_line+.6+c*.08)));avgRZ('mid',u,TM.middle_line+1.2);
['ck0','ck1','ck2'].forEach((id,i)=>avgRZ(id,u,TM.clock_nine+i*1.3));avgRZ('s1f',u,TM.clock_nine+5);

avgRZ('house',u,TM.cozy_house);const hs=(t*.4)%1;$('hsmoke').setAttribute('cy',(300-hs*80).toFixed(1));$('hsmoke').setAttribute('opacity',((1-hs)*.6).toFixed(2));
avgPP.forEach((g,i)=>rise(g,p(u,TM.thumbs_up+i*.6,TM.thumbs_up+i*.6+.5)));
const il=u>=TM.thumbs_up+5;['hroof','hbody'].forEach(id=>$(id).setAttribute('stroke-dasharray',il?'14 12':'none'));avgRZ('ill',u,TM.thumbs_up+5);

avgRZ('cloud',u,TM.storm_cloud);avgRN.forEach((e,i)=>{const o=(t*120+i*23)%60;e.setAttribute('d','M'+(676+i*36)+' '+(395+o).toFixed(1)+'l-6 16')});
$('bolt').setAttribute('opacity',Math.sin(t*2.3)>.8?1:0);
['ev0','ev1','ev2'].forEach((id,i)=>avgRZ(id,u,TM.broken_car+i*1.4));
avgSM.forEach((e,i)=>{const k=(t*.5+i/3)%1;e.setAttribute('cx',(500+k*20).toFixed(1));e.setAttribute('cy',(555-k*50).toFixed(1));e.setAttribute('opacity',(1-k).toFixed(2))});
const hb=1+.06*Math.pow(Math.abs(Math.sin(t*3)),6);$('heart').setAttribute('transform','translate(1200 580) scale('+hb.toFixed(3)+') translate(-1200 -580)');
avgRZ('s3f',u,TM.broken_car+4.5);

avgRZ('news',u,TM.news_headline);avgRZ('chart',u,TM.falling_chart);
const fk=p(u,TM.falling_chart,TM.falling_chart+2.5)*(avgFP.length-1);let fs='';for(let i=0;i<avgFP.length;i++){if(i<=fk)fs+=avgFP[i]+' ';else{const a=avgFP[i-1],f=fk-i+1;fs+=(a[0]+(avgFP[i][0]-a[0])*f).toFixed(1)+','+(a[1]+(avgFP[i][1]-a[1])*f).toFixed(1);break}}$('fall').setAttribute('points',fs);
avgRZ('fam',u,TM.family_worry);avgRZ('famt',u,TM.family_worry+1);const fw=u>=TM.family_worry+2.5;avgFM.forEach(e=>e.setAttribute('class',fw?'loss':'ink'));avgRZ('s4f',u,TM.family_worry+6.6);

avgRZ('rope',u,TM.thin_rope);const sn=p(u,TM.scale_tip+4.6,TM.scale_tip+5.4),rw=(u>TM.thin_rope+1&&sn===0)?3*Math.sin(t*25):0,ey=(330+240*sn).toFixed(1);
$('ropeL').setAttribute('d','M174 330Q300 '+(330+rw).toFixed(1)+' '+(430-80*sn).toFixed(1)+' '+ey);$('ropeR').setAttribute('d','M686 330Q560 '+(330+rw).toFixed(1)+' '+(430+80*sn).toFixed(1)+' '+ey);
['ropeL','ropeR'].forEach(id=>$(id).setAttribute('class',sn>0?'s-loss':'s-ink'));
avgRZ('scale',u,TM.scale_tip);const ba=12*p(u,TM.scale_tip+.4,TM.scale_tip+1.4)+1.2*Math.sin(t*2);$('beam').setAttribute('transform','rotate('+ba.toFixed(2)+' 1120 440)');
avgRZ('sct',u,TM.scale_tip+.4);avgRZ('s5f',u,TM.scale_tip+4.6);

avgRZ('board',u,TM.target_board);avgRZ('arwg',u,TM.target_board+1);avgRZ('aim',u,TM.arrow_low);avgRZ('push',u,TM.arrow_low+.8);
const ak=p(u,TM.arrow_low+1,TM.arrow_low+2.6),ax=1300-770*ak,ay=420+80*ak+160*ak*ak,an=Math.atan2(80+320*ak,-770)*180/Math.PI;
$('arw').setAttribute('transform','translate('+ax.toFixed(1)+' '+ay.toFixed(1)+') rotate('+an.toFixed(2)+')');
avgRZ('lnd',u,TM.arrow_low+2.6);avgRZ('s6f',u,TM.arrow_low+5.8);

avgRZ('pig',u,TM.piggy_bank);const ck=(t*.6)%1;$('coin').setAttribute('cy',(250+120*ck).toFixed(1));$('coin').setAttribute('opacity',(ck<.8?1:(1-ck)/.2).toFixed(2));
avgRZ('stacks',u,TM.stack_coins);avgRZ('need',u,TM.stack_coins);
avgST.forEach((cs,s)=>{const n=avgStackN[s]*p(u,TM.stack_coins+s*1.2,TM.stack_coins+s*1.2+1.6);cs.forEach((c,i)=>c.setAttribute('opacity',cl(n-i).toFixed(2)))});
avgRZ('umb',u,TM.umbrella);avgRZ('rain2',u,TM.umbrella);avgR2.forEach(([e,x,yl],i)=>{const o=(t*220+i*53)%(yl-211);e.setAttribute('d','M'+x+' '+(195+o).toFixed(1)+'l-4 16')});
avgRZ('s7f',u,TM.umbrella+1);

avgRZ('mir',u,TM.mirror);avgRZ('mlab',u,TM.mirror+.8);['qa','qb','qc'].forEach((id,i)=>avgRZ(id,u,TM.mirror+6+i*.4));