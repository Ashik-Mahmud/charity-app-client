const GetAQuote = () => {
  return (
    <div className="py-32 bg-zinc-50 my-30">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h3 className="text-3xl">Get a up to date with US</h3>
            <p>We are doing basically, donations kind of things</p>
          </div>
          <div className="bg-slate-100 w-1/3 flex items-stretch p-3">
            <input
              type="email"
              className="w-full p-5 bg-transparent outline-none border-none"
              placeholder="Email"
            />
            <button className="w-1/2 bg-accent text-white text-lg">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
