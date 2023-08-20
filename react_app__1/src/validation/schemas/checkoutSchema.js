import * as Yup from 'yup'

const defaultText = 'is required!'
const checkoutSchema = Yup.object().shape({
    firstName: Yup.string().required(`First Name ${defaultText}`),
    lastName: Yup.string().required(`Last Name ${defaultText}`),
    age: Yup.number().required(`Age ${defaultText}`).integer().min(5, 'Age should be greater than four!').max(99, 'Age should be lower than 100!'),
    address: Yup.string().required(`Address ${defaultText}`),
    phoneNumber: Yup.string().test('is-complete', 'There should be 10 digits', value => {
        return value && value.replace(/[^0-9]/g, '').length === 10; // Adjust the length as needed
    })
        .required(`Phone number ${defaultText}`)
})
export default checkoutSchema