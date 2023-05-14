import RegisterComponent from "../components/registerForm/register.component"

const RegisterPage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <h1 className="text-4xl font-bold text-center mt-10">Register Page</h1>
      <main className="flex justify-center mt-10">
        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
          <RegisterComponent />
        </div>
      </main>
    </div>
  )
}

export default RegisterPage
