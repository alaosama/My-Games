const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user-result img"),
    cpuResult = document.querySelector(".user-result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option-img");

// Loop through each option image element

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = 
            ".png";
        result.textContent = 
            ""
    
        // Loop through each option image again

        optionImages.forEach((image2, index2) => {
            index != index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        // Set a timeout to delay the result calculation

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            // Get the source of the clicked option image 
            let imageSrc = e.target.querySelector("img").src;
            
            // Set the user image to the clicked option image

            userResult.src = imageSrc;
        
            // Generate a random number berween 0 and 2

            let randomNumber = Math.floor(Math.random() * 3);

            // Creat an array of CPU image option

            let cpuImages = [
                "",
                "",
                ""
            ];

            // Set the CPU image to a random option from the array

            cpuResult.src = cpuImages[randomNumber];

            // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
            let cpuValue = ["R", "P", "S"][index];
            
            // Create an object with all possible outcomes

            let outcomes = {
                RR: "Draw", RP: "Cpu", RS: "User", PP: "Draw", PR: "User", PS: "Cpu", SS: "Draw", SR: "Cpu", SP: "User"
            };

            // Look up the outcome value based on user and CPU options

            let outcomeValue = outcomes[userValue + cpuValue];

            // Display the result
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!`;
        }, 2500);
    });
});
