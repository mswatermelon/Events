var div = document.querySelector('body');


document.addEventListener('click', function (e) {
    e = e.target || e.srcElement;
    if(!e.className.match(/active/)) return;

    if(!e.className.match(/on/)) e.className = e.className.replace('off', 'on');
    else e.className = e.className.replace('on', 'off');

    if (e.className.match(/row/)) e = e.parentNode;

    var flag;
    var len = e.parentNode.children;
    var h = e.children[1].scrollHeight;
    var pHeight = e.children[0].scrollHeight;

    if(e.children[1].style.height == h - 30 +'px') flag = true;
    for(var i = 0; i < len.length; i++)	{
        if (len[i].children[0].className.match(/on orange/))
            len[i].children[0].className =
                len[i].children[0].className.replace('on orange', 'off');
        if(len[i].children[1].style) len[i].children[1].style.height = 0 + 'px';
    }

    if(!e.children[0].className.match(/orange/)) e.children[0].className+=' orange';
    else e.children[0].className = e.children[0].className.replace(' orange', '');

    if(flag) return;
    e.children[1].style.height = h - 30 +'px';
    e.children[0].style.height = pHeight+'px';
},false);
