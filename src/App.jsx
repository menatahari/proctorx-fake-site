import { useState } from "react";

// Sample Input, Card, Button components
const Input = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="input"
  />
);

const Card = ({ children }) => (
  <div className="card">
    <div className="card-content">{children}</div>
  </div>
);

const Button = ({ onClick, children }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);

export default function NewsSite() {
  const [query, setQuery] = useState("");
  const [newsList, setNewsList] = useState([]);

  const handleSearch = () => {
    if (query.trim() !== "") {
      setTimeout(() => {
        setNewsList((prevList) => [
          ...prevList,
          { header: query, content: "This is a new article section." },
        ]);
      }, 1500);
      setQuery(""); // Clear the search input
    }
  };

  return (
    <div className="container">
      <header className="header">
        The Hidden Guardian
      </header>
      <div className="search-section">
        <Input
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Go</Button>
      </div>
      
      {/* Displaying the list of news */}
      <div className="news-list">
        {newsList.map((news, index) => (
          <Card key={index}>
            <h2 className="card-title">{news.header}</h2>
            <p>{news.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
