/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { Pagination, Flex } from '../../common'

const BottomPagination = ({
  totalResults,
  pageSize,
  // pageNo,
  onChange,
  ...rest
}) => {
  // console.warn('bottom', totalResults, pageSize)
  return <Flex centerAlign sx={{
    minHeight: 60,
    justifyContent: 'space-between',
    px: 3
  }}>
    <Styled.p sx={{fontFamily: 'heading'}}>共 {totalResults} 条结果</Styled.p>
    <Pagination
      totalRecords={totalResults}
      pageNeighbours={1}
      pageLimit={pageSize}
      onPageChanged={({ currentPage, totalPages, pageLimit }) => onChange({ pageNo: currentPage, pageSize: pageLimit, totalResults: totalPages })}
    />
  </Flex>
}

export default BottomPagination