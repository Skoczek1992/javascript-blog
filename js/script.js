'use strict';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');


  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector');
  console.log(articleSelector);

  /*  [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
};



/*
    NEXT EXERICSE

    Generate Title links

 */

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
optArticleTagsSelector = '.post-tags .list';
optArticleAuthorSelector = '.post-author';
optTagsListSelector = '.tags.list';

function generateTitleLinks(customSelector = ''){

  /*  [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* {DONE] for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html = '';

  for(let article of articles) {

    /* [DONE] get the article id */

    const articleId = article.getAttribute('id'); /*pokazuje ze nie jest zdefiniowana*/
    console.log('articleId');

    /* {DONE] find the title element */
    /* {DONE] get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('link');

    /* [DONE] insert link into titleList */

    html = html + linkHTML;
    console.log('');
  }

  titleList.innerHTML = html;

}


generateTitleLinks();

const links = document.querySelectorAll('.titles a');
console.log('links');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
  console.log('click');
}


/*  new exercise

    GENERATE TAGS
*/

function generateTags(){

  /* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /*  [DONE] START LOOP: for every article: */

  for(let article of articles) {

    /* [DONE] find tags wrapper */

    const titleList = article.querySelector('optArticleTagsSelector');

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags');

    /* [DONE] split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log('articleTagsArray');

    /* [DONE] START LOOP: for each tag */

    for(let tag of articleTagsArray) {

      /* [DONE] generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag +'"<span>' + tag + '</span></a></li> ';

      /* [DONE] add generated code to html variable */

      html = html + linkHTML;
      console.log('');

      /* [DONE] END LOOP: for each tag */

    }

    /* [DONE] insert HTML of all the links into the tags wrapper */

    titleList.innerHTML = html;

  /* [DONE]END LOOP: for every article: */
  }
}

generateTags();

/*
  event
*/

function tagClickHandler(event){

  /* [DONE] prevent default action for this event */

  event.preventDefault('');

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* [DONE]  find all tag links with class active */

  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* [DONE] START LOOP: for each active tag link */

  for(let activeTagLink of activeTagLinks) {

    /* [DONE] remove class active */

    activeTagLink.classList.remove('active');

    /* [DONE] END LOOP: for each active tag link */

  }

  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* [DONE] START LOOP: for each found tag link */

  for(let tagLink of tagLinks) {

    /* [DONE] add class active */

    tagLink.classList.add('active');

    /* [DONE]END LOOP: for each found tag link */

  }

  /* [DONE] execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');

}

/*
  another function

*/

function addClickListenersToTags(){

  /* [DONE] find all links to tags */

  const tagLinks = document.querySelectorAll('href');

  /* [DONE] START LOOP: for each link */

  for(let tagLink of tagLinks) {

    /* [DONE] add tagClickHandler as event listener for that link */

    tagLink.addEventListener('click', tagClickHandler);

  /* [DONE] END LOOP: for each link */
  }
}

addClickListenersToTags();

/*
  generate authors

*/

function generateAuthors() {

  /* find all authors */

  const authors = document.querySelectorAll('optArticleAuthorSelector');/*nie wiem dlaczego eslint pokazuje to za poprawne??*/

  /* [DONE] START LOOP: for every author: */

  for(let author of authors) {

    /* [DONE] find author wrapper */

    const authorWrapper = document.querySelector('optArticleAuthorSelector');

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get tags from data-author attribute */

    const articleAuthor = author.getAttribute('data-author');

    /* [DONE] generate HTML of the link */

    const authorHTML = '<a href="#' + articleAuthor + '">' + articleAuthor + '</a>';

    /* [DONE] add generated code to html variable */

    html = html + authorHTML;
    console.log('');

    /* [DONE] insert HTML of all the links into the tags wrapper */

    authorWrapper.innerHTML = html;

  }
}

generateAuthors();

/*
  Event to authors
*/

function authorClickHandler(event) {

  /*[done] prevent default action for handler */

  event.preventDefault('');

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href= clickedElement.getAttribute('href');

  /* [DONE] extract tag from the "href" constant */

  const author = href.replace('#author-', '');

  /* [DONE] find all author links with class active */

  const activeAuthorLinks = document.querySelectorAll('.post-author a.active');

  /* [DONE] START LOOP: for each active tag link */

  for(let activeAuthorLink of activeAuthorLinks) {

    /* [DONE] remove class active */

    activeAuthorLink.classList.remove('active');

    /* [DONE] END LOOP: for each active tag link */

  }

  /* [DONE] find all author links with "href"  */

  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* [DONE] START LOOP: for each found tag link */

  for(let authorLink of authorLinks) {

    /* [DONE] add class active */

    authorLink.classList.add('active');

    /* [DONE]END LOOP: */

  }

  /* [DONE] execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-author="' + author + '"]');


}


/*

  ClickListenersToAuthors!!!

*/

function addClickListenersToAuthors(){

  /* [DONE] find all links to tags */

  const authorLinks = document.querySelectorAll('href');

  /* [DONE] START LOOP: for each link */

  for(let authorLink of authorLinks) {

    /* [DONE] add tagClickHandler as event listener for that link */

    authorLink.addEventListener('click', authorClickHandler);

  /* [DONE] END LOOP: for each link */
  }
}

addClickListenersToAuthors();

/*
  ex. 7.3

*/

function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  /* find all articles */

  /* START LOOP: for every article: */

  /* find tags wrapper */

  /* make html variable with empty string */

  /* get tags from data-tags attribute */

  /* split tags into array */

  /* START LOOP: for each tag */

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* [NEW] check if this link is NOT already in allTags */
  if(!allTags.hawOwnProperty(tag)){
    /* [NEW] add tag to allTags object */
    allTags[tag] = 1;
  } else {
    allTags[tag]++;
  }

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');

  /* [NEW] add html from allTags to tagList */
  //tagList.innerHTML = allTags.join(' ');

  /* [NEW] create variable for all links HTML code*/
  let allTagsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags;*/
  for(let tag in allTags){
    /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += tag + '(' + allTags[tag] + ')';
  }
  /*[NEW] END LOOP: for each tag in allTags */

  /* [NEW] add html from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
}
