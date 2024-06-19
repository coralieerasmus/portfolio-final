async function getExchangeRate() {
    try {
    let response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    let data = await response.json();
    return data.rates.EUR;
    } catch (error) {
    console.error("Error fetching data: ", error);
    }
}
async function convertToEur() {
    let usdAmount = document.getElementById('usdAmount').value;
    let exchangeRate = await getExchangeRate();
    let eurAmount = usdAmount * exchangeRate;
    document.getElementById('eurAmount').textContent = eurAmount.toFixed(2);
    }
    document.getElementById('convertButton').addEventListener('click', convertToEur);