const book = {
    title: "Ego is Enemy",
    author: "Ryan Holiday",
    publisher: {
        
    }
};

const { name: publisherName = "Self-Published"} = book.publisher;

console.log(publisherName);