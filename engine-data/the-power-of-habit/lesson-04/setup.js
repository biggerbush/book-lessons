const fig=(g,x,y,r,f)=>{const h=mk('g',{fill:f},g);mk('circle',{cx:x,cy:y,r:r},h);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},h);return h};
const dr=(el,k)=>{el.setAttribute('stroke-dasharray','1 1');el.setAttribute('stroke-dashoffset',(1-k).toFixed(3))};
const R=Math.PI/180,f1=v=>v.toFixed(1);
let sd='';for(let i=0;i<=120;i++){const s=i/120,a=s*Math.PI*8;sd+=(i?'L':'M')+f1(1130+s*300+38*Math.cos(a+Math.PI))+' '+f1(410+42*Math.sin(a))}$('scrib').setAttribute('d',sd);
fig($('mandyP'),200,400,36,'var(--ink)');
[430,492,554,616].forEach((x,i)=>{const y=300+(i%3?0:30);mk('rect',{x:x,y:y,width:50,height:220,rx:25,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},$('fing'));mk('rect',{x:x+9,y:y+8,width:32,height:24,rx:9,class:'loss'},$('fing'));
  mk('path',{d:'M'+(x+5)+' '+(y-20)+'l10-12 10 12 10-12 10 12',class:'s-loss',fill:'none','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},$('tens'));
  [-140,-90,-40].forEach(a=>{const c=Math.cos(a*R),s=Math.sin(a*R),cx=x+25,cy=y+25;mk('path',{d:'M'+f1(cx+c*38)+' '+f1(cy+s*38)+'L'+f1(cx+c*62)+' '+f1(cy+s*62),class:'s-gain','stroke-width':5,'stroke-linecap':'round'},$('burst'))})});
const days=[];for(let i=0;i<30;i++)days.push(mk('rect',{x:120+i*45,y:600,width:36,height:36,rx:6},$('cal')));
const chips5=['RELAX','ESCAPE WORRY','COMPANY'].map((s,i)=>{const y=290+i*100,g=mk('g',{},$('chips5'));mk('rect',{x:540,y:y,width:320,height:70,rx:35,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const tx=mk('text',{x:700,y:y+45,'font-size':24,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent=s;
  mk('path',{d:'M320 410L540 '+(y+35),class:'s-loss','stroke-width':4,'stroke-dasharray':'8 8'},$('lg'));
  mk('path',{d:'M860 '+(y+35)+'L1070 420',class:'s-gain','stroke-width':5,'stroke-dasharray':'8 8'},$('lc'));return g});
for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3;fig($('ppl5'),1240+140*Math.cos(a),420+140*Math.sin(a)-30,16,'var(--ink)')}
let st='';for(let i=0;i<16;i++){const a=i*Math.PI/8-Math.PI/2,r=i%2?28:70;st+=f1(1240+r*Math.cos(a))+','+f1(540+r*Math.sin(a))+' '}$('star').setAttribute('points',st);
const G7=[];for(let i=0;i<8;i++){const a=(22.5+i*45)*R;G7.push(fig($('grp'),520+200*Math.cos(a),500+200*Math.sin(a)-40,22,'var(--ink)'))}
const you7=fig($('grp'),520,450,28,'var(--ink)');
const AR=[45,135,225,315].map(d=>{const a=d*R,c=Math.cos(a),s=Math.sin(a),g=mk('g',{},$('pull')),tx=520+265*c,ty=500+265*s;
  mk('path',{d:'M'+f1(520+345*c)+' '+f1(500+345*s)+'L'+f1(tx)+' '+f1(ty)+'M'+f1(tx+24*Math.cos(a+.5))+' '+f1(ty+24*Math.sin(a+.5))+'L'+f1(tx)+' '+f1(ty)+'L'+f1(tx+24*Math.cos(a-.5))+' '+f1(ty+24*Math.sin(a-.5)),class:'s-loss',fill:'none','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g);return [g,c,s]});