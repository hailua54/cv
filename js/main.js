var win = window, nav = win.navigator, doc = document, docEle = doc.documentElement;
var ua = nav.userAgent.toLowerCase();
var isMobile = /mobile|android|iphone|ipad/.test(ua);

function onload()
{
    let mainMenu = document.getElementById('main-menu');
    let noMenu = window.location.href.indexOf('noMenu') > 0;
    if (isMobile || noMenu) 
    {
        mainMenu.style.display = 'none';
        return;
    }
    
    var items = mainMenu.getElementsByTagName('a');
    for (let i = 0; i < items.length; i++) 
    {
        items[i].addEventListener("click", (e)=> 
        {
            onMenuItemSlected(e.target);
        });
    }

    let arr = window.location.href.split('#');
    if (arr.length)
    {
        let id = arr[1];
        for (let i = 0; i < items.length; i++) 
        {
            if (items[i].href.indexOf(id) > 0)
            {
                onMenuItemSlected(items[i]);
                break;
            }
        }
    }

    updateSize();
    
    window.addEventListener('resize', (event) => {
        updateSize();
    });
}

function updateSize()
{
    let mainMenu = document.getElementById('main-menu');
    let cv = document.getElementById('cv-container');
    let w = mainMenu.clientWidth || 250;
    cv.style.marginLeft = w + 'px';
}

function onMenuItemSlected(selected)
{
    let id = selected.href.split('#')[1];
    if (id == 'pdf')
    {
        
        return;
    }

    let mainMenu = document.getElementById('main-menu');
    var items = mainMenu.getElementsByTagName('a');
    for (let i = 0; i < items.length; i++) 
    {
        if (items[i] != selected) items[i].classList.remove('menu-active');
        else items[i].classList.add('menu-active');
    }

    let contents = document.getElementsByClassName('cv-content');
    for (let i = 0; i < contents.length; i++) 
    {
        if (id == 'all' || contents[i].id == id)
        {
            contents[i].style.display = '';
        }
        else contents[i].style.display = 'none';
    }
}