
const tweetInput = document.getElementById('tweet-input');
const tweetsContainer = document.querySelector('.tweets-container');


const createTweet = (tweet) => {
  
  const tweetCard = document.createElement('div');
  tweetCard.classList.add('tweet-card');

  
  const tweetCardHeader = document.createElement('div');
  tweetCardHeader.classList.add('tweet-card-header');


  const tweetAuthor = document.createElement('h3');
  tweetAuthor.textContent = 'Ash';


  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '&times;';
  deleteButton.addEventListener('click', () => {
    tweetCard.remove();
  });

  
  tweetCardHeader.appendChild(tweetAuthor);
  tweetCardHeader.appendChild(deleteButton);

  
  const tweetContent = document.createElement('p');
  tweetContent.classList.add('tweet-card-content');
  tweetContent.textContent = tweet;

  
  const tweetCardFooter = document.createElement('div');
  tweetCardFooter.classList.add('tweet-card-footer');

  
  const likeButton = document.createElement('button');
  likeButton.innerHTML = '<i class="fa fa-heart"></i>';
  likeButton.classList.add('like-icon');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
  });

  const commentButton = document.createElement('button');
  commentButton.innerHTML = '<i class="fa fa-comment"></i>';
  commentButton.classList.add('comment-icon');
  commentButton.addEventListener('click', () => {
    
    const commentForm = document.createElement('form');
    commentForm.classList.add('comment-form');

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Add a comment...';

    const commentButton = document.createElement('button');
    commentButton.type = 'submit';
    commentButton.textContent = 'Comment';

    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentButton);

    tweetCardFooter.appendChild(commentForm);
  });

  
  tweetCardFooter.appendChild(likeButton);
  tweetCardFooter.appendChild(commentButton);


  tweetCard.appendChild(tweetCardHeader);
  tweetCard.appendChild(tweetContent);
  tweetCard.appendChild(tweetCardFooter);


  tweetsContainer.appendChild(tweetCard);
};


const tweetForm = document.querySelector('.post-form');
tweetForm.addEventListener('submit', (e) => {
  e.preventDefault();


  const tweet = tweetInput.value;

  
  createTweet(tweet);


  tweetInput.value = '';
});