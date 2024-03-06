document.getElementById("submitBtn").onclick = function() {
  const birthdayValue = document.getElementById("birthday").value;
  const [year, month, date] = birthdayValue.split("-");
  
  fetch("/data.json")
    .then(response => response.json())
    .then(data => {
      const matchingData = data.find(item => item.date === `${month}-${date}`);
      if (matchingData) {
        const rank = matchingData.rank;
        const rarity = matchingData.rarity;
        const rarityCalc = Math.round((rank / 366) * 10);
        
        document.getElementById("rarity").value = rarityCalc;

        document.getElementById("slider").value = rarityCalc;

        document.getElementById("rank").value = rank;

        document.getElementById("births").value = rarity;

        document.getElementById("errorMessage").innerText = "";
      } else {
        console.log("No matching data found");
        document.getElementById("errorMessage").innerText = "Wrong Input! Please enter a valid date.";
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
};
