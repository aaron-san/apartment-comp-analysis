function addToggleButtons() {
  const codeCells = document.querySelectorAll(".jp-CodeCell");

  codeCells.forEach((cell) => {
    // 🚫 Skip cells tagged no_toggle
    if (cell.classList.contains("celltag_no_toggle") ||
        cell.classList.contains("tag_no_toggle")) {
      return;
    }

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

addToggleButtons();
setTimeout(addToggleButtons, 500);
setTimeout(addToggleButtons, 1500);
