const video = document.getElementById('myVideo')
const playStopButton = document.getElementById('playStopButton')

playStopButton.onclick = function () {
	if (video.paused) {
		video.play()
		playStopButton.textContent = 'Stop Video'
	} else {
		video.pause()
		playStopButton.textContent = 'Play Video'
	}
	checkVideoState()
}

function checkVideoState() {
	if (video.paused) {
		playStopButton.hidden = false // Показати кнопку, якщо відео зупинено
	} else {
		playStopButton.hidden = true // Приховати кнопку, якщо відео відтворюється
	}
}

video.addEventListener('play', checkVideoState)
video.addEventListener('pause', checkVideoState)
