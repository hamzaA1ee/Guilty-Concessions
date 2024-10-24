import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface IPurchaseTable {
  purchaseList?: string[][];
}

export default function PurchaseTable({ purchaseList }: IPurchaseTable) {
  const length: number = 3;
  return (
    <Table>
      <TableHeader>
        <TableRow className='text-[14px] font-semibold border-none'>
          <TableHead className='border-none'>Product Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className='text-end'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {purchaseList &&
          purchaseList.map((list: string[], rowIndex: number) => (
            <TableRow
              key={rowIndex}
              className={`${rowIndex !== purchaseList.length - 1 ? 'border-none' : ''}`}
            >
              {list.map((item, index) => (
                <TableCell
                  key={index}
                  className={`${index == 1 && 'text-center'} ${index == 2 && 'text-end'}`}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          ))}

        <TableRow>
          <TableCell
            className='text-end text-[14px] font-bold '
            colSpan={3}
          >
            Total Amount
            <span className='font-normal ml-2'>$1000.00</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
