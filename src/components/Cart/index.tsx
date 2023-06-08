import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'

import starWars from '../../assets/images/star_wars.png'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <li>
            <CartItem>
              <img src={starWars} />
              <div>
                <h3>Nome do jogo</h3>
                <Tag>RPG</Tag>
                <Tag>PS5</Tag>
                <span>R$ 150,00</span>
              </div>
              <button type="button" />
            </CartItem>
            <CartItem>
              <img src={starWars} />
              <div>
                <h3>Nome do jogo</h3>
                <Tag>RPG</Tag>
                <Tag>PS5</Tag>
                <span>R$ 150,00</span>
              </div>
              <button type="button" />
            </CartItem>
          </li>
        </ul>
        <Quantity>2 Jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 250,00 <span>Em ate 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
