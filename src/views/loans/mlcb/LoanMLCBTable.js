// ** Reactstrap Imports
import { Table, Button } from 'reactstrap'

const LoanMLCBTable = () => {
  const data = [
    {
      mlcbRefNo: '20220701',
      loanAgrNo: '285553771',
      applyDate: new Date().toLocaleDateString(),
      loanAmount: 500,
      nric: 'S6917831F',
      name: 'ISMARTINA BINTE SALEH',
      address: 'Blk 256 TAMPINES STREET 21 #04-162 S522256'
    },
    {
      mlcbRefNo: '20220703',
      loanAgrNo: '140294390',
      applyDate: new Date().toLocaleDateString(),
      loanAmount: '1,000',
      nric: 'S7722190E',
      name: 'KARTINA BINTE SAHRUL',
      address: 'Blk 205C COMPASSVALE LANE #02-37 S543205'
    },
    {
      mlcbRefNo: '20220705',
      loanAgrNo: '165691871',
      applyDate: new Date().toLocaleDateString(),
      loanAmount: '9,500',
      nric: 'G5190759R',
      name: 'JATEGAONKAR SUDHIR MUKUND',
      address: 'Blk 10F BRADDELL HILL #17-24 BRADDELL VIEW S579725'
    }
  ]

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>MLCB Ref. No.</th>
          <th>Loan Agr No.</th>
          <th>Apply Date</th>
          <th>Loan Amount</th>
          <th>NRIC</th>
          <th>Name</th>
          <th width="10%">Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{row.mlcbRefNo}</td>
            <td>{row.loanAgrNo}</td>
            <td>{row.applyDate}</td>
            <td>{row.loanAmount}</td>
            <td>{row.nric}</td>
            <td>{row.name}</td>
            <td>{row.address}</td>
            <td>
              <Button.Ripple outline color='primary' size='sm'>
                Export PDF
              </Button.Ripple>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default LoanMLCBTable
