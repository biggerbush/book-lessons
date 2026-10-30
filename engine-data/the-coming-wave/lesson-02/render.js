const tw=TM.ai_brain-5, aA=50*Math.max(0,u-tw);
rise($('gA'),p(u,TM.twin_engines,TM.twin_engines+.6)); rise($('gB'),p(u,tw,tw+.6));
GA.setAttribute('transform','rotate('+aA.toFixed(1)+')'); GB.setAttribute('transform','rotate('+(18-aA*1.2).toFixed(1)+')');
let w0='';for(let x=1080;x<=1480;x+=20)w0+=(x>1080?'L':'M')+x+' '+(848+8*Math.sin(x/40-t*2)).toFixed(1);$('wv0').setAttribute('d',w0);

rise($('ai1'),p(u,TM.ai_brain,TM.ai_brain+.6));
const lay=Math.floor(t*2)%3; NODES.forEach(n=>n[0].setAttribute('class',n[1]===lay?'gain':'ink'));
rise($('dna1'),p(u,TM.dna_helix,TM.dna_helix+.6));
let h1='',h2='';for(let y=370;y<=590;y+=10){const s=60*Math.sin(y/42+t*1.5);h1+=(y>370?'L':'M')+(1120+s).toFixed(1)+' '+y;h2+=(y>370?'L':'M')+(1120-s).toFixed(1)+' '+y}
H1.setAttribute('d',h1);H2.setAttribute('d',h2);
RUNG.forEach((r,i)=>{const y=380+i*20,s=60*Math.sin(y/42+t*1.5);r.setAttribute('d','M'+(1120+s).toFixed(1)+' '+y+'L'+(1120-s).toFixed(1)+' '+y)});
rise($('orbg'),p(u,TM.orbit_techs,TM.orbit_techs+.6)); rise($('satg'),p(u,TM.orbit_techs+.3,TM.orbit_techs+.9));
$('orb').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
[-Math.PI/2,Math.PI/2].forEach((b,i)=>{const a=b+.1*Math.sin(t*.6+i);tr($('sat'+i),800+640*Math.cos(a),520+310*Math.sin(a))});

rise($('brd2'),p(u,TM.go_board,TM.go_board+.6));
ST.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.go_board+.4+i*.15,TM.go_board+.7+i*.15)));
rise($('supg'),p(u,TM.surprise_move,TM.surprise_move+.4));
const rp=(t%1.5)/1.5; $('supr').setAttribute('r',(24+22*rp).toFixed(1)); $('supr').setAttribute('opacity',(1-rp).toFixed(2));
rise($('exp1'),p(u,TM.surprise_move+.4,TM.surprise_move+.9)); rise($('exp2'),p(u,TM.lightbulb-3,TM.lightbulb-2.5));
rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5));
const lit=u>=TM.lightbulb+.4; $('bulbc').style.fill=lit?'var(--gain)':'var(--stage)';
RAYS.forEach((r,i)=>r.setAttribute('opacity',lit?(.5+.5*Math.sin(t*3+i)).toFixed(2):0));
rise($('disc2'),p(u,TM.lightbulb+.8,TM.lightbulb+1.4));

rise($('p3a'),p(u,TM.dna_reader,TM.dna_reader+.5));
$('scan').setAttribute('x',(160+332*((Math.max(0,u-TM.dna_reader)*.4)%1)).toFixed(1));
$('lets').textContent=LT.slice(0,Math.floor(LT.length*p(u,TM.dna_reader+.4,TM.dna_reader+3)));
rise($('p3b'),p(u,TM.gene_scissors,TM.gene_scissors+.5));
tr($('scii'),0,-50*(1-p(u,TM.gene_scissors+.3,TM.gene_scissors+1.1)));
$('edc').setAttribute('opacity',p(u,TM.gene_scissors+1.2,TM.gene_scissors+1.6));
rise($('p3c'),p(u,TM.dna_printer,TM.dna_printer+.5));
const wk=440+160*p(u,TM.dna_printer+.4,TM.dna_printer+3);
$('w1').setAttribute('d','M1246 440V'+wk.toFixed(1)); $('w2').setAttribute('d','M1294 440V'+wk.toFixed(1));
WR.forEach((r,i)=>r.setAttribute('opacity',wk>460+i*26?1:0));

rise($('pr4'),p(u,TM.protein_blob,TM.protein_blob+.6));
const fo=p(u,TM.scientist-2.5,TM.scientist-1), af=u>=TM.alphafold; let cp='';
B4.forEach((b,i)=>{const x=LN[i][0]+(FD[i][0]-LN[i][0])*fo,y=LN[i][1]+(FD[i][1]-LN[i][1])*fo;b.setAttribute('cx',x.toFixed(1));b.setAttribute('cy',y.toFixed(1));b.setAttribute('class',af?'gain':'ink');cp+=x.toFixed(1)+','+y.toFixed(1)+' '});
$('chain4').setAttribute('points',cp);
rise($('shp4'),p(u,TM.scientist-2.5,TM.scientist-2)); rise($('sci4'),p(u,TM.scientist,TM.scientist+.6));
rise($('af4'),p(u,TM.alphafold,TM.alphafold+.5));
AF.forEach((a,i)=>a.setAttribute('opacity',p(u,TM.alphafold+.6+i*.06,TM.alphafold+.9+i*.06)));
rise($('rel4'),p(u,TM.alphafold+2.5,TM.alphafold+3));

rise($('lp5'),p(u,TM.loop_arrows,TM.loop_arrows+.6));
rise($('dsg'),p(u,TM.data_stream,TM.data_stream+.5)); rise($('mog'),p(u,TM.new_molecule,TM.new_molecule+.5));
const fs=TM.medicine-3, ph=.18*u+.5*Math.max(0,u-fs);
DS.forEach((r,i)=>{const q=bz(TOP,(ph+i/6)%1);tr(r,q[0],q[1])});
MO.forEach((r,i)=>{const q=bz(BOT,(ph+i/5)%1);tr(r,q[0],q[1])});
rise($('fast5'),p(u,fs,fs+.6));

rise($('box6'),p(u,SC[6][0]/K+.4,SC[6][0]/K+1));
rise($('up6'),p(u,TM.medicine,TM.medicine+.5));
[0,1,2].forEach(i=>rise($('mi'+i),p(u,TM.medicine+.6+i*.7,TM.medicine+1.1+i*.7)));
rise($('risk6'),p(u,TM.warning_sign,TM.warning_sign+.5));
$('vir').setAttribute('transform','rotate('+(10*Math.sin(t*2)).toFixed(1)+' 1160 625)');
rise($('both6'),p(u,TM.newspaper-3.8,TM.newspaper-3.2));

rise($('np0'),p(u,TM.newspaper,TM.newspaper+.5)); rise($('np1'),p(u,TM.newspaper+.6,TM.newspaper+1.1));
rise($('venn7'),p(u,TM.newspaper+1.4,TM.newspaper+2));
const vm=p(u,TM.venn_circles,TM.venn_circles+1.5), xl=560+140*vm, xr=1040-140*vm;
$('vL').setAttribute('cx',xl); $('vcl').setAttribute('cx',xl); $('vR').setAttribute('cx',xr); $('vov').setAttribute('cx',xr);
$('vLt').setAttribute('x',xl-60); $('vRt').setAttribute('x',xr+60); $('vov').setAttribute('opacity',vm);
rise($('act7'),p(u,TM.venn_circles+1.5,TM.venn_circles+2)); rise($('ask7'),p(u,TM.venn_circles+3.8,TM.venn_circles+4.4));

['qa','qb','qc','qd'].forEach((q,i)=>rise($(q),p(u,TM.question_mark+i*.4,TM.question_mark+.5+i*.4)));
rise($('qm'),p(u,TM.question_mark+1.6,TM.question_mark+2.2)); rise($('qe'),p(u,TM.question_mark+4.6,TM.question_mark+5.1));
rise($('qg'),p(u,TM.question_mark+4.6,TM.question_mark+5.1));
QA.setAttribute('transform','rotate('+(t*40).toFixed(1)+')'); QB.setAttribute('transform','rotate('+(20-t*40*9/7).toFixed(1)+')');