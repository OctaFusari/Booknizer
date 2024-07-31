<template>
  <div class="container">
    <h1>Booknizer</h1>
    <div class="search-bar">
      <input
        v-model="query"
        @keyup.enter="searchBooks"
        placeholder="Cerca libri"
      />
      <button @click="searchBooks">Cerca</button>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="books.length">
      <h2>Risultati:</h2>
      <ul class="book-list">
        <li v-for="book in books" :key="book.key" class="book-item">
          <strong>{{ book.title }}</strong>
          <span class="author"> by {{ getAuthors(book) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '',
      books: [],
      error: null
    };
  },
  methods: {
    async searchBooks() {
      if (this.query.trim() === '') {
        return;
      }

      this.error = null;

      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${encodeURIComponent(this.query)}`);
        this.books = response.data.docs;
      } catch (err) {
        this.error = 'Failed to fetch data';
      }
    },
    getAuthors(book) {
      return book.author_name ? book.author_name.join(', ') : 'Unknown';
    }
  }
};
</script>

<style>
body {
  background-color: #f4f4f9;
  font-family: 'Inter';
  color: #333;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  text-align: center;
  color: #007bff;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  transition: border-color 0.3s;
  color: #333;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

button {
  padding: 12px 24px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: #d9534f;
  text-align: center;
  margin-bottom: 20px;
}

.book-list {
  list-style-type: none;
  padding: 0;
}

.book-item {
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}

.book-item:last-child {
  border-bottom: none;
}

.book-item strong {
  color: #333;
  font-weight: bold;
}

.book-item span.author {
  color: #555;
  font-style: italic;
}
</style>
