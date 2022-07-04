
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Home from './components/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Signup from './pages/Signup';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';
// import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  // const [pages] = useState([
  //   {
  //     name: 'home'
  //   },
  //   { name: 'listing' },
  //   { name: 'login'},
  //   { name: 'signup'}
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/listing"
                element={<Listing />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              {/* <Route 
                path="/thought/:id" 
                element={<SingleThought />} 
              /> */}
              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
      {/* 
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>

      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer /> */}
    </ApolloProvider>
  );
}

export default App;





