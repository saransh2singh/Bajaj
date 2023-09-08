// public/js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const operationCodeElement = document.getElementById("operationCode");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = formData.get("data");

    try {
      // Send a POST request to the /bfhl endpoint
      const response = await fetch("/bfhl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data.split(",") }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });

  // Handle GET request to /bfhl endpoint
  fetch("/bfhl")
    .then((response) => response.json())
    .then((data) => {
      operationCodeElement.textContent = data.operation_code;
    })
    .catch((error) => {
      console.error("Failed to fetch operation code:", error);
    });
});
