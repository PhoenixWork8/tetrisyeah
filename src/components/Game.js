import Menu from "./Menu.js";
import Tetris from"./Tetris.js";
import { useGameOver } from "../../src/hooky/useGameOver.js"

const Game = ({ rows, columns }) => {
    const [gameOver, setGameOver, resetGameOver] =  useGameOver();
    const start = () => { 
        resetGameOver();
        console.log(`Game has Begun gameOver is ${gameOver}`); 
    };

    return (
        <div className="Game">
            {gameOver ? (
                <Menu onClick={start} />
            ) : (
                <Tetris rows={rows} columns={columns} setGameOver={setGameOver}></Tetris>
            )}
        </div>
    );
};

export default Game