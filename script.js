const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const statusText = document.querySelector('.status');  
const resetBtn = document.querySelector('.reset-btn');

// Function to update even/odd text
function updateStatus() {
    const value = parseInt(count.innerText);
    if (value % 2 === 0) {
        statusText.innerText = "The count is Even.";
        statusText.style.color = "green";
    } else {
        statusText.innerText = "The count is Odd.";
        statusText.style.color = "red";
    }
}

// Minus button
minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    count.innerText = countValue - 1;
    updateStatus(); // <-- update text
});

// Plus button
plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    count.innerText = countValue + 1;
    updateStatus(); // <-- update text
});

resetBtn.addEventListener('click', () => {
    count.innerText = 0;
});

 
 