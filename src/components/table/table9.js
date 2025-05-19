import React from 'react';
import data from './jsons/sheets5.json';
import './table2.css';

var datalist0 = data["0"];
var datalist1 = data["1"];
var datalist2 = data["2"];

/**
 * Component to render the grid of rectangles with conditions.
 */
class RectangleGrid extends React.Component {
    /**
     * Constructor for the RectangleGrid component.
     *
     * @param {Object} props - Properties passed to the component.
     */
    constructor(props) {
        super(props);

        // Initialize the array of elements as per user instructions
        this.elementsArray = [0, 1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0];
    }

    /**
     * Function to render the grid of rectangles with conditions.
     *
     * @returns {JSX.Element} JSX representation of the rectangle grid.
     */
    renderRectangles() {
        let rectangles = [];
        let one = this.elementsArray[6]; //1
        let two = this.elementsArray[1];

        for (let i = 0; i < 12; i++) {
            let isOrange = this.elementsArray[i] === 1;


            rectangles.push(
                <div key={i} style={{ display: 'inline-block', margin: '5px', position: 'relative',  left:'0px'}}>
                    <div style={{ backgroundColor: 'lightgray', width: '170px', height: '75px', margin: '5px', 
                        position: 'relative' }}></div>
                    {one == i && <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><img src={require('./imOrPov2.png')}/>
                    <h1 className="image-text">{datalist1["id_slab"]}</h1></div>}
                    {two == i && <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><img src={require('./imOrPov2.png')}/>
                    <h1 className="image-text">{datalist2["id_slab"]}</h1></div>}
                </div>
            );
        }
        
        return (<div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {rectangles.slice(0, 6)}
                
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {rectangles.slice(6)}
            </div>
        </div>
        </div>
        );
    }

    /**
     * Render method to render the RectangleGrid component.
     *
     * @returns {JSX.Element} JSX representation of the RectangleGrid component.
     */
    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.renderRectangles()}
            </div>
        );
    }
}

export default RectangleGrid;