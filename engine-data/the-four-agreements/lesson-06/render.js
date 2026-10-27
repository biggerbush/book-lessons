rise($('tg'),p(u,TM.title_card,TM.title_card+.6));
const lv=150+90*Math.sin(t*.9); bar('tlev',550,lv);
draw('tchk',p(u,TM.title_card+4.6,TM.title_card+5.4));

rise($('sm'),p(u,TM.sun_moon,TM.sun_moon+.6)); rise($('mm'),p(u,TM.sun_moon+4.6,TM.sun_moon+5.2));
const sd=(Math.sin(t*.8)+1)/2,a1=(1-sd)*(1-sd),a2=2*(1-sd)*sd,a3=sd*sd;
$('arcdot').setAttribute('cx',(a1*430+a2*800+a3*1170).toFixed(1)); $('arcdot').setAttribute('cy',(a1*290+a2*170+a3*290).toFixed(1));
rise($('rv'),p(u,TM.rested_you,TM.rested_you+.5)); bar('rbar',686,300*p(u,TM.rested_you+.3,TM.rested_you+1.5));
rise($('tv'),p(u,TM.tired_you,TM.tired_you+.5)); bar('tbar',686,120*p(u,TM.tired_you+.3,TM.tired_you+1.5));
rise($('both'),p(u,TM.tired_you+4.5,TM.tired_you+5.1));

rise($('lb'),p(u,TM.low_bar,TM.low_bar+.5)); bar('lbar',700,180*p(u,TM.low_bar+.3,TM.low_bar+1.5));
rise($('jg'),p(u,TM.judge_gavel,TM.judge_gavel+.5)); rot('gav',u>=TM.judge_gavel?30*Math.abs(Math.sin(t*2.5)):0,1320,522);
rise($('gc'),p(u,TM.guilt_cloud,TM.guilt_cloud+.5)); RN.forEach((r,i)=>r.setAttribute('stroke-dashoffset',(-(t*60+i*9)%26).toFixed(1)));

rise($('hb'),p(u,TM.high_bar,TM.high_bar+.5)); bar('hhi',400,140*p(u,TM.high_bar+.3,TM.high_bar+1.6));
rise($('eb'),p(u,TM.empty_battery,TM.empty_battery+.5));
const dr=p(u,TM.empty_battery+.3,TM.empty_battery+3),bw=292*(1-.88*dr);
$('batl').setAttribute('width',bw.toFixed(1)); $('batl').setAttribute('class',bw<110?'loss':'gain');
let ql=''; for(let i=0;i<=Math.round(40*dr);i++)ql+=(1050+i*10)+','+(450+140*Math.pow(i/40,1.5)+8*Math.sin(i*.9)).toFixed(1)+' ';
$('qline').setAttribute('points',ql.trim()||'1050,450');
rise($('suf'),p(u,TM.empty_battery+4.6,TM.empty_battery+5.2));

rise($('tem'),p(u,TM.temple,TM.temple+.6)); rise($('stu'),p(u,TM.monk,TM.monk+.6));
rise($('clk'),p(u,TM.clock,TM.clock+.5));
const sp=u>=TM.clock?t:0; rot('h1',(sp*360)%360,1330,560); rot('h2',(sp*30)%360,1330,560);
rise($('mb'),p(u,TM.clock+5,TM.clock+5.5)); rise($('live'),p(u,TM.clock+8.4,TM.clock+9));

rise($('pc'),p(u,TM.paycheck,TM.paycheck+.5)); $('pcin').setAttribute('opacity',(1-.65*p(u,TM.smiling_work+4.6,TM.smiling_work+5.2)).toFixed(2));
rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
XS.forEach((x,i)=>x.setAttribute('opacity',p(u,TM.calendar+.6+i*.5,TM.calendar+.9+i*.5)));
rise($('empt'),p(u,TM.calendar+3.4,TM.calendar+3.9));
rise($('sw'),p(u,TM.smiling_work,TM.smiling_work+.5)); $('spk').setAttribute('opacity',(.55+.45*Math.sin(t*3)).toFixed(2));
rise($('pt'),p(u,TM.smiling_work+4.6,TM.smiling_work+5.2));

rise($('sc'),p(u,TM.scale,TM.scale+.5)); rot('beam',12*Math.cos(t*3)*(1-p(u,TM.scale+.3,TM.scale+2.5)),350,300);
rise($('oh'),p(u,TM.open_hands,TM.open_hands+.5));
rise($('fs'),p(u,TM.four_stones,TM.four_stones+.6));
const wb=p(u,TM.four_stones+4.6,TM.four_stones+5.2);
ST.forEach((s,i)=>s[0].setAttribute('transform','rotate('+(2.5*wb*Math.sin(t*3+i*2)).toFixed(2)+' '+s[1]+' 550)'));

rise($('ci'),p(u,TM.check_in,TM.check_in+.5));
rise($('dl'),p(u,TM.dial,TM.dial+.5)); rot('ndl',90+75*Math.cos(t*2.2)*(1-p(u,TM.dial+.3,TM.dial+2.5)),800,620);
rise($('cf'),p(u,TM.calm_face,TM.calm_face+.5));
const am=3+30*(1-p(u,TM.calm_face+.5,TM.calm_face+3)); let wv='M1150 380';
for(let x=1160;x<=1390;x+=10)wv+='L'+x+' '+(380+am*Math.sin(x/18+t*4)).toFixed(1); $('wave').setAttribute('d',wv);

rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+.4,TM.question+.9));
rise($('qc'),p(u,TM.question+.8,TM.question+1.3)); rise($('qd'),p(u,TM.question+1.2,TM.question+1.7));
rise($('ql'),p(u,TM.question+2,TM.question+2.5));
draw('qkc',p(u,TM.question+1.6,TM.question+2.6)); draw('qk',p(u,TM.question+2.4,TM.question+3));