function tipCalculate() {
      let Bill = parseFloat(document.getElementById('amount').value);
      let tipPercent = parseFloat(document.getElementById('tipPercent').value);
      let numofper = parseFloat(document.getElementById('person').value);

      const result = document.getElementById('result');
      result.style.color = '#28a745'; // green by default
      result.innerText = '';

      // Basic validation
      if (isNaN(Bill) || Bill <= 0) {
        result.style.color = '#dc3545'; // red for error
        result.innerText = 'Please enter a valid bill amount.';
        return;
      }
      if (isNaN(tipPercent)) {
        result.style.color = '#dc3545';
        result.innerText = 'Please select a tip percentage.';
        return;
      }
      if (isNaN(numofper) || numofper <= 0) {
        result.style.color = '#dc3545';
        result.innerText = 'Please enter a valid number of people.';
        return;
      }

      let TipAmount = Bill * (tipPercent / 100);
      let total = Bill + TipAmount;
      let perPerson = total / numofper;

      result.innerText = `Each Person pays: ₹${perPerson.toFixed(2)}`;
    }