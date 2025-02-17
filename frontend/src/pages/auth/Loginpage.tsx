import LoginForm from "../../components/forms/LoginForm"

type Props = {}

const Loginpage = (props: Props) => {
  return (
    <div className="grid grid-cols-2 h-full w-full">

      <div>
      <LoginForm />
      </div>

      <div className="bg-black p-5">
      <div className="rounded-md relative h-screen bg-[url('images/home-cover.jpg')] bg-cover bg-center flex flex-col"> </div>
      </div>
    </div>
  )
}

export default Loginpage