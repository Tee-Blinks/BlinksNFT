import { connectWallet } from "../Blockchain.Services"
import screenshot from "../assets/Screenshot 2023-07-07 145453.jpg"
import { useGlobalState } from "../store"
import { truncate } from "../store"

const Header = () => {
const [connectedAccount] = useGlobalState("connectedAccount")
  return (
    <nav className="w-4/5 flex justify-between md:justify-center item-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img className="w-80 cursor-pointer" src={screenshot} alt="logo" />
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer"></li>
        <li className="mx-4 cursor-pointer"></li>
        <li className="mx-4 cursor-pointer"></li>
        <li className="mx-4 cursor-pointer"></li>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
