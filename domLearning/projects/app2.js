const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // form reload hone se rokta hai

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  // Validation
  if (isNaN(height) || height <= 0) {
    result.innerHTML = "Please enter a valid height in cm";
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = "Please enter a valid weight in kg";
  } else {
    // BMI calculation
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Category check
    let category = "";
    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal weight";
    } else {
      category = "Overweight";
    }

    // Show result
    result.innerHTML = `Your BMI is ${bmi} (${category})`;
  }
});
