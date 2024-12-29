const display = document.querySelector("#display");
        const buttons = document.querySelectorAll("button");

        let justEvaluated = false;

        buttons.forEach((item) => {
            item.onclick = () => {
                if (item.id == "clear") {
                    display.innerText = "";
                } else if (item.id == "backspace") {
                    let string = display.innerText.toString();
                    display.innerText = string.substr(0, string.length - 1);
                } else if (display.innerText != "" && item.id == "equal") {
                    display.innerText = eval(display.innerText);
                    justEvaluated = true;
                } else if (display.innerText == "" && item.id == "equal") {
                    display.innerText = "Empty!";
                    setTimeout(() => (display.innerText = ""), 2000);
                } else {
                    if (justEvaluated) {
                        display.innerText = "";
                        justEvaluated = false;
                    }
                    display.innerText += item.id;
                }
            };
        });

        const themeToggleBtn = document.querySelector(".theme-toggler");
        const calculator = document.querySelector(".calculator");
        const body = document.querySelector("body");
        let isDark = true;
        themeToggleBtn.onclick = () => {
            calculator.classList.toggle("dark");
            themeToggleBtn.classList.toggle("active");
            body.classList.toggle("dark");
            isDark = !isDark;
        };

        const orientationToggleBtn = document.querySelector(".orientation-toggler");
        let isLandscape = false;
        orientationToggleBtn.onclick = () => {
            calculator.classList.toggle("landscape");
            isLandscape = !isLandscape;
        };