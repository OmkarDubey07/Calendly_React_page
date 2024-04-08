
const BookingSection = () => {
  return (
    <div className="text-white bg-bookingTheme relative py-20 px-4 flex justify-center flex-col items-center overflow-hidden text-center">
        <h2 className="text-4xl font-bold text-center my-4 max-sm:text-3xl">Easy access for easy bookings</h2>
        <p className="my-4 text-base text-gray-400 font-light">
            Share your Calendly link right from your browser, so you can schedule meetings <br />
            without the back-and-forth
        </p>
        <div className="gap-4 flex mt-4">
            <button className="bg-blue-700 border-2 border-indigo-700 px-6 py-4 rounded-full text-sm">Start for free</button>
            <button className="border-white  border-2 px-6 py-4 rounded-full text-sm">Talk with Sales</button>
        </div>
        <img src="/ssshape.svg" className="w-64 absolute -left-20 -bottom-24 " alt="shape" />
        <img src="/ssshape2.svg" className="w-80 absolute -left-2 -bottom-40" alt="shape" />
    </div>
  )
}

export default BookingSection