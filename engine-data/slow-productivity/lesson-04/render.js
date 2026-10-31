F.forEach((r,i)=>{const a=TM.inbox_flood+i*.8,f=p(u,a,a+.6);r.setAttribute('y',(200+(510-i*18-200)*f).toFixed(1));r.setAttribute('opacity',u>=a?1:0)});
  rise($('notyet'),p(u,TM.inbox_flood+7,TM.inbox_flood+7.5));

  rise($('cols'),p(u,TM.desk_worker,TM.desk_worker+.5));rise($('worker'),p(u,TM.desk_worker,TM.desk_worker+.5));
  SH.forEach((r,i)=>{const a=i<6?TM.desk_worker+1+i*.8:TM.request_pile+(i-6)*.4,f=p(u,a,a+.6),sx=CX[i%4],ty=622-i*16,over=ty<500&&f>=1;
    r.setAttribute('x',(sx-50+(900-sx)*f).toFixed(1));r.setAttribute('y',(520+(ty-520)*f-160*Math.sin(Math.PI*f)).toFixed(1));r.setAttribute('opacity',u>=a?1:0);
    r.setAttribute('fill',over?'var(--loss)':'var(--stage)');r.setAttribute('stroke',over?'var(--loss)':'var(--ink)')});
  rise($('cap'),p(u,TM.request_pile,TM.request_pile+.5));rise($('push'),p(u,TM.request_pile+4.2,TM.request_pile+4.8));

  rise($('lv0'),p(u,TM.mission_box,TM.mission_box+.5));rise($('lv1'),p(u,TM.project_boxes,TM.project_boxes+.5));rise($('lv2'),p(u,TM.task_list,TM.task_list+.5));

  R3.forEach((R,r)=>{const a=[TM.mission_count,TM.project_cap,TM.daily_cap][r],q=p(u,a+1,a+2);rise(R.g,p(u,a,a+.5));
    R.it.forEach((e,i)=>{const on=i<R.k&&q>0;e.setAttribute('fill',on?'var(--gain)':'var(--stage)');e.setAttribute('stroke',on?'var(--gain)':'var(--ink)');e.setAttribute('opacity',i<R.k?1:1-.85*q)});
    R.w.setAttribute('opacity',q)});
  rise($('wish'),p(u,TM.daily_cap+2,TM.daily_cap+2.6));

  const S4=SC[4][0]/K,sc=p(u,TM.scattered_dots,TM.scattered_dots+1.2),hd=p(u,TM.batch_block,TM.batch_block+1.4);
  DT.forEach((c,i)=>{const x0=140+i*40,y0=290,x1=170+(i*373)%1260,y1=440+(i*37)%60,x2=1222+(i%7)*36,y2=450+Math.floor(i/7)*40,x=x0+(x1-x0)*sc,y=y0+(y1-y0)*sc;
    c.setAttribute('cx',(x+(x2-x)*hd).toFixed(1));c.setAttribute('cy',(y+(y2-y)*hd).toFixed(1));c.setAttribute('opacity',p(u,S4+.3+i*.08,S4+.6+i*.08))});
  $('chlbl').setAttribute('opacity',(p(u,S4+.2,S4+.6)*(1-p(u,TM.scattered_dots,TM.scattered_dots+.6))).toFixed(3));
  $('broken').setAttribute('opacity',p(u,TM.scattered_dots+1,TM.scattered_dots+1.5)*(1-p(u,TM.batch_block,TM.batch_block+.5)));
  rise($('pen'),p(u,TM.batch_block,TM.batch_block+.5));rise($('focus'),p(u,TM.batch_block+1.2,TM.batch_block+1.8));rise($('herd'),p(u,TM.batch_block+1.8,TM.batch_block+2.4));

  const pa=TM.pull_arrow,q1=p(u,pa+.6,pa+1.4),q2=p(u,pa+1.6,pa+2.8),q3=p(u,pa+3,pa+3.6);
  rise($('doneG'),p(u,pa,pa+.5));
  AC[0].setAttribute('transform','translate('+(820+385*q1).toFixed(1)+' '+(300-40*q1).toFixed(1)+')');
  QC.forEach((c,i)=>{const x=i?150:150+670*q2,y=i?280+i*90-90*q3:280+20*q2;c.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')')});
  QC[0].firstChild.setAttribute('fill',q2>.5?'var(--gain)':'var(--stage)');QC[0].firstChild.setAttribute('stroke',q2>.5?'var(--gain)':'var(--ink)');
  rise($('pullA'),p(u,pa+1.2,pa+1.7));
  const fh=TM.full_hands;ASK.setAttribute('transform','translate('+(1220-80*Math.sin(Math.PI*p(u,fh+.3,fh+1.1))).toFixed(1)+' 440)');ASK.setAttribute('opacity',p(u,fh,fh+.3));rise($('askX'),p(u,fh+1.1,fh+1.5));

  const A6=TM.active_board;
  TK.forEach((r,k)=>{const tx=180+(k%3)*120,ty=430+Math.floor(k/3)*70,a=TM.holding_tank+(11-k)*.15,f=p(u,a,a+.5);let x=tx,y=290+(ty-290)*f,m=0,o=u>=a?1:0;
    if(k<7){const s=k==6?1:k,d=s%3,row=Math.floor(s/3),b=k==6?A6+5:A6+.3+k*.3;m=p(u,b,b+.8);x=tx+(DX[d]-45-tx)*m;y=y+(485+row*90-y)*m}
    if(k==1)o*=1-p(u,A6+4,A6+4.5);
    r.setAttribute('x',x.toFixed(1));r.setAttribute('y',y.toFixed(1));r.setAttribute('opacity',o);r.setAttribute('fill',m>.5?'var(--gain)':'var(--stage)');r.setAttribute('stroke',m>.5?'var(--gain)':'var(--ink)')});
  rise($('devs'),p(u,TM.dev_team,TM.dev_team+.5));rise($('tank'),p(u,TM.holding_tank,TM.holding_tank+.5));
  $('pull6').setAttribute('opacity',p(u,A6,A6+.5));rise($('teamline'),p(u,A6+5.5,A6+6));

  rise($('padW'),p(u,TM.personal_list,TM.personal_list+.5));rise($('padA'),p(u,TM.personal_list+.6,TM.personal_list+1.1));
  const W7=TM.waiting_list;RW.forEach((r,i)=>r.setAttribute('opacity',p(u,W7+i*.2,W7+i*.2+.3)));RA.forEach((r,i)=>r.setAttribute('opacity',p(u,W7+2.4+i*.4,W7+2.7+i*.4)));
  const S7=W7+5.8,f7=p(u,S7+.5,S7+1.5),na=$('newAsk');rise($('asker'),p(u,S7,S7+.5));
  na.setAttribute('x',(1200-1050*f7).toFixed(1));na.setAttribute('y',(420+280*f7-180*Math.sin(Math.PI*f7)).toFixed(1));na.setAttribute('opacity',p(u,S7+.3,S7+.5));
  rise($('say'),p(u,S7+1.4,S7+1.9));

  const S8=SC[8][0]/K;rise($('qa'),p(u,S8+.3,S8+.8));rise($('qb'),p(u,S8+.7,S8+1.2));rise($('qc'),p(u,S8+1.1,S8+1.6));
  rise($('g8'),p(u,S8+.6,S8+1.2));rise($('qd'),p(u,S8+5,S8+5.6));$('c8').setAttribute('y',(610-140*p(u,S8+5.6,S8+6.8)).toFixed(1));