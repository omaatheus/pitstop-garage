import logo from "@/assets/pitstop-logo-inteira.png"
import Image from "next/image"

export default function Entrar(){
    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#0a0a0a]">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <Image className="mx-auto h-10 w-auto" src={logo} alt="Pitstop Garage" />
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Portal Administrativo <br /> Acesse sua conta</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label className="block text-sm/6 font-semibold text-white">Endereço de email</label>
        <div className="mt-2">
          <input type="email" name="email" id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label  className="block text-sm/6 font-semibold text-white">Senha</label>
          
        </div>
        <div className="mt-2">
          <input type="password" name="password" id="password"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-[#0d00c0] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#542eff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
    
    <p className="mt-10 text-center text-sm/6 text-gray-500">
      Retorne para a tela inicial
      <a href="./" className="font-semibold text-bg-[#0d00c0] hover:text-bg-[#0d00c0]"> Clique Aqui</a>
    </p>
  </div>
</div>
    )
}