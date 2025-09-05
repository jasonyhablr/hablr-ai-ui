export default function Login() { return null; }
export async function getServerSideProps() {
  return { redirect: { destination: '/api/auth/login', permanent: false } };
}
