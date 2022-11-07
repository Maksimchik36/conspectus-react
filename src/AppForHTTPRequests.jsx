import React, { Component } from "react";
import ArticleList from "./HTTPRequests/ArticleList";
import api from './services/api';
import Button from "./Stylization/Button";


class AppForHTTPRequests extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await api.fetchArticlesWithQuery("react");
      this.setState({ articles: response });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <div>
        <Button><a href="http://localhost:3000/conspectus-react">Go back</a></Button>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}        
      </div>
    );
  }
}


export default AppForHTTPRequests;