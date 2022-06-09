# JavaScript

## Fetch Exercise

We've explored the fundamentals of JavaScript and had a refresher of HTML and CSS. Now that we're familiar with the DOM, let's take this a step further and attempt to bring all our learning together. 

Using an external API, let's begin constructing a front-end app which populates a page with dynamic information. We're talking **`fetch()` requests**, we're talking **DOM manipulation** and we're talking **user input**.

## Set-Up

This afternoon lab may seem quite intimidating so we're going to first lay out a start point for you. Instead of providing one, we're going to talk through the steps to get you familiar with the code patterns:

- **Step 1: HTML**
	- Open up VSCode and create a new HTML file
	- Using Emmet abbreviation (`!` or `html:5`) or by typing it yourself, set up a basic HTML template
	- Add a heading (`h1`) to the `body` followed by a `section`
	- Give your `section` a distinct `id`

- **Step 2: JS**
	- Again within VSCode, create a new JS file
	- Move back to your HTML file and connect your JS file using the `script` tag and your filepath in the `src` attribute
	- Remember to include `defer` to your `script` tag so it runs after the HTML loads!
	- Back in your JS file, add in a simple `console.log("HI!")`

- **Step 3: In the browser**	
	- Open up your HTML file in the browser by right-clicking your file and then selecting `Open With > Google Chrome`
	- Your webpage will be blank save the heading added earlier
	- Right click the page in the browser and select `Inspect`
	- At the top right, select the `Console`
	- Check that your `"HI!"` statement is printed there
	- If the message doesn't appear, check that your files are saved and that the filepath in the `script` tag is correct

- **Step 4: Familiarisation of the Countries API**
	- Have a look at API endpoint which returns all held information on all countries within their set: [https://restcountries.com/v2/all]()
	- This will be difficult to parse so let's install the Chrome JSON Formatter extension [https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related]()
	- Refresh the endpoint page to see the output in a clearer format
	- Familiarise yourself with the rough structure of the output
	- Now, let's visit another endpoint [https://restcountries.com/v2/name/peru]()
	- Familiatise yourself with this structure and consider how this relates to the previous endpoint's output

- **Step 5: Creating our `fetch()` request**
	- In your JS file, create a function called `getCountryByName()`
	- Give this function one argument, `countryName`
	- Within the function place a `fetch()` request which points towards the `https://restcountries.com/v2/name/{countryName}` endpoint
	- Don't use the format above, rather use string interpolation to include the argument in your URL
	- Following your `fetch()` request, put in a `.then()` which takes the `response` and puts it into JSON format (`response => response.json()`)
	- Within one more `.then()` statement, print your response data to the console (`data => console.log(data)`)
	- Call your function at the bottom of your JS file, giving it a valid country name
	- Play about, see how the API behaves for diffetent inputs

	
## Lab Task

From the set-up task above, we have our response from the Rest Countries API printing to the console for a provided country. Your tasks are to:

1. **Take the output from your `getCountryByName()` function and make use of it on the webpage.** You'll need to access specific properties within the returned object, such as `name`. This will also involve you creating a variable associated with the `section` created earlier and making use of the `createElement()` and `.append()` methods
2. **Modify your code to additionally display the population** of the specified country on your webpage
3. **Create a `getAllCountries()` function** which similarly displays the name and population of **each** country to the frontend. See the tip below about abstracting your functionality. Have this method called on page load
4. **Create an HTML form** which allows you to input the name of a country which is used to "filter" the information on the front-end on-submit. This will call your `getCountryByName()` function

**Tips:** 

- Remember that you can use bracket notation `objectName[#]` to access items in an array (or object) at the specified index `#`
- You can also use dot notation (`object.property`) to access values of the specified `property`
- [MDN - Create Element](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN - Append Method](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- When you create JS functionality for adding your object properties to, for instance, a `p` element, it would make sense to create this as a separate function (abstracted function) which accepts the data of **one country**. This is so you can easily reuse this functionality during the later tasks
- Note that while we have said "filter the information" above, we are actually creating a new `fetch()` request, which is then adding **additional information** to your front-end. You will, hence, have to clear the country information already on the front-end when you submit your form. `Element.innerHTML = {value}` may be helpful here
- [MDN - innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

## Extensions

5. **Make your page header dynamic**, displaying whether data is still being fetched or has completed. This will be tied to your previously created methods. Again, this will likely involve `Element.innerHTML`
6. **Make your header display whether an error has occurred** when fetching data (such as when an invalid country name is inputed)—see tip below
7. **Extend your webpage to include some more information about the countries and some basic styling** (for instance, you could make use of the `flag` property which holds a URL to an image of the country's flag). This task can be considered complete when you have successfully added in some styling to your page via an external CSS file, and have included at least two more pieces of information about each country

**Tips:**

- You can check whether a `fetch()` request has been successful by querying the response within your initial `.then()`, as the returned object contains an `ok` property which is of Boolean type. Remember to collect together your functionality within your `.then()`s using curly brackets `{}` if you are doing more than one thing with the returned information!

	