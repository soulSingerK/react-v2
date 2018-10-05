import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import './index.css'
// import './index.scss'
// import 'font-awesome/css/font-awesome.min.css'

class A extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        this is component A
        <Switch>
          <Route path={`${this.props.match.path}`} exact render={() => {
            return (
              <div>
                不带参数的A组件
              </div>
            )
          }}>
          </Route>
          <Route path={`${this.props.match.path}/sub`} render={(route) => {
            return (
              <div>
               sub
              </div>
            )
          }}>
          </Route>
          <Route path={`${this.props.match.path}/:id`} render={(route) => {
            return (
              <div>
                参数是：{route.match.params.id}
              </div>
            )
          }}>
          </Route>
        </Switch>
        
      </div>
    )
  }
}

class B extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        this is component B
      </div>
    )
  }
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Link to="/a">A组件啊</Link>
        <br/>
        <Link to="/a/123">带参数的A组件啊</Link>
        <br/>
        <Link to="/a/sub">/a/sub</Link>
        <br/>
        <Link to="/b">B组件啊</Link>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Wrapper>
      <Route path="/a" component={A}></Route>
      <Route path="/b" component={B}></Route>
    </Wrapper>
  </Router>,
  document.getElementById('app')
);