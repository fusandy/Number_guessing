import React, { useState } from 'react'
import { CrownOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

const ListField = React.memo(() => {
    console.log('ListField render ..')
    const [ showList, setShowList ] = useState(false)
    
    // get list from store
    const list = useSelector(state => state.list)

    const block = { opacity: "1" }
    const hidden = { opacity: "0" }

    const showListHandler = () => {
        showList ? setShowList(false) : setShowList(true)
    }

    return (
        <>
            <div className="section">
                <button onClick={showListHandler}>查看排名</button>
                <table style={showList ? block : hidden}>
                    <thead>
                        <tr>
                            <th>名次</th>
                            <th>姓名</th>
                            <th>累積次數</th>
                        </tr>
                    </thead>
                    <tbody>
                    {list.sort((a,b)=>a.times-b.times)
                        .map((v,i) => {
                        return (
                            <tr key={v.name.toString()}>
                                <td>{i===0 && <CrownOutlined/>} {i+1}</td>
                                <td>{v.name}</td>
                                <td>{v.times}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
})

export default ListField