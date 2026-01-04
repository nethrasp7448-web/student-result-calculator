function calculateResult() {
    let name = document.getElementById("name").value;
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    let total = m1 + m2 + m3;
    let percentage = (total / 300) * 100;

    let grade = "";
    let status = "";

    if (percentage >= 75) {
        grade = "A";
        status = "Pass";
    } else if (percentage >= 60) {
        grade = "B";
        status = "Pass";
    } else if (percentage >= 40) {
        grade = "C";
        status = "Pass";
    } else {
        grade = "F";
        status = "Fail";
    }

    let resultText = `
        <strong>Name:</strong> ${name} <br>
        <strong>Total:</strong> ${total} / 300 <br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}% <br>
        <strong>Grade:</strong> ${grade} <br>
        <strong>Status:</strong> ${status}
    `;

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = resultText;
    resultDiv.classList.remove("d-none");

    // Save to LocalStorage
    localStorage.setItem("studentResult", resultText);
}