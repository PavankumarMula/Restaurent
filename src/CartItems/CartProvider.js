import CartContext from "./Cart-Context";
const CartProvider = props => {
    const addItemHandler = (item) => {}
    const removeItemHandler = (id) => {}
    const CartItems={
        items:[],
        totalamount:0,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return <CartContext.Provider value={CartItems}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;