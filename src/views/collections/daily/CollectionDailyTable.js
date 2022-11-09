import { Table } from 'reactstrap'

const CollectionDailyTable = () => {
  const data = [
    {
      sn: 1,
      loanNo: '7355/2021',
      name: 'CHOONG WEI KWANG, KENNY',
      amount: '2,969.10',
      dueDate: new Date().toLocaleDateString(),
      remarks: 'Monthly Payment'
    },
    {
      sn: 2,
      loanNo: '7398/2021',
      name: 'LEO BENNETTE LEVILLARD',
      amount: '3,815.23',
      dueDate: new Date().toLocaleDateString(),
      remarks: 'Monthly Payment. To pay into 7484/2021, balance into 7398/2021.'
    },
    {
      sn: 3,
      loanNo: '7482/2021',
      name: 'PERFECTO PAUL JOHN CAMPOS',
      amount: '833.05',
      dueDate: new Date().toLocaleDateString(),
      remarks: '7 Months Term (2nd)'
    }
  ]

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Loan No.</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Due Date</th>
          <th>Repayment Remarks</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row.sn}</td>
            <td>{row.loanNo}</td>
            <td>{row.name}</td>
            <td>{row.amount}</td>
            <td>{row.dueDate}</td>
            <td>{row.remarks}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CollectionDailyTable