import styled from "styled-components";

export const StyledScoresBoard = styled.div`
margin: 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const StyledPlayerName = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
text-align: center;

& > h4 {
    padding: 0.7rem;
    margin: 0;
    font-size: 1.8rem;
    background-color: ${ (props: { player: CurrentPlayersTypes | "DRAW" }) => props.player === 1 ? "rgba(0, 0, 255, 0.2)" : props.player === 2 ? "rgba(255, 0, 0, 0.2)" : "rgba(100, 30, 15, 0.06)"};
    border-radius: 1rem;
}

& > div {
    padding: 0.4rem 1rem;
    border-radius: 1rem;
    
    font-size: 2rem;
    font-weight: 600;
    background-color: rgba(0,0,0,0.1);
}
`

export const StyledHardModeText = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
text-align: center;

& > h4 {
    padding: 0;
    margin: 0;
    font-size: 2rem;
}

& > div {
    padding: 0;
    margin: 1rem;
    font-size: 2rem;
    font-weight: 500;
    ${ (props: { activated: boolean }) => `color: ${ props.activated ? "#22a836" : "rgba(20,20,20,0.8)" };` }
}




`