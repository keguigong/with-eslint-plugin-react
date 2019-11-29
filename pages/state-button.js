/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  StateButton,
  NetworkStateButton,
  AlarmStateButton,
  WorkStateButton,
  MainContent,
} from '../components/widget'


export default () => <MainContent>
  <StateButton />
  <NetworkStateButton />
  <NetworkStateButton state={0} />
  <NetworkStateButton state={1} />
  <AlarmStateButton />
  <AlarmStateButton state={0} />
  <AlarmStateButton state={1} />
  <AlarmStateButton state={2} />
  <WorkStateButton />
  <WorkStateButton state={0} />
  <WorkStateButton state={1} />
  <WorkStateButton state={2} />
  <WorkStateButton state={3} />
</MainContent>