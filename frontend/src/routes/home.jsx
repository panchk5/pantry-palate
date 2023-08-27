export default function Home() {
  return (
    <>
      <div className="md:m-auto md:max-w-[40%] mx-[10%] flex flex-col items-center">

        <img src="/img/pantry_palatte_logo.svg" className="h-48" />

        <h1 className="italic text-4xl font-medium text-white mb-4">
          Pantry Palate
        </h1>

        <p className="italic text-sm text-white mb-0.5">Eat safe,</p>
        <p className="italic text-sm text-white mb-0.5">Eat healthy,</p>
        <p className="italic text-sm text-white mb-6">
          Save the environment, one scan at a time
        </p>

        <div className="h-[3px] w-28 bg-white justify-center mb-8"></div>

        <p className="text-base text-white mb-6">
          What do you need help with today?
        </p>

        <a className="w-[95%] md:w-[80%]" href="/scan">
          <div className="bg-white py-4 px-6 rounded-3xl flex items-center justify-center mb-4">
            <h1 className="text-lg font-bold md:text-base">Scan Fridge</h1>
          </div>
        </a>

        <a className="w-[95%] md:w-[80%]" href="/chat">
          <div className="bg-white py-4 px-6 rounded-3xl flex items-center justify-center mb-4">
            <h1 className="text-lg font-bold md:text-base">Cooking Assistant</h1>
          </div>
        </a>

        <a className="w-[95%] md:w-[80%]" href="/shop">
          <div className="bg-white py-4 px-6 rounded-3xl flex items-center justify-center mb-4">
            <h1 className="text-lg font-bold md:text-base">Shopping Assistant</h1>
          </div>
        </a>
      </div>
    </>
  );
}
