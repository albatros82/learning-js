var menuLink = document.querySelectorAll('.nav > li > a');

for (var i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function(event){
        event.preventDefault();
        var target = event.target;
        
        if(target.classList.contains('active')) {
            target.classList.remove('active');
        }else{
            var openLink = document.querySelector ('.active');
            if(openLink){
                openLink.classList.remove('active');
            }
            target.classList.add('active');
        }
    });
}