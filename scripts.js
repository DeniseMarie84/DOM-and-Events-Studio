let button= null;
let land=null;
let abortButton= null;

function init (){
    button= document.getElementById('takeoff');
    land= document.getElementById('landing');
    abortButton= document.getElementById('missionAbort');
    let flightStatus= document.getElementById('flightStatus');
    let spaceShuttleHeight= document.getElementById("spaceShuttleHeight");
    up= document.getElementsByTagName("button")[0];
    down= document.getElementsByTagName("button")[1];
    left= document.getElementsByTagName("button")[2];
    right= document.getElementsByTagName("button")[3];
    let rocket= document.getElementById('rocket');
    let x = 0;
    let y = 0;
    button.addEventListener('click', function(event){
    
    let response= window.confirm('Confirm that the shuttle is ready for takeoff.');
    if (response){
        flightStatus.textContent= "Shuttle in flight."
        console.log(flightStatus.textContent.trim());
        document.getElementById("shuttleBackground").style.backgroundColor= 'blue';
        spaceShuttleHeight.textContent= "10000";
    }
    })

    land.addEventListener('click', function(){

        let landing = window.confirm('The shuttle is landing. Landing gear engaged.');
        if(landing){
            flightStatus.textContent= "The shuttle has landed."
            console.log(flightStatus.textContent.trim());
            document.getElementById("shuttleBackground").style.backgroundColor= "green";
            spaceShuttleHeight.textContent= "0";
        }
    })

    abortButton.addEventListener('click', function(){

        let abort= window.confirm("Confirm that you want to abort the mission.");
        if(abort){
            flightStatus.textContent= "Mission aborted."
            console.log(flightStatus.textContent.trim());
            document.getElementById("shuttleBackground").style.backgroundColor= "green";
            spaceShuttleHeight.textContent= "0";
        }
    })

    up.addEventListener("click", function(){
        rocket.style.transform = `translate(${x+0}px, ${y-10}px)`;
        y-=10;
        spaceShuttleHeight.textContent= String(Number(spaceShuttleHeight.textContent)+ 10000);
    })
    down.addEventListener("click", function(){
        rocket.style.transform = `translate(${x+0}px, ${y+10}px)`;
        y+=10;
        spaceShuttleHeight.textContent=String(Number(spaceShuttleHeight.textContent)- 10000);
    })
    left.addEventListener("click", function(){
        rocket.style.transform = `translate(${x+10}px, ${y+0}px)`;
        x+=10;
    })
    right.addEventListener("click", function(){
        rocket.style.transform = `translate(${x-10}px, ${y+0}px)`;
        x-=10;
    })

}

window.onload= init;