import React from 'react'
import { Link } from 'react-router-dom'

export default function propertiesPaginationRenderer(props) {
    const { currentPage, pagesCount, paginationHandler } = props;
    return (
        <ul className='pagination pxp-paginantion mt-2 mt-md-4'>
        { currentPage > 1 &&
        <li className='page-item' onClick={() => paginationHandler(currentPage-1)} >
            <Link className='page-link' to='#'>
                <span className='fa fa-angle-left' /> Previous 
            </Link>
        </li>
        }
        <li className={`page-item active`} >
            <Link className='page-link' to='#'>
                {currentPage}
            </Link>
        </li>
        { currentPage + 1 <= pagesCount && 
            <li className={`page-item`} onClick={() => paginationHandler(currentPage+1)} >
                <Link className='page-link' to='#'>
                    {currentPage+1}
                </Link>
            </li>   
        }
        { currentPage + 2 <= pagesCount && 
            <li className={`page-item`} onClick={() => paginationHandler(currentPage+2)} >
                <Link className='page-link' to='#'>
                    {currentPage+2}
                </Link>
            </li>   
        }
        {
            pagesCount > 3 && currentPage < pagesCount &&
        <li className='page-item' onClick={() => paginationHandler(currentPage+1)}>
            <Link className='page-link' to='#'>
                Next <span className='fa fa-angle-right' />
            </Link>
        </li>
        }
    </ul>
    )
}
