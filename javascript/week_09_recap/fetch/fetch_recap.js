// fetch("https://opentdb.com/api.php?amount=1&type=boolean")
//     .then((response) => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))


const loadData = async () => {
    const fetchResult = await fetch("https://opentdb.com/api.php?amount=1&type=boolean");
    const json = await fetchResult.json();
    console.log(json);
}

loadData();