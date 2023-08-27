const ProvinceData = ({province}) => {
    return (
        <>
            {
                province.map((curProvince) => {
                    const {displayname, value} = curProvince;
                    console.log(curProvince.display_name);

                    return (
                        <tr key={displayname}>
                            <td>
                                {displayname}
                            </td>
                            <td>
                                {value}
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default ProvinceData;