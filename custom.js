function addToggleButtons() {
  const codeCells = document.querySelectorAll(".jp-CodeCell");

  codeCells.forEach((cell) => {
    if (cell.getAttribute("data-toggle-added") === "true") return;

    const inputWrapper = cell.querySelector(".jp-Cell-inputWrapper");
    if (!inputWrapper) return;

    const btn = document.createElement("button");
    btn.textContent = "Show Code";
    btn.className = "toggle-btn";

    btn.addEventListener("click", function () {
      cell.classList.toggle("show-code");
      btn.textContent = cell.classList.contains("show-code")
        ? "Hide Code"
        : "Show Code";
    });

    cell.insertBefore(btn, inputWrapper);
    cell.setAttribute("data-toggle-added", "true");
  });

  document
    .querySelectorAll(".jp-InputPrompt, .jp-OutputPrompt")
    .forEach((el) => (el.style.display = "none"));
}

// Try immediately, then retry after delays in case DOM isn't ready yet
addToggleButtons();
setTimeout(addToggleButtons, 500);
setTimeout(addToggleButtons, 1500);


// window.onload = function () {
//   setTimeout(addToggleButtons, 1000);
// };

// function addToggleButtons() {
//   const codeCells = document.querySelectorAll(".jp-CodeCell");

//   codeCells.forEach((cell) => {
//     if (cell.getAttribute("data-toggle-added") === "true") return;

//     const inputWrapper = cell.querySelector(".jp-Cell-inputWrapper");
//     if (!inputWrapper) return;

//     const btn = document.createElement("button");
//     btn.textContent = "Show Code";
//     btn.className = "toggle-btn";
//     btn.style.cssText = [
//       "display: block",
//       "margin: 4px 0 4px 0",
//       "padding: 2px 10px",
//       "font-size: 11px",
//       "cursor: pointer",
//       "background: #f0f0f0",
//       "border: 1px solid #ccc",
//       "border-radius: 3px",
//     ].join("; ");

//     // Start hidden
//     inputWrapper.style.display = "none";

//     btn.addEventListener("click", function () {
//       const hidden = inputWrapper.style.display === "none";
//       inputWrapper.style.display = hidden ? "" : "none";
//       btn.textContent = hidden ? "Hide Code" : "Show Code";
//     });

//     cell.insertBefore(btn, inputWrapper);
//     cell.setAttribute("data-toggle-added", "true");
//   });

//   // Hide input/output prompts
//   document
//     .querySelectorAll(".jp-InputPrompt, .jp-OutputPrompt")
//     .forEach((el) => (el.style.display = "none"));
// }
