function calcByQuantity(quantity) {

  let totalHarga = 0;
    if(quantity > 35) {
      totalHarga = 35 * 650 + (quantity - 35) * 600;
    }else {
      totalHarga = quantity * 650;
    }
      return `Jumlah uang yang harus dibayarkan untuk order ${quantity} adalah ${totalHarga}!`
  
}

function calcByMoney(money) {
  
  let maxQuantity = Math.floor((money - 22750) / 600);
  if(maxQuantity < 0) {
    return `Uang sebesar ${money} tidak cukup untuk membeli barang!`
  }else if(maxQuantity === 0) {
    return `Jumlah barang yang dapat dibeli adalah 35, uang habis!`
  }else {
    let totalPrice = 22750 + maxQuantity * 600;
    let remainingMoney = money - totalPrice;
    return `Jumlah barang yang dapat dibeli adalah ${35 + maxQuantity}, sisa uang ${remainingMoney}!`;
  }


}

function bulkOrderCalculator(type, data) {

  if(type === 'money') {
    return calcByMoney(data);
  }else if(type === 'quantity') {
    return calcByQuantity(data);
  }else {
    return 'Invalid type!'
  }


}

/* 
  example test case

  console.log(bulkOrderCalculator('money', 100000)); // Jumlah barang yang dapat dibeli adalah 163, sisa uang 450!
  console.log(bulkOrderCalculator('quantity', 100)); // Jumlah uang yang harus dibayarkan untuk order 100 adalah 61750!
  console.log(bulkOrderCalculator('money', 100)); // Uang sebesar 100 tidak cukup untuk membeli barang!
  console.log(bulkOrderCalculator('money', 1000)); // Jumlah barang yang dapat dibeli adalah 1, sisa uang 350!
  console.log(bulkOrderCalculator('money', 1300)); Jumlah barang yang dapat dibeli adalah 2, uang habis!
*/

module.exports = {
  bulkOrderCalculator,
  calcByQuantity,
  calcByMoney,
};
