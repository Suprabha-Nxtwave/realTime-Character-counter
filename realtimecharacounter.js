const inputText = document.getElementById("inputText");
const typedCount = document.getElementById("typedCount");
const remainingCount = document.getElementById("remainingCount");
const resetBtn = document.getElementById("resetBtn");

const maxChars = 50;
const warningThreshold = 45;

inputText.addEventListener("input", () => {
    const currentLength = inputText.value.length;
    const remaining = maxChars - currentLength;

    typedCount.textContent = currentLength;
    remainingCount.textContent = remaining;

    // Styling for warning/limit
    remainingCount.classList.remove("warning", "limit");

    if (remaining <= 5 && remaining > 0) {
        remainingCount.classList.add("warning");
    } else if (remaining === 0) {
        remainingCount.classList.add("limit");
        inputText.disabled = true; // Lock input
    }
});

// Reset functionality
resetBtn.addEventListener("click", () => {
    inputText.value = "";
    typedCount.textContent = "0";
    remainingCount.textContent = maxChars;
    inputText.disabled = false;
    remainingCount.classList.remove("warning", "limit");
});