import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContinueSection from "../components/ContinueSection";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import { initialMoviesData } from "../data/movies"; // Menunjuk ke src/data/movies.js kamu

function Home({ onAdd }) {
  // Amankan data jika seandainya array dari movies.js belum termuat sempurna
  const dataAman = initialMoviesData || [];

  const continueMovies = dataAman.filter(m => m?.category === "continue");
  const popularMovies = dataAman.filter(m => m?.category === "popular");
  const topRatingMovies = dataAman.filter(m => m?.category === "top-rating");
  const newReleaseMovies = dataAman.filter(m => m?.category === "new-release");

  return (
    <div className="bg-[#141414] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      
      <div className="px-4 md:px-10 my-6">
        <ContinueSection movies={continueMovies} />
      </div>

      <MovieSection 
        title="Film Terpopuler" 
        movies={popularMovies} 
        onAction={onAdd}
        isMyList={false}
      />

      <MovieSection 
        title="Top Rating Film" 
        movies={topRatingMovies} 
        onAction={onAdd}
        isMyList={false}
      />

      <MovieSection 
        title="Rilis Baru" 
        movies={newReleaseMovies} 
        onAction={onAdd}
        isMyList={false}
      />

      <Footer />
    </div>
  );
}

export default Home;