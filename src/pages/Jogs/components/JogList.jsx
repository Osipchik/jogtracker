import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";


function JogList({ items }) {

    const getItem = ({index, style}) => {
        return <ListItem index={index} data={items[index]} style={style}/>
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <List
                    height={height}
                    itemCount={items.length}
                    itemSize={201.65}
                    width={width}
                >
                    {getItem}
                </List>
            )}
        </AutoSizer>
    )
}


export default JogList;