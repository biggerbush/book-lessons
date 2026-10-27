rise($('note0'),p(u,TM.paper_note,TM.paper_note+.6));$('noteF').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5)).toFixed(1)+')');
rise($('meal0'),p(u,TM.paper_note+3,TM.paper_note+3.6));rise($('qm0'),p(u,TM.paper_note+3.6,TM.paper_note+4.2));

rise($('farm1'),p(u,TM.apple_farmer,TM.apple_farmer+.5));rise($('shoe1'),p(u,TM.shoemaker,TM.shoemaker+.5));
const ak=p(u,TM.shoemaker+1,TM.shoemaker+2),ab=p(u,TM.shoemaker+3,TM.shoemaker+3.8);
$('apl').setAttribute('transform','translate('+(330+210*ak-210*ab).toFixed(1)+' 500)');$('apl').setAttribute('opacity',p(u,TM.apple_farmer+.5,TM.apple_farmer+1).toFixed(2));
rise($('nox'),p(u,TM.shoemaker+2,TM.shoemaker+2.5));
rise($('net1'),p(u,TM.rate_table,TM.rate_table+.5));
CHD.forEach((l,i)=>{const a=TM.rate_table+i/CHD.length*2.5;l.setAttribute('opacity',p(u,a,a+.3).toFixed(2))});
rise($('rn1'),p(u,TM.rate_table+.3,TM.rate_table+.8));$('rnum').textContent=Math.round(4950*p(u,TM.rate_table+.3,TM.rate_table+2.8)).toLocaleString('en-US');

rise($('shell2'),p(u,TM.cowry_shell,TM.cowry_shell+.5));
RG.forEach((g,i)=>{const a=TM.cowry_shell+4.6+i*.5;rise(g,p(u,a,a+.4))});
rise($('str2'),p(u,TM.shell_string,TM.shell_string+.4));SH.forEach((g,i)=>{const a=TM.shell_string+i*.08;rise(g,p(u,a,a+.3))});
rise($('use2'),p(u,TM.shell_string+.4,TM.shell_string+.9));
[0,1,2].forEach(i=>{const a=TM.shell_string+1.8+i*.7;rise($('bx'+i),p(u,a,a+.4))});

rise($('barl'),p(u,TM.barley_sack,TM.barley_sack+.5));rise($('eat3'),p(u,TM.barley_sack+6.6,TM.barley_sack+7.1));
rise($('arr3'),p(u,TM.silver_bar,TM.silver_bar+.4));rise($('silv'),p(u,TM.silver_bar+.3,TM.silver_bar+.8));
rise($('scale3'),p(u,TM.balance_scale,TM.balance_scale+.5));
const ta=-8+3*Math.sin(t*1.5),dy=180*Math.sin(ta*Math.PI/180);
$('beam').setAttribute('transform','rotate('+ta.toFixed(2)+' 1230 320)');$('panL').setAttribute('transform','translate(0 '+(-dy).toFixed(1)+')');$('panR').setAttribute('transform','translate(0 '+dy.toFixed(1)+')');
rise($('noeat'),p(u,TM.balance_scale+.5,TM.balance_scale+1));rise($('want3'),p(u,TM.balance_scale+1.5,TM.balance_scale+2.1));

rise($('cell4'),p(u,TM.prison_cell,TM.prison_cell+.5));rise($('chain4'),p(u,TM.cigarette,TM.cigarette+.5));
const cp=Math.max(0,u-TM.cigarette)*.7%3,cs=Math.floor(cp),cf=ease(cl((cp-cs)*1.4)),cq=arcXY(cf,CX[cs],CX[cs+1],380,50);
$('cig').setAttribute('transform','translate('+cq[0].toFixed(1)+' '+cq[1].toFixed(1)+')');$('cig').setAttribute('opacity',p(u,TM.cigarette+.5,TM.cigarette+1).toFixed(2));
rise($('pass4'),p(u,TM.cigarette+1.2,TM.cigarette+1.8));

rise($('pc5'),p(u,TM.computer,TM.computer+.5));rise($('srv5'),p(u,TM.computer+.8,TM.computer+1.3));
DG.forEach((d,i)=>{let s='';const k=Math.floor(t*5)+i*13;for(let j=0;j<14;j++)s+=((k*31+j*17+i*7+j*k)%10);d.textContent=s});
LT.forEach((l,i)=>l.setAttribute('opacity',(.3+.7*(Math.sin(t*4+i*2)>0)).toFixed(2)));
rise($('pie5'),p(u,TM.pie_chart,TM.pie_chart+.5));
const sw=.09*2*Math.PI*p(u,TM.pie_chart+3,TM.pie_chart+4),ex=880+200*Math.sin(sw),ey=500-200*Math.cos(sw);
$('slice').setAttribute('d',sw>.001?'M880 500L880 300A200 200 0 0 1 '+ex.toFixed(1)+' '+ey.toFixed(1)+'Z':'M880 500');
rise($('lab0'),p(u,TM.pie_chart,TM.pie_chart+.5));$('tot').textContent='$'+Math.round(60*p(u,TM.pie_chart,TM.pie_chart+1.5))+' trillion';
rise($('lab1'),p(u,TM.pie_chart+3,TM.pie_chart+3.5));rise($('lab2'),p(u,TM.pie_chart+7.8,TM.pie_chart+8.3));

rise($('web6'),p(u,TM.trust_web,TM.trust_web+.5));
WL.forEach((l,i)=>{const a=TM.trust_web+.5+i*.05;l.setAttribute('opacity',p(u,a,a+.3).toFixed(2))});
// banknote passes once around the web, then settles into the central note
const t0=TM.trust_web+4.6,hs=Math.max(0,(u-t0)/.65),hn=TR.length-1,hk=Math.min(Math.floor(hs),hn-1),hf=hs>=hn?1:ease(cl((hs-hk)*1.35));
const HA=TR[hk],HB=TR[hk+1],hx=HA[0]+(HB[0]-HA[0])*hf,hy=HA[1]+(HB[1]-HA[1])*hf,lift=hk===hn-1?0:-14*Math.sin(Math.PI*hf);
const home=cl((hs-hn)/.8),tsc=1-.35*ease(home);
$('tok').setAttribute('transform','translate('+hx.toFixed(1)+' '+(hy+lift).toFixed(1)+') scale('+tsc.toFixed(3)+')');
$('tok').setAttribute('opacity',(p(u,t0,t0+.4)*(1-home)).toFixed(2));
const lit=hs>=hn;$('cnote').style.stroke=lit?'var(--gain)':'var(--ink)';$('cnoteC').style.stroke=lit?'var(--gain)':'var(--ink)';
rise($('qc6'),p(u,TM.quote_card,TM.quote_card+.5));[0,1,2,3].forEach(i=>{const a=TM.quote_card+.5+i*.5;rise($('ql'+i),p(u,a,a+.4))});

rise($('flg7'),p(u,TM.two_flags,TM.two_flags+.5));rise($('ppl7'),p(u,TM.two_flags+.4,TM.two_flags+.9));
rise($('clash'),p(u,TM.two_flags+2.6,TM.two_flags+3.1));rise($('same7'),p(u,TM.two_flags+3.2,TM.two_flags+3.7));
const co=p(u,TM.two_flags+3,TM.two_flags+3.5);
// identical coins travel back and forth across the dashed border
[['coinG',0],['coinS',1]].forEach(([id,o])=>{const s=(t*.5+o)%2,f=s<1?ease(s):1-ease(s-1),q=arcXY(f,500,1100,520,90);
  $(id).setAttribute('transform','translate('+q[0].toFixed(1)+' '+q[1].toFixed(1)+')');$(id).setAttribute('opacity',co.toFixed(2))});
rise($('coop7'),p(u,TM.gold_coin,TM.gold_coin+.6));

rise($('card8'),p(u,TM.pay_moment,TM.pay_moment+.5));PW.forEach((g,i)=>{const a=TM.pay_moment+.6+i*.25;rise(g,p(u,a,a+.4))});
['qa8','qb8','qc8','qd8'].forEach((id,i)=>{const a=TM.pay_moment+6.2+i*.4;rise($(id),p(u,a,a+.5))});
rise($('lb8'),p(u,TM.pay_moment+2,TM.pay_moment+2.6));