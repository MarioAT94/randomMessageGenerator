
const motivateMe = () => {
    let firstPhrase = ['All our dreams can come true, if we have the courage to pursue them.', 'Only the paranoid survive.', 'Everything you can imagine is real.', 'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.', 'Whatever you are, be a good one.'];
    let secondPhrase = ['The secret of getting ahead is getting started.', 'It’s hard to beat a person who never gives up.', 'Do one thing every day that scares you.', 'Do what you feel in your heart to be right – for you’ll be criticized anyway.', 'You can either experience the pain of discipline or the pain of regret. The choice is yours.'];
    let thirdPhrase = ['The best time to plant a tree was 20 years ago. The second best time is now.', 'If people are doubting how far you can go, go so far that you can’t hear them anymore.', 'It’s no use going back to yesterday, because I was a different person then.', 'Happiness is not something ready made. It comes from your own actions.', 'Impossible is just an opinion.']

    let randomNumberOne = Math.floor(Math.random() * firstPhrase.length);
    let randomNumberTwo= Math.floor(Math.random() * secondPhrase.length);
    let randomNumberThree = Math.floor(Math.random() * thirdPhrase.length);
   
    return firstPhrase[randomNumberOne] + '\n' + secondPhrase[randomNumberTwo] + '\n' + thirdPhrase[randomNumberThree];
}

console.log(motivateMe());