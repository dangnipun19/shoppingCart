import {AiFillCheckCircle} from "react-icons/ai"

function OrderPlaced() {
  return (
    <div>
        <main className="max-w-screen-lg mx-auto p-5">
            <div className="flex flex-col p-10 bg-white ">
                <div className="flex items-center space-x-2 mb-5">
                    <AiFillCheckCircle className="text-green-500" size="30px"></AiFillCheckCircle>
                    <h1 className="text-3xl">Thank you, your order has been confirmed!</h1>
                </div>
                <p>
                    Thank you for shopping with us. We'll send a confirmation once your item has shipped, if you would like to check the status of your order(s) please press the link below.
                </p>
                <button className="bg-blue-600 rounded-3xl p-3 text-lg text-white mt-8 hover:bg-blue-700">Go to my orders</button>
            </div>
        </main>  
    </div>
  )
}

export default OrderPlaced