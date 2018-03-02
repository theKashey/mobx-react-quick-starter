/* @flow */
import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import { Container } from './component'
import { observable } from 'mobx'

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
  @observable testCount = 0
  render() {
    return (
      <Container>
        <Button onClick={this.props.increase}>+</Button>
        <Button onClick={this.props.decrease}>-</Button>
        <Button
          onClick={() => {
            this.testCount++
          }}
        >
          testCount +
        </Button>
        <div>{this.props.count}</div>
        <div>{this.testCount}</div>
        <TestElement />
      </Container>
    )
  }
}
