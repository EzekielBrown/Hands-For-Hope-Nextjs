import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
        <h1 className="head_text text-center">
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">Hands For Hope</span>
        </h1>
        <p className="desc text-center">
            Helping Community Become Closer
        </p>

        <Feed />
    </section>
  )
}

export default Home