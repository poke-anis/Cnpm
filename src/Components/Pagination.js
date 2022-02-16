

import Pagination from 'react-bootstrap/Pagination'

import "./Pagination.css"

const PaginationPage = (props) => {
    const pageLinks = [];
    const {currentPage,pages} = props;
    
    let start=(currentPage)-(currentPage%10);
    if(start<=0)
        start=1;
    for (let i = start; i <= start+11 && i <= pages; i++) {
        pageLinks.push(
            <Pagination.Item key={i} active={currentPage === i} onClick={() => props.nextPage(i)}> 
                
                    {i}
                
            </Pagination.Item>
        )
    }
  
    return (
        <Pagination aria-label="Page navigation example" className="paginationcss" style={{position: "fixed",top: "350px",right: "20px"}}>
  
            {
                currentPage > 10 &&
                <Pagination.Item className="addbuttons" onClick={() => props.tenChange(currentPage,-1)}> 
                    
                        - 10
                  
                </Pagination.Item>
            }
            {pageLinks}
            {
                (currentPage + 10) < pages &&
                <Pagination.Item className="addbuttons" onClick={() => props.tenChange(currentPage,1)}
                > 
                        + 10
                    
                </Pagination.Item>
            }
        </Pagination>
    )
  }

  export default PaginationPage;