var navMenuAnchorTags = document.querySelectorAll('nav a');
var interval;
for(var i=0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        interval = setInterval(function(){
            scroolVertically(targetSection);
        }, 20, targetSection)
        
    });
}

function scroolVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 50){
        clearInterval(interval);
        return;
    }
    
    window.scrollBy(0,50);
}