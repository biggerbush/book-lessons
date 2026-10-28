rise($('cal'),p(u,TM.calendar,TM.calendar+.6));
const yk=p(u,TM.calendar+6.4,TM.calendar+7);$('day').setAttribute('opacity',(1-yk).toFixed(2));$('yr').setAttribute('opacity',yk.toFixed(2));

[TM.bill_gates,TM.steve_jobs,TM.eric_schmidt,TM.bill_joy].forEach((a,i)=>rise(cards[i],p(u,a,a+.5)));
rise($('clu'),p(u,TM.bill_joy+4.2,TM.bill_joy+4.8));

rise($('mag'),p(u,TM.magazine,TM.magazine+.6));
LT.forEach((c,i)=>c.setAttribute('opacity',Math.sin(t*3+i*1.7)>0?1:.3));
const sk=p(u,TM.spark,TM.spark+.6);$('rays').setAttribute('transform','translate(720 470) scale('+(sk*(1+.08*Math.sin(t*5))).toFixed(3)+')');
rise($('rev'),p(u,TM.spark+.4,TM.spark+1));rise($('who'),p(u,TM.spark+5,TM.spark+5.6));

rise($('old'),p(u,TM.old_engineer,TM.old_engineer+.5));rise($('mf'),p(u,TM.mainframe,TM.mainframe+.5));
rise($('home'),p(u,TM.house_family,TM.house_family+.5));rise($('settled'),p(u,TM.house_family+1.2,TM.house_family+1.8));
rise($('toy'),p(u,TM.house_family+3,TM.house_family+3.5));rise($('reck'),p(u,TM.house_family+3.4,TM.house_family+4));

rise($('kid'),p(u,TM.child,TM.child+.5));rise($('wv'),p(u,TM.school_desk,TM.school_desk+.6));
$('wavep').setAttribute('transform','translate(0 '+(8*Math.sin(t*2)).toFixed(1)+')');
rise($('race'),p(u,TM.school_desk+1.5,TM.school_desk+2));
const rk=p(u,TM.school_desk+3.8,TM.school_desk+6.5);RU.forEach((c,i)=>c.setAttribute('cx',(760+i*40+560*rk).toFixed(1)));
rise($('ahead'),p(u,TM.school_desk+3.8,TM.school_desk+4.4));

rise($('tl'),p(u,TM.timeline,TM.timeline+.6));rise($('win'),p(u,TM.timeline+1.2,TM.timeline+1.8));
rise($('ya'),p(u,TM.young_adult,TM.young_adult+.5));
rise($('oe'),p(u,TM.young_adult+3.4,TM.young_adult+4));rise($('ye'),p(u,TM.young_adult+4.6,TM.young_adult+5.2));
PI.forEach((c,i)=>{const a=TM.young_adult+8.7+i*.4,k=p(u,a,a+.6);c.setAttribute('cx',PT[i][0]);c.setAttribute('cy',(230+(PT[i][1]-230)*k).toFixed(1));c.setAttribute('opacity',k>0?1:0)});
rise($('nm'),p(u,TM.young_adult+9.5,TM.young_adult+10.1));

rise($('grid'),p(u,TM.rich_list,TM.rich_list+.6));
GD.forEach((c,i)=>{const k=HL.indexOf(i);c.setAttribute('fill',k>=0&&u>=TM.tycoon+k*.1?'var(--gain)':'var(--muted)');c.setAttribute('fill-opacity',k>=0&&u>=TM.tycoon+k*.1?1:.4)});
rise($('big'),p(u,TM.tycoon,TM.tycoon+.5));$('n14').textContent=Math.round(14*p(u,TM.tycoon,TM.tycoon+1.4));
rise($('railg'),p(u,TM.railroad,TM.railroad+.5));
$('loco').setAttribute('transform','translate('+(140+1140*p(u,TM.railroad,TM.railroad+5)).toFixed(1)+' 660)');
rise($('names'),p(u,TM.railroad+5.4,TM.railroad+6));

rise($('tal'),p(u,TM.talent,TM.talent+.5));rise($('clk'),p(u,TM.clock,TM.clock+.5));
const ck=p(u,TM.clock+.3,TM.clock+2.8);$('hand').setAttribute('transform','rotate('+(-240+240*ck).toFixed(1)+' 760 440)');
$('face').style.stroke=ck>=1?'var(--gain)':'var(--ink)';
rise($('dr'),p(u,TM.door,TM.door+.5));$('leaf').setAttribute('width',(220*(1-.75*p(u,TM.door+.6,TM.door+2))).toFixed(1));
rise($('hist'),p(u,TM.door+2,TM.door+2.6));

rise($('qa'),p(u,TM.compass,TM.compass+.5));rise($('qb'),p(u,TM.compass+.4,TM.compass+.9));
rise($('qc'),p(u,TM.compass+.8,TM.compass+1.3));rise($('qd'),p(u,TM.compass+1.2,TM.compass+1.7));
rise($('cmp'),p(u,TM.compass,TM.compass+.6));$('ndl').setAttribute('transform','rotate('+(25*Math.sin(t*1.4)).toFixed(1)+' 1340 300)');
rise($('bring'),p(u,TM.compass+7,TM.compass+7.6));