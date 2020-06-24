import React, { useState, useEffect } from 'react';
export default function Move(props) {
  const [move, setMove] = useState('');
  function getMove() {
    if (move === '' && props.won === false) {
      setMove(props.symbol);
      console.log(move);
    }
    console.log(move);
  }
  useEffect(() => {
    setMove('')
  }, [props.reset])

  return <div id={props.id} className='cell' onClick={getMove}>
      {move}
  </div>
}







// class Move extends React.Component
// {
//   constructor(props){
//   super(props)
//   this.state={
//     move:'*'
//   };
//   this.getMove=this.getMove.bind(this);
//   }
//   componentDidUpdate(props,state){
//         if(this.props.reset){
//           this.setState(state=>({
//             move:'*'
//           }))
//         }
//       }
//    getMove = (props)=> {
//     if(this.state.move ==='*'){
//       this.setState({move:this.props.symbol})
//   }

//       }
//       render(){
//         return <div>
//         <div id={this.state.move} onClick={this.getMove} value={this.state.move}>
//           {this.state.move}
//         </div>
//       </div>
//       }

// }

// export default Move