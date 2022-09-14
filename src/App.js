
import { createContext, memo, useContext, useReducer, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Alert, Button, Dialog, DialogActions, DialogTitle, Snackbar } from '@mui/material';
import Nav from './Components/common Components/NavBar/Nav';
import About from './Pages/About Page/About';
import Cart from './Pages/Cart Page/Cart';
import Products from './Pages/Products Page/Products';
import Checkout from './Pages/Checkout Page/Checkout';
import Login from './auth/Login/Login';
import Sign from './auth/Sign/Sign';
import Footer from './Components/common Components/Footer/Footer';
import Details from './Pages/Details Page/Details';
import { cartReducer, productReducer } from './Reducer/Reducer';
import toys from './Assests/Product.json'
import Home from './Pages/Home Page/Home';



const context = createContext();
function App() {


  // Dialog Box state 
  const [open, setOpen] = useState({ open: false, html: "", type: "", value: null });
  // Snackbar State
  const [openSnack, setOpenSnack] = useState({ open: false, html: "", severity: "success", time: "800" });
  // State for login
  const [logged, setLogged] = useState({ id: 1, name: "Shanky" });
  const [userName, setUserName] = useState("");
  // state for counting total Value
  const [total, setTotal] = useState(0);
  // State for Modal
  const [openModal, setOpenModal] = useState({ val: [], open: false })


  const [state, dispatch] = useReducer(cartReducer, {
    products: toys,
    cart: [],
    wishlist: [],
    totalDiscount: 0
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    search: "",
    sortPrice: false,
    sortName: false
  })


  const confirm = () => {
    if (open.type === 'trash') {
      dispatch({
        type: "removeFromCart", payload: open.value
      })
      setOpen({ ...open, open: false });
      setOpenSnack({ open: true, html: `${open.value.strMeal} removed from cart !` })
    }
    if (open.type === 'empty') {
      dispatch({
        type: "clearCart"
      })
      setOpen({ ...open, open: false });
      setOpenSnack({ open: true, html: ` Your cart is emptied !!` })
    }
  }


  return (

    <context.Provider value={{ state, dispatch, productState, productDispatch, open, setOpen, openSnack, setOpenSnack, logged, setLogged, userName, setUserName, total, setTotal, openModal, setOpenModal }} >

      <div className="App" color='var(--white)'>
        <Router >
          <Nav />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/menu' element={<Products />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create' element={<Sign />} />
            <Route path='product/:ID' element={<Details />} />
            <Route path='menu/product/:ID' element={<Details />} />
          </Routes>
          <Footer />
        </Router>


        {/* Dialog component from MUI */}
        <Dialog open={open.open} onClose={() => { setOpen({ ...open, open: false }) }}>
          <DialogTitle > {open.html} </DialogTitle>
          <DialogActions>
            <Button autoFocus onClick={() => { setOpen({ ...open, open: false }) }} >
              Cancel
            </Button>
            <Button onClick={confirm}>Ok</Button>
          </DialogActions>
        </Dialog>


        {/* Snackbar Component from MUI */}

        <Snackbar open={openSnack.open} autoHideDuration={Number(openSnack.time)} onClose={() => { setOpenSnack({ ...open, open: false }) }} anchorOrigin={{ vertical: "top", horizontal: 'center' }} >
          <Alert onClose={() => { setOpenSnack({ ...openSnack, open: false }) }} severity={openSnack.severity} variant='filled' sx={{ width: '100%' }}>
            {openSnack.html}
          </Alert>
        </Snackbar>

      </div>
    </context.Provider>
  );
}

export default memo(App);

export const Context = () => {
  return useContext(context)
}
