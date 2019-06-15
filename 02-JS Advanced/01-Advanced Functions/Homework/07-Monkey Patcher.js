function solution(command) {
    const upvote = (post) => post.upvotes++;
    const downvote = (post) => post.downvotes++;
    const score = (post) => {
        let report = [post.upvotes, post.downvotes];
        if (post.upvotes + post.downvotes > 50) {
            let votesToAdd = Math.ceil(Math.max(post.upvotes, post.downvotes) * 0.25);
            report[0] += votesToAdd;
            report[1] += votesToAdd;
        }

        report.push(post.upvotes - post.downvotes);

        let rating = '';
        if (post.upvotes + post.downvotes < 10) {
            rating = 'new';
        } else if (post.upvotes / (post.upvotes + post.downvotes) > 0.66) {
            rating = 'hot';
        } else if (post.upvotes > 100 || post.downvotes > 100 && report[2] >= 0) {
            rating = 'controversial';
        } else if (report[2] < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }
        report.push(rating);

        return report;
    };

    switch (command) {
        case 'upvote':
            upvote(this);
            break;
        case 'downvote':
            downvote(this);
            break;
        case 'score':
            return score(this);
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 132,
    downvotes: 68
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
console.log(solution.call(post, 'score'));