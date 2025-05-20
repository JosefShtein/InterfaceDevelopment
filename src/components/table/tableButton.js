import React from "react";

class tableBut extends React.Component {
    render () {
        return(
            <div>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td><button>json 1</button> </td>
                            <td> <button>json 2</button>  </td>
                            <td> <button>json 3</button>  </td>
                            <td> <button>json 4</button>  </td>
                            <td> <button>json 5</button>  </td>
                            <td> <button>json 6</button>  </td>
                            <td> <button>json 7</button>  </td>
                            <td> <button>json 8</button>  </td>
                        </tr>
                        <tr>
                            <td> <button>json 9</button>  </td>
                            <td> <button>json 10</button>  </td>
                            <td> <button>json 11</button>  </td>
                            <td> <button>json 12</button>  </td>
                            <td> <button>json 13</button>  </td>
                            <td> <button>json 14</button>  </td>
                            <td> <button>json 15</button>  </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default tableBut;