import LoginComponent from '../components/loginForm/login.component';

const LoginPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Login Page</h1>
      <main className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md p-6">
        <LoginComponent />
      </main>
    </>
  );
};

export default LoginPage;
