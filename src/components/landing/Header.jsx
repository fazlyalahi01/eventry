import Search from "./Search";

const Header = () => {
  return (
    <div className="flex justify-between pt-12">
      <h1 className="font-semibold text-xl">Discover Events</h1>

      <div>
        <Search />
      </div>
    </div>
  );
};

export default Header;