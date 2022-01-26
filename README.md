# Sorting Visualizer
Web Application that visualizes sorting algorithms, including Bubble, Selection, Insertion, Merge, and Quick sorts.

![](/public/sorting-visualizer.PNG)

## Table of Contents
1. [Implementation Detail](#implementation)
   1. [Planning the User Interface](#planningui)
   2. [Building a Static Version](#buildingstatic)
   3. [Implementing Sorting Animations (Initial Approach)](#implementingsortinitial)
   4. [Implementing Sorting Animations (New Approach)](#implementingsortnew)
2. [Using the Application](#usingtheapp)
3. [Installing / Getting Started](#installing)
4. [Built With](#builtwith)

## Implementation Detail
### Planning the User Interface <a name="planningui"></a>
First, I planned out the component hierarchy of the application. There were three main sections I had in mind.
1) A navigation bar along the top with buttons to choose algorithms
2) A row of bars representing the array to be sorted
3) A toolbar of buttons to reset, sort, and adjust animation speed

As for the array of bars, I wanted them to change colors depending on their state in the sorting process. Blue for unsorted, yellow for comparing two bars, red for swapping two bars, and green for sorted.

### Building a Static Version <a name="buildingstatic"></a>
Next, I built out all the main components of the application along with its layout. When formatting the UI, I ran into an issue where the row of bars would shift up and down between resets depending on the largest height bar, as the "box" containing the elements would change sizes depending on the largest height in the array. In order to combat this, I flipped the array upside down, so the bottom of each bar would stick to the navigation bar. 

### Adding State <a name="addingstate"></a>
After the layout of the UI was set, it was time to add state. The primary state of the application was the array, as the array would need to change in various ways in response to different button clicks. In addition, there would be a state for the sorting selection; depending on which algorithm was selected, a different algorithm would be used to visualize the sorting process.

### Resetting the Array <a name="reset"></a>
I decided to first handle the click event for the reset button. In order to do so, I defined a callback function handleArrayReset and passed it down to the button toolbar component. When the respective button was clicked on the toolbar, the callback function would then be fired, randomizing the array and updating the array state, which then triggers a re-render. Within my event handler function, I called another self-defined function that created a new array of 10 random numbers, each up to 500. Also, as I did not want the minimum bar height to be too small, I added 5 to the end of each number.
```javascript
const resetArray = () => {
   const arr = [];
   for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 500) + 5);
   }
   setArray(arr);
};
```

### Implementing Sorting Animations (Initial Approach)<a name="implementingsortinitial"></a>
Animating the sorting algorithms was by far the most difficult part of the application. My initial approach was to retrieve an array of the indices being compared at each step of the algorithm, and then in my root App component I would loop through the array of indices and use setTimeout functions to incrementally perform swaps and color changes. However, this approach soon became very cumbersome; I had to use multiple setTimeout loops at different time intervals to change the comparison color, unsorted color, swap color, and sorted color. Not only that, there was a major flaw in my logic in that I was directly making changes to the DOM elements rather than letting React do the automatic re-rendering for me.

While this inital approach managed to work for easier sorts like Bubble Sort and Selection Sort, it proved to be far too complex for the recursive algorithms like Quick Sort and Merge Sort. For such divide and conquer algorithms, there were far more moving parts when compared to the relatively linear nature of an algorithm like Bubble Sort. Eventually, I decided that I had to change my animating approach altogether.

### Implementing Sorting Animations (New Approach)<a name="implementingsortnew"></a>
Instead of manually changing colors and positions through the DOM elements, I decided to extract those features as state. Intuitively, it made sense for anything that constantly changed to be initialized as state to take full advantage of React.

Thus, rather than just having the array as state, I converted everything to state: array, compare, swap, sorted. This way, everytime any of the states were updated, React would trigger an appropriate re-render. This would make the color changes and swapping a largely automatic process. With this new approach, each step in the sorting algorithms would keep track of four different elements.

Just like before, each step would track the indices of the two elements being compared, but now, there would be an additional array representing the state of the array after swapping, as well as the index for the element that has become sorted as a result of any swaps. Throughout the algorithm loops, the swapped array and sorted index would simply be set to null if they did not apply at the given moment in the iteration.

Then, in my Array component, as I mapped the array elements, I used the compare/swap/sorted props that were passed down from the root App component to render each ArrayBar with the correct color.

## Using the Application <a name="usingtheapp"></a>


## Installing / Getting Started <a name="installing"></a>

In order to set up and run locally, run the commands below.

```shell
git clone https://github.com/justynlao/sorting-visualizer.git
cd sorting-visualizer
npm install
npm start
```

### `npm install`
Downloads dependencies defined in package.json and generates a node_modules.

### `npm start`
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser

The page will reload if you make edits.
You will also see any lint errors in the console.

## Built With <a name="builtwith"></a>
* React 17.0.2
* TypeScript 4.4.3
* HTML
* CSS


