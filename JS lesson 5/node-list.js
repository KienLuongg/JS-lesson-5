var hotItems = document.querySelectorAll('li.hot');
if (hotItems.length > 0) {

    for (var i = o; i < hotItems.length; i++) {
        hotItems[i].className = 'cool';
    }

}