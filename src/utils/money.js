export function formatMoney(priceCents){
    `$${(priceCents / 100).toFixed(2)}`
}