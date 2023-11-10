import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";

const UserList = () => {
  return (
    <section className="card users-container">
      <Search />
      <Table />
      <Pagination />
    </section>
  );
};

export default UserList;
