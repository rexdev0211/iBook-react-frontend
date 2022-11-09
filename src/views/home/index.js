// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Demo Components
import ApplicationSummary from './ApplicationSummary'
import TotalSummary from './TotalSummary'
import LoanSummary from './LoanSummary'
import ForeignerSummary from './ForeignerSummary'
import TransactionSummary from './TransactionSummary'
import CollectionSummary from './CollectionSummary'
import LoanChart from './LoanChart'

// ** Third Party Components
import 'chart.js/auto'

const Home = () => {
  // ** Context
  const { skin } = useSkin(),
    labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
    gridLineColor = 'rgba(200, 200, 200, 0.2)',
    successColorShade = '#28dac6'

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <ApplicationSummary cols={{ xl: '3', sm: '3', xs: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <TotalSummary cols={{ xl: '3', sm: '3', xs: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <LoanSummary cols={{ xl: '3', sm: '3', xs: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <ForeignerSummary cols={{ xl: '3', sm: '3', xs: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <TransactionSummary cols={{ xl: '3', sm: '3', xs: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <CollectionSummary cols={{ xl: '6', sm: '6', xs: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <LoanChart success={successColorShade} labelColor={labelColor} gridLineColor={gridLineColor} />
        </Col>
      </Row>
    </div>
  )
}

export default Home
