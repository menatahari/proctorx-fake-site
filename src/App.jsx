import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

// Sample Input, Card, Button components remain the same

export default function NewsSite() {
  const [query, setQuery] = useState("");
  const [newsList, setNewsList] = useState([]);

  // Fetch news in real-time
  useEffect(() => {
    const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const news = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNewsList(news);
    });

    return () => unsubscribe(); // Cleanup
  }, []);

  const handleSearch = async () => {
    if (query.trim() !== "") {
      await addDoc(collection(db, "news"), {
        header: query,
        content: "This is a new article section.",
        createdAt: serverTimestamp(),
      });
      setQuery(""); // Clear input
    }
  };

  return (
    <div className="container">
      <header className="header">The Hidden Guardian</header>
      <div className="search-section">
        <Input
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Go</Button>
      </div>

      <div className="news-list">
        {newsList.map((news) => (
          <Card key={news.id}>
            <h2 className="card-title">{news.header}</h2>
            <p>{news.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
