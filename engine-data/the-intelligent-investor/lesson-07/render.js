const cs=p(u,TM.cushion,TM.cushion+.6);rise($('cush'),cs);
const fa=p(u,TM.cushion+1,TM.cushion+2),sq=cl(lin(u,TM.cushion+2,TM.cushion+2.15))-.7*cl(lin(u,TM.cushion+2.15,TM.cushion+2.8));
$('box0').setAttribute('y',(260+260*fa+20*sq).toFixed(1));$('box0').setAttribute('opacity',p(u,TM.cushion+.6,TM.cushion+1).toFixed(2));
$('cush').setAttribute('y',(640+20*sq).toFixed(1));$('cush').setAttribute('height',(80-20*sq).toFixed(1));
rise($('cl0'),p(u,TM.cushion+6.6,TM.cushion+7.1));

rise($('gra'),p(u,TM.graham,TM.graham+.5));rise($('sign'),p(u,TM.graham+2,TM.graham+2.6));
[0,1,2].forEach(i=>rise($('w'+i),p(u,TM.motto_sign+i*.5,TM.motto_sign+i*.5+.4)));
$('say').setAttribute('opacity',p(u,TM.motto_sign,TM.motto_sign+.4).toFixed(2));
PT.forEach((g,i)=>rise(g,p(u,TM.motto_sign+3+i*.3,TM.motto_sign+3.4+i*.3)));

const vk=p(u,TM.value_bar,TM.value_bar+1.2);$('vb').setAttribute('y',(780-500*vk).toFixed(1));$('vb').setAttribute('height',(500*vk).toFixed(1));rise($('vl'),p(u,TM.value_bar,TM.value_bar+.5));
const pk=p(u,TM.price_bar,TM.price_bar+1),wq=p(u,TM.gap_arrow+4.5,TM.gap_arrow+6),ph=(220-60*wq)*pk,ptop=780-ph;
$('pb').setAttribute('y',ptop.toFixed(1));$('pb').setAttribute('height',ph.toFixed(1));rise($('pl'),p(u,TM.price_bar,TM.price_bar+.5));
rise($('gp'),p(u,TM.gap_arrow,TM.gap_arrow+.6));$('pgl').setAttribute('d','M920 '+ptop.toFixed(1)+'H1000');
const gb=ptop-10;$('ga').setAttribute('d','M980 290V'+gb.toFixed(1)+'M964 306l16-16 16 16M964 '+(gb-16).toFixed(1)+'l16 16 16-16');
rise($('wd'),p(u,TM.gap_arrow+4.5,TM.gap_arrow+5.1));

// bond test: arrow pushes the earnings stack from 5 blocks down to 2, still above the interest line
rise($('bp'),p(u,TM.bond_paper,TM.bond_paper+.5));rise($('ep'),p(u,TM.earnings_pile,TM.earnings_pile+.5));
const push=p(u,TM.falling_line+.6,TM.falling_line+2.3),tip=446+186*push;
EB.forEach((b,i)=>{const a=TM.earnings_pile+.3+i*.25;let o=p(u,a,a+.3);if(i>1)o*=1-cl((tip+10-ETOP[i])/56);b.setAttribute('opacity',o.toFixed(2))});
rise($('ib'),p(u,TM.earnings_pile+3,TM.earnings_pile+3.5));rise($('il'),p(u,TM.earnings_pile+3.3,TM.earnings_pile+3.8));
$('fam').setAttribute('transform','translate(0 '+tip.toFixed(1)+')');
rise($('fl'),p(u,TM.falling_line,TM.falling_line+.5));rise($('ok'),p(u,TM.falling_line+2.5,TM.falling_line+3));

rise($('sc'),p(u,TM.stock_cert,TM.stock_cert+.5));rise($('n9'),p(u,TM.nine_percent,TM.nine_percent+.4));
$('r9').setAttribute('width',(720*p(u,TM.nine_percent,TM.nine_percent+1)).toFixed(1));
rise($('n4'),p(u,TM.four_percent,TM.four_percent+.5));rise($('x5'),p(u,TM.four_percent+3,TM.four_percent+3.6));
rise($('ty'),p(u,TM.ten_years,TM.ten_years+.5));CK.forEach((g,i)=>{const a=TM.ten_years+.6+i*.25;rise(g,p(u,a,a+.3))});
rise($('tc'),p(u,TM.ten_years+3.2,TM.ten_years+3.7));
rise($('hf'),p(u,TM.ten_years+3.6,TM.ten_years+4.2));

rise($('vv'),p(u,TM.high_price,TM.high_price+.5));rise($('hpg'),p(u,TM.high_price+.4,TM.high_price+.9));
const hh=300+160*p(u,TM.high_price+1,TM.high_price+3);$('hp').setAttribute('y',(720-hh).toFixed(1));$('hp').setAttribute('height',hh.toFixed(1));
rise($('ov'),p(u,TM.high_price+3,TM.high_price+3.5));rise($('shp'),p(u,TM.shiny_company,TM.shiny_company+.5));
SPK.forEach((s,i)=>{const k=.7+.3*Math.abs(Math.sin(t*2+i*1.3));s.setAttribute('transform','translate('+SQ[i][0]+' '+SQ[i][1]+') scale('+k.toFixed(2)+')')});
rise($('ng'),p(u,TM.shiny_company+2.5,TM.shiny_company+3));rise($('dp'),p(u,TM.shiny_company+5.8,TM.shiny_company+6.4));

CO.forEach((c,i)=>{const a=TM.many_coins+i*.08;rise(c,p(u,a,a+.3));c.setAttribute('class',u>=TM.many_coins+2.5?(LO.includes(i)?'loss':'gain'):'ink')});
rise($('scl'),p(u,TM.scale,TM.scale+.5));
const an=.21*p(u,TM.scale+1,TM.scale+2.5),dx=250*Math.cos(an),dy=250*Math.sin(an);
$('beam').setAttribute('d','M'+(1150-dx).toFixed(1)+' '+(380+dy).toFixed(1)+'L'+(1150+dx).toFixed(1)+' '+(380-dy).toFixed(1));
$('pnL').setAttribute('transform','translate('+(1150-dx).toFixed(1)+' '+(380+dy).toFixed(1)+')');
$('pnR').setAttribute('transform','translate('+(1150+dx).toFixed(1)+' '+(380-dy).toFixed(1)+')');
rise($('dv'),p(u,TM.scale+7.8,TM.scale+8.4));

rise($('np'),p(u,TM.notepad,TM.notepad+.5));$('sv').setAttribute('stroke-dashoffset',(520*(1-p(u,TM.notepad+1,TM.notepad+2.5))).toFixed(1));
rise($('pt0'),p(u,TM.price_tag,TM.price_tag+.5));$('sp').setAttribute('stroke-dashoffset',(420*(1-p(u,TM.price_tag+.8,TM.price_tag+2))).toFixed(1));
rise($('wa'),p(u,TM.walk_away,TM.walk_away+.5));$('wk').setAttribute('transform','translate('+(130*p(u,TM.walk_away+.5,TM.walk_away+2.5)).toFixed(1)+' 0)');
$('hand').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 1300 640)');rise($('wt'),p(u,TM.walk_away+1,TM.walk_away+1.6));

rise($('qa'),p(u,TM.question,TM.question+.5));rise($('qb'),p(u,TM.question+2.6,TM.question+3.1));rise($('qc'),p(u,TM.question+3.2,TM.question+3.7));
rise($('gq'),p(u,TM.question+.6,TM.question+1.2));$('qbox').setAttribute('y',(632+8*Math.abs(Math.sin(t*1.6))).toFixed(1));