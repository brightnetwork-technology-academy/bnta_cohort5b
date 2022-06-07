darkModeButton = document.getElementById("dark-mode-button")

handleButtonClick = function () {
    console.log("button clicked")
    // change the background colour and text
    body = document.body
    body.style.backgroundColor = "#091d1e"
    body.style.color = "#aaaaaa"

    // change the border of the title

    title = document.getElementById("title-section")
    title.style.border = "1px solid #aaaaaa"

    // change the border and headings on the posts

    posts = document.getElementsByClassName("post")
    for (post of posts){
        post.style.border = "1px solid #aaaaaa"
    }

    postHeadings = document.getElementsByTagName("h3")
    for (heading of postHeadings){
        heading.style.color = "#466876"
    }
}

darkModeButton.addEventListener("click", handleButtonClick)
