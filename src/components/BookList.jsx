import Book from "./Book";

function BookList(props)
{
    return(
        <div className="BookList">
            {props.booksData.map((data) => (
                 <Book key={data.id} bookDetails={data} ></Book>
            ))}
        </div>
    );
}

export default BookList;