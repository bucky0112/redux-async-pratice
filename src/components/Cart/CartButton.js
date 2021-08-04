import { useDispatch, useSelector} from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  )
};

export default CartButton;
