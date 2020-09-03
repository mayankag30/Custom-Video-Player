const video = document.getElementById('video');
const play = document.getElementById('play');
const stope = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play and Pause the video using inbuilt features of play pause and paused
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}

// Update the play pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"> </i>';
    }
    else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"> </i>';
    }
}

// Update Progress and timetamp
function updateProgress(){
    progress.value = (video.currentTime / video.duration)*100;

    // Get minutes
    let mins = Math.floor(video.currentTime/60);
    if(mins < 10){
        mins = '0' + String(mins);
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

// Set Video time to progess
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop Video
function stopVideo(){
    video.currentTime=0;
    video.pause();
}


// Event Listeners

// toggleVideoStatus is used to play the video if it is stop/pause and vice versa
video.addEventListener('click', toggleVideoStatus)

// play and pause will be used to switch the icons
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)

// to continue to update the time
video.addEventListener('timeupdate', updateProgress)

// to play and pause the video
play.addEventListener('click', toggleVideoStatus);

// to stop the video
stope.addEventListener('click', stopVideo);

// to update the video time on changing the progress bar
progress.addEventListener("change", setVideoProgress);