import dayjs from 'dayjs'
import { CartItemDetailGrid } from './CartItemDetailGrid'

export function OrderSummary({ cart, deliveryOptions }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId
                    })
                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}

                        </div>

                        <CartItemDetailGrid 
                            cartItem={cartItem} 
                            deliveryOptions={deliveryOptions}
                        />
                    </div>
                )
            })
            }
        </div>
    )
}