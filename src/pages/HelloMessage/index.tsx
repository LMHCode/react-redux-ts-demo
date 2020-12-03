import React from 'react'
import './index.scss'

interface HelloWorldProps {
  name: string;
}
 
interface Fun {

}
export default class HelloMessage extends React.Component<HelloWorldProps, any> {
  constructor(props: HelloWorldProps){
    super(props);
    this.state = {
      count: 2,
      canvas: '',
      ctx: '',
      width: '',
      height: '',
      particleCount: 100,
      particles: [],
      g: 10,
    }
  }

  componentDidMount () {
    this.setState({
      canvas: document.getElementById('canvas')
    })
    console.log(this.state, this.state.canvas)
  }

  init () {

  }


  render() {
    return <div className='red-color'>
      {/* <span>Hello {this.props.name}</span> */}
      <canvas id='canvas'></canvas>
    </div>;
  }
}