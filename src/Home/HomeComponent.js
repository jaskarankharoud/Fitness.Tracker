import { Fragment } from "react";
import SearchBar from "./SearchBarComponent";
import CarouselComponent from "./CarouselComponent";

function Home() {
  return (
    <Fragment>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div>
        <CarouselComponent />
      </div>
    </Fragment>
  );
}
export default Home;
