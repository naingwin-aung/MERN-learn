import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BookList = ({ item }) => {
  return (
    <li>
      <Link
        to={`/books/${item.slug}`}
        className="flex flex-col items-center gap-3"
      >
        <div className="w-full h-[280px]">
          <img
            src={`http://localhost:3000/uploads/${item.thumbnail}`}
            alt={item.title}
            className="w-full h-full object-fill"
          />
        </div>
        <h3 className="text-slate-600">{item.title}</h3>
      </Link>
    </li>
  );
};

export default BookList;

BookList.propTypes = {
  item: PropTypes.object,
};
