export default function Home() {
    return (
        <>
            <div className='lg:m-auto lg:max-w-[40%] m-[10%] flex flex-col items-center'>
                <a className="w-[30%] h-8 ml-auto" href="/about">
                    <div className="bg-lightblue rounded-3xl p-2 flex flex-row justify-center mb-8">
                        <h1 className="text-sm text-text-light">About Us</h1>
                    </div>
                </a>

                <img src="/img/pantry_palatte_logo.svg" className="w-64" />

                <h1 className="italic text-4xl font-medium text-white mb-4">Pantry Palate</h1>

                <p className="italic text-sm text-white mb-0.5">Eat safe,</p>
                <p className="italic text-sm text-white mb-0.5">Eat healthy,</p>
                <p className="italic text-sm text-white mb-6">While saving the environment!</p>

                <div className="h-1 w-28 bg-white justify-center mb-8"></div>

                <p className="text-base text-white mb-6">What do you need help with today?</p>

                <a className="w-[95%]" href="/scan">
                    <div className="bg-white py-4 px-6 rounded-3xl flex items-center justify-center mb-4">
                        <h1 className="text-lg font-bold">Scan Fridge</h1>
                    </div>
                </a>

                <a className="w-[95%]" href="/cook">
                    <div className="bg-white py-4 px-6 rounded-3xl flex items-center justify-center mb-4">
                        <h1 className="text-lg font-bold">Cooking Assistant</h1>
                    </div>
                </a>

                <a className="w-[95%]" href="/shop">
                    <div className="bg-white py-4 px-6 rounded-3xl flex items-center justify-center">
                        <h1 className="text-lg font-bold">Shopping Assistant</h1>
                    </div>
                </a>
            </div>

        </>

    );
}
