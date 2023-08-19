export default function About() {
    return (
        <>
            <div className='lg:m-auto lg:max-w-[40%] m-[10%] flex flex-col items-center'>

                <img src="/img/about_us.svg" className="w-72" />

                <h1 className="italic text-4xl font-medium text-white mb-4">About Us</h1>

                <div className="h-1 w-28 bg-white justify-center mb-8"></div>

                <p className="text-sm text-white mb-64">This is a placeholder for now.</p>

                <a className='bg-dark text-white rounded-full mr-auto py-2 px-4' href="/">&lt;</a>

            </div>

        </>

    );
}
