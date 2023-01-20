window.addEventListener('load', () => {
    var canvasheight=document.getElementById("line-chart").height;
    if(canvasheight <= 690)
    {
        window.myChart.options.legend.display=false;
    }
    else
    {
        window.myChart.options.legend.display=true;
    }
    window.myChart.update();
    const nav = document.querySelector('.navigation');
    const navOpen = document.querySelector('.navigation-open');
    const top = document.querySelector('.topbar');
    const topNavOpen = document.querySelector('.topbar-navopen');
    function classToggle() {
        if(nav !== null) nav.classList.toggle('navigation-open');
        if(navOpen !== null) navOpen.classList.toggle('navigation');
        if(top !== null) top.classList.toggle('topbar-navopen');
        if(topNavOpen !== null) topNavOpen.classList.toggle('topbar');
    }
    document.querySelector('.toggle').addEventListener('click', classToggle);
  });