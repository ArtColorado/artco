import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./utils/themeContext";

function App() {
  const [count, setCount] = useState(0);


  return (
    <ThemeProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
