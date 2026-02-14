import React from "react";
import Header from "./components/Header"
import { languages } from "./languages";

// Challenge #00
export default function App() {
    const [currentWord, setCurrentWord] = React.useState("react")

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        };
        return <span className="chip" key={lang.name} style={styles}>{lang.name}</span>;
    });

    const letterElements = currentWord.split('').map((char, index) => {
        return <span key={index}>{char.toUpperCase()}</span>
    });

    const keyboardElements = alphabet.split('').map(letter => {
        return <button key={letter}>{letter.toUpperCase()}</button>
    });


    return (
        <main>
            <Header />
            <section className="game-status">
                <h2>win!</h2>
                <p>Well done! 🎉</p>
            </section>

            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">
                {letterElements}
            </section>

            <section className="keyboard">
                {keyboardElements}
            </section>

            <button className="new-game">New Game</button>
        </main>
    );
}
