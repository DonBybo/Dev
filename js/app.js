let entries = [];

function addEntry() {
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (description && date && category && !isNaN(amount)) {
    const entry = { description, date, category, amount };
    entries.push(entry);
    updateEntriesTable();
    updateBalance();
    clearForm();
  } else {
    alert("Bitte füllen Sie alle Felder korrekt aus.");
  }
}

function updateEntriesTable() {
  const tableBody = document.getElementById("entriesTableBody");
  tableBody.innerHTML = "";

  entries.forEach(entry => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = entry.description;
    cell2.textContent = entry.date;
    cell3.textContent = entry.category;
    cell4.textContent = entry.amount.toFixed(2);
  });
}


function updateBalance() {
  const balanceElement = document.getElementById("balance");
  const totalAmount = entries.reduce((sum, entry) => sum + entry.amount, 0);
  balanceElement.textContent = totalAmount.toFixed(2);
}

function clearForm() {
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";
}

// Initial update
updateEntriesTable();
updateBalance();
