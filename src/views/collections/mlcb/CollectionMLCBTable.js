// ** Reactstrap Imports
import { Table, Badge, Button } from 'reactstrap'

const CollectionMLCBTable = () => {
  const data = [
    {
      mlcbRefNo: '20210524',
      loanAgrNo: '901515875',
      payRefNo: '158644',
      payDate: new Date().toLocaleDateString(),
      payAmount: 961,
      payStatus: 'OK',
      status: 'Submitted'
    },
    {
      mlcbRefNo: '20220702',
      loanAgrNo: '',
      payRefNo: '159260',
      payDate: new Date().toLocaleDateString(),
      payAmount: 0,
      payStatus: 'OK',
      status: 'Pending'
    },
    {
      mlcbRefNo: '20210511',
      loanAgrNo: '121237844',
      payRefNo: '158695',
      payDate: new Date().toLocaleDateString(),
      payAmount: 876,
      payStatus: 'OK',
      status: 'Submitted'
    }
  ]

  const statusBadge = (status) => {
    let color = 'light-primary'
    switch (status) {
      case 'OK':
        color = 'light-primary'
        break
      case 'Submitted':
        color = 'light-success'
        break
      case 'Pending':
        color = 'light-warning'
        break
      default:
        break
    }

    return <Badge pill color={color} className='me-1'>{status}</Badge>
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>MLCB Ref. No.</th>
          <th>Loan Agr No.</th>
          <th>Pay Ref No.</th>
          <th>Pay Date</th>
          <th>Pay Amount</th>
          <th>Pay Status</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{row.mlcbRefNo}</td>
            <td>{row.loanAgrNo}</td>
            <td>{row.payRefNo}</td>
            <td>{row.payDate}</td>
            <td>{row.payAmount}</td>
            <td>{statusBadge(row.payStatus)}</td>
            <td>{statusBadge(row.status)}</td>
            <td>
              {row.status === 'Pending' && 
                <Button.Ripple outline color='primary' size='sm'>
                  Submit to MLCB
                </Button.Ripple>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CollectionMLCBTable
