const name = "Sergei";

if (!name) {
    console.log("hello Sergei");
}
else {
    console.log("hello stranger");
}

for (let i = 1; i < 10; i++) {
    if (i === 5 || i === 7) continue;
    console.log(i);

}



const friends = ["oleg", "ihor", "nak"];

for (let f = 0; f < friends.length; f++) {
    console.log(friends[f]);
}



//const open = document.getElementsByClassName("net_closed");

document.getElementById('id="cta"').onclick = function()
{
  if(document.body.className != "net_opens") 
  {
    document.body.className = "net_opens";
  }
  else
  {
    document.body.className = 'net_closed';
  }
}