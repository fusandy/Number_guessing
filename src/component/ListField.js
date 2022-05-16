import { CrownOutlined } from '@ant-design/icons'

function ListField(props){
    const { list, showList } = props

    const block = { opacity: "1" }
    const hidden = { opacity: "0" }

    return (
        <>
            <div className="section">
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
                                <td>{i===0 && <CrownOutlined/>} {i+1}</td>
                                <td>{v.name}</td>
                                <td>{v.timer}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListField