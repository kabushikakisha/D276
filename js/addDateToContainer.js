window.onload = () => {
    const dateContainer = document.getElementById('date-container');
    const date = new Date();
    dateContainer.innerHTML = `<p>The Date is ${date.toLocaleDateString()}</p>`;
    console.log(`The date and time is ${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`);
}