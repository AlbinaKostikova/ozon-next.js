'use client'

import { useCart } from '../providers/CartProvider'

export default function Cart() {
  const { cartItems, isOpen, setIsOpen, deleteCartItem } = useCart()

  return (
    <>
      <div className="cart" style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="cart-body">
          <div className="cart-title">Корзина</div>
          <div className="cart-total">
            Общая сумма: <span>0</span> руб
          </div>
          <div className="cart-wrapper row">
            {cartItems.map(product => (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="card" key={product.id}>
                  <div className="card-img-wrapper">
                    {product.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : ''}
                    <span className="card-img-top" style={{ backgroundImage: `url(${product.img})` }}></span>
                  </div>
                  <div className="card-body justify-content-between">
                    <div className="card-price">{product.price} ₽ *{product.count} = {product.price * product.count} ₽</div>
                    <h5 className="card-title">{product.title}</h5>
                    <button className="btn btn-primary" onClick={() => deleteCartItem(product)}>Удалить</button>
                  </div>
                </div>
              </div>
            ))}
            {!cartItems.length ? (<div id="cart-empty">Ваша корзина пока пуста</div>) : null}
          </div>
          <button className="btn btn-primary cart-confirm" onClick={() => setIsOpen(false)}>Оформить заказ</button>
          <div className="cart-close" onClick={() => setIsOpen(false)}></div>
        </div>
      </div>
    </>
  )
}
