const h0=p(u,TM.lone_climber+5.8,TM.lone_climber+6.6);
rise($('lone'),p(u,TM.lone_climber,TM.lone_climber+.5)); rise($('help'),h0);
$('blk').setAttribute('transform','rotate('+((1-h0)*2.5*Math.sin(t*4)).toFixed(2)+' 1270 490)');
$('tlab').textContent=h0>.5?'LIGHTER TOGETHER':'TOO HEAVY FOR ONE?'; $('tlab').style.fill=h0>.5?'var(--gain)':'var(--muted)';

R1.forEach(([g,s],i)=>{const a=i<2?TM.two_heads+i*.4:TM.team_circle+(i-2)*.3; rise(g,p(u,a,a+.4)); s.setAttribute('opacity',i<2?p(u,TM.two_heads+.6,TM.two_heads+1):p(u,TM.team_circle+.4,TM.team_circle+1))});
rise($('tgt'),p(u,TM.team_circle+1,TM.team_circle+1.5)); rise($('purp'),p(u,TM.team_circle+1.5,TM.team_circle+2));
rise($('bars'),p(u,TM.team_circle+7.8,TM.team_circle+8.3)); $('bar2').setAttribute('width',(480*p(u,TM.team_circle+8.4,TM.team_circle+9.8)).toFixed(1));

rise($('carn'),p(u,TM.carnegie,TM.carnegie+.5)); rise($('mill'),p(u,TM.steel_mill,TM.steel_mill+.5));
SM.forEach((c,i)=>{const k=(t*.5+i/6)%1; c.setAttribute('cy',(225-40*k).toFixed(1)); c.setAttribute('r',(10+12*k).toFixed(1)); c.setAttribute('opacity',(1-k).toFixed(2))});
MEN.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.steel_mill+.5+i*.04,TM.steel_mill+.8+i*.04)));
const cn=p(u,TM.steel_mill+.5,TM.steel_mill+2.5); rise($('cnt'),p(u,TM.steel_mill+.5,TM.steel_mill+.9)); $('cnt').textContent='ABOUT '+Math.round(50*cn)+' MEN';
rise($('cred'),p(u,TM.steel_mill+5.8,TM.steel_mill+6.4));

rise($('ford'),p(u,TM.henry_ford,TM.henry_ford+.5));
const fl=u>=TM.friend_group+5.4;
FR.forEach(([g,l],i)=>{const a=i?TM.friend_group+(i-1)*.5:TM.edison_bulb; rise(g,p(u,a,a+.4)); l.setAttribute('opacity',p(u,a+.3,a+.7)); l.setAttribute('class',fl?'s-gain':'s-line'); l.setAttribute('stroke-dashoffset',fl?(-t*40).toFixed(1):0)});
rise($('bulb'),p(u,TM.edison_bulb+.4,TM.edison_bulb+.8));
$('fglow').setAttribute('opacity',(p(u,TM.edison_bulb+.6,TM.edison_bulb+1.2)*(fl?1:.6)).toFixed(2)); $('fglow').setAttribute('transform','rotate('+(t*20).toFixed(1)+' 800 480)');
rise($('drew'),p(u,TM.friend_group+5.4,TM.friend_group+6));

rise($('pc0'),p(u,TM.coin_stack,TM.coin_stack+.5));
CO.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.coin_stack+.4+i*.25,TM.coin_stack+.7+i*.25)));
[0,1,2].forEach(i=>{const a=TM.coin_stack+3.3+i*.8; rise($('it'+i),p(u,a,a+.4))});
rise($('pc1'),p(u,TM.glow_mind,TM.glow_mind+.5)); rise($('m3'),p(u,TM.glow_mind+2,TM.glow_mind+2.6));
$('m3c').setAttribute('r',(40+6*Math.sin(t*3)).toFixed(1));

let ch=0; BT.forEach(([g,lv],i)=>{const a=i?TM.battery_chain+(i-1)*.6:TM.one_battery, f=p(u,a+.3,a+1); rise(g,p(u,a,a+.4)); lv.setAttribute('width',(172*f).toFixed(1)); ch+=f/4});
rise($('lamp'),p(u,TM.one_battery+.6,TM.one_battery+1)); $('bulb2').setAttribute('opacity',(.15+.85*ch).toFixed(2));
$('rays').setAttribute('opacity',(p(u,TM.battery_chain+1.8,TM.battery_chain+2.4)*(.6+.4*Math.sin(t*5))).toFixed(2));
rise($('heads5'),p(u,TM.battery_chain+5,TM.battery_chain+5.5)); rise($('same5'),p(u,TM.battery_chain+5.4,TM.battery_chain+6));

rise($('hp0'),p(u,TM.tangled_rope,TM.tangled_rope+.5));
$('tang').setAttribute('transform','translate('+(3*Math.sin(t*7)).toFixed(1)+' '+(3*Math.cos(t*5)).toFixed(1)+')');
rise($('hp1'),p(u,TM.tangled_rope+3,TM.tangled_rope+3.5)); $('rbar').setAttribute('width',(560*p(u,TM.tangled_rope+3.3,TM.tangled_rope+4.3)).toFixed(1));
rise($('drain'),p(u,TM.handshake,TM.handshake+.5)); $('lbar').setAttribute('width',(560*(1-.85*p(u,TM.handshake,TM.handshake+3))).toFixed(1));
rise($('adds'),p(u,TM.handshake+1.5,TM.handshake+2.1));

rise($('k0'),p(u,TM.short_list,TM.short_list+.5));
SL7.forEach((g,i)=>{const a=TM.short_list+1+i*.6; rise(g,p(u,a,a+.4))});
rise($('k1'),p(u,TM.calendar,TM.calendar+.5));
CELL.forEach((c,i)=>{const j=HL.indexOf(i); c.setAttribute('fill',j>=0&&u>=TM.calendar+1+j*.4?'var(--gain)':'var(--stage)')});
rise($('k2'),p(u,TM.gift_box,TM.gift_box+.5));
$('lid').setAttribute('transform','translate(0 '+(-14*Math.abs(Math.sin(t*3))*p(u,TM.gift_box+.6,TM.gift_box+1)).toFixed(1)+')');

rise($('qa'),p(u,TM.empty_chairs,TM.empty_chairs+.5)); rise($('qb'),p(u,TM.empty_chairs+.4,TM.empty_chairs+.9)); rise($('qc'),p(u,TM.empty_chairs+.8,TM.empty_chairs+1.3));
rise($('chairs'),p(u,TM.empty_chairs+1.2,TM.empty_chairs+1.8)); rise($('todo'),p(u,TM.empty_chairs+5.4,TM.empty_chairs+6));
const fo=p(u,TM.empty_chairs+5.8,TM.empty_chairs+6.6)*(.5+.3*Math.sin(t*3)); $('e0').style.fillOpacity=fo.toFixed(2); $('e1').style.fillOpacity=fo.toFixed(2);