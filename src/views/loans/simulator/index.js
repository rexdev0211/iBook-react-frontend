// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Button, Label } from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Icons Imports
import { Calendar } from 'react-feather'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

import ProjectedPaymentTable from './ProjectedPaymentTable'

const termOptions = [
  { value: '1', label: 'Monthly' },
  { value: '2', label: 'B/Weekly' },
  { value: '3', label: 'Weekly' }
]

const adminFeeOptions = [
  { value: 10, label: '10' },
  { value: 9, label: '9' },
  { value: 8, label: '8' },
  { value: 7, label: '7' },
  { value: 6, label: '6' },
  { value: 5, label: '5' },
  { value: 4, label: '4' },
  { value: 3, label: '3' },
  { value: 2, label: '2' },
  { value: 1, label: '1' },
  { value: 0, label: '0' }
]

const LoanSimulator = () => {

  return (
    <Fragment>
      <Breadcrumbs title='Loan Simulator' data={[{ title: 'Loan' }, { title: 'Simulator' }]} />
      <Row className='match-height'>
        <Col md='12' sm='12'>
          <Card>
            <CardBody>
              <Row className='mb-3'>
                <Col sm='6' style={{ borderRight: '2px solid' }}>
                  <CardTitle tag='h4'>Loan Detail</CardTitle>
                  
                  <div className="px-xl-3">
                    <Row className='mb-1'>
                      <Label sm='4' className='form-label'>
                        Loan Amount
                      </Label>
                      <Col sm='8'>
                        <Input type='number' placeholder='Loan Amount' />
                      </Col>
                    </Row>
                    <Row className='mb-1'>
                      <Label sm='4' className='form-label'>
                        Term
                      </Label>
                      <Col sm='4'>
                        <Input type='number' placeholder='Term' defaultValue={'1'} />
                      </Col>
                      <Col sm='4'>
                        <Select
                          theme={selectThemeColors}
                          className='react-select'
                          classNamePrefix='select'
                          name='clear'
                          defaultValue={termOptions[0]}
                          options={termOptions}
                        />
                      </Col>
                    </Row>
                    <Row className='mb-1'>
                      <Label sm='4' className='form-label'>
                      Interest p.a
                      </Label>
                      <Col sm='8'>
                        <Input type='text' placeholder='Interest p.a' defaultValue={'48.00'} />
                      </Col>
                    </Row>
                    <Row className='mb-1'>
                      <Label sm='4' className='form-label'>
                      Late Interest p.a
                      </Label>
                      <Col sm='8'>
                        <Input type='text' placeholder='Late Interest p.a' defaultValue={'48.00'} />
                      </Col>
                    </Row>
                    <Row className='mb-1'>
                      <Label sm='4' className='form-label'>
                      Late Repayment Fee
                      </Label>
                      <Col sm='8'>
                        <Input type='text' placeholder='Late Repayment Fee' defaultValue={'0'} />
                      </Col>
                    </Row>
                    <Row className='mb-1'>
                      <Label sm='4' className='form-label'>
                      Administrative Fee %
                      </Label>
                      <Col sm='8'>
                        <Select
                          theme={selectThemeColors}
                          className='react-select'
                          classNamePrefix='select'
                          name='clear'
                          defaultValue={adminFeeOptions[0]}
                          options={adminFeeOptions}
                        />
                      </Col>
                    </Row>
                  </div>

                </Col>
                <Col sm='6'>
                  <CardTitle tag='h4'>Projected Repayment Detail</CardTitle>
                  
                  <div className="px-xl-3">
                    <Row className='mb-1'>
                      <Label sm='4' className='form-label'>
                      Repayment Term
                      </Label>
                      <Col sm='4'>
                        <Input type='number' placeholder='Term' defaultValue={'1'} />
                      </Col>
                      <Col sm='4'>
                        <Select
                          theme={selectThemeColors}
                          className='react-select'
                          classNamePrefix='select'
                          name='clear'
                          defaultValue={termOptions[0]}
                          options={termOptions}
                        />
                      </Col>
                    </Row>
                    <Row className='mb-1'>
                      <Label sm='4' className='form-label'>
                      Repayment Amount
                      </Label>
                      <Col sm='8'>
                        <Input type='number' placeholder='Interest p.a' defaultValue={'0'} />
                      </Col>
                    </Row>
                                
                    <Row className='mb-1'>
                      <Col sm='12' className='demo-inline-spacing center' style={{ justifyContent: 'center' }}>
                        <Button.Ripple color='success'>
                          <Calendar size={14} />
                          {' '} <span className='align-middle ms-25'>Calculate</span>
                        </Button.Ripple>
                      </Col>
                    </Row>
                  </div>

                </Col>
              </Row>
                  
              <CardTitle tag='h4' style={{ textAlign: 'center' }}>Projected Payments</CardTitle>
              <ProjectedPaymentTable />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default LoanSimulator
