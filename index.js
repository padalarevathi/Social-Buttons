const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <button buttonText="Like" className="like-button"></button>
        <button buttonText="Comment" className="comment-button"></button>
        <button buttonText="Share" className="share-button"></button>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
