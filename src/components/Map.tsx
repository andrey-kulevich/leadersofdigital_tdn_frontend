// @ts-nocheck
import React, {useContext} from 'react';
import {TaskInterface} from "../interfaces/TaskInterface";
import {UserContext} from "../store/UserProvider";
import {useHttp} from "../hooks/useHttp";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";
import airport from "../img/airport.jpg"
import { useMediaPredicate } from "react-media-hook";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const Toolbox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: calc(100vw - 60px);
  margin-bottom: 10px;
  button {
    margin-left: 10px;
    width: 2em;
  }
`;

export const Map = ({task} : {task: TaskInterface}) => {

    const orientation = useMediaPredicate("(min-width: 700px)");

    return (
        <TransformWrapper
            defaultScale={1}
            defaultPositionX={0}
            defaultPositionY={0}
        >
            {({ zoomIn, zoomOut, resetTransform }) => (
                <React.Fragment>
                    <TransformComponent>
                        {orientation ?
                            <img
                                src={airport}
                                alt="airport"
                                width='50%'
                                height='50%'
                                style={{transform: 'rotate(270deg)'}}
                            />
                            :
                            <img
                                src={airport}
                                alt="airport"
                                width='100%'
                                height='100%'
                            />
                        }
                        <img
                            src={airport}
                            alt="airport"
                            width='100%'
                            height='100%'
                            style={{transform: orientation ? 'rotate(270deg)' : 'none'}}
                        />
                        <img
                            src={airport}
                            alt="airport"
                            width='100%'
                            height='100%'
                            style={{transform: orientation ? 'rotate(270deg)' : 'none'}}
                        />
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    );
}
