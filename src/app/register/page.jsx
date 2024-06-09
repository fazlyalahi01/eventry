import RegisterForm from "/src/components/auth/RegisterForm";

const RegisterPage = () => {
    return (
        <main class="">
            <section class="h-screen grid place-items-center">
                <div
                    class="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md"
                >
                    <h4 class="font-bold text-2xl">Register</h4>
                    <RegisterForm />

                    <span class="text-center text-xs text-gray-500">
                        Already have an account?
                        <a class="underline hover:text-indigo-600" href="/login"
                        >Login</a>
                    </span>
                </div>
            </section>
        </main>
    );
}
export default RegisterPage;