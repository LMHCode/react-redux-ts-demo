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
        count:2
    }
  }

  componentDidMount () {
    this.setState({
      count: 4
    }, () => {
      console.log(this.state)
    })
    
  }

  render() {
    return <div className='red-color'>
      <span>Hello {this.props.name}</span>
    </div>
  }
}