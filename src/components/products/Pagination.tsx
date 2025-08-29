interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div className="pagination">
        <button className="pagination__btn" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Попередня сторінка</button>
        {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => (
          <button key={page} className={`pagination__btn ${currentPage === page ? 'active' : ''}`} onClick={() => onPageChange(page)}>{page}</button>
        ))}
        <button className="pagination__btn" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Наступна сторінка</button>
    </div>
  )
}

export default Pagination