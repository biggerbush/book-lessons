dr($('scrib'),p(t,.2,1.6));
rise($('eras'),p(u,TM.eraser,TM.eraser+.5));
$('erasM').setAttribute('transform','translate('+(1260+100*Math.sin(t*2.4)).toFixed(1)+' '+(410+10*Math.sin(t*4.8)).toFixed(1)+') rotate(-18)');
rise($('gn'),p(u,TM.eraser+6.2,TM.eraser+6.7));

rise($('brain'),p(u,TM.brain_groove,TM.brain_groove+.5));
dr($('groove'),p(u,TM.brain_groove+.6,TM.brain_groove+2.4));
$('groove').setAttribute('stroke-width',(14+(u>=TM.old_path+2.6?5*Math.abs(Math.sin(t*3)):0)).toFixed(1));
rise($('tlg'),p(u,TM.old_path,TM.old_path+.4));
dr($('tl'),p(u,TM.old_path+.3,TM.old_path+3));
rise($('back'),p(u,TM.old_path+2.6,TM.old_path+3.1));
rise($('fail'),p(u,TM.old_path+5.4,TM.old_path+6));

const l0=p(u,TM.loop_ring,TM.loop_ring+.5);rise($('L0'),l0);
const kk=p(u,TM.loop_ring+2.6,TM.loop_ring+3.1);
['bc','br'].forEach(id=>{$(id).style.fill=kk>.5?'var(--gain)':'var(--stage)';$(id).style.stroke=kk>.5?'var(--gain)':'var(--ink)'});
['tc','tr'].forEach(id=>$(id).style.fill=kk>.5?'var(--on-gain)':'var(--ink)');
$('kp').setAttribute('opacity',kk);
const sw=p(u,TM.swap_arrow,TM.swap_arrow+1);
$('old').setAttribute('transform','translate(0 '+(180*sw).toFixed(1)+')');$('old').setAttribute('opacity',(l0*(1-sw)).toFixed(3));
rise($('nw'),p(u,TM.swap_arrow+.6,TM.swap_arrow+1.2));
rise($('sat'),p(u,TM.swap_arrow+3.7,TM.swap_arrow+4.3));

rise($('hand'),p(u,TM.mandy,TM.mandy+.5));
rise($('r3b'),p(u,TM.mandy+1.5,TM.mandy+2));
rise($('r3c'),p(u,TM.fingertips,TM.fingertips+.5));
const tz=p(u,TM.fingertips,TM.fingertips+.5)*(1-p(u,TM.tingle,TM.tingle+.5));
$('tens').setAttribute('opacity',tz.toFixed(3));
$('fing').setAttribute('transform','translate('+(3*tz*Math.sin(t*37)).toFixed(1)+' 0)');
$('burst').setAttribute('opacity',(p(u,TM.tingle,TM.tingle+.5)*(.6+.4*Math.sin(t*6))).toFixed(3));
rise($('r3r'),p(u,TM.tingle,TM.tingle+.5));

rise($('pA'),p(u,TM.pocket,TM.pocket+.5));
rise($('pB'),p(u,TM.pocket+2.5,TM.pocket+3));
rise($('pC'),p(u,TM.knuckles,TM.knuckles+.5));
const hy=(-20*(1-p(u,TM.pocket+.4,TM.pocket+1.4))+2*Math.sin(t*2)).toFixed(1);
$('ph').setAttribute('transform','translate(0 '+hy+')');$('pth').setAttribute('transform','translate(0 '+hy+')');
$('fst2').setAttribute('r',(40+3*Math.sin(t*5)).toFixed(1));
const bo=Math.abs(Math.sin(t*4));$('fist').setAttribute('transform','translate(0 '+(-50*bo).toFixed(1)+')');$('rip').setAttribute('opacity',(bo<.25?1-bo*4:0).toFixed(2));
rise($('calg'),p(u,TM.knuckles+2.6,TM.knuckles+3.1));
const pr=p(u,TM.knuckles+3,TM.knuckles+6.4);days.forEach((d,i)=>d.setAttribute('fill',i<pr*30?'var(--gain)':'var(--line)'));
rise($('gone'),p(u,TM.knuckles+6.6,TM.knuckles+7.2));

rise($('meet'),p(u,TM.aa_circle,TM.aa_circle+.5));
rise($('gl'),p(u,TM.glass,TM.glass+.5));
chips5.forEach((c,i)=>{const a=TM.glass+.8+i*.7;rise(c,p(u,a,a+.4))});
$('lg').setAttribute('opacity',(p(u,TM.glass+.8,TM.glass+2.6)*(1-.7*p(u,TM.sponsor,TM.sponsor+1))).toFixed(3));
$('lc').setAttribute('opacity',p(u,TM.sponsor,TM.sponsor+1));
$('gx').setAttribute('opacity',p(u,TM.sponsor+.6,TM.sponsor+1.2));
rise($('phone'),p(u,TM.sponsor+3,TM.sponsor+3.5));

rise($('rb'),p(u,SC[6][0]/K+.3,SC[6][0]/K+.8));
rise($('cloud'),p(u,TM.storm_cloud,TM.storm_cloud+.5));
const bk=p(u,TM.storm_cloud+.6,TM.storm_cloud+1);
$('bolt').setAttribute('opacity',bk.toFixed(3));
$('bolt').setAttribute('transform','translate(0 '+(-40*(1-bk)).toFixed(1)+')');
$('crk').setAttribute('opacity',p(u,TM.storm_cloud+1,TM.storm_cloud+1.3).toFixed(3));
$('crk').setAttribute('transform','translate('+(u>=TM.storm_cloud+1&&u<TM.spark+1?(2*Math.sin(t*40)).toFixed(1):0)+' 0)');
rise($('stch'),p(u,TM.spark+1,TM.spark+1.5));
$('rbr').setAttribute('stroke',u>=TM.spark+1?'var(--gain)':'var(--ink)');
rise($('spk'),p(u,TM.spark,TM.spark+.5));
$('spkM').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 1240 540)');
rise($('bel'),p(u,TM.spark+4.6,TM.spark+5.2));

G7.forEach((g,i)=>{const a=TM.group+i*.15;rise(g,p(u,a,a+.4));g.setAttribute('fill',u>=TM.group+4.2+i*.4?'var(--gain)':'var(--ink)')});
rise(you7,p(u,TM.group+1.4,TM.group+1.9));you7.setAttribute('fill',u>=TM.group+7.6?'var(--gain)':'var(--ink)');
rise($('t71'),p(u,TM.group,TM.group+.5));rise($('t72'),p(u,TM.group+4.2,TM.group+4.7));rise($('t73'),p(u,TM.group+8,TM.group+8.5));
$('ring').setAttribute('opacity',p(u,TM.group+8,TM.group+8.8));
rise($('pull'),p(u,TM.group+8.4,TM.group+9));
AR.forEach((a,i)=>{const o=12*Math.sin(t*3+i);a[0].setAttribute('transform','translate('+(a[1]*o).toFixed(1)+' '+(a[2]*o).toFixed(1)+')')});

rise($('qa'),p(u,TM.mirror,TM.mirror+.5));rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9));rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
rise($('gr8'),p(u,TM.mirror+2,TM.mirror+2.5));
$('nq').setAttribute('y',(590+70*p(u,TM.mirror+2.8,TM.mirror+3.8)).toFixed(1));
rise($('lab8'),p(u,TM.mirror+7,TM.mirror+7.5));