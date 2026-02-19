import React from 'react';
import { createRoot } from 'react-dom/client';
import { Square, Board, Game } from './App';
// import Board from './App';

const root = createRoot(document.getElementById('root'));

root.render(
    <main>
        {/* <Square /> */}
        {/* <Board /> */}
        <Game />
    </main>
);