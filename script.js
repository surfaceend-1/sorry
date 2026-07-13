
const msg=`Hello Shravaniii,

I know that i ignored you and i should not have done thaat.

I'm really sorry.

You've always deserved better communication from me, and I regret making you feel ignored.

Thank you for reading this. I'm genuinely sorry for hurting you, You deserved better from me and i hope that someday i can prove that i've learned from this.

If you're willing, i'd really like the chance to make things right.

— Razan 😝😝`;
let i=0,out=document.getElementById("text");
(function type(){if(i<msg.length){out.textContent+=msg[i++];setTimeout(type,28);}})();
document.getElementById("btn").onclick=()=>{
for(let i=0;i<50;i++){
let h=document.createElement("div");
h.className="heart";h.textContent=Math.random()>.5?"💙":"🥺";
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),4000);
}
this.disabled=true;
};
