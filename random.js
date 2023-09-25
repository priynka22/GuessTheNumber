let x = Math.floor(Math.random() * 10) + 1;

        let count = 0;

        function random_no() {
            let y = document.getElementById("no");

            let z = parseInt(y.value);

            count++;

            if (z == x) {
                alert("Congratulations! You guessed it right in " + count + " attempts");
            }
             else if (z > x && z <= 10) {
                alert("Oops! try smaller number, You entered " + z);
            } 
            else if (z < x && z >= 1) {
                alert("Oops! try greater number, You entered " + z);
            } 
            else {
                alert("Please enter a number between 1 to 10");
            }
        }