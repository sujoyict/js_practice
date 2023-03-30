const calculateBMI = () => {
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value / 100; // converting cm to meters
    const result = document.getElementById("bmiResult");

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        result.innerText = bmi.toFixed(2);
    } else {
        result.innerText = "Invalid input";
    }
};

document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
