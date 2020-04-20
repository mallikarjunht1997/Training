import React from "react";
import axios from "axios";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class News extends React.Component {
    
    state = {
        articles: [],
        isLoading: true,
        errors: null
      };
      getArticles() {
        axios
          .get(
            "http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0fe1ec538ed9450caa9cf03e8edd9b17"
          )
          .then(responce =>
            responce.data.articles.map(article => ({
              date: `${article.publishedAt}`,
              title: `${article.title}`,
              url: `${article.url}`,
              author: `${article.author}`,
              description: `${article.description}`,
              urlToImage: `${article.urlToImage}`,
              content: `${article.content}`
            }))
          )
          .then(articles => {
            this.setState({
              articles,
              isLoading: false
            });
          }).then(this.setState({
            isLoading : true
          }))
          .catch(error => this.setState({ error, isLoading: false }));
          console.log(this.state.articles,"article")
      }
      
      componentDidMount() {
        this.getArticles();
      }
      componentWillMount(){
        window.addEventListener('scroll', this.loadMore);
      }
      
      componentWillUnmount(){
          window.removeEventListener('scroll', this.loadMore);
      }
      
      loadMore(){
          if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
              // Do load more content here!
              
          }
      }
      render() {
        const { isLoading, articles } = this.state;
        return (<>
          <p>NEWS From Google!......</p>
          <React.Fragment >
              <Container fixed>
            <div onScroll={this.getArticles}>
              {!isLoading ? (
                articles.map(article => {
                  const { date, title, url, author, description, urlToImage, content} = article;
                  return (<>
                  <Card>
      <CardActionArea>
                    <CardContent>
                        <h3>{title}</h3>
                        <img src={urlToImage} width='100%'height='350px'/>
                        <Typography gutterBottom variant="h6" component="h6">Date : {date} <br /> 
                        Author : {author}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">{description}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{content}</Typography>
                    </CardContent>
                    </CardActionArea>
            </Card>
                    </>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
 
            </Container>
          </React.Fragment>
          </>
        );
      }
}
export default News;