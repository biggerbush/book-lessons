TE.forEach((e,i)=>{const a=TM.inbox_flood+i*.45,k=p(u,a,a+.6);e[0].setAttribute('transform','translate('+e[1]+' '+(200+(e[2]-200)*k).toFixed(1)+')');e[0].setAttribute('opacity',cl(lin(u,a,a+.15)))});
$('tdeep').setAttribute('width',(280*(1-.85*p(u,TM.inbox_flood+4.6,TM.inbox_flood+7.5))).toFixed(1));

DK.forEach((d,i)=>{rise(d[0],p(u,TM.office+i*.3,TM.office+i*.3+.5));rise(d[1],p(u,TM.question_mark+i*.25,TM.question_mark+i*.25+.4))});
rise($('chart'),p(u,TM.foggy_chart,TM.foggy_chart+.5));
const hk=p(u,TM.foggy_chart+1,TM.foggy_chart+3.5);HC.setAttribute('r',(70*hk).toFixed(1));
RG.forEach((r,i)=>{r.setAttribute('opacity',hk);r.setAttribute('transform','rotate('+((t*(20+i*10))%360).toFixed(1)+' 1140 450)')});
BR.forEach((b,i)=>{b.setAttribute('transform','translate('+((1140-915-i*110)*.3*hk).toFixed(1)+' 0)');b.setAttribute('opacity',(1-.75*hk).toFixed(2))});
rise($('inv'),p(u,TM.foggy_chart+2.5,TM.foggy_chart+3.1));

rise($('jug'),p(u,TM.juggler,TM.juggler+.5));const jb=p(u,TM.juggler+.3,TM.juggler+.8);
BL.forEach((b,i)=>{const a=t*3+i*2.094;b.setAttribute('cx',(380+110*Math.cos(a)).toFixed(1));b.setAttribute('cy',(355+55*Math.sin(a)).toFixed(1));b.setAttribute('opacity',jb)});
TL.forEach((g,i)=>rise(g,p(u,TM.replies+i*1.2,TM.replies+i*1.2+.5)));
rise($('proxy'),p(u,TM.replies+5.4,TM.replies+6));
const sp=p(u,TM.spotlight,TM.spotlight+.8);$('spot').setAttribute('opacity',sp);$('spotF').setAttribute('opacity',sp);
rise($('rout'),p(u,TM.spotlight+.8,TM.spotlight+1.3));rise($('seen'),p(u,TM.spotlight+1.2,TM.spotlight+1.8));

rise($('hill'),p(u,TM.downhill,TM.downhill+.6));
const bx=520+700*p(u,TM.sliding_ball+.5,TM.sliding_ball+3.5);
$('ball').setAttribute('cx',bx.toFixed(1));$('ball').setAttribute('cy',(240+.48*(bx-300)-29).toFixed(1));$('ball').setAttribute('opacity',p(u,TM.downhill+.4,TM.downhill+.9));
rise($('lr'),p(u,TM.sliding_ball,TM.sliding_ball+.5));
rise($('phone'),p(u,TM.phone_ring,TM.phone_ring+.4));$('rings').setAttribute('opacity',u>=TM.phone_ring?(.4+.6*Math.abs(Math.sin(t*6))).toFixed(2):0);
rise($('cult'),p(u,TM.phone_ring+1,TM.phone_ring+1.6));

rise($('cto'),p(u,TM.cto,TM.cto+.5));rise($('clk'),p(u,TM.cto+.3,TM.cto+.8));
const pk=p(u,TM.cto+.8,TM.cto+6)*.85,pa=pk*2*Math.PI;
$('pie').setAttribute('d',pk>0?'M460 330V280A50 50 0 '+(pa>Math.PI?1:0)+' 1 '+(460+50*Math.sin(pa)).toFixed(1)+' '+(330-50*Math.cos(pa)).toFixed(1)+'Z':'M0 0');
ML.forEach((m,i)=>{const s=MS[i],a=TM.cto+.6+i*.5,k=p(u,a,a+.6),bob=4*Math.sin(t*2+i*1.3);
  m.setAttribute('transform','translate('+(s[0]+s[2]*(1-k)).toFixed(1)+' '+(s[1]+s[3]*(1-k)+bob*k).toFixed(1)+')');m.setAttribute('opacity',k.toFixed(2))});
rise($('sheet'),p(u,TM.spreadsheet,TM.spreadsheet+.5));SR.forEach((g,i)=>rise(g,p(u,TM.spreadsheet+.5+i*.4,TM.spreadsheet+.9+i*.4)));
$('arr').setAttribute('opacity',p(u,TM.spreadsheet+3,TM.spreadsheet+3.5));
CN.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.money_pile+i*.08,TM.money_pile+i*.08+.2)));
rise($('cash'),p(u,TM.money_pile+.3,TM.money_pile+.8));$('cashv').textContent='$'+Math.round(1e6*p(u,TM.money_pile+.3,TM.money_pile+2.3)).toLocaleString('en-US');

rise($('res'),p(u,TM.researcher,TM.researcher+.5));rise($('cons'),p(u,TM.consultants,TM.consultants+.5));
$('sig').setAttribute('opacity',(p(u,TM.consultants+.5,TM.consultants+1)*(1-.85*p(u,TM.calendar_off+1,TM.calendar_off+2))).toFixed(2));
rise($('cal'),p(u,TM.calendar_off,TM.calendar_off+.5));rise($('offc'),p(u,TM.calendar_off+.8,TM.calendar_off+1.3));
HP.forEach((g,i)=>rise(g,p(u,TM.happy_team+i*.8,TM.happy_team+i*.8+.5)));
CS.forEach(pp=>pp.forEach(e=>e.setAttribute('class',u>=TM.happy_team?'gain':'ink')));

rise($('day'),p(u,TM.scale,TM.scale+.5));rise($('bal'),p(u,TM.scale+.3,TM.scale+.8));
const s1=p(u,TM.scale+.5,TM.scale+1.5),s2=p(u,TM.shallow_pool+.3,TM.shallow_pool+3.3),nn=2+2*s1+10*s2,dx=140+nn*70;
SH.forEach((r,i)=>r.setAttribute('opacity',cl(nn-i)));
$('deepb').setAttribute('x',dx.toFixed(1));$('deepb').setAttribute('width',(1460-dx).toFixed(1));$('deept').setAttribute('x',((dx+1460)/2).toFixed(1));
const an=-6*s1-8*s2,ar=an*Math.PI/180,cx=250*Math.cos(ar),cy=250*Math.sin(ar);
$('beam').setAttribute('transform','rotate('+an.toFixed(2)+' 800 600)');
$('panL').setAttribute('transform','translate('+(800-cx).toFixed(1)+' '+(600-cy).toFixed(1)+')');$('panR').setAttribute('transform','translate('+(800+cx).toFixed(1)+' '+(600+cy).toFixed(1)+')');

rise($('mir'),p(u,TM.mirror,TM.mirror+.5));TG.forEach((g,i)=>rise(g,p(u,TM.mirror+1.2+i*.9,TM.mirror+1.7+i*.9)));
rise($('card'),p(u,TM.checklist,TM.checklist+.5));rise($('ck0'),p(u,TM.checklist+.4,TM.checklist+.9));
$('stk').setAttribute('x2',(1090+320*p(u,TM.checklist+1.2,TM.checklist+1.8)).toFixed(1));
rise($('ck1'),p(u,TM.checklist+2,TM.checklist+2.5));rise($('outp'),p(u,TM.checklist+3,TM.checklist+3.6));

rise($('tl'),p(u,TM.tally,TM.tally+.5));const tk=Math.floor(15*p(u,TM.tally+.5,TM.tally+5));
TY.forEach((e,i)=>e.setAttribute('opacity',i<tk?1:0));
rise($('qa'),p(u,TM.tally+5.4,TM.tally+5.9));rise($('qb'),p(u,TM.tally+5.8,TM.tally+6.3));rise($('qc'),p(u,TM.tally+6.2,TM.tally+6.7));