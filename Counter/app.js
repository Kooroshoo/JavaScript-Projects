let count = 0;

const value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;
        } 
        else if (styles.contains("reset")) {
            count = 0;
        }
        else if (styles.contains("increase")) {
            count++;
        }

        if (count > 0) {
            value.style.color = "green";

        }
        else if (count < 0) {
            value.style.color = "red";
            
        } else {
            value.style.color = 'hsl(209, 61%, 16%)';
        }

        value.textContent = count;


    })
});