import React, { Component } from "react";
import ArticleList from "../HTTPRequests/ArticleList";
import api from '../services/api';
import Button from "../Stylization/Button";
import { NavLink } from "react-router-dom";


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
        <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}        
      </div>
    );
  }
}


export default AppForHTTPRequests;