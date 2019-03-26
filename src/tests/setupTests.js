import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import moment from 'moment'
import Adapter from 'enzyme-adapter-react-16'
import DotEnv from 'dotenv'

DotEnv.config({ path: '.env.test' })

// React 16 Enzyme adapter
Enzyme.configure({
  adapter: new Adapter()
})

// Make Enzyme functions available in all test files without importing
global.React = React
global.shallow = shallow
global.moment = moment
