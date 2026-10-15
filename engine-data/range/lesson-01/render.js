const k0=p(u,TM.two_paths,TM.two_paths+2.5);draw($('pT'),k0);draw($('pR'),p(u,TM.two_paths+.3,TM.two_paths+3));
at($('pT'),$('dT'),p(u,TM.two_paths+1,TM.two_paths+4));at($('pR'),$('dR'),p(u,TM.two_paths+1,TM.two_paths+5.4));
rise($('att'),p(u,TM.two_paths+5.4,TM.two_paths+5.9));

rise($('t1a'),p(u,TM.baby_tiger,TM.baby_tiger+.5));rise($('t1b'),p(u,TM.baby_tiger+4.6,TM.baby_tiger+5.1));
rise($('t1c'),p(u,TM.tv_screen,TM.tv_screen+.5));rise($('t1d'),p(u,TM.trophy,TM.trophy+.5));
$('tvclub').setAttribute('transform','rotate('+(-15+55*Math.sin(t*3)).toFixed(1)+' 800 430)');

[0,1,2].forEach(i=>{const a=TM.book_stack+i*.5;rise($('b'+i),p(u,a,a+.4));const c=TM.early_arrow+i*.9;rise($('ch'+i),p(u,c,c+.4))});
rise($('arr2'),p(u,TM.early_arrow,TM.early_arrow+.5));rise($('lane'),p(u,TM.early_arrow,TM.early_arrow+.5));
RUN.setAttribute('transform','translate('+(920+440*p(u,TM.early_arrow+.5,TM.early_arrow+3.5)).toFixed(1)+' 0)');
rise($('behind'),p(u,TM.early_arrow+4.9,TM.early_arrow+5.4));

rise($('boy'),p(u,TM.young_roger,TM.young_roger+.5));
TK.forEach((g,i)=>{const a=TM.sport_balls+i*.5;rise(g,p(u,a,a+.4))});
rise($('bubble'),p(u,TM.sport_balls+5.3,TM.sport_balls+5.8));

rise($('r4a'),p(u,TM.calendar,TM.calendar+.4));$('rbar').setAttribute('width',(780*p(u,TM.calendar,TM.calendar+1)).toFixed(1));
SG.forEach((s,i)=>{const a=TM.calendar+.8+i*.15;s.setAttribute('opacity',p(u,a,a+.3))});
rise($('r4c'),p(u,TM.calendar+2.4,TM.calendar+2.9));
rise($('court'),p(u,TM.tennis_court,TM.tennis_court+.5));
$('ball').setAttribute('cx',(180+480*(.5+.5*Math.sin(t*1.4))).toFixed(1));$('ball').setAttribute('cy',(720-70*Math.abs(Math.sin(t*2.8))).toFixed(1));
rise($('k4a'),p(u,TM.tennis_court+5,TM.tennis_court+5.5));rise($('k4b'),p(u,TM.tennis_court+6,TM.tennis_court+6.5));

rise($('axes5'),p(u,TM.chart,TM.chart+.5));draw($('curve'),p(u,TM.chart+.4,TM.chart+2.4));
rise($('z1'),p(u,TM.sample_zone,TM.sample_zone+.5));rise($('z2'),p(u,TM.narrow_zone,TM.narrow_zone+.5));
T5.forEach((e,i)=>e.setAttribute('transform','translate(0 '+(-14*Math.abs(Math.sin(t*2+i))).toFixed(1)+')'));

rise($('spot'),p(u,TM.spotlight,TM.spotlight+.5));
CR.forEach((g,i)=>{const a=TM.spotlight+1.5+i*.08;rise(g,p(u,a,a+.3))});rise($('rule'),p(u,TM.spotlight+2.5,TM.spotlight+3));
rise($('ch6'),p(u,TM.crowd,TM.crowd+.4));draw($('le'),p(u,TM.crowd+.3,TM.crowd+1.6));draw($('ll'),p(u,TM.crowd+1.2,TM.crowd+3.2));
rise($('lel'),p(u,TM.crowd+1,TM.crowd+1.5));rise($('lll'),p(u,TM.crowd+3,TM.crowd+3.5));

rise($('p7a'),p(u,TM.sampler,TM.sampler+.5));
BR.forEach((g,i)=>{const a=TM.sampler+.4+i*.35,k=p(u,a,a+.5);draw(g.firstChild,k);for(let j=1;j<g.children.length;j++)g.children[j].setAttribute('opacity',k)});
rise($('p7b'),p(u,TM.open_door,TM.open_door+.5));
const dk=p(u,TM.open_door+.5,TM.open_door+1.7),X=890-150*dk,dd=30*dk;
$('leaf').setAttribute('points',`710,310 ${X.toFixed(1)},${(310+dd).toFixed(1)} ${X.toFixed(1)},${(650-dd).toFixed(1)} 710,650`);$('knob').setAttribute('cx',(X-22*(1-dk)-8*dk).toFixed(1));
rise($('p7c'),p(u,TM.notebook,TM.notebook+.5));draw($('chk'),p(u,TM.notebook+.8,TM.notebook+1.4));

const S8=SC[8][0]/K;
rise($('qa'),p(u,S8+.4,S8+.9));rise($('qb'),p(u,S8+.8,S8+1.3));rise($('qc'),p(u,S8+5.2,S8+5.7));rise($('qd'),p(u,S8+5.6,S8+6.1));
const dq=p(u,S8+.6,S8+4);draw($('det'),dq);at($('det'),$('ddot'),dq);rise($('qlab'),p(u,S8+6.4,S8+6.9));