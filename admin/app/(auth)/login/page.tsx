import type { Metadata } from 'next';
import Form from './Form';

export const metadata: Metadata = {
    title: 'Fikiri | Login',
};

const Login = () => {
    return (
        <div className={'relative'}>
            <Form />
        </div>
    );
};

export default Login;
