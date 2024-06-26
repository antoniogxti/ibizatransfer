const cookieBox = document.querySelector(".cookiesbox"),
buttons = document.querySelectorAll(".button");
const executeCodes = () => {
//if cookie contains codinglab it will be returned and below of this code will not run
if (document.cookie.includes("codinglab")) return;
cookieBox.classList.add("show");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        cookieBox.classList.remove("show");
        //if button has acceptBtn id
        if (button.id == "acceptBtn") {
            //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
            document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
        }
    });
});
};
//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);