export default function Pagination({ usersPerPage, totalUsers, paginate }) {
    const totalPages = [];

    for (let i = 1; i < Math.ceil(totalUsers / usersPerPage); i++) {
        totalPages.push(i);
    }

    return (
        <ul className="pagination-ul">
            {totalPages.map((page)=>{
                return <li className="pagination-li" key={page}>
                    <a onClick={()=>paginate(page)} href="!#">{page}</a>
                </li>
            })}
        </ul>
    )
}