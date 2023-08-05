function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Please enter valid weight and height values.";
        return;
    }

    const bmi = weight / ((height / 100) * (height / 100));
    const bmiRounded = bmi.toFixed(2);

    let resultText;
    if (bmi < 18.5) {
        resultText = `Underweight: ${bmiRounded}`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = `Normal weight: ${bmiRounded}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = `Overweight: ${bmiRounded}`;
    } else {
        resultText = `Obese: ${bmiRounded}`;
    }

    document.getElementById('result').innerText = resultText;
}
