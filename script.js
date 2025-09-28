function setupListeners(){
  let mainButton = document.querySelector("#mainButton")
  mainButton.addEventListener("click", (e) => {
    window.location.href = "https://raw.githubusercontent.com/rhit-krutzbj/rhit-krutzbj.github.ico/main/index.html";
  })
  let resumeButton = document.querySelector("#resumeButton")
  resumeButton.addEventListener("click", (e) => {
    window.location.href = https://rhit-krutzbj.github.io/resume.html;
  })
  let portfolioButton = document.querySelector("#portfolioButton")
  portfolioButton.addEventListener("click", (e) => {
    window.location.href = portfolio.html;
  })
    
}
window.addEventListener("load, (e) => {
  setupListeners();
})
// I couldn't get the buttons to work in time
// https://developer.mozilla.org/en-US/docs/Web/API/Location
