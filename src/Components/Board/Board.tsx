import Dot from "./Dot";

const Board = () => {
    return (
        <>
            {
                [...Array(6)].map(() => {
                    return (
                        <div>
                            {
                                [...Array(6)].map(() => {
                                    return <Dot />;
                                })
                            }
                        </div>
                    );
                })
            }
        </>
    );
}

export default Board;
