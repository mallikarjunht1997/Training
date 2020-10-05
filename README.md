# Training

API_JS
  Read data from the text-file and display in react component.
 using XMLHttpRequest to read data from local text file
  htmlid.open("GET", "text file to read", true);
  simple way to access url data
  to learn more visit -> https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  
Toggle-Style

a simple example to demonstrate how to use custom Hooks
  useState hook 
  example: const [boolean, setBoolean] = useState(true);
  {condition ? if true this statement is executed : if false then this statement is executed}
  this type of code reduses the number of additional lines and code looks clean and cool.
  example:
        {
        boolean
        ? { background: "blue", backgroundColor: "red" }
        : { backgroundColor: "red" }
        }
   to know more visit -> https://medium.com/@jraleman/ternary-operators-vs-if-else-statements-6c26f7d034f7
   
 simple news app using google news api
  "http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0fe1ec538ed9450caa9cf03e8edd9b17"
  Another example of news app using newsapi.org
  "https://github.com/haerulmuttaqin/PopularNews"
 
 getArticles() {
xios
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
      
  fetch data from the api and then destructure the data to filter the values
  
  use javaScript map function to seperate data and store in array to use later.
  
  use react card npm for displaying the data

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

  
