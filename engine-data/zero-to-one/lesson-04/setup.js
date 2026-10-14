const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const star=(cx,cy,R,n=5)=>{let d='';for(let i=0;i<n*2;i++){const a=-Math.PI/2+i*Math.PI/n,r=i%2?R*.45:R;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'Z'};
const R0=[];for(let i=0;i<8;i++)R0.push(mk('circle',{r:22,class:'ink'},$('rivals0')));
const door=(g,x)=>{mk('rect',{x:x,y:240,width:600,height:360,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);[30,320].forEach(o=>mk('rect',{x:x+o,y:270,width:250,height:300,fill:'none',stroke:'var(--line)','stroke-width':4},g));mk('circle',{cx:x+560,cy:420,r:12,class:'ink'},g)};
door($('door0'),140);door($('door1'),860);
for(let i=0;i<10;i++){const x=210+(i%5)*120,y=280+Math.floor(i/5)*170;fig($('crowd1'),x,y,20,'ink');mk('rect',{x:x-14,y:y+96,width:28,height:28,fill:'none',stroke:'var(--muted)','stroke-width':4},$('crowd1'))}
fig($('mono1'),1160,320,40,'gain');mk('path',{d:star(1160,552,38),class:'gain'},$('mono1'));
for(let i=0;i<6;i++)mk('circle',{cx:410+i*34,cy:306,r:8,fill:'var(--line)'},$('wins'));
// profit pie: wedge helper and rivals around it
const wedge=A=>{if(A>=2*Math.PI-1e-3)return 'M1150 330a120 120 0 1 1 0 240a120 120 0 1 1 0-240z';
  const e=-Math.PI/2+A,x=1150+120*Math.cos(e),y=450+120*Math.sin(e);return 'M1150 450L1150 330A120 120 0 '+(A>Math.PI?1:0)+' 1 '+x.toFixed(1)+' '+y.toFixed(1)+'Z'};
const RV=[180,225,270,315,0].map(dg=>{const a=dg*Math.PI/180,g=mk('g',{},$('rv3'));fig(g,1150+215*Math.cos(a),450+215*Math.sin(a)-30,16,'ink');return [g,Math.cos(a),Math.sin(a)]});
fig($('f0'),470,470,34,'ink');mk('circle',{cx:540,cy:560,r:22,class:'loss'},$('f0'));
fig($('f1'),750,470,34,'ink');mk('circle',{cx:680,cy:560,r:22,class:'loss'},$('f1'));
// PayPal vs X.com: amber cash stacks that burn down, flames, clash spark
const SX=[310,1290],BILL=[],FL=[];
SX.forEach((cx,s)=>{const g=$('stack'+s),row=[];
  for(let k=0;k<6;k++){const y=560-k*30;
    mk('rect',{x:cx-80,y:y,width:160,height:24,rx:5,fill:'none',stroke:'var(--line)','stroke-width':4,'stroke-dasharray':'8 6'},g);
    row.push(mk('rect',{x:cx-80,y:y,width:160,height:24,rx:5,class:'gain'},g))}
  BILL.push(row);
  FL.push(mk('path',{d:'M0 0c-26 0-32-28-18-48 4 12 10 14 12 6 2-16-2-26-8-36 26 12 44 40 34 62-4 10-12 16-20 16z',class:'loss'},g))});
const SPK=mk('path',{d:star(0,0,46,8),class:'loss'},$('spark'));
for(let i=0;i<9;i++)mk('circle',{cx:150+i*30+(i%2)*6,cy:752+(i%3)*10,r:5+(i%3),class:'ink'},$('crumbs'));
const dr=(id,x,k)=>{$(id).setAttribute('transform','translate('+x+' 0) scale('+(1-.94*k).toFixed(3)+' 1) translate('+(-x)+' 0)');$(id).setAttribute('opacity',(1-k).toFixed(3))};