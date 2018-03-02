/* @flow */
import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import { Container } from './component'

type Props = {
  count: number,
  increase: () => void,
  decrease: () => void,
}

const TestElement = styled.div`
  background: url(${require('../../assets/images/koa-mids.png')});
  width: 100px;
  height: 100px;
`

const Button = styled.button`
  width: 100px;
  height: 50px;
`

@inject(stores => ({
  count: stores.counter.count,
  increase: stores.counter.increase,
  decrease: stores.counter.decrease,
}))
@observer
export default class Demo extends Component<Props> {
  render() {
    return (
      <Container>
        <Button onClick={this.props.increase}>+</Button>
        <Button onClick={this.props.decrease}>-</Button>
        <div>{this.props.count}</div>
        <TestElement />
      </Container>
    )
  }
}
