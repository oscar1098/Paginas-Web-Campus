// Capturar el formulario y los elementos relevantes
const form = document.getElementById('calculator-form'),
      billInput = document.getElementById('bill'),
      tipSelect = document.getElementById('tip'),
      resultDiv = document.getElementById('result'),
      billAmountSpan = document.getElementById('bill-amount'),
      tipPercentageSpan = document.getElementById('tip-percentage'),
      tipAmountSpan = document.getElementById('tip-amount'),
      totalAmountSpan = document.getElementById('total-amount'),
      nmroPersonas = document.querySelector('#nmroPersonas');

// Escuchar el evento 'submit' del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  // Validar los valores ingresados
  const bill = parseFloat(billInput.value),
        tipPercentage = parseFloat(tipSelect.value);
  
  (bill <= 0) && alert('Por favor, ingresa valores numéricos válidos para el monto de la cuenta y el porcentaje de propina.');

  // Calcular la propina y el monto total
  const tipAmount = bill * tipPercentage,
        totalAmount = (bill + tipAmount) / parseFloat(nmroPersonas.value);
  
  // Mostrar los resultados
  billAmountSpan.textContent = bill.toFixed(2);
  tipPercentageSpan.textContent = (tipPercentage * 100).toFixed(0) + '%';
  tipAmountSpan.textContent = tipAmount.toFixed(2);
  totalAmountSpan.textContent = totalAmount.toFixed(2);
  
  resultDiv.classList.remove('hiddenn');
});
