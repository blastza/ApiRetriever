const ProvinceData = ({province}) => {
    return (
        <>
            {
                province.map((curProvince) => {
                    const {"display-name": displayName, value} = curProvince;

                    return (
                        <tr key={displayName}>
                            <td>{displayName}</td>
                            <td>{value}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default ProvinceData;