import BookList from "./components/BookList";
import useFetchBook from "./hooks/useFetchBook";

const Book = () => {
  const baseUrl = "http://localhost:3000/api/books";
  const { data, isLoading, error, category, handleCategoryChange } = useFetchBook(baseUrl);

  const categories = [
    { value: "", label: "All" },
    { value: "romance", label: "Romance" },
    { value: "science", label: "Science" },
    { value: "crime", label: "Crime" },
    { value: "food", label: "Food" },
    { value: "adventure", label: "Adventure" },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Books</h1>
      <p>This is where we use MERN</p>
      <h2>Fetch Example</h2>

      <div className="text-slate-600 my-5">
        <div>Categories</div>
        <select onChange={handleCategoryChange} className="border-1 outline-none mt-4 ring-1 ring-slate-600 w-[100px]">
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
      </div>

      <ul className="mt-5 grid grid-cols-4 gap-4">
        {data.map((item) => (
          <BookList key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Book;
