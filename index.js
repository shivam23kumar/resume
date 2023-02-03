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


var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();


function fillBars(){
    for (let bar of progressBars) {
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 3);
        
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        console.log('testing');
        fillBars();
    }else if (coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwyAOgkOvKiKiLO-B3CLXALQyeBQ2SBDuVbE6W0IkOynHKS1-NfiUTocG--YPYepkDP/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    horizontal-list.classList.toggle("active");
  })


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active");
horizontal-list.classList.remove("active");
}))