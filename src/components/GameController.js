import "./GameController.css";
import { Action, actionForKey } from "../../src/something/Input.js";
import { playerController } from "../../src/something/PlayerController.js";
import { useInterval } from "../hooky/useInterval.js";
import { useDropTime } from "../hooky/useDropTime.js";

const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer,
}) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    });

    useInterval(() => {
        handleInput({ action: Action.SlowDrop });
    }, dropTime);

    const onkeyup = ({ code }) => {
        const action = actionForKey(code);
        if (action === Action.Quit) {
            
        }
    };
    const onkeydown = ({ code }) => {
        const action = actionForKey(code);

        if (action === Action.Pause) {
            if (dropTime) {
                pauseDropTime();
            } else {
                resumeDropTime();
            }
        } else if (action === Action.Quit) {
            setGameOver(true);
        } else {
         
        handleInput({ action });
        }
    };
    
    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver,
        });
    };

    return (
        <input 
        className="GameController" 
        type="text"
        onKeyDown={onkeydown}
        onKeyUp={onkeyup}
        autoFocus
        />
    );
}

export default GameController;