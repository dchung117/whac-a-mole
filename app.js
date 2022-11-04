// get the grid, mole
const gridSquares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")

// get time left and score
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")

// initialize result, current time, mole position
let result = 0
let currentTime = 60
let molePosition

// spawn mole
function spawnMole() {
	// remove old mole
	gridSquares.forEach(square => {
		square.classList.remove("mole")
	})

	// add a mole randomly to a grid square
	let newMoleSquare = gridSquares[Math.floor(Math.random() * gridSquares.length)]
	newMoleSquare.classList.add("mole")

	// store mole position
	molePosition = newMoleSquare.id
}

// timer
function countDown() {
	// decrement current time
	currentTime--

	// update time on display
	timeLeft.textContent = currentTime

	// stop game if 0
	if (currentTime === 0) {
		// stop the timer and mole spawner
		clearInterval(countDownTimerId)
		clearInterval(timerId)

		alert("GAME OVER! Your final score: " + result)
	}
}

// add listeners for whacks (clicks)
gridSquares.forEach(square => {
	square.addEventListener("mousedown", () => {
		if (square.id === molePosition) {
			// update result
			result++

			// display score
			score.textContent = result

			// reset molePosition
			molePosition = null
		}
	})
})

// run mole spawner
let timerId = setInterval(spawnMole, 500)

// run the timer (every second)
let countDownTimerId = setInterval(countDown, 1000)