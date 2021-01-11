const ask = document.querySelector(".ask");

ask.addEventListener( 'click', (event) => {
  const target = event.target;

  if (target.classList.contains("net_closed")) {
    const prevActiv = document.querySelector(".net_open");
    if (prevActiv) prevActiv.classList.remove("net_open");
    target.classList.add('net_open');
  }
})





