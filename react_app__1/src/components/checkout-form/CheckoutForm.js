import React from 'react'
import styles from "./CheckoutForm.module.scss"
import { Form, Formik } from 'formik'
import Input from 'components/input/Input'
import checkoutSchema from 'validation/schemas/checkoutSchema'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from 'store/actions/cartProducts'
import { useNavigate } from 'react-router-dom'
import { BsFillPersonVcardFill } from 'react-icons/bs'
const CheckoutForm = () => {
    const { cartProducts } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (values, action) => {
        const { firstName, lastName, age, address, phoneNumber } = values
        console.log('-----------------------\nUSER\n-----------------------')
        console.log({ firstName, lastName, age, address, phoneNumber })
        console.log('-----------------------\nSHOPPING CART\n-----------------------')
        console.log(cartProducts)
        dispatch(clearCart())
        navigate('/')
    }
    return (
        <div className='container'>
            <Formik
                onSubmit={handleSubmit}
                validationSchema={checkoutSchema}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    age: '',
                    address: '',
                    phoneNumber: ''
                }}
            >
                {({ isSubmitting, isValid, dirty }) => (
                    <Form className={styles['form']} autoComplete='off'>
                        <div className={styles['heading']}>
                            <h3>CART PURCHASEMENT</h3>
                            <BsFillPersonVcardFill size={40}/>

                        </div>
                        <Input name='firstName' label={'First Name'} />
                        <Input name='lastName' label={'Last Name'} />
                        <Input name='age' min={4} max={100} type='number' label={'Age'} />
                        <Input name='address' label={'Address'} />
                        <Input name='phoneNumber' label={'Phone number'} />
                        <button disabled={!isValid || isSubmitting || !dirty} type='submit' className={styles['btn-submit']}>Checkout</button>
                    </Form>
                )}



            </Formik>

        </div>
    )
}

export default CheckoutForm