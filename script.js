// Conversão de Distâncias
function convertDistance() {
    const input = document.getElementById('distance-input').value;
    const unit = document.getElementById('distance-unit').value;
    let result;

    if (unit === 'km-to-m') {
        result = input * 1000;
        document.getElementById('distance-result').innerText = `Resultado: ${result} metros`;
    } else if (unit === 'm-to-km') {
        result = input / 1000;
        document.getElementById('distance-result').innerText = `Resultado: ${result} quilômetros`;
    } else {
        document.getElementById('distance-result').innerText = 'Entrada inválida';
    }
}

// Conversão de Temperaturas
function convertTemperature() {
    const input = document.getElementById('temperature-input').value;
    const unit = document.getElementById('temperature-unit').value;
    let result;

    if (unit === 'c-to-f') {
        result = (input * 9/5) + 32;
        document.getElementById('temperature-result').innerText = `Resultado: ${result} °F`;
    } else if (unit === 'f-to-c') {
        result = (input - 32) * 5/9;
        document.getElementById('temperature-result').innerText = `Resultado: ${result} °C`;
    } else {
        document.getElementById('temperature-result').innerText = 'Entrada inválida';
    }
}

// Conversão de Pesos
function convertWeight() {
    const input = document.getElementById('weight-input').value;
    const unit = document.getElementById('weight-unit').value;
    let result;

    if (unit === 'kg-to-lb') {
        result = input * 2.20462;
        document.getElementById('weight-result').innerText = `Resultado: ${result} libras`;
    } else if (unit === 'lb-to-kg') {
        result = input / 2.20462;
        document.getElementById('weight-result').innerText = `Resultado: ${result} quilogramas`;
    } else {
        document.getElementById('weight-result').innerText = 'Entrada inválida';
    }
}
