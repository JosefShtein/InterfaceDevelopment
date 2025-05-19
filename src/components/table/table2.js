import React from 'react';
import Table6 from './table1';
import './table2.css';
import TableBut from './tableButton';
import data from "./jsons/sheets1.json";

var datalist1 = data["0"];


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
        this.elementsArray = [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1];
    }

    /**
     * Function to render the grid of rectangles with conditions.
     *
     * @returns {JSX.Element} JSX representation of the rectangle grid.
     */
    renderRectangles() {
        let rectangles = [];
        

        for (let i = 0; i < 2; i++) {
            let isOrange = this.elementsArray[i] === 1;

            rectangles.push(
                <div key={i} style={{ display: 'inline-block', margin: '5px', position: 'relative', left: '380px', top: '281px'}}>
                    <div style={{ backgroundColor: 'lightgray', width: '170px', height: '75px', margin: '5px', 
                        position: 'relative' }}></div>
                    
                </div>
            );
        }
        
        return rectangles;
    }

    renderRectangles2() {
      let rectangles = [];
      

      for (let i = 0; i < 4; i++) {
          let isOrange = this.elementsArray[i] === 1;

          rectangles.push(
              <div key={i} style={{ display: 'inline-block', margin: '5px', position: 'relative',   top: '277px'}}>
                  <div style={{ backgroundColor: 'lightgray', width: '170px', height: '75px', margin: '5px', 
                      position: 'relative' }}></div>
                  
              </div>
          );
      }
      
      return rectangles;
  }

  renderRectangles3() {
    let rectangles = [];
    

    for (let i = 0; i < 1; i++) {
        let isOrange = this.elementsArray[i] === 1;

        rectangles.push(
            <div key={i} style={{ display: 'inline-block', margin: '5px', position: 'relative', left: '570px'}}>
                <div style={{ backgroundColor: 'lightgray', width: '170px', height: '75px', margin: '5px', 
                    position: 'relative' }}>
                        <div style={{ width: '130px', height: '55px', backgroundColor: 'orange',
                         position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><img src={require('./imOrPov2.png')}/>
                         <h1 className="image-text">{datalist1["id_slab"]}</h1>
                         </div></div>
                
            </div>
        );
    }
    
    return rectangles;
}

    /**
     * Render method to render the RectangleGrid component.
     *
     * @returns {JSX.Element} JSX representation of the RectangleGrid component.
     */
    render() {
        return (
          <div >
            <div >
                {this.renderRectangles3()}
            </div>
            
            <div >
                {this.renderRectangles()}
            </div>
            <div >
                {this.renderRectangles2()}
            </div>
            
          </div> 
        );
    }
}

export default RectangleGrid;