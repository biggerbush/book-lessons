const guy=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const dl=el=>{let L=0;try{L=el.getTotalLength()}catch(e){}el._L=L||1200;el.setAttribute('stroke-dasharray',el._L);el.setAttribute('stroke-dashoffset',el._L);return el};
const drw=(el,k)=>el.setAttribute('stroke-dashoffset',(el._L*(1-k)).toFixed(1));
guy($('a_p'),200,290,34,'ink');
const bars=[];for(let i=0;i<8;i++)bars.push(mk('rect',{x:170+i*90,y:790-(40+i*32),width:56,height:40+i*32,rx:6,class:'gain'},$('a_bars')));
const days=[];for(let i=0;i<7;i++)days.push(mk('circle',{cx:1140+i*48,cy:740,r:14},$('a_days')));
const bursts=[[300,430],[470,370],[610,470]].map(([x,y])=>{const g=mk('g',{},$('b_bursts'));for(let j=0;j<12;j++){const a=j*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(22*c).toFixed(1)+' '+(22*s).toFixed(1)+'L'+(66*c).toFixed(1)+' '+(66*s).toFixed(1),stroke:j%2?'var(--gain)':'var(--ink)','stroke-width':6,'stroke-linecap':'round'},g)}return [g,x,y]});
guy($('c_ppl'),270,380,40,'ink');guy($('c_ppl'),1330,380,40,'ink');
const sig=dl($('c_sig'));
guy($('d_p'),420,470,50,'ink');
const cards=[];for(let i=0;i<7;i++){const g=mk('g',{},$('e_q'));mk('rect',{width:100,height:120,rx:10,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);const tx=mk('text',{x:50,y:62,'font-size':18,'text-anchor':'middle',class:'m',style:'fill:var(--loss)'},g);tx.textContent='WANT';mk('path',{d:'M22 88h56',stroke:'var(--line)','stroke-width':4,'stroke-linecap':'round'},g);cards.push(g)}
guy($('f_yp'),220,440,40,'ink');
// small craving cards around the path: they get crossed out, drop and fade
const cr=[[420,290],[580,340],[740,290],[900,340],[1040,290],[460,560],[640,610],[830,560],[1010,610]].map(([x,y])=>{const g=mk('g',{},$('f_cr'));
  mk('rect',{x:0,y:0,width:90,height:60,rx:10,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  const tx=mk('text',{x:45,y:37,'font-size':18,'text-anchor':'middle',class:'m',style:'fill:var(--loss)'},g);tx.textContent='WANT';
  const xl=mk('path',{d:'M8 8L82 52M82 8L8 52',fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-linecap':'round',opacity:0},g);
  return [g,x,y,xl]});
const fpath=dl($('f_path'));
const Z=[[420,440],[405,480],[432,520],[408,560],[430,600],[410,640],[428,680],[420,700]];
$('h_Lp').setAttribute('d','M220 440L'+Z.map(q=>q.join(' ')).join('L')+'H220Z');
$('h_Rp').setAttribute('d','M620 440V700L'+Z.slice().reverse().map(q=>q.join(' ')).join('L')+'Z');
let jp='';for(let x=160;x<=720;x+=20)jp+=x+','+(300+((x/20)%2?-18:18))+' ';$('h_jag').setAttribute('points',jp);
const tick=dl($('n_tick'));