const $starFragment = document.createDocumentFragment();
// const $ratingBox = document.querySelector('.rating-box');
const $ratingText = document.querySelector('.rating-text');
const $starIcon = '/images/icon-star.svg';
const $ratingTemplate = document.getElementById('rating-template').content;
const $socialProofRatesBox = document.querySelector('.social-proof__rates');

// So in this part I think the rate and stars should be dynamic but of course getting the actual
// rate from somewhere else I did it this way just for fun, feel free to give me some feedback
let rate = 5;

//creating the stars
for (let i = 1; i <= rate; i++) {
    let starIcon = document.createElement('img');
    starIcon.setAttribute('src', $starIcon);
    starIcon.setAttribute('alt', $starIcon);
    $starFragment.appendChild(starIcon);
}

//creating a container for each group of stars
for (let i = 1; i <= 3; i++) {
    $rateBox = document.importNode($ratingTemplate, true);
    $rateBox.querySelector('.rating-box').appendChild($starFragment.cloneNode(true));
    $rateBox.querySelector('.rating-text').textContent = `Rated ${rate} Stars in Reviews`;
    $socialProofRatesBox.appendChild($rateBox);
}