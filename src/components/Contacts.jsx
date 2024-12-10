const Contacts = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-4xl">
          <span className="border-b-2 border-red-700 selection:bg-purple-300 selection:text-yellow-900">
            Get in touch
          </span>
        </h1>

        <p className="text-center text-lg font-semibold py-8 selection:bg-purple-300 selection:text-yellow-900">
          Found my work compelling? Send me an e-mail and I'll respond as soon as I can :)
        </p>

        <a href="mailto:shalappandotra21@gmail.com" className="text-nowrap rounded-lg px-5 py-3 bg-red-700 text-lg font-bold text-white hover:shadow-2xl hover:shadow-red-200 transition-all duration-200 hover:-translate-y-2 shadow-lg shadow-red-300 selection:bg-yellow-500 selection:text-yellow-900">Contact me</a>
      </div>
    </div>
  )
}

export default Contacts
