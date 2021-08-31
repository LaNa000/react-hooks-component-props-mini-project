
function Article({title, date = "January 1, 1970", preview, minutes}) {

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            {emojiHandler(minutes)} {minutes} min read
            <p>{preview}</p>
        </article>
    );
}
export default Article;

const emojiHandler = (minutes) => {
    let emoji = "";
    if (minutes < 30 ) {
        for (let i = 0; i < Math.ceil(minutes/5); i++){
            emoji += "☕️";
        }
    } else {
        for (let i = 0; i < Math.ceil(minutes/10); i++){
            emoji += "🍱";
        }
    }
    return emoji;
}