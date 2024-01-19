console.log("Welcome to Spotify");

//Initialize the variable
let songindex =0;
let audioElement = new Audio('despacito.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let previous =document.getElementById('previous');
let next =document.getElementById('next');
let songitems = Array.from(document.getElementsByClassName('songitem'));

//song array with name,filepath,coverpath
let songs=[
    {songName:"Despacito",filePath:"despacito.mp3",coverPath:"a1.png"},
    {songName:"MockingBird",filePath:"Mockingbird.mp3",coverPath:"a1.png"},
    {songName:"Lose Yourself",filePath:"Lose Yourself].mp3",coverPath:"a1.png"},
    {songName:"Anime1",filePath:"one.mp3",coverPath:"a1.png"},
    {songName:"Anime2",filePath:"two.mp3",coverPath:"a1.png"},
    {songName:"Anime3",filePath:"three.mp3",coverPath:"a1.png"},
]

// audioElement.play();

songitems.forEach((element , i) => {
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

//hamdle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('Timeupdate')
    //update seekbar // updating rangee
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress)
    myprogressbar.value=progress 
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100
})


const makeAllPlay =()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
        })
}

//Click listener for music change
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target)
        gif.style.opacity=1;
        makeAllPlay();
        songindex =parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songindex+1}.mp3`
        mastersongname.innerText = songs[songindex].songName
        audioElement.currentTime = 0;
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    
    })
})

//this is for forward button for playing next song
document.getElementById('next').addEventListener('click', ()=>{
    // gif.style.opacity=1;
    if(songindex >=5)
    {
        songindex = 0
    }
    else
    {
        songindex +=1
    }
    audioElement.src = `songs/${songindex+1}.mp3`
    mastersongname.innerText = songs[songindex].songName
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})


//this is for backwar button for playing PREVIOUS song
document.getElementById('previous').addEventListener('click', ()=>{
    // gif.style.opacity=1;
    if(songindex <=0)
    {
        songindex = 0
    }
    else
    {
        songindex -=1
    }
    audioElement.src = `songs/${songindex+1}.mp3`
    mastersongname.innerText = songs[songindex].songName
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})