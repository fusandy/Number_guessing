function List(props){
    const { list, showList } = props

    const block = { opacity: "1" }
    const hidden = { opacity: "0" }

    return (
        <>
            <table style={showList ? block : hidden}>
                <thead>
                    <tr>
                        <th>名次</th>
                        <th>姓名</th>
                        <th>累積次數</th>
                    </tr>
                </thead>
                <tbody>
                {list.sort((a,b)=>a.timer-b.timer)
                    .map((v,i) => {
                    return (
                        <tr key={v.name.toString()}>
                            <td>{i+1}</td>
                            <td>{v.name}</td>
                            <td>{v.timer}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default List