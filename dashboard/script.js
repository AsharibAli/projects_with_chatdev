document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the server
    fetchData();
    // Update data every 5 seconds
    setInterval(fetchData, 5000);
});
function fetchData() {
    // Simulate fetching data from the server
    const userCount = Math.floor(Math.random() * 100);
    const orderCount = Math.floor(Math.random() * 1000);
    const revenue = Math.floor(Math.random() * 100000);
    // Update the UI with the fetched data
    document.getElementById("userCount").textContent = userCount;
    document.getElementById("orderCount").textContent = orderCount;
    document.getElementById("revenue").textContent = revenue;
}