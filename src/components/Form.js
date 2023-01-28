import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
export const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is Required!"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null],'Passwords must match').required()
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")}/>
            <p className='error-class'>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p className='error-class'>{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <p className='error-class'>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p className='error-class'>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
            <p className='error-class'>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    );
}