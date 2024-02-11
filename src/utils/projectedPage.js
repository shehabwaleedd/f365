import Cookies from 'cookies';
import checkTokenValidity from '@/utils/checkTokenValidity';

export async function getServerSideProps(context) {
    const cookies = new Cookies(context.req, context.res);
    const token = cookies.get('token');

    const isValidToken = await checkTokenValidity(token);

    if (!isValidToken) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    return { props: {} }; // Token is valid, render the page
}

const ProtectedPage = () => {
    return (
        <div>
            <h1>Protected Page</h1>
            <p>This page is only accessible to authenticated users.</p>
        </div>
    );
};

export default ProtectedPage;
