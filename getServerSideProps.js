import jwt from 'jsonwebtoken';

export function withAuth(getServerSidePropsFunc) {
  return async (context) => {
    const { req } = context;
    try {
      const token = req.cookies.token;
      jwt.verify(token, process.env.JWT_SECRET);
      return await getServerSidePropsFunc(context);
    } catch (error) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  };
}

// Use this in your pages like this:
export const getServerSideProps = withAuth(async (context) => {
  // Your page's server-side logic
  return { props: {} };
});
