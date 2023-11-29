document.addEventListener('DOMContentLoaded', function () {
    let nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', function () {
    	console.log("next page");
    	window.location.href = 'main.html';
    	});
});

document.addEventListener('DOMContentLoaded', function () {
	let finalButton = document.getElementById('finalButton'); 
    finalButton.addEventListener('click', function () {
    	console.log("final page");
    	window.location.href = 'finish.html';
    })
})

document.addEventListener('DOMContentLoaded', function () {
	let backButton = document.getElementById('backButton'); 
    backButton.addEventListener('click', function () {
    	console.log("go back page");
    	window.location.href = 'index.html';
    })
})

let theVideo 
let buttonSara = document.getElementById("buttonSara")
let buttonAlreem = document.getElementById("buttonAlreem")
let buttonDiana = document.getElementById("buttonDiana")
let buttonAru = document.getElementById("buttonAru")
window.addEventListener('load', () =>{
	theVideo = document.getElementById("intro_video_aru");
	console.log(theVideo);
})

function handleButtonClick(buttonNumber) {
	// Handle click event for the buttons
	console.log("Button " + buttonNumber + " clicked");

	let videoPlayer = document.getElementById('videoPlayer');
	videoPlayer.style.display = 'block';

	// Clear existing additional buttons
    document.getElementById('additionalButtonsContainer').innerHTML = '';
        
	switch (buttonNumber) {
        case 1:
            videoPlayer.src = 'media/sara_intro.mp4';
            createAdditionalButtons(['Chores', 'Unix Lab'], 'OptionButtonSara');
            window.scrollBy(0, window.innerHeight * 1.25);
            changeBackgroundColor('#f1efb5')
            break;
        case 2:
            videoPlayer.src = 'media/diana_intro.mp4';
            createAdditionalButtons(['GRWM', 'Baraha'], 'OptionButtonDiana');
            window.scrollBy(0, window.innerHeight * 1.25);
            changeBackgroundColor('#f3e9ee')
            break;
        case 3:
            videoPlayer.src = 'media/alreem_intro.mp4';
            createAdditionalButtons(['Travel', 'Shopping'], 'OptionButtonAlreem');
            window.scrollBy(0, window.innerHeight * 1.25);
            changeBackgroundColor('#ddecde')
            break;
        case 4:
            videoPlayer.src = 'media/aru_intro.mp4'
            createAdditionalButtons(['Sleep', 'Vlog'], 'OptionButtonAru');;
            window.scrollBy(0, window.innerHeight * 1.25);
            changeBackgroundColor('#fbf3f2')  
            break;
        default:
            console.log("Invalid buttonNumber");
            }
}

function createAdditionalButtons(buttonNames, className) {
    let additionalButtonsContainer = document.getElementById('additionalButtonsContainer');

    // Create and append new buttons
    for (let i = 0; i < buttonNames.length; i++) {
        let button = document.createElement('button');
        button.textContent = buttonNames[i];
        button.className = className ; // Assign the class
        button.style.zIndex = +1
        button.onclick = function() {
            console.log("Additional Button Clicked: " + button.textContent);
            playVideo(button.textContent);
        };
        additionalButtonsContainer.appendChild(button);
    }
}

function playVideo(videoName) {
    // Set video source based on the clicked button
    switch (videoName) {
        case 'Chores':
            videoPlayer.src = 'media/chores.mp4';
            if (!clickCounters[0]) {
            clickCounters[0] = true;}
            break;
        case 'Unix Lab':
            videoPlayer.src = 'media/unix.mp4';
            if (!clickCounters[0]) {
            clickCounters[0] = true;}
            break;
        case 'GRWM 4 Date':
            videoPlayer.src = 'media/date.mp4';
            if (!clickCounters[1]) {
            clickCounters[1] = true;}
            break;
        case 'Baraha':
            videoPlayer.src = 'media/baraha.mp4';
            if (!clickCounters[1]) {
            clickCounters[1] = true;}
            break;
        case 'Travel':
            videoPlayer.src = 'media/holiday.mp4';
            if (!clickCounters[2]) {
            clickCounters[2] = true;}
            break;
        case 'Shopping':
            videoPlayer.src = 'media/shopping.mp4';
            if (!clickCounters[2]) {
            clickCounters[2] = true;}
            break;
        case 'Sleep':
            videoPlayer.src = 'media/sleep.mp4';
            if (!clickCounters[3]) {
			clickCounters[3] = true;}
			break;
	case 'Vlog':
		videoPlayer.src = 'media/vlog.mp4';
		if (!clickCounters[3]) {
		clickCounters[3] = true;}
		break;
	default:
            console.error("Invalid videoName");
        }

	// Load the selected video
	videoPlayer.load();

	if (clickCounters.every(clicked => clicked === true)) {
		console.log("enable");

		// If yes, get the button element and enable it
		let finalPageButton = document.getElementById('finalButton')
		finalPageButton.className = 'finalButton_enabled'
		finalPageButton.disabled = false; 
		finalPageButton.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });}
	else {
		console.log("Not all buttons clicked yet"); }
}

function changeBackgroundColor(color) {
	let colorSection = document.getElementById('section_bg_color');
	colorSection.style.backgroundColor = color;
}

let clickCounters = [false, false, false, false];


										
