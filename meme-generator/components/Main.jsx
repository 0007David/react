import React from "react";

function Main() {
    /**
     * Challenge: move the hardcoded meme info into React
     * state. Use an object with `topText`, `bottomText`,
     * and `imageUrl` properties, and set the initial values to
     * the ones hardcoded below.
     */
    const [memeInfo, setMemeInfo] = React.useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemes, setAllMemes] = React.useState([]);

    /**
     * Challenge:
     * Get an array of memes from the imgflip API as soon as
     * this component renders for the first time.
     * Check the imgflip documentation for the correct URL.
     * Save the array of memes (not the whole response
     * data) to state. (For this app, we'll randomly choose
     * one of the memes from this array when the user clicks
     * the "Get a new meme image" button, but we'll do that in
     * a separate challenge.)
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, []);


    /**
     * Challenge: update the topText value in the meme state
     * object every time the topText input box is changed
     * 
     * Note: don't worry about bottomText at this point.
     */
    function handleChangeTopText(evt) {
        const { value } = evt.currentTarget;
        setMemeInfo(prevMemeInfo => ({
            ...prevMemeInfo,
            topText: value
        }));
    }

    function handleChangeBottomText(evt) {
        const { value } = evt.currentTarget;
        setMemeInfo(prevMemeInfo => ({
            ...prevMemeInfo,
            bottomText: value
        }));
    }

    /**
     * Challenge: Get a random image from the array of
     * allMemes when the user clicks the button. Once
     * you've gotten a random image from the array, make
     * sure to write the code that will display that
     * random meme image to the page.
     */
    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const newMemeUrl = allMemes[randomNumber].url;
        setMemeInfo((prevMemeInfo) => ({
            ...prevMemeInfo,
            imageUrl: newMemeUrl
        }));
    }

    return (
        <main>
            <div className="form">
                <label>Top text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChangeTopText}
                        value={memeInfo.topText}
                    />
                </label>

                <label>Bottom text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChangeBottomText}
                        value={memeInfo.bottomText}
                    />
                </label>
                <button onClick={getMemeImage} >Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeInfo.imageUrl} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>
        </main>
    );
}

export default Main;
