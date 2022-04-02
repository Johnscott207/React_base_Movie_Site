

const Pagination = ({page,setPage,totalPages})=>{
    //console.log(page,totalPages);
    function setPageNum(num){
        setPage(num);
    }
    const PageNum = ({page,totalPages})=>{
        let html = [];
        if(Number(page) ==1){
            html.push(<li className="page-item active" key={1} aria-current="page"><span className="page-link">1</span></li>);
            if(Number(totalPages)>=2){
                html.push(<li className="page-item" key={2} ><a className="page-link" onClick={()=>{setPageNum(2)}}>2</a></li>);
            }
            if(Number(totalPages) >= 3){
                html.push(<li className="page-item" key={3} ><a className="page-link" onClick={()=>{setPageNum(3)}} >3</a></li>);
            }
        }
        else
        if(Number(page) >1){
            if(Number(page)==Number(totalPages)){
                html.push(<li className="page-item" key={Number(page)-2} ><a className="page-link" onClick={()=>{setPageNum(Number(page)-2)}} >{Number(page)-2}</a></li>);
                html.push(<li className="page-item" key={Number(page)-1}><a className="page-link" onClick={()=>{setPageNum(Number(page)-1)}} >{Number(page)-1}</a></li>);
            }else{
                html.push(<li className="page-item" key={Number(page)-1} ><a className="page-link"onClick={()=>{setPageNum(Number(page)-1)}} >{Number(page)-1}</a></li>);
            }
            html.push( <li className="page-item active" aria-current="page" key={Number(page)} ><span className="page-link">{page}</span></li>);
            if(Number(page)<Number(totalPages)){
                html.push(<li className="page-item" key={Number(page)+2} ><a className="page-link" onClick={()=>{setPageNum(Number(page)+1)}} >{Number(page)+1}</a></li>);
            }
        }
        console.log(html);

        return (<>{html}</>)
    }
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                
                <PageNum page={page} totalPages={totalPages}/>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;