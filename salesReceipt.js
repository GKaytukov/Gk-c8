const subtotal = 17.24 
const taxRate = 0.07
// here is the recipe 
function calculateSalesTax(subtotal, taxRate) {
    const tax = subtotal * taxRate
    return tax
}
// now call it 
const taxTotal = calculateSalesTax(subtotal, taxRate)

const total = subtotal + taxTotal 

console.log('Subtotal     $', subtotal.toFixed(2))
console.log('Tax          $', taxTotal.toFixed(2))
console.log('________________________')
console.log('Total        $', total.toFixed(2))