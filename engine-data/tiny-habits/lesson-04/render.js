const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
const DO=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const s0k=p(t,.8,2.6),dn=s0k>=1,ss=300-256*s0k+(dn?4*Math.sin(t*3):0);
SQ.setAttribute('x',(1290-ss/2).toFixed(1));SQ.setAttribute('y',(380-ss/2).toFixed(1));SQ.setAttribute('width',ss.toFixed(1));SQ.setAttribute('height',ss.toFixed(1));
SQ.setAttribute('fill',dn?'var(--gain)':'none');SQ.setAttribute('stroke',dn?'var(--gain)':'var(--ink)');
R('t0sub',TM.title_card,.6);

R('bp',TM.new_year);R('blkR',TM.new_year);
const ba=90*p(u,TM.tired_day+.6,TM.tired_day+1.6),br=ba*Math.PI/180,bc=Math.cos(br),bs=Math.sin(br);
$('blk').setAttribute('transform','rotate('+ba.toFixed(1)+' 480 680)');
$('blkT').setAttribute('transform','translate('+(480-120*bc+315*bs).toFixed(1)+' '+(680-120*bs-315*bc).toFixed(1)+')');
R('cd0',TM.day_one);R('cd1',TM.tired_day);
const h0=220*p(u,TM.day_one,TM.day_one+1),h1=220-180*p(u,TM.tired_day+.3,TM.tired_day+1.3);
LV[0].setAttribute('height',h0.toFixed(1));LV[0].setAttribute('y',(570-h0).toFixed(1));LV[1].setAttribute('height',h1.toFixed(1));LV[1].setAttribute('y',(570-h1).toFixed(1));
R('flaw',TM.tired_day+4.6);R('toobig',TM.tired_day+7.1);

R('fbox',TM.toothbrush);DO($('floss'),p(u,TM.floss_string,TM.floss_string+1.2));
TE.forEach((r,i)=>{const on=i==3?u>=TM.single_tooth:u>=TM.single_tooth+5.8+Math.abs(i-3)*.3;r.setAttribute('fill',on?'var(--gain)':'var(--stage)');r.setAttribute('fill-opacity',on&&i!=3?.45:1)});
R('sec',TM.single_tooth);R('more',TM.single_tooth+5.8);

R('ax',TM.motive_wave);DO($('wave'),p(u,TM.motive_wave,TM.motive_wave+2.2));R('bigL',TM.motive_wave+1.4);R('tinyL',TM.low_bar);
DT.forEach((c,i)=>{const a=TM.low_bar+5.4+i*.25;rise(c,p(u,a,a+.3))});R('rep',TM.low_bar+10);

CL.forEach((c,i)=>{const b=TM.five_links+i*.25,a=i<4?TM.clock_coin+i*.8:TM.calendar;rise(c[0],p(u,b,b+.5));rise(c[3],p(u,a,a+.4))});
const w2=p(u,TM.calendar+4.2,TM.calendar+5),wl=u>=TM.calendar+3.4;
const wc=w2>0?'var(--gain)':wl?'var(--loss)':'var(--ink)';
CL[2][2].setAttribute('stroke',wc);CL[2][4].setAttribute('stroke',wc);
CL[2][4].setAttribute('transform','scale('+(1-.45*w2).toFixed(3)+')');
R('shr',TM.calendar+3.4);

R('st1',TM.shoe_pair);R('shoes',TM.shoe_pair);
SH.forEach(s=>s.setAttribute('fill',u>=TM.shoe_pair+6.2?'var(--gain)':'var(--ink)'));
R('cap1',TM.shoe_pair+6.2);R('cap2',TM.shoe_pair+10.4);
const wk=p(u,TM.shoe_pair+10.4,TM.open_door-.3),wk2=p(u,TM.open_door+.5,TM.open_door+1.3),wx=380+740*wk+140*wk2;
const wy=wx<880?660-60*Math.floor((wx-160)/180):480,bob=(wk>0&&wk<1)?3*Math.abs(Math.sin(t*8)):0;
$('walker').setAttribute('transform','translate('+wx.toFixed(1)+' '+(wy-bob).toFixed(1)+')');$('walker').setAttribute('opacity',u>=TM.shoe_pair+10.4?1:0);
const od=p(u,TM.open_door,TM.open_door+.8);$('door').setAttribute('width',(160-130*od).toFixed(1));$('dlight').setAttribute('opacity',od.toFixed(2));
R('opn',TM.open_door+.4);

R('pa',TM.book_stack);const op=p(u,TM.one_page,TM.one_page+.6);$('stack').setAttribute('opacity',(1-.85*op).toFixed(2));rise($('page'),op);
R('pb',TM.single_pushup);const pk=p(u,TM.single_pushup+.5,TM.single_pushup+2);
$('pu').setAttribute('transform','rotate('+(-6*Math.sin(pk*Math.PI)).toFixed(2)+' 1320 595)');
['ck0','ck1','bonus'].forEach((id,i)=>R(id,TM.single_pushup+3+i*.2));

R('cloud',TM.storm_cloud);R('wp',TM.storm_cloud+.3);$('rain').setAttribute('opacity',p(u,TM.storm_cloud+.3,TM.storm_cloud+.8));
RN.forEach(l=>l.setAttribute('stroke-dashoffset',(-t*90).toFixed(1)));
TG.forEach((g,i)=>{const a=TM.storm_cloud+4.2+i*.4;rise(g,p(u,a,a+.4))});
['qq','cap','hb'].forEach(id=>R(id,TM.storm_cloud+5.4));
const hh=300-110*p(u,TM.check_mark+.3,TM.check_mark+1)-120*p(u,TM.check_mark+1.5,TM.check_mark+2.3),ok=hh<90;
$('hbr').setAttribute('height',hh.toFixed(1));$('hbr').setAttribute('y',(690-hh).toFixed(1));$('hbr').style.fill=ok?'var(--gain)':'var(--loss)';
$('hbt').style.fill=ok?'var(--on-gain)':'var(--stage)';R('yes',TM.check_mark+2.4);

R('ya',TM.your_habit);R('qa',TM.your_habit+3.4);R('qb',TM.your_habit+3.8);R('qc',TM.your_habit+4.2);
const zk=p(u,TM.your_habit+4.6,TM.your_habit+6),zs=140-100*zk+(zk>=1?4*Math.sin(t*3):0);
$('tz').setAttribute('x',(1340-zs/2).toFixed(1));$('tz').setAttribute('y',(640-zs/2).toFixed(1));$('tz').setAttribute('width',zs.toFixed(1));$('tz').setAttribute('height',zs.toFixed(1));
$('tz').setAttribute('opacity',p(u,TM.your_habit+3.4,TM.your_habit+4));