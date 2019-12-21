/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../icon/icon-wrapper'

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const range = (from, to, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

class Pagination extends Component {
  constructor(props) {
    super(props)
    const { totalRecords = null, pageLimit, pageNeighbours = 0 } = props

    // console.log('constructor: ', pageLimit)

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 20
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0
    this.pageNeighbours =
      typeof pageNeighbours === 'number'
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0
    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit) || 1

    // console.log(this.pageLimit)

    this.state = {
      currentPage: 1,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords,
      pageNeighbours: this.pageNeighbours,
      totalPages: this.totalPages
    }
  }

  static getDerivedStateFromProps = (props, state) => {
    const { totalRecords, pageLimit, pageNeighbours } = props
    let pageLimit1 = typeof pageLimit === 'number' ? pageLimit : state.pageLimit
    let totalRecords1 = typeof totalRecords === 'number' ? totalRecords : 0
    let pageNeighbours1 = typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0
    let totalPages = Math.ceil(totalRecords1 / pageLimit1) || 1

    // console.log(pageLimit, pageLimit1, totalRecords, totalRecords1, pageNeighbours, pageNeighbours1)

    if (totalRecords1 !== state.totalRecords || pageLimit1 !== state.pageLimit || pageNeighbours1 !== state.pageNeighbours) {
      return {
        totalRecords: totalRecords1,
        pageNeighbours: pageNeighbours1,
        pageLimit: pageLimit1,
        totalPages,
      }
    }
    return null
  }

  componentDidMount() {
    // this.gotoPage(1)
  }

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props

    const { totalPages, pageLimit, totalRecords } = this.state

    const currentPage = Math.max(0, Math.min(page, totalPages))

    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: totalRecords
    }

    this.setState({ currentPage }, currentPage !== 0 ? () => onPageChanged(paginationData) : null)
  };

  handleClick = (page, evt) => {
    evt.preventDefault()
    this.gotoPage(page)
  };

  handleMoveLeft = evt => {
    evt.preventDefault()
    this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1)
  };

  handleMoveRight = evt => {
    evt.preventDefault()
    this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1)
  };

  fetchPageNumbers = () => {
    const totalPages = this.state.totalPages
    const currentPage = this.state.currentPage
    const pageNeighbours = this.pageNeighbours

    const totalNumbers = this.pageNeighbours * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      let pages = []

      const leftBound = currentPage - pageNeighbours
      const rightBound = currentPage + pageNeighbours
      const beforeLastPage = totalPages - 1

      const startPage = leftBound > 2 ? leftBound : 2
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage

      pages = range(startPage, endPage)

      const pagesCount = pages.length
      const singleSpillOffset = totalNumbers - pagesCount - 1

      const leftSpill = startPage > 2
      const rightSpill = endPage < beforeLastPage

      const leftSpillPage = LEFT_PAGE
      const rightSpillPage = RIGHT_PAGE

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1)
        pages = [leftSpillPage, ...extraPages, ...pages]
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset)
        pages = [...pages, ...extraPages, rightSpillPage]
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage]
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  };

  render() {
    const { totalRecords } = this.state
    // if (!totalRecords) return null

    // if (totalPages === 1) return null

    const { currentPage } = this.state
    const pages = this.fetchPageNumbers()

    return (
      <Fragment>
        <div>
          <ul sx={{
            listStyle: 'none',
            p: 0,
            display: 'flex',
            m: 0
          }}>
            {pages.map((page, index) => {
              if (page === LEFT_PAGE)

                return <PageItem
                  key={index}
                  isSelected={currentPage === page}
                  onClick={this.handleMoveLeft}
                >
                  <Icon name='ArrowLeft' />
                </PageItem>

              {/* return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Previous"
                      onClick={this.handleMoveLeft}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                ) */}

              if (page === RIGHT_PAGE)

                return <PageItem
                  key={index}
                  isSelected={currentPage === page}
                  onClick={this.handleMoveRight}
                >
                  <Icon name='ArrowRight' />
                </PageItem>

              {/* return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Next"
                      onClick={this.handleMoveRight}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                ) */}

              {/* return (
                <li
                  key={index}
                  className={`page-item${
                    currentPage === page ? ' active' : ''
                    }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={e => this.handleClick(page, e)}
                  >
                    {page}
                  </a>
                </li>
              ) */}

              return <PageItem
                key={index}
                isSelected={currentPage === page}
                onClick={e => this.handleClick(page, e)}
              >
                {page}
              </PageItem>
            })}
          </ul>
        </div>
      </Fragment>
    )
  }
}

const PageItem = ({
  isSelected = false,
  onClick = f => f,
  children,
  icon,
  ...rest
}) => {
  return <React.Fragment>
    <li sx={{
      fontFamily: 'heading',
      height: 40,
      minWidth: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <a
        href='#'
        sx={{
          color: 'text',
          height: 36,
          minWidth: 36,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all .15s ease-in',
          borderRadius: 5,
          fontSize: 1,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'hover',
            color: 'text'
          },
          ...(isSelected && {
            backgroundColor: 'primary',
            color: 'bright',
            '&:hover': {
              color: 'bright'
            }
          })
        }}
        onClick={e => onClick(e)}
      >
        {children}
      </a>
    </li>
  </React.Fragment>
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
}

export default Pagination
