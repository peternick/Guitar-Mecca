//guitars in the navbar
var nav_guitar1 = document.getElementById('header-nav-guitar1');
var nav_guitar2 = document.getElementById('header-nav-guitar2');
var rotate_by1 = 0;
var rotate_by2 = 0;
window.setInterval(rotate1, 900);
window.setInterval(rotate2, 900);
function rotate1(){
    nav_guitar1.style.webkitTransform = "rotate(" + rotate_by1 + "deg)";
    rotate_by1 = rotate_by1 + 90;
}
function rotate2(){
    nav_guitar2.style.webkitTransform = "rotate(" + rotate_by2 + "deg)";
    rotate_by2 = rotate_by2 - 90;
}


//tuner
var tuner_sound = new Audio();
var tuner_btns = document.querySelectorAll('.btn-tuner');
var string_light1 = document.getElementById('tuner-yellow-line1');
var string_light2 = document.getElementById('tuner-yellow-line2');
var string_light3 = document.getElementById('tuner-yellow-line3');
var string_light4 = document.getElementById('tuner-yellow-line4');

var i = 0;
while(i < 10){
    tuner_btns[i].addEventListener('click', btn_sound);
    i = i + 1;
}

function btn_sound(e){    
    console.log(e);
    console.log(e.target.id);
    console.log(tuner_btns);
    
    if(e.target.id == ""){
        e.target.id = e.target.parentNode.id;
    }
    if(e.target.id === "tuner-0"){
        //width: 24em; margin: -330px 0px 0px 49em; transform: rotate(359.5deg);
        //width: 220px; margin: -320px 0px 0px 540px; transform: rotate(357deg);
        string_light1.style.width = 24 + "em";
        string_light2.style.width = 220 + "px";
        string_light1.style.margin = -330 + "px " + 0 + "px " + 0 + "px " + 686 + "px";
        string_light2.style.margin = -320 + "px " + 0 + "px " + 0 + "px " + 540 + "px";
        string_light1.style.transform = "rotate(" + 359.5 + "deg)";
        string_light2.style.transform = "rotate(" + 357 + "deg)";
        string_light1.style.visibility = "visible";
        string_light2.style.visibility = "visible";
        tuner_sound.src = 'audio_files/Guitar_notes/high_E.mp3';
        tuner_sound.play();
    }
    else if(e.target.id === "tuner-1"){
        //width: 24em; margin: -303px 0px 0px 49em; transform: rotate(359.5deg);
        //width: 385px;margin: -305px 0px 0px 390px; transform: rotate(3deg);
        string_light1.style.width = 24 + "em";
        string_light2.style.width = 385 + "px";
        string_light1.style.margin = -303 + "px " + 0 + "px " + 0 + "px " + 686 + "px";
        string_light2.style.margin = -305 + "px " + 0 + "px " + 0 + "px " + 390 + "px";
        string_light1.style.transform = "rotate(" + 359.5 + "deg)";
        string_light2.style.transform = "rotate(" + 3 + "deg)";
        string_light1.style.visibility = "visible";
        string_light2.style.visibility = "visible";
        tuner_sound.src = 'audio_files/Guitar_notes/Guitar_B.mp3';
        tuner_sound.play();
    }
    else if(e.target.id === "tuner-2"){
        //width: 24em; margin: -280px 0px 0px 49em; transform: rotate(0deg);
        //width: 590px;  margin: -295px 0px 0px 220px;  transform: rotate(6deg);
        string_light1.style.width = 24 + "em";
        string_light2.style.width = 590 + "px";
        string_light1.style.margin = -280 + "px " + 0 + "px " + 0 + "px " + 686 + "px";
        string_light2.style.margin = -295 + "px " + 0 + "px " + 0 + "px " + 220 + "px";
        string_light1.style.transform = "rotate(" + 0 + "deg)";
        string_light2.style.transform = "rotate(" + 6 + "deg)";
        string_light1.style.visibility = "visible";
        string_light2.style.visibility = "visible";
        tuner_sound.src = 'audio_files/Guitar_notes/Guitar_G.mp3';
        tuner_sound.play();
    }
    else if(e.target.id === "tuner-3"){
        //up -25px
        //width: 580px;  margin: -220px 0px 0px 220px;  transform: rotate(353deg); 
        string_light1.style.width = 24 + "em";
        string_light2.style.width = 580 + "px";
        string_light1.style.margin = -250 + "px " + 0 + "px " + 0 + "px " + 686 + "px";
        string_light2.style.margin = -220 + "px " + 0 + "px " + 0 + "px " + 220 + "px";
        string_light1.style.transform = "rotate(" + 0 + "deg)";
        string_light2.style.transform = "rotate(" + 353 + "deg)"; 
        string_light1.style.visibility = "visible";
        string_light2.style.visibility = "visible";
        tuner_sound.src = 'audio_files/Guitar_notes/Guitar_D.mp3';
        tuner_sound.play();
    }
    else if(e.target.id === "tuner-4"){
        //up -25px
        //width: 392px;  margin: -210px 0px 0px 392px;  transform: rotate(355.8deg); 
        string_light1.style.width = 24 + "em";
        string_light2.style.width = 392 + "px";
        string_light1.style.margin = -225 + "px " + 0 + "px " + 0 + "px " + 686 + "px";
        string_light2.style.margin = -210 + "px " + 0 + "px " + 0 + "px " + 392 + "px";
        string_light1.style.transform = "rotate(" + 0 + "deg)";
        string_light2.style.transform = "rotate(" + 355.8 + "deg)";   
        string_light1.style.visibility = "visible";
        string_light2.style.visibility = "visible";
        tuner_sound.src = 'audio_files/Guitar_notes/Guitar_A.mp3';
        tuner_sound.play();
    }
    else if(e.target.id === "tuner-5"){
        string_light1.style.width = 24 + "em";
        string_light2.style.width = 210 + "px";
        string_light1.style.margin = -200 + "px " + 0 + "px " + 0 + "px " + 686 + "px";
        string_light2.style.margin = -200 + "px " + 0 + "px " + 0 + "px " + 551 + "px";
        string_light1.style.transform = "rotate(" + 0 + "deg)";
        string_light2.style.transform = "rotate(" + 4 + "deg)";
        string_light1.style.visibility = "visible";
        string_light2.style.visibility = "visible";
        tuner_sound.src = 'audio_files/Guitar_notes/low_E.mp3';
        tuner_sound.play();
    }
    else if(e.target.id === "tuner-6"){
        //width: 23em; margin: -345px 0px 0px 609px; transform: rotate(359deg);
        //width: 170px; margin: -345px 0px 0px 510px; transform: rotate(1deg);
        string_light3.style.width = 23 + "em";
        string_light4.style.width = 170 + "px";
        string_light3.style.margin = -345 + "px " + 0 + "px " + 0 + "px " + 609 + "px";
        string_light4.style.margin = -345 + "px " + 0 + "px " + 0 + "px " + 510 + "px";
        string_light3.style.transform = "rotate(" + 359 + "deg)";
        string_light4.style.transform = "rotate(" + 1 + "deg)";
        string_light3.style.visibility = "visible";
        string_light4.style.visibility = "visible";
        tuner_sound.src = 'audio_files/Mandolin_notes/Mandolin-E.mp3';
        tuner_sound.play();
    }
    else if(e.target.id === "tuner-7"){
        //width: 23em; margin: -320px 0px 0px 609px; transform: rotate(359deg);
        //width: 315px; margin: -330px 0px 0px 380px; transform: rotate(5deg);
        string_light3.style.width = 23 + "em";
        string_light4.style.width = 315 + "px";
        string_light3.style.margin = -320 + "px " + 0 + "px " + 0 + "px " + 609 + "px";
        string_light4.style.margin = -330 + "px " + 0 + "px " + 0 + "px " + 380 + "px";
        string_light3.style.transform = "rotate(" + 359 + "deg)";
        string_light4.style.transform = "rotate(" + 5 + "deg)";
        string_light3.style.visibility = "visible";
        string_light4.style.visibility = "visible";
        tuner_sound.src = 'audio_files/Mandolin_notes/Mandolin-A.mp3';
        tuner_sound.play();
    }
    else if(e.target.id === "tuner-8"){
        //width: 23em; margin: -305px 0px 0px 609px; transform: rotate(0deg);
        //width: 315px; margin: -290px 0px 0px 380px; transform: rotate(354deg);
        string_light3.style.width = 23 + "em";
        string_light4.style.width = 315 + "px";
        string_light3.style.margin = -305 + "px " + 0 + "px " + 0 + "px " + 609 + "px";
        string_light4.style.margin = -290 + "px " + 0 + "px " + 0 + "px " + 380 + "px";
        string_light3.style.transform = "rotate(" + 0 + "deg)";
        string_light4.style.transform = "rotate(" + 354 + "deg)";
        string_light3.style.visibility = "visible";
        string_light4.style.visibility = "visible";
        tuner_sound.src = 'audio_files/Mandolin_notes/Mandolin-D.mp3';
        tuner_sound.play();
        
    }
    else if(e.target.id === "tuner-9"){
        //width: 23em; margin: -280px 0px 0px 609px; transform: rotate(0.7deg);
        //width: 180px; margin: -280px 0px 0px 500px; transform: rotate(358deg);
        string_light3.style.width = 23 + "em";
        string_light4.style.width = 180 + "px";
        string_light3.style.margin = -280 + "px " + 0 + "px " + 0 + "px " + 609 + "px";
        string_light4.style.margin = -280 + "px " + 0 + "px " + 0 + "px " + 500 + "px";
        string_light3.style.transform = "rotate(" + 0.7 + "deg)";
        string_light4.style.transform = "rotate(" + 358 + "deg)";
        string_light3.style.visibility = "visible";
        string_light4.style.visibility = "visible";
        tuner_sound.src = 'audio_files/Mandolin_notes/Mandolin-G.mp3';
        tuner_sound.play();
    }
}


//find x and y of mouse click
var mouse_pos = document.getElementById('Games');
mouse_pos.addEventListener('click', clicking);

function clicking(e){
    console.log(e);
}


//guitar chords
var chord_audio = new Audio();
var guitar_chord_btns = document.querySelectorAll('.btn-chords');
//var mandolin_chord_btns = document.querySelectorAll('.btn-chords-mandolin');
console.log(guitar_chord_btns)
var i = 0;
while(i < guitar_chord_btns.length){
    guitar_chord_btns[i].addEventListener('click', play_chord_audio);
    i++;
}
/*i = 0;
while(i < mandolin_chord_btns.length){
    mandolin_chord_btns[i].addEventListener('click', play_chord_audio);
    i++;
}*/
function play_chord_audio(e){
    console.log(e)
    if(e.target.id === ""){
        e.target.id = e.target.parentNode.id;
    }
    if(e.target.id === "Guitar-A"){
        chord_audio.src = "audio_files/Guitar_chords/A-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Guitar-B"){
        chord_audio.src = "audio_files/Guitar_chords/B-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Guitar-C"){
        chord_audio.src = "audio_files/Guitar_chords/C-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Guitar-D"){
        chord_audio.src = "audio_files/Guitar_chords/D-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Guitar-E"){
        chord_audio.src = "audio_files/Guitar_chords/E-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Guitar-F"){
        chord_audio.src = "audio_files/Guitar_chords/F-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Guitar-G"){
        chord_audio.src = "audio_files/Guitar_chords/G-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Mandolin-A"){
        chord_audio.src = "audio_files/Mandolin_chords/A-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Mandolin-B"){
        chord_audio.src = "audio_files/Mandolin_chords/B-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Mandolin-C"){
        chord_audio.src = "audio_files/Mandolin_chords/C-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Mandolin-D"){
        chord_audio.src = "audio_files/Mandolin_chords/D-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Mandolin-E"){
        chord_audio.src = "audio_files/Mandolin_chords/E-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Mandolin-F"){
        chord_audio.src = "audio_files/Mandolin_chords/F-chord.mp3";
        chord_audio.play();
    }
    else if(e.target.id === "Mandolin-G"){
        chord_audio.src = "audio_files/Mandolin_chords/G-chord.mp3";
        chord_audio.play();
    }
}


/*          Guitar chord game           */
let play_btn = document.querySelector('.play-btn');
play_btn.addEventListener('click', play_game);
let note_looper
let timer;
let progress_widget = document.querySelector('.progress');
let prog_bar = document.getElementById('prog-bar');
let time = 5;
let score = 0;
let prog_percent = 0;
let correct_answer;
let output = document.querySelector(".output");
let rand_num = Math.floor((Math.random() * 7) + 1);
let answer = document.querySelector(".game-input-text");
let enter_btn = document.querySelector(".enter-btn");
enter_btn.addEventListener("click", entered_answer);
function play_game(e){
    let input = document.querySelector('.form-group');
    play_btn.style.display = "none";
    input.style.display = "inline";
    progress_widget.style.display = "block";
    //decr_time(); was here initially but it didint work for some reason
    note_looper = setInterval(start_notes, 6000);
    timer = setInterval(decr_time, 1000);
    start_notes();
    decr_time();
}

function start_notes(){
    enter_btn.disabled = false;
    if(rand_num == 1){
        correct_answer = "A"
        chord_audio.src = "audio_files/Guitar_chords/A-chord.mp3";
        chord_audio.play();
    }
    else if(rand_num == 2){
        correct_answer = "B"
        chord_audio.src = "audio_files/Guitar_chords/B-chord.mp3";
        chord_audio.play();
    }
    else if(rand_num == 3){
        correct_answer = "C"
        chord_audio.src = "audio_files/Guitar_chords/C-chord.mp3";
        chord_audio.play();
    }
    else if(rand_num == 4){
        correct_answer = "D"
        chord_audio.src = "audio_files/Guitar_chords/D-chord.mp3";
        chord_audio.play();
    }
    else if(rand_num == 5){
        correct_answer = "E"
        chord_audio.src = "audio_files/Guitar_chords/E-chord.mp3";
        chord_audio.play();
    }
    else if(rand_num == 6){
        correct_answer = "F"
        chord_audio.src = "audio_files/Guitar_chords/F-chord.mp3";
        chord_audio.play();
    }
    else if(rand_num == 7){
        correct_answer = "G"
        chord_audio.src = "audio_files/Guitar_chords/G-chord.mp3";
        chord_audio.play();
    }
    rand_num = Math.floor((Math.random() * 7) + 1);
}
function decr_time()
{
    
    if(time == 0){
        time = 5;
        output.style.display = "block";
        output.value = "Time Out";
    }
    else if(time > 0 && answer === correct_answer){
        answer = "";
        clearInterval(note_looper);
        clearInterval(timer);
        setTimeout(play_game, 2000);
        time = 5;
    }
    else{
        output.style.display = "block";
        output.value = parseInt(time);
        time--;
    }
}
function entered_answer(e){
    
    answer = document.querySelector(".game-input-text");
    answer = answer.value;
    if(answer === correct_answer && output.value !== "Correct!"){
        output.value = "Correct!";
        prog_percent =  prog_percent + 1.35;
        prog_bar.style.width = prog_percent + "em";
        score++;
        prog_bar.innerHTML = score + "/20";
        enter_btn.disabled = "disabled";
    }
    else{
        output.value = "Try again, quick!";
        answer = "";
    }
}


/*          Guitar Hero jr Game          */
