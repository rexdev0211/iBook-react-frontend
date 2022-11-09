// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Button } from 'reactstrap'

// ** Icons Imports
import { Edit } from 'react-feather'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

const ApplicationNew = () => {
  const singpassLogo = require(`@src/assets/images/application/singpass_logo.png`).default
  const retrieveLogo = require(`@src/assets/images/application/retrieve_my_info.png`).default

  return (
    <Fragment>
      <Breadcrumbs title='New Application' data={[{ title: 'Application' }, { title: 'New' }]} />
      <Row className='match-height'>
        <Col md='12' sm='12'>
          <Card>
            <CardHeader style={{ justifyContent: 'center' }}>
              <CardTitle tag='h4'>How Would you like to apply?</CardTitle>
            </CardHeader>

            <CardBody>
              <Row className='mt-2 mb-1'>
                <Col sm='6' style={{ borderRight: '2px solid red' }}>
                  <div style={{ textAlign: 'center' }}>
                    <img className='img-fluid' src={singpassLogo} alt='singpassLogo' width='200' />
                    <h4 className='mt-2'>Complete the form with Singpass (Myinfo)</h4>
                    <h4 className='text-danger mt-2'>Log in to Myinfo using Singpass</h4>
                    <h4 className='text-danger mt-2 mb-2'>Get approval on the same day</h4>
                    <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
                      <img className='img-fluid' src={retrieveLogo} alt='retrieveLogo' width='200' />
                    </Link>
                  </div>
                </Col>
                <Col sm='6'>
                  <div style={{ textAlign: 'center' }}>
                    <h4 className='mt-4'>Complete the form with manually</h4>
                    <h4 className='text-danger mt-2 mb-3'>This will directly complete</h4>
                    <Button.Ripple color='success' tag={Link} to='/application/new/manual'>
                      <Edit size={14} />
                      <span className='align-middle ms-25'>Fill up form manually</span>
                    </Button.Ripple>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default ApplicationNew
