rise($('face'),p(u,TM.frown_face,TM.frown_face+.6));
const sm=p(u,TM.frown_face+5.8,TM.frown_face+7);
$('mouth').setAttribute('d','M1250 455Q1310 '+(415+80*sm).toFixed(1)+' 1370 455');
$('tear').setAttribute('opacity',(1-sm).toFixed(2));
drw('tchart',p(u,TM.frown_face+5.8,TM.frown_face+7.3));

rise($('stove'),p(u,TM.hot_stove-.3,TM.hot_stove+.2));
$('heat').setAttribute('transform','translate('+(4*Math.sin(t*5)).toFixed(1)+' 0)');
rise($('hand'),p(u,TM.hot_stove,TM.hot_stove+.4));
const hf=1-p(u,TM.hot_stove,TM.hot_stove+1)+p(u,TM.hot_stove+1.1,TM.hot_stove+1.4);
$('handm').setAttribute('transform','translate('+(90*hf).toFixed(1)+' '+(-150*hf).toFixed(1)+')');
$('handp').style.fill=u>=TM.hot_stove+1&&u<TM.hot_stove+2?'var(--loss)':'var(--ink)';
rise($('jrk'),p(u,TM.hot_stove+1.1,TM.hot_stove+1.4));
rise($('mot'),p(u,TM.hot_stove+1.6,TM.hot_stove+2.1));
rise($('bell'),p(u,TM.alarm_bell,TM.alarm_bell+.5));
$('bellr').setAttribute('transform','rotate('+(u>=TM.alarm_bell?8*Math.sin(t*14):0).toFixed(1)+' 960 322)');
rise($('emo'),p(u,TM.alarm_bell+4.1,TM.alarm_bell+4.6));
[0,1,2].forEach(i=>{const a=TM.alarm_bell+7.5+i*.6;rise($('c'+i),p(u,a,a+.4))});
rise($('sigw'),p(u,TM.alarm_bell+9.5,TM.alarm_bell+10.1));

[0,1,2,3,4].forEach(i=>{const a=TM.equation+i*.4;rise($('e'+i),p(u,a,a+.4))});
rise($('quo'),p(u,TM.equation+3.3,TM.equation+3.8));
rise($('pn'),p(u,TM.split_path-.3,TM.split_path+.2));
drw('pl',p(u,TM.split_path,TM.split_path+1.2));
rise($('plb'),p(u,TM.split_path+1,TM.split_path+1.5));
drw('pu',p(u,TM.split_path+1.8,TM.split_path+3));
rise($('refl'),p(u,TM.split_path+2.2,TM.split_path+2.7));
rise($('grow'),p(u,TM.split_path+3,TM.split_path+3.5));

rise($('painc'),p(u,TM.runner-.3,TM.runner+.2));
rise($('aw'),p(u,TM.runner+.5,TM.runner+1));
[0,1,2].forEach(i=>{const a=TM.runner+2.6+i*.6;rise($('l'+i),p(u,a,a+.4))});
const rx=800-240*p(u,TM.runner,TM.runner+2)+490*p(u,TM.fork_road,TM.fork_road+2.5);
const run1=u>=TM.runner&&u<TM.runner+2, run2=u>=TM.fork_road&&u<TM.fork_road+2.5;
$('rp').setAttribute('transform','translate('+rx.toFixed(1)+' '+(700-((run1||run2)?6*Math.abs(Math.sin(t*10)):0)).toFixed(1)+')');
spd.setAttribute('opacity',run1||run2?1:0);
spd.setAttribute('transform',run2?'scale(-1 1)':'');
rise($('sub3'),p(u,TM.fork_road,TM.fork_road+.5));
rise($('tw'),p(u,TM.fork_road+.5,TM.fork_road+1));
rise($('les'),p(u,TM.fork_road+3.8,TM.fork_road+4.3));

rise($('box'),p(u,TM.puzzle_box,TM.puzzle_box+.5));
$('pzl').style.stroke=u>=TM.gem?'var(--gain)':'var(--line)';
rise($('sv'),p(u,TM.gem,TM.gem+.4));
rise($('gm'),p(u,TM.gem+.4,TM.gem+.9));
rise($('gt'),p(u,TM.gem+1.2,TM.gem+1.7));
COL.forEach((g,i)=>{const a=TM.gem+7.4+i*.3;rise(g,p(u,a,a+.3))});
rise($('coll'),p(u,TM.gem+7.4,TM.gem+7.9));

rise($('lap'),p(u,TM.issue_log,TM.issue_log+.6));
const lit=u>=TM.red_flag+5;
for(let i=0;i<3;i++){const a=TM.laptop_entry+i*1.4;BA[i].setAttribute('width',(240*p(u,a,a+.6)).toFixed(1));BB[i].setAttribute('width',(200*p(u,a+.6,a+1.1)).toFixed(1));BA[i].style.fill=BB[i].style.fill=lit?'var(--gain)':'var(--ink)'}
rise($('ok'),p(u,TM.laptop_entry+5.8,TM.laptop_entry+6.3));
rise($('bad'),p(u,TM.red_flag,TM.red_flag+.5));
rise($('hid'),p(u,TM.red_flag+.4,TM.red_flag+.9));
$('flg').setAttribute('transform','translate(953 494) scale('+(1+.08*Math.sin(t*6)).toFixed(3)+' 1) translate(-953 -494)');
rise($('see'),p(u,TM.red_flag+5,TM.red_flag+5.6));

rise($('clk'),p(u,TM.clock,TM.clock+.5));
$('mh').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 280 400)');
$('hh').setAttribute('transform','rotate('+(t*7.5%360).toFixed(1)+' 280 400)');
drw('cv',p(u,TM.clock+1.4,TM.clock+3.5));
rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
[0,1,2].forEach(i=>drw('nl'+i,p(u,TM.notebook+.5+i*.6,TM.notebook+1+i*.6)));
rise($('now'),p(u,TM.notebook,TM.notebook+.5));
rise($('fd'),p(u,TM.notebook+5,TM.notebook+5.5));

rise($('cld'),p(u,TM.thought_cloud,TM.thought_cloud+.6));
rise($('a7'),p(u,TM.rule_card-.3,TM.rule_card+.1));
rise($('rc'),p(u,TM.rule_card,TM.rule_card+.5));
rise($('sim'),p(u,TM.rule_card+3,TM.rule_card+3.5));
rise($('oth'),p(u,TM.rule_card+3.6,TM.rule_card+4.2));

const b8=SC[8][0]/K;
rise($('qa'),p(u,b8+.3,b8+.8));rise($('qb'),p(u,b8+.7,b8+1.2));rise($('qc'),p(u,b8+1.1,b8+1.6));
rise($('cg'),p(u,b8+1.5,b8+2));
$('cgi').setAttribute('transform','translate(0 '+(10*Math.sin(t*1.6)).toFixed(1)+')');
rise($('tn'),p(u,b8+5,b8+5.6));