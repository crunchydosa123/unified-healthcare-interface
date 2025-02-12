import LoginForm from "../../components/forms/LoginForm"

type Props = {}

const Loginpage = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <LoginForm />
    </div>
  )
}

export default Loginpage