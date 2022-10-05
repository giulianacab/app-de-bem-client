export function ErrorPage() {
  return (
    
    <div className="flex items-center justify-center w-screen h-screen bg-orange">
  <div className="px-4 lg:py-12">
    <div className="lg:gap-4 lg:flex flex-col justify-center items-center">
    <div className="flex justify-center items-center w-44 h-15 ml-12 mt-4">
        <img
          src="https://svgshare.com/i/n9v.svg"
          alt="img"
          // className="flex justify-center items-center w-40 h-40"
        />
      </div>
      <div
        className="flex flex-col items-center justify-center md:py-24 lg:py-32"
      >
        <h1 className="font-bold text-blue-600 text-9xl">404</h1>
        <p
          className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
        >
          <span className="text-red-500">Oops!</span> Nada por aqui
        </p>
        <p className="mb-8 text-center text-gray-500 md:text-lg">
        A pagina que você esta procurando não existe.
        </p>
        {/* <Link
          href="#"
          className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >Voltar</a
        > */}
      </div>
      
    </div>
  </div>
</div>
  );
}
