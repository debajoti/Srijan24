'use client'
import React, { Suspense } from 'react'
import Loading from '@/components/Login'

/**
 * Loads script to the document.
 *
 * Loading script takes certain amount of time, thus it returns a promise, which is
 * fulfilled if the script is loaded successfully, else the promise is rejected.
 *
 * @param {string | URL} src The URL of the script to be loaded.
 *
 * @returns {Promise<boolean>} Whether the script could be loaded successfully or not.
 */
function loadScript(src) {
    return new Promise(resolve => {
        const script = document.createElement('script')
        script.src = src

        script.onload = function () {
            resolve(true)
        }

        script.onerror = function () {
            resolve(false)
        }

        document.appendChild(script)
    })
}

/** URL from which razorpay client side SDK script will be loaded. */
const RAZORPAY_CHECKOUT_URL = 'https://checkout.razorpay.com/v1/checkout.js'
/* fetch the razorpay api key from environment variables. */
const RAZORPAY_API_KEY = process.env.NEXT_PUBLIC_RAZORPAY_API_KEY

/**
 * @param {Object} productDetails
 * Complete information of the merchendise.
 * @param {"tshirt"} productDetails.type
 * What kind of product is ordered.
 * @param {"S" | "M" | "L" | "XL" | "2XL" | "3XL" | undefined} productDetails.size
 * Size of the product.
 * @param {"black" | "white"} productDetails.baseColor
 * Color of the product.
 */
async function makePayment(productDetails) {
    // try to load the razorpay client side SDK into browser.
    const scriptLoaded = await loadScript(RAZORPAY_CHECKOUT_URL)

    // check whether the razorpay checkout script could be loaded or not.
    if (!scriptLoaded) {
        // if razorpay sdk script could not be loaded, show error to the client
        // and do not proceed further. custom error UI could be implemented.
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }

    try {
        const dataExtractionURL = new URL('/api/order-details')
        // Register order and bring payment details from the backend server.
        const res = await fetch(dataExtractionURL, {
            method: 'POST',
            body: JSON.stringify(productDetails),
        })

        const { order } = await res.json()

        // console.log(order.id)

    } catch (error) {
        alert('Order could not created. Please try again.' + error)
        return
    }
}
const BuyProduct = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            <Suspense fallback={<Loading />}>
                <h1>Randomly shop anything you like, who cares?</h1>
                <div className='flex flex-col items-center justify-center mt-[100px]'>
                    <h1 className='text-2xl'>Razor</h1>
                    <button
                        onClick={() => {
                            makePayment({
                                type: 'tshirt',
                                size: 'M',
                                baseColor: 'black',
                            })
                        }}
                        disabled={isLoading}
                        className={`bg-blue-500 text-white font-semibold mt-20 py-2 px-4 rounded ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {isLoading ? 'Processing...' : 'Buy Now'}
                    </button>
                </div>
            </Suspense>
        </>
    )
}

export default BuyProduct
