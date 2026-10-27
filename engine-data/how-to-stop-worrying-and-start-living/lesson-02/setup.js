const fig=(par,x,y,r,f)=>{const g=mk('g',{style:'fill:var(--'+f+')'},par);mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`},g);return g};
const fm=v=>'$'+Math.round(v).toLocaleString('en-US');
fig($('man0'),1300,510,40,'ink');
const rainL=[];for(let i=0;i<6;i++)rainL.push(mk('path',{d:`M${1255+i*24} 372v26`,class:'s-loss','stroke-width':5,'stroke-linecap':'round'},$('rain0')));
const cf=fig($('car1'),260,500,40,'ink');
for(let i=0;i<3;i++)mk('rect',{x:520+i*130,y:520,width:80,height:70,fill:'none',stroke:'var(--ink)','stroke-width':4},$('win1'));
const smk=[0,1,2].map(i=>mk('circle',{cx:825,cy:290,r:16+i*4,fill:'none',stroke:'var(--muted)','stroke-width':4},$('plant1')));
let td='M380 480';for(let i=1;i<50;i++){const a=i*2.4,r=40+(i*37)%80,b=a+1.1,r2=30+(i*53)%90;td+=`Q${(380+r2*Math.cos(b)).toFixed(0)} ${(480+r2*Math.sin(b)).toFixed(0)} ${(380+r*Math.cos(a)).toFixed(0)} ${(480+r*Math.sin(a)).toFixed(0)}`}
$('tang2').setAttribute('d',td);
// scattered-thought dots: only on the upper arc (from left side, over the top, to right side) so they never touch the shoulders
const D2=[];for(let i=0;i<12;i++)D2.push([-Math.PI-.3+i*(Math.PI+.6)/11,mk('circle',{r:10,class:'loss'},$('dots2'))]);
const B3=[];for(let i=0;i<5;i++){const g=mk('g',{},$('bills3'));mk('rect',{x:880,y:640-i*32,width:140,height:28,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('circle',{cx:950,cy:654-i*32,r:7,fill:'none',stroke:'var(--ink)','stroke-width':3},g);B3.push(g)}
const G6=[[220,480],[660,480],[240,700],[640,700]].map(([x,y])=>mk('path',{d:`M${x-40} ${y+40}v-40a40 40 0 0 1 80 0v40l-16-12-16 12-16-12-16 12-16-12z`,class:'loss','fill-opacity':.6},$('ghosts6')));
for(let i=0;i<10;i++){const a=i*Math.PI/5,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(440+110*c).toFixed(0)} ${(615+110*s).toFixed(0)}L${(440+170*c).toFixed(0)} ${(615+170*s).toFixed(0)}`,class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays6'))}
fig($('me6'),440,560,34,'ink');
const cl6=fig($('floor6'),0,0,20,'ink');
const XS=[900,990,1090,1190,1290],YS=[800,730,660,590,520];
for(let i=0;i<8;i++)mk('circle',{cx:160,cy:280+i*70,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings7'));
const RG=[];for(let i=0;i<6;i++)RG.push(mk('path',{d:`M1060 ${740-i*80}H1260`,stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},$('rungs7')));
const you7=fig($('lad7'),0,0,22,'gain');
// closing: figure facing the cloud, figure climbing one step
fig($('face8'),220,672,22,'ink');
const st8=fig($('step8'),0,0,12,'gain');
const SX8=[1175,1245,1315,1390],SY8=[790,760,730,700];