const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector(".result")
let currentShooterIndex = 202;
let width = 15;
let direction = 1;
let invadersId;
let goingRight = true;
let aliansRemoved = [];
let results = 0;

for (let i = 0; i < 255; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
    
}

const squares = Array.from(document.querySelectorAll(".grid div"));

const alianInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]

function draw() {
    for (let i = 0; i < alianInvaders.length; i++) {
        if (!aliansRemoved.includes(i)) {
            squares[alianInvaders[i]].classList.add("invader")
        }
  
    }

    if (aliansRemoved.length === alianInvaders.length) {
        resultDisplay.innerHTML = "You Win!"
        clearInterval(invadersId);
        
    }
}

draw();

function remove() {
    for (let i = 0; i < alianInvaders.length; i++) {
        squares[alianInvaders[i]].classList.remove("invader")
        
    }
}


squares[currentShooterIndex].classList.add("shooter");

function moveShooter(e) {
    squares[currentShooterIndex].classList.remove("shooter");
    switch (e.key) {
        case "ArrowLeft":
            if (currentShooterIndex % width !== 0) currentShooterIndex -=1;
            break;
        case "ArrowRight":
            if (currentShooterIndex % width < width - 1) currentShooterIndex +=1;
            break;
    
    }

    squares[currentShooterIndex].classList.add("shooter");
    
}

document.addEventListener("keydown", moveShooter);

function moveInvaders() {
    const leftEdge = alianInvaders[0] % width === 0;
    const rightEdge = alianInvaders[alianInvaders.length - 1] % width === width - 1;
    remove();

    if (rightEdge && goingRight) {
        for (let i = 0; i < alianInvaders.length; i++) {
            alianInvaders[i] += width + 1;
            direction = -1;
            goingRight = false;
            
        }
    }

    
    if (leftEdge && !goingRight) {
        for (let i = 0; i < alianInvaders.length; i++) {
            alianInvaders[i] += width - 1;
            direction = 1;
            goingRight = true;
            
        }
    }

    for (let i = 0; i < alianInvaders.length; i++) {
        alianInvaders[i] += direction;
        
    }

    draw()

    if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
        resultDisplay.innerHTML = "Game Over";
        clearInterval(invadersId);
    }

    for (let i = 0; i < alianInvaders.length; i++) {
        if (alianInvaders[i] > squares.length) {
            resultDisplay.innerHTML = "Game Over";
            clearInterval(invadersId);
        }
        
    }



}

invadersId = setInterval(moveInvaders, 500);


function shoot(e) {
    let laserId;
    let currentLaserIndex = currentShooterIndex;
    function moveLaser(params) {
        squares[currentLaserIndex].classList.remove("laser");
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add("laser");

        if (squares[currentLaserIndex].classList.contains("invader")) {
            squares[currentLaserIndex].classList.remove("laser")
            squares[currentLaserIndex].classList.remove("invader")
            squares[currentLaserIndex].classList.add("boom")

            setTimeout(() => squares[currentLaserIndex].classList.remove("boom"), 300)
            clearInterval(laserId)

            const alianRemoved = alianInvaders.indexOf(currentLaserIndex);
            aliansRemoved.push(alianRemoved);
            results++;
            resultDisplay.innerHTML = results;
        }
    
    }

    switch (e.key) {
        case "ArrowUp":
            laserId = setInterval(moveLaser, 100)
            
            break;
    
        default:
            break;
    }
}

document.addEventListener("keydown", shoot)