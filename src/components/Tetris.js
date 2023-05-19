import "./Tetris.css";
import Board from "./Board.js"
import GameStats from "./GameStats.js"
import Previews from "./Previews.js"
import GameController from "./GameController.js";
import { useBoard } from "../../src/hooky/useBoard.js"
import { useGameStats } from "../../src/hooky/useGameStats.js"
import { usePlayer } from "../../src/hooky/usePlayer.js"

const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({ rows, columns, player, resetPlayer, addLinesCleared });

    

    return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes} />
            <GameController 
                board={board}
                gameStats={gameStats}
                player={player}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
                />
        </div>
    )
};

export default Tetris