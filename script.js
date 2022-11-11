async function fetchDogData() {
    const result = await fetch( `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Csolana%2Cfilecoin%2Ccardano%2Ctether%2Cdogecoin%2Cflow%2Cstellar&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=false`);
    const data = await result.json();
    return data;
}
const numberFormatter = Intl.NumberFormat('en-US');
async function btnClick() {
    const data = await fetchDogData();
   let html = `<thead>
    <tr>
        <th scope="col"></th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">24h Change</th>
        <th scope="col">24h Volume</th>
        <th scope="col">Market cap</th>
    </tr>
    </thead>`;
    const keys = Object.keys(data);
    for (let key of keys) {  
        html = `${html}
            <tr>
                <td><img class="coinimg" src="./images/${key}.png"></td>
                <td>${capitalizeFirstLetter(key)}</td>
                <td>$${data[key].usd.toFixed(2)}</td>
                <td>${data[key].usd_24h_change.toFixed(2)}%</td>
                <td>$${numberFormatter.format(data[key].usd_market_cap)}</td>
                <td>$${numberFormatter.format(data[key].usd_24h_vol)}</td>
             </tr>
        `;   
  }
        document.getElementById('tableBody').innerHTML = html;  
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
function lightfunction() {
    document.body.classList.replace("body2","body1");
    document.getElementById('tableBody').classList.replace("table-dark","table-light");  
 }
 function darkfunction() {
    document.body.classList.replace("body1","body2");
    document.getElementById('tableBody').classList.replace("table-light","table-dark");
 }

